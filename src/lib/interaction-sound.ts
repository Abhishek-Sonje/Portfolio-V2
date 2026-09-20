import { getAudioContext } from "@/lib/audio-context";

const CLICK = {
  duration: 0.045,
  noiseDuration: 0.018,
  noiseFrequency: 2200,
  noiseVolume: 0.016,
  toneStartFrequency: 820,
  toneEndFrequency: 520,
  toneVolume: 0.012,
  silence: 0.0001,
  minimumInterval: 35,
} as const;

let lastPlayedAt = Number.NEGATIVE_INFINITY;

/** A short, quiet mechanical click synthesized on demand. */
export async function playInteractionClick() {
  const playedAt = performance.now();
  if (playedAt - lastPlayedAt < CLICK.minimumInterval) return;
  lastPlayedAt = playedAt;

  try {
    const context = await getAudioContext();
    if (!context) return;

    const now = context.currentTime;
    const noiseLength = Math.max(
      1,
      Math.floor(context.sampleRate * CLICK.noiseDuration),
    );
    const noiseBuffer = context.createBuffer(
      1,
      noiseLength,
      context.sampleRate,
    );
    const noiseData = noiseBuffer.getChannelData(0);

    for (let index = 0; index < noiseLength; index += 1) {
      const fade = 1 - index / noiseLength;
      noiseData[index] = (Math.random() * 2 - 1) * fade;
    }

    const noise = context.createBufferSource();
    const filter = context.createBiquadFilter();
    const noiseGain = context.createGain();
    noise.buffer = noiseBuffer;
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(CLICK.noiseFrequency, now);
    filter.Q.setValueAtTime(0.8, now);
    noiseGain.gain.setValueAtTime(CLICK.noiseVolume, now);
    noiseGain.gain.exponentialRampToValueAtTime(
      CLICK.silence,
      now + CLICK.noiseDuration,
    );

    const tone = context.createOscillator();
    const toneGain = context.createGain();
    tone.type = "triangle";
    tone.frequency.setValueAtTime(CLICK.toneStartFrequency, now);
    tone.frequency.exponentialRampToValueAtTime(
      CLICK.toneEndFrequency,
      now + CLICK.duration,
    );
    toneGain.gain.setValueAtTime(CLICK.toneVolume, now);
    toneGain.gain.exponentialRampToValueAtTime(
      CLICK.silence,
      now + CLICK.duration,
    );

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(context.destination);
    tone.connect(toneGain);
    toneGain.connect(context.destination);

    noise.onended = () => {
      noise.disconnect();
      filter.disconnect();
      noiseGain.disconnect();
    };
    tone.onended = () => {
      tone.disconnect();
      toneGain.disconnect();
    };

    noise.start(now);
    tone.start(now);
    noise.stop(now + CLICK.noiseDuration);
    tone.stop(now + CLICK.duration);
  } catch {
    // Sound feedback must never block the action that triggered it.
  }
}

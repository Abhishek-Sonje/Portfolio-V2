import { getAudioContext } from "@/lib/audio-context";

/** A quiet synthesized droplet; no audio download or autoplay on page load. */
const DROP = {
  startFrequency: 850,
  peakFrequency: 1500,
  endFrequency: 1100,
  peakTime: 0.035,
  duration: 0.18,
  attack: 0.006,
  volume: 0.045,
  silence: 0.0001,
} as const;

export async function playThemeDrop() {
  try {
    const context = await getAudioContext();
    if (!context) return;
    const now = context.currentTime;
    const oscillator = context.createOscillator();
    const envelope = context.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(DROP.startFrequency, now);
    oscillator.frequency.exponentialRampToValueAtTime(
      DROP.peakFrequency,
      now + DROP.peakTime,
    );
    oscillator.frequency.exponentialRampToValueAtTime(
      DROP.endFrequency,
      now + DROP.duration,
    );
    envelope.gain.setValueAtTime(DROP.silence, now);
    envelope.gain.exponentialRampToValueAtTime(DROP.volume, now + DROP.attack);
    envelope.gain.exponentialRampToValueAtTime(
      DROP.silence,
      now + DROP.duration,
    );

    oscillator.connect(envelope);
    envelope.connect(context.destination);
    oscillator.onended = () => {
      oscillator.disconnect();
      envelope.disconnect();
    };
    oscillator.start(now);
    oscillator.stop(now + DROP.duration);
  } catch {
    // Audio support and device permissions must never block a theme change.
  }
}

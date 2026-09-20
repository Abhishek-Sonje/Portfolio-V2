let context: AudioContext | undefined;

export async function getAudioContext() {
  if (typeof window === "undefined" || !window.AudioContext) return;

  context ??= new window.AudioContext();
  if (context.state === "suspended") await context.resume();

  return context;
}

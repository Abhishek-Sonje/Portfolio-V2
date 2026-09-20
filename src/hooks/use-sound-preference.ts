"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "portfolio-theme-sound";
const CHANGE_EVENT = "portfolio-sound-change";
let memoryOverride: boolean | undefined;

function getSnapshot() {
  if (memoryOverride !== undefined) return memoryOverride;
  try {
    return localStorage.getItem(STORAGE_KEY) !== "off";
  } catch {
    return true;
  }
}

function subscribe(onChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) {
      memoryOverride = undefined;
      onChange();
    }
  };
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

export function useSoundPreference() {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, () => true);
  function setEnabled(value: boolean) {
    try {
      localStorage.setItem(STORAGE_KEY, value ? "on" : "off");
      memoryOverride = undefined;
    } catch {
      memoryOverride = value;
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }
  return { enabled, setEnabled };
}

import type { ElectronAPI } from "@electron-toolkit/preload";

declare global {
  // biome-ignore lint/nursery/useConsistentTypeDefinitions: global window object definition
  interface Window {
    electron: ElectronAPI;
    api: unknown;
  }
}

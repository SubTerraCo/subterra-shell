/// <reference types="vite/client" />

interface ElectronAPI {
  minimize: () => Promise<void>;
  maximize: () => Promise<void>;
  close: () => Promise<void>;
  isMaximized: () => Promise<boolean>;
  getVersion: () => Promise<string>;
  isElectron: boolean;
}

interface Window {
  electronAPI?: ElectronAPI;
}

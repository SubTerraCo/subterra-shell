import { useEffect, useState } from "react";

export function TitleBar() {
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    void window.electronAPI?.isMaximized().then((value) => {
      setIsMaximized(value);
    });
  }, []);

  const handleMaximize = async () => {
    await window.electronAPI?.maximize();
    const maximized = await window.electronAPI?.isMaximized();
    setIsMaximized(maximized ?? false);
  };

  return (
    <div className="drag-region flex h-10 shrink-0 items-center justify-between border-b border-border-default bg-bg-primary px-4">
      <div className="flex items-center gap-2">
        <span className="no-drag text-lg font-bold text-accent-purple">⬡</span>
        <span className="text-sm font-semibold text-text-primary">
          SubTerra Shell
        </span>
      </div>
      <div className="no-drag flex items-center gap-1">
        <button
          type="button"
          onClick={() => void window.electronAPI?.minimize()}
          className="flex h-8 w-8 items-center justify-center rounded hover:bg-bg-tertiary"
          aria-label="Minimize"
        >
          <span className="block h-0.5 w-3 bg-text-secondary" />
        </button>
        <button
          type="button"
          onClick={() => void handleMaximize()}
          className="flex h-8 w-8 items-center justify-center rounded hover:bg-bg-tertiary"
          aria-label={isMaximized ? "Restore" : "Maximize"}
        >
          <span className="block h-3 w-3 border border-text-secondary" />
        </button>
        <button
          type="button"
          onClick={() => void window.electronAPI?.close()}
          className="flex h-8 w-8 items-center justify-center rounded hover:bg-status-error"
          aria-label="Close"
        >
          <span className="text-text-secondary">×</span>
        </button>
      </div>
    </div>
  );
}

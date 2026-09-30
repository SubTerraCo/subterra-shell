import { AppWindow, Puzzle } from "lucide-react";
import { cn } from "../lib/utils";
import {
  MARKETPLACE_CATALOG,
  MARKETPLACE_COLUMNS,
  type MarketplaceTile,
} from "../catalog/marketplace-catalog";

export interface AppGridProps {
  /** Override catalog (defaults to static governance mirror). */
  tiles?: MarketplaceTile[];
  onTilePress?: (tile: MarketplaceTile) => void;
  className?: string;
}

/**
 * 3×4 marketplace grid of app/integration placeholder tiles.
 */
export function AppGrid({
  tiles = MARKETPLACE_CATALOG,
  onTilePress,
  className,
}: AppGridProps) {
  return (
    <div
      data-testid="app-grid"
      className={cn("mx-auto w-full max-w-2xl px-4 py-6", className)}
    >
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: `repeat(${MARKETPLACE_COLUMNS}, minmax(0, 1fr))`,
        }}
      >
        {tiles.map((tile, index) => (
          <AppTile
            key={tile.id ?? `empty-${index}`}
            tile={tile}
            onPress={onTilePress}
          />
        ))}
      </div>
    </div>
  );
}

function AppTile({
  tile,
  onPress,
}: {
  tile: MarketplaceTile;
  onPress?: (tile: MarketplaceTile) => void;
}) {
  if (tile.status === "empty") {
    return (
      <div
        className="aspect-square rounded-2xl border border-dashed border-border-default bg-bg-secondary/40"
        aria-hidden
      />
    );
  }

  const isReserved = tile.status === "reserved";
  const Icon = tile.role === "integration" ? Puzzle : AppWindow;

  return (
    <button
      type="button"
      data-testid={`app-tile-${tile.id}`}
      data-app-code={tile.appCode ?? undefined}
      disabled={isReserved && !onPress}
      onClick={() => onPress?.(tile)}
      className={cn(
        "relative flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border p-3",
        "bg-bg-secondary transition-colors",
        "border-border-default hover:border-accent-purple hover:bg-bg-tertiary",
        isReserved && "opacity-70",
      )}
    >
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-xl",
          tile.role === "integration"
            ? "bg-accent-teal/20 text-accent-teal"
            : "bg-accent-purple/20 text-accent-purple",
        )}
      >
        <Icon className="h-6 w-6" />
      </div>
      <span className="truncate text-sm font-semibold text-text-primary">
        {tile.name}
      </span>
      <span className="truncate text-xs text-text-tertiary">
        {tile.appCode}
      </span>
      {isReserved && (
        <span className="absolute right-2 top-2 rounded-full bg-bg-elevated px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-text-secondary">
          Soon
        </span>
      )}
    </button>
  );
}

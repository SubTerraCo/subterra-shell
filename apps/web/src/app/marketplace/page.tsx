"use client";

import { AppGrid, type MarketplaceTile } from "@subterra/shell-ui";

export default function MarketplacePage() {
  const handleTile = (tile: MarketplaceTile) => {
    if (tile.status === "reserved") {
      return;
    }
    // Placeholder — real app mount via SDK host comes later
    console.info(`[marketplace] selected ${tile.appCode} (${tile.id})`);
  };

  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 pt-6">
        <h2 className="text-xl font-semibold text-text-primary">Marketplace</h2>
        <p className="mt-1 text-sm text-text-secondary">
          Apps and integrations planned for SubTerra OS. Reserved tiles show
          Coming soon.
        </p>
      </div>
      <AppGrid onTilePress={handleTile} />
    </div>
  );
}

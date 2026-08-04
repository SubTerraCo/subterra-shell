import { useState } from "react";
import {
  AppGrid,
  BottomNav,
  TopBar,
  type MarketplaceTile,
  type ShellNavItem,
} from "@subterra/shell-ui";
import { TitleBar } from "./TitleBar";

type Page = "home" | "marketplace" | "apps";

const pageTitles: Record<Page, string> = {
  home: "SubTerra",
  marketplace: "Marketplace",
  apps: "Apps",
};

const navToPage: Record<ShellNavItem, Page> = {
  home: "home",
  search: "marketplace",
  apps: "apps",
  add: "home",
};

const pageToNav: Record<Page, ShellNavItem> = {
  home: "home",
  marketplace: "search",
  apps: "apps",
};

export function App() {
  const [page, setPage] = useState<Page>("home");

  const handleTile = (tile: MarketplaceTile) => {
    if (tile.status === "reserved") return;
    console.info(`[marketplace] selected ${tile.appCode} (${tile.id})`);
  };

  return (
    <div className="flex h-screen flex-col bg-bg-primary text-text-primary">
      <TitleBar />
      <TopBar
        layout="static"
        title={pageTitles[page]}
        showBackButton={page !== "home"}
        onBackPress={() => setPage("home")}
        onMenuPress={() => setPage("home")}
        onProfilePress={() => undefined}
        userName="Admin"
      />

      <main className="flex min-h-0 flex-1 flex-col overflow-auto pb-nav">
        {page === "home" && (
          <div className="mx-auto flex max-w-2xl flex-col gap-4 px-6 py-10">
            <h2 className="text-2xl font-semibold">Welcome to SubTerra</h2>
            <p className="text-text-secondary">
              Admin shell home. Open the marketplace with the search button on
              the bottom left.
            </p>
          </div>
        )}
        {page === "marketplace" && (
          <div>
            <div className="mx-auto max-w-2xl px-4 pt-6">
              <h2 className="text-xl font-semibold">Marketplace</h2>
              <p className="mt-1 text-sm text-text-secondary">
                Planned apps and integrations (placeholders).
              </p>
            </div>
            <AppGrid onTilePress={handleTile} />
          </div>
        )}
        {page === "apps" && (
          <div className="mx-auto max-w-2xl px-6 py-10">
            <h2 className="text-xl font-semibold">Apps</h2>
            <p className="mt-2 text-text-secondary">
              Installed apps will appear here.
            </p>
          </div>
        )}
      </main>

      <BottomNav
        activeItem={pageToNav[page]}
        onItemPress={(item) => setPage(navToPage[item])}
      />
    </div>
  );
}

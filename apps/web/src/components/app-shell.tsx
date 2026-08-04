"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  BottomNav,
  TopBar,
  type ShellNavItem,
} from "@subterra/shell-ui";

const routeToNav: Record<string, ShellNavItem> = {
  "/": "home",
  "/marketplace": "search",
  "/apps": "apps",
};

const navToRoute: Record<ShellNavItem, string> = {
  home: "/",
  search: "/marketplace",
  apps: "/apps",
  add: "/",
};

const titles: Record<string, string> = {
  "/": "SubTerra",
  "/marketplace": "Marketplace",
  "/apps": "Apps",
};

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const activeNav = routeToNav[pathname] ?? "home";
  const title = titles[pathname] ?? "SubTerra";
  const showBack = pathname !== "/";

  return (
    <div className="flex min-h-screen flex-col bg-bg-primary text-text-primary">
      <TopBar
        title={title}
        showBackButton={showBack}
        onBackPress={() => router.push("/")}
        onMenuPress={() => router.push("/")}
        onProfilePress={() => undefined}
        userName="Admin"
        layout="fixed"
      />

      <main className="flex-1 overflow-auto pt-bar pb-nav">{children}</main>

      <BottomNav
        activeItem={activeNav}
        onItemPress={(item) => {
          router.push(navToRoute[item]);
        }}
      />
    </div>
  );
}

import { Home, LayoutGrid, Plus, Search } from "lucide-react";
import { cn } from "../lib/utils";

export type ShellNavItem = "search" | "home" | "apps" | "add";

export interface BottomNavProps {
  activeItem: ShellNavItem;
  onItemPress: (item: ShellNavItem) => void;
  className?: string;
}

interface NavItemConfig {
  id: ShellNavItem;
  label: string;
  Icon: typeof Search;
}

const mainNavItems: NavItemConfig[] = [
  { id: "home", label: "Home", Icon: Home },
  { id: "apps", label: "Apps", Icon: LayoutGrid },
];

/**
 * Shell bottom nav: [Search] — [Home] [Apps] — [Add placeholder]
 * Search opens the marketplace grid (left action, Blocks-chrome pattern).
 */
export function BottomNav({
  activeItem,
  onItemPress,
  className,
}: BottomNavProps) {
  return (
    <nav
      data-testid="bottom-nav"
      className={cn(
        "fixed bottom-0 left-0 right-0 z-30",
        "border-t border-border-default bg-bg-secondary",
        "pb-[env(safe-area-inset-bottom)]",
        className,
      )}
    >
      <div className="flex h-16 items-center justify-between px-4">
        <ActionButton
          Icon={Search}
          label="Search marketplace"
          isActive={activeItem === "search"}
          onPress={() => onItemPress("search")}
          variant="secondary"
          testId="bottom-nav-search"
        />

        <div className="flex flex-1 items-center justify-center gap-8">
          {mainNavItems.map((item) => (
            <MainNavButton
              key={item.id}
              item={item}
              isActive={activeItem === item.id}
              onPress={() => onItemPress(item.id)}
            />
          ))}
        </div>

        <ActionButton
          Icon={Plus}
          label="Add"
          isActive={activeItem === "add"}
          onPress={() => onItemPress("add")}
          variant="primary"
          testId="bottom-nav-add"
        />
      </div>
    </nav>
  );
}

function ActionButton({
  Icon,
  label,
  isActive,
  onPress,
  variant,
  testId,
}: {
  Icon: typeof Search;
  label: string;
  isActive: boolean;
  onPress: () => void;
  variant: "primary" | "secondary";
  testId?: string;
}) {
  const isPrimary = variant === "primary";

  return (
    <button
      type="button"
      onClick={onPress}
      data-testid={testId}
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-xl",
        "transition-all active:scale-95",
        isPrimary
          ? "bg-accent-purple text-text-primary shadow-lg hover:opacity-90"
          : isActive
            ? "bg-accent-pink/20 text-accent-pink"
            : "bg-bg-tertiary text-text-secondary hover:text-text-primary",
      )}
      aria-label={label}
    >
      <Icon className="h-6 w-6" />
    </button>
  );
}

function MainNavButton({
  item,
  isActive,
  onPress,
}: {
  item: NavItemConfig;
  isActive: boolean;
  onPress: () => void;
}) {
  const { Icon } = item;

  return (
    <button
      type="button"
      onClick={onPress}
      className={cn(
        "flex flex-col items-center justify-center gap-1 py-2",
        "transition-colors",
        isActive
          ? "text-accent-pink"
          : "text-text-tertiary hover:text-text-secondary",
      )}
      aria-label={item.label}
      aria-current={isActive ? "page" : undefined}
    >
      <Icon className="h-5 w-5" />
      <span className="text-xs font-medium">{item.label}</span>
    </button>
  );
}

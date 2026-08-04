/**
 * Static marketplace catalog mirrored from governance `subterra.manifest.yaml`.
 * Filtered to marketplace apps/integrations (excludes shell/governance hosts).
 * Build-time sync with the manifest is a later automation step.
 */

export type CatalogStatus = "linked" | "reserved" | "empty";

export interface MarketplaceTile {
  /** Manifest item id, or null for an empty grid slot. */
  id: string | null;
  appCode: string | null;
  name: string;
  role: "app" | "integration" | null;
  audience: Array<"admin" | "member">;
  status: CatalogStatus;
  /** Short label shown under the tile icon. */
  description: string;
}

/** 3×4 = 12 slots. Filled tiles first; remainder are empty placeholders. */
export const MARKETPLACE_CATALOG: MarketplaceTile[] = [
  {
    id: "blocks",
    appCode: "BK",
    name: "Blocks",
    role: "app",
    audience: ["admin"],
    status: "linked",
    description: "Time management",
  },
  {
    id: "mailbot",
    appCode: "MB",
    name: "Mailbot",
    role: "app",
    audience: ["admin"],
    status: "linked",
    description: "Gmail sorting",
  },
  {
    id: "billbot",
    appCode: "BB",
    name: "Billbot",
    role: "app",
    audience: ["admin"],
    status: "reserved",
    description: "Invoicing",
  },
  {
    id: "subtoken",
    appCode: "TK",
    name: "Subtoken",
    role: "app",
    audience: ["admin"],
    status: "reserved",
    description: "NFC / ticketing",
  },
  {
    id: "anytype",
    appCode: "AT",
    name: "Anytype",
    role: "integration",
    audience: ["admin"],
    status: "linked",
    description: "CRM sync",
  },
  {
    id: "white-label",
    appCode: "WL",
    name: "White-label",
    role: "app",
    audience: ["admin"],
    status: "reserved",
    description: "OEM shell",
  },
  // Empty slots to fill the 3×4 grid
  emptySlot(7),
  emptySlot(8),
  emptySlot(9),
  emptySlot(10),
  emptySlot(11),
  emptySlot(12),
];

function emptySlot(n: number): MarketplaceTile {
  return {
    id: null,
    appCode: null,
    name: "",
    role: null,
    audience: ["admin"],
    status: "empty",
    description: `Slot ${n}`,
  };
}

export const MARKETPLACE_COLUMNS = 3;
export const MARKETPLACE_ROWS = 4;

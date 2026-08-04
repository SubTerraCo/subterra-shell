import type { Metadata } from "next";
import { AppShell } from "../components/app-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "SubTerra Shell",
  description: "SubTerra OS admin shell — Apps + Integrations marketplaces",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg-primary text-text-primary antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

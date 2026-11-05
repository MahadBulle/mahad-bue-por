import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: "Mahad Bule — Creative Developer", template: "%s | Mahad Bule" },
  description: "Explore Mahad Bule’s personal portfolio, interface concepts and GitHub projects. Built with Next.js, Tailwind CSS and shadcn/ui.",
  applicationName: "Mahad Bule Portfolio",
  authors: [{ name: "Mahad Bule" }],
  keywords: ["Mahad Bule", "portfolio", "Next.js", "React", "frontend development"],
  openGraph: { title: "Mahad Bule — Creative Developer", description: "Thoughtful ideas. Purposeful design. Digital experiences.", type: "website", locale: "en_US" },
  twitter: { card: "summary", title: "Mahad Bule — Creative Developer", description: "Thoughtful ideas. Purposeful design. Digital experiences." },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f8faf7" }, { media: "(prefers-color-scheme: dark)", color: "#101813" }] };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>{children}</ThemeProvider></body></html>;
}

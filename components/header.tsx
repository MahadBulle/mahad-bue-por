"use client";
import { Menu, Moon, Sun, ArrowUpRight, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Button } from "@/components/ui/button";
const links = [["About", "#about"], ["Work", "#work"], ["Expertise", "#expertise"], ["Contact", "#contact"]];
export function Header() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  return <header className="site-header">
    <div className="container flex h-22 items-center justify-between gap-4">
      <a href="#" className="brand" aria-label="Mahad Bule home">mb<span>.</span><span className="brand-name">MAHAD BULE</span></a>
      <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
        {links.map(([name, href]) => <a key={name} href={href} className="nav-link">{name}</a>)}
      </nav>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" aria-label="Toggle color theme" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
          <Sun className="hidden dark:block" /><Moon className="block dark:hidden" />
        </Button>
        <Button asChild size="sm" className="hidden sm:inline-flex"><a href="#contact">Let’s talk <ArrowUpRight /></a></Button>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
    </div>
    {open ? <nav id="mobile-navigation" aria-label="Mobile navigation" className="container grid gap-1 border-t border-border py-4 md:hidden">
      {links.map(([name, href]) => <a key={name} href={href} className="rounded-xl p-3 hover:bg-muted" onClick={() => setOpen(false)}>{name}</a>)}
    </nav> : null}
  </header>;
}

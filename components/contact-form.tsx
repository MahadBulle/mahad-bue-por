"use client";
import { useState } from "react";
import { ArrowUpRight, Check, Copy, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";
export function ContactForm() {
  const [copied, setCopied] = useState(false);
  const [fallback, setFallback] = useState(false);
  async function copy() {
    try { await navigator.clipboard.writeText(profile.github); setCopied(true); setFallback(false); }
    catch { setFallback(true); }
  }
  return <div className="contact-form">
    <span className="contact-card-icon"><Github size={32}/></span>
    <h3 className="text-2xl font-medium tracking-tight">Find me on GitHub.</h3>
    <p className="text-sm leading-7 text-muted-foreground">Explore my repositories, follow along with what I’m building, and connect with me.</p>
    <Button asChild size="lg"><a href={profile.github} target="_blank" rel="noopener noreferrer">Visit my GitHub <ArrowUpRight /></a></Button>
    <Button variant="outline" onClick={copy}>{copied ? <Check/> : <Copy/>}{copied ? "Profile link copied" : "Copy profile link"}</Button>
    <p className="text-xs text-muted-foreground" role="status">{copied ? "GitHub profile link copied to your clipboard." : fallback ? "Copy this link: " + profile.github : "Good conversations start with a hello."}</p>
  </div>;
}

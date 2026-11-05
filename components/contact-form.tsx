"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";
export function ContactForm() {
  function send(event: FormEvent<HTMLFormElement>) { event.preventDefault(); const data=new FormData(event.currentTarget); const message="Hi Mahad, I'm "+data.get("name")+" ("+data.get("email")+").\n\n"+data.get("message"); window.location.assign("https://wa.me/"+profile.whatsapp+"?text="+encodeURIComponent(message)); }
  const [copied, setCopied] = useState(false);
  const [fallback, setFallback] = useState(false);
  async function copy() {
    try { await navigator.clipboard.writeText(profile.github); setCopied(true); setFallback(false); }
    catch { setFallback(true); }
  }
  return <div className="contact-form">
    <form onSubmit={send} className="project-enquiry"><h3>Tell me about your project.</h3><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" required minLength={2}/><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" required/><label htmlFor="message">Your message</label><textarea id="message" name="message" required minLength={8} maxLength={1500} rows={4}/><Button type="submit" size="lg">Continue on WhatsApp <ArrowUpRight/></Button><p>Your message opens in WhatsApp. Press Send there to deliver it.</p></form><span className="contact-card-icon"><Github size={32}/></span>
    <h3 className="text-2xl font-medium tracking-tight">Find me on GitHub.</h3>
    <p className="text-sm leading-7 text-muted-foreground">Explore my repositories, follow along with what I’m building, and connect with me.</p>
    <Button asChild size="lg"><a href={profile.github} target="_blank" rel="noopener noreferrer">Visit my GitHub <ArrowUpRight /></a></Button>
    <Button variant="outline" onClick={copy}>{copied ? <Check/> : <Copy/>}{copied ? "Profile link copied" : "Copy profile link"}</Button>
    <p className="text-xs text-muted-foreground" role="status">{copied ? "GitHub profile link copied to your clipboard." : fallback ? "Copy this link: " + profile.github : "Good conversations start with a hello."}</p>
  </div>;
}

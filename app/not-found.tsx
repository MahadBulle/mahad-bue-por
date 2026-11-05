import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function NotFound() { return <main className="container flex min-h-screen flex-col items-center justify-center text-center"><p className="eyebrow">404 / PAGE NOT FOUND</p><h1 className="my-6 text-5xl font-semibold tracking-tight">A little off the path.</h1><p className="mb-8 text-muted-foreground">Let’s get you back to Mahad’s portfolio.</p><Button asChild><Link href="/"><ArrowLeft/> Back home</Link></Button></main>; }

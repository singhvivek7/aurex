"use client";

import { motion } from "motion/react";
import { Hexagon } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-background/80 backdrop-blur-md border-border py-4"
                    : "bg-transparent border-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-primary p-1.5 rounded-lg text-primary-foreground group-hover:bg-primary/90 transition-colors">
                        <Hexagon className="w-5 h-5 fill-primary-foreground stroke-primary-foreground" />
                    </div>
                    <span className="font-bold text-foreground text-xl tracking-tight">Aurex</span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    <Link href="#vision" className="hover:text-foreground transition-colors">Product</Link>
                    <Link href="#infrastructure" className="hover:text-foreground transition-colors">Infrastructure</Link>
                    <Link href="#developers" className="hover:text-foreground transition-colors">Developers</Link>
                    <Link href="#" className="hover:text-foreground transition-colors">Pricing</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="#" className="text-sm font-medium text-foreground hidden sm:block hover:text-primary">
                        Sign In
                    </Link>
                    <Link
                        href="#early-access"
                        className="px-4 py-2 text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                    >
                        Get Early Access
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}

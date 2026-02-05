import Link from "next/link";
import { Hexagon } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="bg-primary p-1.5 rounded-lg text-primary-foreground">
                            <Hexagon className="w-5 h-5 fill-primary-foreground stroke-primary-foreground" />
                        </div>
                        <span className="font-bold text-foreground text-lg tracking-tight">Aurex</span>
                    </div>

                    <div className="flex gap-8 text-sm font-medium text-muted-foreground">
                        <Link href="#" className="hover:text-foreground transition-colors">Documentation</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Security</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Contact</Link>
                    </div>

                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Aurex Inc.
                    </p>
                </div>
            </div>
        </footer>
    );
}

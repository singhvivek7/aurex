"use client";

import { motion } from "motion/react";
import { ArrowRight, Send } from "lucide-react";
import { useState } from "react";

export function EarlyAccess() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setStatus("loading");
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            setEmail("");
        }, 1500);
    };

    return (
        <section id="early-access" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--tw-gradient-stops))] from-indigo-500/20 via-primary to-primary" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl mb-6">
                        Be Among the First to Build on <br className="hidden sm:block" />
                        the Future of Payments.
                    </h2>
                    <p className="text-lg text-primary-foreground/60 mb-10">
                        Join thousands of developers waiting to get their hands on our new infrastructure. Secure your spot in the queue today.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="eng@company.com"
                            disabled={status !== "idle"}
                            className="flex-1 min-w-0 bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl px-4 py-3.5 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 focus:border-transparent transition-all backdrop-blur-sm"
                            required
                        />
                        <button
                            type="submit"
                            disabled={status !== "idle"}
                            className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-primary bg-primary-foreground rounded-xl hover:bg-primary-foreground/90 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary-foreground/20"
                        >
                            {status === "loading" ? (
                                <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                            ) : status === "success" ? (
                                <>
                                    Requested
                                    <CheckIcon className="ml-2 w-4 h-4" />
                                </>
                            ) : (
                                <>
                                    Get Early Access
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>
                    <p className="mt-4 text-sm text-primary-foreground/40">
                        No spam. Developer-focused updates only.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    );
}

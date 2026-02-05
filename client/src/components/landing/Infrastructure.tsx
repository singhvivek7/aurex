"use client";

import { motion } from "motion/react";
import { CheckCircle2, Globe2, Lock, Shuffle } from "lucide-react";

const features = [
    {
        title: "High Success Rates",
        description: "Our direct integrations with card networks ensuring 10-15% higher auth rates than competitors.",
        icon: CheckCircle2,
    },
    {
        title: "Intelligent Routing",
        description: "Smart payment switch that automatically routes transactions through the best performing gateway.",
        icon: Shuffle,
    },
    {
        title: "Bank-Grade Security",
        description: "AES-256 encryption, ISO 27001 certified, and fully compliant with local regulations.",
        icon: Lock,
    },
    {
        title: "Global Edge Network",
        description: "Distributed infrastructure across 35 data centers for <50ms latency worldwide.",
        icon: Globe2,
    },
];

export function Infrastructure() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] bg-size-[16px_16px] opacity-20 transform scale-150" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                                Built Like Infrastructure, <br className="hidden lg:block" />
                                Not Just a Gateway.
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                We've reimagined the payment stack from the ground up. No legacy code, no downtime, just pure performance.
                            </p>

                            <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                                <div className="text-sm font-medium text-muted-foreground mb-2">System Status</div>
                                <div className="flex items-center gap-2">
                                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-emerald-700 font-semibold">99.999% Uptime</span>
                                    <span className="text-muted-foreground text-xs ml-auto">Last 30 days</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-4"
                            >
                                <div className="shrink-0">
                                    <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center text-primary">
                                        <feature.icon className="h-5 w-5" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "motion/react";
import { ShieldCheck, Server, FileCheck, Lock } from "lucide-react";

const trustItems = [
    { icon: ShieldCheck, label: "PCI-DSS Level 1" },
    { icon: Lock, label: "End-to-End Encryption" },
    { icon: FileCheck, label: "SOC 2 Type II Ready" },
    { icon: Server, label: "99.99% Uptime SLA" },
];

export function Trust() {
    return (
        <section className="py-20 bg-muted/30 border-t border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl font-semibold text-foreground">Trusted by modern finance teams</h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {trustItems.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center gap-3 group"
                        >
                            <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-sm border border-border group-hover:border-primary/20 group-hover:shadow-md transition-all">
                                <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                                {item.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

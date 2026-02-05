"use client";

import { motion } from "motion/react";
import { Building2, Rocket, Store, Globe2 } from "lucide-react";

const useCases = [
    {
        icon: Rocket,
        title: "Startups",
        description: "Launch faster with production-ready payment infrastructure that scales from day one",
        highlight: "Get to market 10x faster"
    },
    {
        icon: Building2,
        title: "Enterprises",
        description: "Handle billions in transactions with enterprise-grade reliability and compliance",
        highlight: "99.999% uptime SLA"
    },
    {
        icon: Store,
        title: "E-commerce",
        description: "Boost conversions with optimized checkout flows and local payment methods",
        highlight: "+25% conversion lift"
    },
    {
        icon: Globe2,
        title: "Platforms",
        description: "Enable marketplace payments with split settlements and multi-currency support",
        highlight: "150+ countries supported"
    }
];

export function UseCases() {
    return (
        <section className="py-24 sm:py-32 bg-muted/30">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
                        Built for{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400">
                            modern businesses
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                        From high-growth startups to global enterprises, Aurex powers payments at every scale
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={useCase.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/50 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="mb-6">
                                <div className="relative inline-flex items-center justify-center">
                                    {/* Glow effect on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-blue-400/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Icon circle */}
                                    <div className="relative w-16 h-16 rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300 shadow-sm">
                                        <useCase.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">
                                {useCase.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                {useCase.description}
                            </p>

                            {/* Highlight */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span className="text-xs font-medium text-primary">{useCase.highlight}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

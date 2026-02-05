"use client";

import { motion } from "motion/react";
import { ArrowDownLeft } from "lucide-react";
import { productVisionConfig } from "@/config/landing";

export function ProductVision() {
    return (
        <section id="vision" className="py-32 relative">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card mb-6">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">{productVisionConfig.badge}</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight">
                            {productVisionConfig.heading.prefix}
                            <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-400 to-primary">
                                {productVisionConfig.heading.highlight}
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4 sm:px-0">
                            {productVisionConfig.subheading}
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                    {productVisionConfig.features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-card border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-border/60 transition-all duration-500 overflow-hidden"
                        >
                            {/* Subtle gradient overlay on hover */}
                            <div className={`absolute inset-0 bg-linear-to-br ${feature.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                {/* Icon - elegant outlined circle */}
                                <div className="mb-4 sm:mb-6">
                                    <div className="relative inline-flex items-center justify-center">
                                        {/* Gradient glow */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.accentColor} rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

                                        {/* Icon circle */}
                                        <div className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 ${feature.iconColor} border-current/30 bg-current/5 flex items-center justify-center group-hover:border-current/50 group-hover:scale-110 transition-all duration-500 shadow-sm`}>
                                            <feature.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${feature.iconColor}`} strokeWidth={1.5} />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-foreground/90 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-sm">
                                    {feature.description}
                                </p>

                                {/* Stat - more refined presentation */}
                                <div className="flex items-center gap-2 sm:gap-3 pt-4 sm:pt-6 border-t border-border/50">
                                    <div className="flex items-baseline gap-1.5 sm:gap-2">
                                        <span className={`text-3xl sm:text-4xl font-bold ${feature.iconColor} tracking-tight`}>
                                            {feature.stat}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-[10px] sm:text-xs text-muted-foreground font-medium uppercase tracking-wider">
                                            {feature.statLabel}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative corner element */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${feature.accentColor} blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-0`} />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex flex-col items-center gap-4 px-8 py-6 rounded-2xl border border-border bg-card/50">
                        <p className="text-muted-foreground">
                            {productVisionConfig.cta.text}
                        </p>
                        <a
                            href={productVisionConfig.cta.href}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all group"
                        >
                            {productVisionConfig.cta.buttonText}
                            <ArrowDownLeft className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

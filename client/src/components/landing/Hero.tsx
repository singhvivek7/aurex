"use client";

import { motion } from "motion/react";
import { ArrowRight, Zap, Shield, Globe } from "lucide-react";
import Link from "next/link";
import { heroConfig } from "@/config/landing";

export function Hero() {
    return (
        <section className="relative pt-20 pb-32 overflow-hidden">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />

            {/* Animated Orbs */}
            <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-xl animate-pulse -z-10" />
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-xl -z-10" style={{ animationDelay: '1s' }} />

            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                {/* Centered Content */}
                <div className="text-center max-w-5xl mx-auto">
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: [0.25, 0.1, 0.25, 1]
                        }}
                        style={{ willChange: 'transform, opacity' }}
                        className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-card border border-border mb-6 sm:mb-8 text-center"
                    >
                        <div className="flex items-center gap-1.5 sm:gap-2">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[10px] sm:text-xs font-medium text-muted-foreground">{heroConfig.badge.status}</span>
                        </div>
                        <div className="hidden sm:block h-4 w-px bg-border" />
                        <span className="hidden sm:inline text-xs font-mono text-primary">{heroConfig.badge.uptime}</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: [0.25, 0.1, 0.25, 1],
                            delay: 0.1
                        }}
                        style={{ willChange: 'transform, opacity' }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]"
                    >
                        The payment{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                                infrastructure
                            </span>
                            <div className="absolute inset-0 bg-primary/20 blur-xl -z-10" />
                        </span>
                        <br />
                        that scales with you
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: [0.25, 0.1, 0.25, 1],
                            delay: 0.2
                        }}
                        style={{ willChange: 'transform, opacity' }}
                        className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-4 sm:px-0"
                    >
                        {heroConfig.subheading}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: [0.25, 0.1, 0.25, 1],
                            delay: 0.3
                        }}
                        style={{ willChange: 'transform, opacity' }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 md:mb-20 px-4 sm:px-0"
                    >
                        <Link
                            href={heroConfig.cta.primary.href}
                            className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
                        >
                            {heroConfig.cta.primary.text}
                            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href={heroConfig.cta.secondary.href}
                            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-foreground bg-card border border-border rounded-lg hover:bg-accent transition-all"
                        >
                            {heroConfig.cta.secondary.text}
                        </Link>
                    </motion.div>

                    {/* Payment Flow Visualization */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        style={{ willChange: 'transform, opacity' }}
                        className="relative"
                    >
                        <div className="relative bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl">
                            {/* Flow Diagram */}
                            <div className="flex items-center justify-center sm:justify-between gap-2 sm:gap-4 flex-wrap">
                                {/* Customer */}
                                <FlowNode icon={<div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-muted-foreground/20 border-2 border-muted-foreground/40" />} label={heroConfig.flowLabels.customer} delay={0.5} />
                                <FlowArrow delay={0.7} />
                                {/* Aurex Router */}
                                <FlowNode icon={<Zap className="w-5 h-5 sm:w-6 sm:w-7 text-primary" strokeWidth={2.5} />} label={heroConfig.flowLabels.router} primary delay={0.9} />
                                <FlowArrow delay={1.1} />
                                {/* Payment Gateway */}
                                <FlowNode icon={<Shield className="w-5 h-5 sm:w-6 sm:h-7 text-emerald-400" strokeWidth={2} />} label={heroConfig.flowLabels.gateway} delay={1.3} />
                                <FlowArrow delay={1.5} />
                                {/* Global Network */}
                                <FlowNode icon={<Globe className="w-5 h-5 sm:w-6 sm:h-7 text-blue-400" strokeWidth={2} />} label={heroConfig.flowLabels.settlement} delay={1.7} />
                            </div>

                            {/* Stats Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
                                {heroConfig.stats.map((stat, idx) => (
                                    <div key={idx} className="text-center">
                                        <div className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating Labels */}
                        <div className="absolute -top-3 -right-3 flex items-center gap-2 px-4 py-2 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 rounded-full text-xs font-medium text-emerald-400 shadow-lg">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>{heroConfig.flowLabels.liveRouting}</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function FlowNode({ icon, label, primary, delay }: { icon: React.ReactNode; label: string; primary?: boolean; delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.4 }}
            className={`flex flex-col items-center gap-3 min-w-[100px] ${primary ? 'scale-110' : ''}`}
        >
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center backdrop-blur-sm ${primary
                ? 'bg-primary/10 border-2 border-primary/50 shadow-lg shadow-primary/20'
                : 'bg-card/50 border-2 border-border/50'
                } transition-all duration-300 hover:scale-105`}>
                {icon}
            </div>
            <span className="text-xs font-medium text-muted-foreground tracking-wide">{label}</span>
        </motion.div>
    );
}

function FlowArrow({ delay }: { delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay, duration: 0.3 }}
            className="hidden md:block"
        >
            <div className="flex items-center gap-1 text-muted-foreground">
                <div className="h-px w-12 bg-gradient-to-r from-border to-primary" />
                <ArrowRight className="w-4 h-4 text-primary" />
            </div>
        </motion.div>
    );
}

function AnimatedCounter({ end }: { end: number }) {
    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {end}
        </motion.span>
    );
}

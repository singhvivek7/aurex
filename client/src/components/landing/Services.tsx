"use client";

import { motion } from "motion/react";
import {
    CreditCard,
    Repeat,
    Link as LinkIcon,
    Smartphone,
    BarChart3,
    Shield,
    Webhook,
    Code2,
    Users,
    Globe,
    Wallet,
    ArrowLeftRight
} from "lucide-react";

const services = [
    {
        icon: CreditCard,
        title: "Payment Processing",
        description: "Accept all major payment methods with intelligent routing and optimization",
        features: ["Credit/Debit Cards", "Digital Wallets", "Bank Transfers", "Buy Now Pay Later"]
    },
    {
        icon: Repeat,
        title: "Payment Orchestration",
        description: "Smart routing across multiple payment gateways for maximum success rates",
        features: ["Auto Failover", "Load Balancing", "Cost Optimization", "Performance Analytics"]
    },
    {
        icon: ArrowLeftRight,
        title: "Instant Payouts",
        description: "Real-time fund disbursement to bank accounts, cards, and wallets globally",
        features: ["Sub-2s Settlement", "Bulk Payouts", "Scheduled Transfers", "Multi-Currency"]
    },
    {
        icon: LinkIcon,
        title: "Payment Links",
        description: "No-code payment collection with customizable branded checkout pages",
        features: ["Custom Branding", "QR Codes", "Multiple Currencies", "Usage Analytics"]
    },
    {
        icon: Smartphone,
        title: "POS & QR Payments",
        description: "Accept in-person payments with mobile POS and dynamic QR codes",
        features: ["Mobile POS", "Dynamic QR", "NFC Payments", "Receipt Generation"]
    },
    {
        icon: Users,
        title: "Subscription Billing",
        description: "Automated recurring billing with flexible plans and smart retry logic",
        features: ["Flexible Plans", "Auto Retry", "Dunning Management", "Usage-Based Billing"]
    },
    {
        icon: Globe,
        title: "Multi-Currency",
        description: "Accept and settle payments in 135+ currencies with competitive FX rates",
        features: ["135+ Currencies", "Auto Conversion", "Competitive Rates", "Local Settlement"]
    },
    {
        icon: Shield,
        title: "Fraud Prevention",
        description: "AI-powered fraud detection and prevention with real-time risk scoring",
        features: ["Machine Learning", "Risk Scoring", "3D Secure", "Chargeback Protection"]
    },
    {
        icon: BarChart3,
        title: "Analytics & Reporting",
        description: "Real-time insights and comprehensive reporting on all payment activities",
        features: ["Real-time Dashboard", "Custom Reports", "Data Export", "Webhook Events"]
    },
    {
        icon: Webhook,
        title: "Webhooks & Events",
        description: "Real-time notifications for all payment events with guaranteed delivery",
        features: ["Event Streaming", "Retry Logic", "Signature Verification", "Event History"]
    },
    {
        icon: Code2,
        title: "Developer APIs",
        description: "RESTful APIs with comprehensive documentation and SDKs for all platforms",
        features: ["REST APIs", "GraphQL", "SDKs", "Sandbox Environment"]
    },
    {
        icon: Wallet,
        title: "Wallet Services",
        description: "Digital wallet infrastructure for storing funds and enabling instant transfers",
        features: ["Virtual Accounts", "Balance Management", "P2P Transfers", "Transaction History"]
    }
];

export function Services() {
    return (
        <section id="services" className="py-24 sm:py-32 relative">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        mass: 0.8
                    }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card mb-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">Our Services</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight">
                        Everything you need to{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-400 to-primary">
                            power payments
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                        Comprehensive payment infrastructure services designed for businesses of all sizes
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-5">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px", amount: 0.3 }}
                            transition={{
                                duration: 0.4,
                                ease: [0.25, 0.1, 0.25, 1], // Custom easing for smooth feel
                                delay: index * 0.05
                            }}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            style={{ willChange: 'transform, opacity' }}
                            className="group relative bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="mb-5">
                                <div className="relative inline-flex items-center justify-center">
                                    {/* Gradient background blur */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-400/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Icon container */}
                                    <div className="relative w-14 h-14 rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent flex items-center justify-center group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
                                        <service.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                                {service.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-2">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Hover gradient effect */}
                            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex flex-col items-center gap-4 px-8 py-6 rounded-2xl border border-border bg-card/50">
                        <p className="text-muted-foreground">
                            Want to learn more about our services?
                        </p>
                        <a
                            href="#developers"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all"
                        >
                            View API Documentation
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

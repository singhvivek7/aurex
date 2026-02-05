"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "Starter",
        description: "Perfect for early-stage startups",
        price: "Free",
        period: "up to ₹8.5L/month",
        features: [
            "Up to ₹8.5 Lakh in monthly volume",
            "2.9% + ₹25 per transaction",
            "Basic payment methods",
            "Standard support",
            "API access"
        ],
        cta: "Start Free",
        highlighted: false
    },
    {
        name: "Growth",
        description: "For scaling businesses",
        price: "Custom",
        period: "volume-based pricing",
        features: [
            "Unlimited transaction volume",
            "Volume-based discounts",
            "All payment methods",
            "Priority support",
            "Advanced analytics",
            "Dedicated account manager"
        ],
        cta: "Contact Sales",
        highlighted: true
    },
    {
        name: "Enterprise",
        description: "For large organizations",
        price: "Custom",
        period: "tailored solutions",
        features: [
            "Custom pricing & SLA",
            "White-label solutions",
            "Dedicated infrastructure",
            "24/7 premium support",
            "Custom integrations",
            "Compliance assistance"
        ],
        cta: "Talk to Us",
        highlighted: false
    }
];

export function Pricing() {
    return (
        <section id="pricing" className="py-24 sm:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card mb-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">Pricing</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
                        Simple,{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400">
                            transparent pricing
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                        Pay as you grow. No hidden fees, no surprises.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative bg-card border rounded-2xl p-6 sm:p-8 ${plan.highlighted
                                ? "border-primary shadow-2xl shadow-primary/10 md:scale-105"
                                : "border-border"
                                } transition-all duration-300`}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                                    <div className="px-4 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                                <p className="text-sm text-muted-foreground">{plan.description}</p>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl sm:text-5xl font-bold text-foreground">{plan.price}</span>
                                </div>
                                <p className="text-sm text-muted-foreground mt-1">{plan.period}</p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <div className="mt-0.5 shrink-0">
                                            <div className="w-5 h-5 rounded-full border-2 border-primary/30 bg-primary/5 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                                                <Check className="w-3 h-3 text-primary" strokeWidth={2.5} />
                                            </div>
                                        </div>
                                        <span className="text-sm text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="#early-access"
                                className={`block w-full text-center px-6 py-3 rounded-lg font-medium transition-all ${plan.highlighted
                                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
                                    }`}
                            >
                                {plan.cta}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-sm text-muted-foreground mt-12"
                >
                    All plans include bank-grade security, PCI-DSS compliance, and 24/7 monitoring
                </motion.p>
            </div>
        </section>
    );
}

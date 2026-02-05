"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "How long does it take to integrate Aurex?",
        answer: "Most developers complete the basic integration in under 2 hours. Our comprehensive documentation, SDKs for all major languages, and sandbox environment make it easy to test and deploy. For complex custom integrations, our team provides dedicated support."
    },
    {
        question: "What payment methods do you support?",
        answer: "We support 50+ payment methods including all major credit/debit cards (Visa, Mastercard, Amex), digital wallets (Apple Pay, Google Pay), bank transfers, UPI, and regional payment methods across 150+ countries. New methods are added regularly based on market demand."
    },
    {
        question: "How do you ensure payment security?",
        answer: "Security is our top priority. We're PCI-DSS Level 1 certified, use bank-grade AES-256 encryption, and maintain SOC 2 Type II compliance. All sensitive data is tokenized, and we never store card details on our servers. We also provide fraud detection and 3D Secure authentication."
    },
    {
        question: "What are your transaction fees?",
        answer: "We offer competitive volume-based pricing starting at 2.9% + ₹25 per transaction for startups. Enterprise customers get custom pricing based on volume, payment methods, and specific requirements. Contact our sales team for a tailored quote."
    },
    {
        question: "Do you provide sandbox environment for testing?",
        answer: "Yes! We provide a full-featured sandbox environment that mirrors production. You can test all payment flows, webhooks, and edge cases without processing real payments. Test cards and detailed documentation are provided to simulate various scenarios."
    },
    {
        question: "What kind of support do you offer?",
        answer: "We offer 24/7 email support for all customers, with priority support and dedicated account managers for Growth and Enterprise plans. Our documentation includes detailed guides, API references, and integration examples. We also have an active developer community."
    }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.21, 0.47, 0.32, 0.98]
            }}
            className="border border-border rounded-xl overflow-hidden bg-card"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-accent/50 transition-colors duration-200"
            >
                <span className="font-semibold text-foreground pr-8">{question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                    }}
                >
                    <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                </motion.div>
            </button>
            <motion.div
                initial={false}
                animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0
                }}
                transition={{
                    height: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        mass: 0.8
                    },
                    opacity: {
                        duration: 0.2,
                        ease: "easeOut"
                    }
                }}
                style={{ willChange: "height, opacity" }}
                className="overflow-hidden"
            >
                <motion.div
                    className="p-6 pt-0 text-muted-foreground leading-relaxed"
                    initial={false}
                    animate={{
                        y: isOpen ? 0 : -10
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25
                    }}
                >
                    {answer}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export function FAQ() {
    return (
        <section className="py-24 sm:py-32 bg-muted/30">
            <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 sm:mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
                        Frequently asked{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400">
                            questions
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                        Everything you need to know about Aurex
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            index={index}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-muted-foreground mb-4">Still have questions?</p>
                    <a
                        href="#early-access"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                        Contact our team →
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

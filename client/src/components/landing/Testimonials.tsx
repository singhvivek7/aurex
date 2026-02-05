"use client";

import { motion } from "motion/react";
import { MessageSquare, Star } from "lucide-react";

const testimonials = [
    {
        quote: "Aurex's smart routing increased our payment success rate by 18%. The difference in revenue is staggering.",
        author: "Sarah Chen",
        role: "CTO",
        company: "FastCommerce",
        avatar: "SC"
    },
    {
        quote: "We migrated from our legacy provider in 2 weeks. The API documentation is phenomenal and support was incredible.",
        author: "Michael Rodriguez",
        role: "Engineering Lead",
        company: "TechFlow",
        avatar: "MR"
    },
    {
        quote: "The real-time settlement feature transformed our cash flow. We can now pay our sellers instantly without any delays.",
        author: "Priya Sharma",
        role: "Head of Payments",
        company: "Marketplace Pro",
        avatar: "PS"
    }
];

export function Testimonials() {
    return (
        <section className="py-24 sm:py-32">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card mb-6">
                        <MessageSquare className="w-3.5 h-3.5 text-primary" />
                        <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">Testimonials</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
                        Trusted by{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400">
                            industry leaders
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                        See what our customers are saying about their experience with Aurex
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.author}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-all duration-300"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                ))}
                            </div>

                            {/* Quote */}
                            <blockquote className="text-foreground leading-relaxed mb-6">
                                "{testimonial.quote}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20">
                                    <span className="text-sm font-bold text-primary">{testimonial.avatar}</span>
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                                    <div className="text-sm text-muted-foreground">
                                        {testimonial.role}, {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60"
                >
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-foreground">500+</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">Companies</div>
                    </div>
                    <div className="h-8 w-px bg-border hidden sm:block" />
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-foreground">₹16K Cr+</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">Processed</div>
                    </div>
                    <div className="h-8 w-px bg-border hidden sm:block" />
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-foreground">150+</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">Countries</div>
                    </div>
                    <div className="h-8 w-px bg-border hidden sm:block" />
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-foreground">4.9/5</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">Rating</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

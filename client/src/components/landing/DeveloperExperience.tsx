"use client";

import { motion } from "motion/react";
import { Check, Copy, Terminal } from "lucide-react";
import { useState } from "react";

const codeSnippet = `const payment = await aurex.orders.create({
  amount: 2000,
  currency: 'INR',
  source: 'tok_visa',
  description: 'Charge for Premium Plan',
  payment_method_types: ['card'],
  metadata: {
    order_id: '1234567890',
  },
});`;

export function DeveloperExperience() {
    const [copied, setCopied] = useState(false);

    const copyCode = () => {
        navigator.clipboard.writeText(codeSnippet);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-24 bg-primary text-primary-foreground overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        {/* Code Window */}
                        <div className="relative rounded-xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden font-mono text-sm leading-relaxed">
                            <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                </div>
                                <div className="text-xs text-slate-500">server.js</div>
                            </div>

                            <div className="p-6 relative group">
                                <button
                                    onClick={copyCode}
                                    className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100"
                                >
                                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
                                </button>

                                <div className="font-mono text-sm leading-relaxed">
                                    <div className="text-purple-400">const <span className="text-slate-100">payment</span> <span className="text-purple-400">=</span> <span className="text-purple-400">await</span> <span className="text-slate-100">aurex</span>.<span className="text-slate-100">orders</span>.<span className="text-yellow-300">create</span>(<span className="text-slate-400">{'{'}</span></div>
                                    <div className="pl-4">
                                        <span className="text-sky-400">amount:</span> <span className="text-emerald-400">2000</span>,
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-sky-400">currency:</span> <span className="text-orange-300">'INR'</span>,
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-sky-400">source:</span> <span className="text-orange-300">'tok_visa'</span>,
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-sky-400">description:</span> <span className="text-orange-300">'Charge for Premium Plan'</span>,
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-sky-400">payment_method_types:</span> <span className="text-slate-400">[</span><span className="text-orange-300">'card'</span><span className="text-slate-400">]</span>,
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-sky-400">metadata:</span> <span className="text-slate-400">{'{'}</span>
                                    </div>
                                    <div className="pl-8">
                                        <span className="text-sky-400">order_id:</span> <span className="text-orange-300">'1234567890'</span>,
                                    </div>
                                    <div className="pl-4 text-slate-400">
                                        {'},'}
                                    </div>
                                    <div><span className="text-slate-400">{'}'}</span><span className="text-purple-400">);</span></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-xs font-medium mb-6">
                            <Terminal className="w-3 h-3" />
                            Developer First
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl mb-6">
                            Designed for Developers
                        </h2>
                        <p className="text-lg text-primary-foreground/60 mb-8">
                            Integrate in minutes, not months. Our typed SDKs and predictable APIs make building payment flows a joy, not a chore.
                        </p>

                        <ul className="space-y-4">
                            {['Robust REST API', 'Real-time Webhooks', 'Sandbox Environment', 'Comprehensive Logs'].map((item) => (
                                <li key={item} className="flex items-center text-primary-foreground/80">
                                    <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center mr-3">
                                        <Check className="w-3.5 h-3.5 text-primary-foreground" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

import { LucideIcon, Wallet, TrendingUp, Zap, CreditCard } from "lucide-react";

export interface FeatureConfig {
    title: string;
    description: string;
    icon: LucideIcon;
    stat: string;
    statLabel: string;
    iconColor: string;
    accentColor: string;
}

export interface StatConfig {
    value: string;
    label: string;
}

export interface HeroConfig {
    badge: {
        status: string;
        uptime: string;
    };
    heading: {
        prefix: string;
        highlight: string;
        suffix: string;
    };
    subheading: string;
    cta: {
        primary: {
            text: string;
            href: string;
        };
        secondary: {
            text: string;
            href: string;
        };
    };
    stats: StatConfig[];
    flowLabels: {
        customer: string;
        router: string;
        gateway: string;
        settlement: string;
        liveRouting: string;
    };
}

export interface ProductVisionConfig {
    badge: string;
    heading: {
        prefix: string;
        highlight: string;
    };
    subheading: string;
    features: FeatureConfig[];
    cta: {
        text: string;
        buttonText: string;
        href: string;
    };
}

export const heroConfig: HeroConfig = {
    badge: {
        status: "System Status: All Systems Operational",
        uptime: "99.99% Uptime"
    },
    heading: {
        prefix: "The payment",
        highlight: "infrastructure",
        suffix: "that scales with you"
    },
    subheading: "Accept payments, route transactions intelligently, and move money globally. Built on enterprise-grade infrastructure trusted by modern businesses.",
    cta: {
        primary: {
            text: "Request Early Access",
            href: "#early-access"
        },
        secondary: {
            text: "View Documentation",
            href: "#vision"
        }
    },
    stats: [
        { value: "150+", label: "Countries" },
        { value: "45ms", label: "Avg Latency" },
        { value: "99.99%", label: "Success Rate" }
    ],
    flowLabels: {
        customer: "Customer",
        router: "Aurex Router",
        gateway: "Gateway",
        settlement: "Settlement",
        liveRouting: "Live Routing"
    }
};

export const productVisionConfig: ProductVisionConfig = {
    badge: "Platform Capabilities",
    heading: {
        prefix: "Built for the modern",
        highlight: "payment economy"
    },
    subheading: "Enterprise-grade infrastructure that powers payment operations at scale",
    features: [
        {
            title: "Global Collections",
            description: "Accept payments across 135+ currencies with intelligent currency conversion and local payment methods",
            icon: Wallet,
            stat: "135+",
            statLabel: "Currencies Supported",
            iconColor: "text-blue-500",
            accentColor: "from-blue-500/20 to-cyan-500/20"
        },
        {
            title: "Instant Payouts",
            description: "Disburse funds in real-time to bank accounts, cards, and wallets with sub-2 second settlement",
            icon: TrendingUp,
            stat: "<2s",
            statLabel: "Average Settlement",
            iconColor: "text-emerald-500",
            accentColor: "from-emerald-500/20 to-green-500/20"
        },
        {
            title: "Smart Routing",
            description: "AI-powered transaction routing that automatically selects the best gateway for optimal success rates",
            icon: Zap,
            stat: "+15%",
            statLabel: "Success Rate Improvement",
            iconColor: "text-violet-500",
            accentColor: "from-violet-500/20 to-purple-500/20"
        },
        {
            title: "Unified Checkout",
            description: "Single integration supporting 50+ payment methods including cards, wallets, and buy-now-pay-later",
            icon: CreditCard,
            stat: "50+",
            statLabel: "Payment Methods",
            iconColor: "text-orange-500",
            accentColor: "from-orange-500/20 to-amber-500/20"
        }
    ],
    cta: {
        text: "Ready to integrate?",
        buttonText: "View API Documentation",
        href: "#developers"
    }
};

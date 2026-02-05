# Aurex

**The Future of Payments** - A modern payment infrastructure platform designed for developers and businesses in India.

## 🚀 Overview

Aurex is a comprehensive payment processing platform that provides a robust, secure, and developer-friendly solution for accepting and managing online payments. Built with cutting-edge technologies, Aurex offers seamless integration, real-time analytics, and enterprise-grade reliability.

## ✨ Key Features

- **🔐 Secure Payment Processing** - PCI-DSS compliant with end-to-end encryption
- **💳 Multiple Payment Methods** - Support for cards, UPI, net banking, and wallets
- **📊 Real-time Analytics** - Comprehensive dashboard with transaction insights
- **🔄 Instant Settlements** - Fast payouts with real-time settlement options
- **🌐 Developer-First API** - Clean, predictable RESTful APIs with comprehensive documentation
- **🔔 Real-time Webhooks** - Get instant notifications for all payment events
- **🧪 Sandbox Environment** - Complete testing environment for integration
- **📈 Scalable Infrastructure** - Built to handle high transaction volumes
- **🇮🇳 India-First** - Optimized for Indian payment methods and currency (INR)

## 🛠️ Tech Stack

### Client (Landing Page)
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Runtime**: Bun

### Server (API)
- **Runtime**: Bun
- **Language**: TypeScript
- **Framework**: Express.js / Hono (to be confirmed)

## 📦 Project Structure

```
aurex/
├── client/          # Next.js landing page and dashboard
│   ├── src/
│   │   ├── app/           # Next.js app router pages
│   │   ├── components/    # React components
│   │   │   ├── landing/   # Landing page sections
│   │   │   └── ui/        # Reusable UI components
│   │   └── lib/           # Utilities and helpers
│   └── public/            # Static assets
│
├── server/          # Backend API server
│   └── src/              # Server source code
│
└── README.md        # This file
```

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh) v1.3.8 or higher
- Node.js 18+ (alternative to Bun)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aurex
   ```

2. **Install dependencies**

   For the client:
   ```bash
   cd client
   bun install
   ```

   For the server:
   ```bash
   cd server
   bun install
   ```

### Running the Application

#### Development Mode

**Client (Landing Page & Dashboard)**
```bash
cd client
bun dev
```
The application will be available at `http://localhost:3000`

**Server (API)**
```bash
cd server
bun run src/index.ts
```

#### Production Build

**Client**
```bash
cd client
bun run build
bun start
```

## 🎨 Landing Page Sections

The landing page includes the following sections:

1. **Hero** - Eye-catching introduction with animated payment flow visualization
2. **Services** - Core features and capabilities
3. **Use Cases** - Real-world applications and scenarios
4. **Product Vision** - Future roadmap and innovations
5. **Developer Experience** - API examples and integration guides
6. **Pricing** - Transparent pricing plans (Starter, Growth, Enterprise)
7. **Testimonials** - Customer success stories and statistics
8. **FAQ** - Frequently asked questions
9. **Footer** - Links and company information

## 🎯 Recent Updates

### Design & UX Improvements
- ✅ Optimized animations for better performance (reduced blur, GPU acceleration)
- ✅ Enhanced syntax highlighting in code snippets
- ✅ Polished icon designs with gradient effects
- ✅ Smooth accordion animations in FAQ section
- ✅ Responsive design for all screen sizes

### Localization
- ✅ Full INR (₹) currency support
- ✅ Updated pricing to reflect Indian market (₹8.5L volume, ₹25 transaction fee)
- ✅ India-focused payment statistics (₹16K Cr+ processed)

### API Updates
- ✅ Updated API examples from `aurex.charges.create` to `aurex.orders.create`
- ✅ Added `payment_method_types` and `metadata` fields
- ✅ Enhanced code snippet with proper syntax highlighting

## 📚 Documentation

- **API Documentation**: Coming soon
- **Integration Guide**: Coming soon
- **Webhook Reference**: Coming soon

## 🔒 Security

Aurex takes security seriously:
- PCI-DSS Level 1 compliant
- 256-bit SSL/TLS encryption
- Tokenization for sensitive data
- Regular security audits
- SOC 2 Type II certified

## 🤝 Support

- **Email**: support@aurex.com
- **Documentation**: docs.aurex.com (coming soon)
- **Status Page**: status.aurex.com (coming soon)

## 📝 License

This project is proprietary software. All rights reserved.

---

Built with ❤️ using [Bun](https://bun.sh) - A fast all-in-one JavaScript runtime.

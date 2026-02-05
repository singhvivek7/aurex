# shadcn/ui Components - Aurex

This project uses [shadcn/ui](https://ui.shadcn.com/) components with Radix UI primitives and Tailwind CSS.

## Available Components

### Button

Import: `import { Button } from "@/components/ui/button"`

**Variants:**
- `default` - Primary blue button
- `destructive` - Red button for dangerous actions
- `outline` - White button with border
- `secondary` - Light blue secondary button
- `ghost` - Transparent button
- `link` - Underlined text link

**Sizes:**
- `xs` - Extra small
- `sm` - Small
- `default` - Default size
- `lg` - Large
- `icon` - Square icon button
- `icon-xs`, `icon-sm`, `icon-lg` - Icon button sizes

**Example:**
```tsx
<Button variant="default">Click me</Button>
<Button variant="destructive" size="lg">Delete</Button>
<Button variant="outline">Cancel</Button>
```

### Badge

Import: `import { Badge } from "@/components/ui/badge"`

**Variants:**
- `default` - Primary blue badge
- `secondary` - Secondary light blue badge
- `destructive` - Red destructive badge
- `outline` - Outlined badge
- `ghost` - Transparent badge
- `link` - Link-style badge

**Example:**
```tsx
<Badge variant="default">New</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Beta</Badge>
```

### Card

Import:
```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
```

**Example:**
```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Your content here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Input

Import: `import { Input } from "@/components/ui/input"`

**Example:**
```tsx
<Input type="text" placeholder="Enter your name" />
<Input type="email" placeholder="Email address" />
<Input type="password" placeholder="Password" />
<Input disabled placeholder="Disabled input" />
```

## Installation

The components are already installed. If you need to add more shadcn/ui components:

```bash
bunx shadcn@latest add [component-name]
```

For example:
```bash
bunx shadcn@latest add dialog select switch
```

## Theme Configuration

The components use CSS variables defined in `src/app/globals.css`:

- Light mode: Clean white backgrounds with blue accents
- Dark mode: Dark blue-black backgrounds with brighter blue accents

## Customization

Components use the `cn()` utility function from `@/lib/utils` which combines `clsx` and `tailwind-merge` for efficient class merging.

You can customize components by:
1. Passing additional className props
2. Modifying the variant definitions in the component files
3. Updating CSS variables in `globals.css`

## Demo

View all components and their variants at: `http://localhost:3000/components`

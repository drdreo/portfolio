# Andreas Hahn - Portfolio

A high-performance, engaging web engineer portfolio showcasing technical skills, projects, and expertise through smooth animations and modern browser APIs.

## 🎨 Features

### Fluid Cursor Animation

- Custom cursor with trailing fluid wave simulation using GPU-accelerated canvas
- Smooth 60fps animation with no jank
- Automatically hidden on touch devices
- Respects `prefers-reduced-motion` preference

### Animated Hero Section

- Staggered entrance animations using Framer Motion
- Gradient text effects with smooth color transitions
- Responsive typography scaling
- Graceful degradation for reduced motion

### Interactive Tech Stack Visualization

- Config-based system in `data/techStack.ts` for easy updates
- Animated proficiency bars that reveal on scroll
- Hover effects with smooth micro-interactions
- Click to view detailed proficiency modal
- Organized by category (Frontend, Backend, Database, Tools)

### Projects Showcase

- Card-based layout with scroll-triggered animations
- Hover effects with image zoom and overlay transitions
- Tag system for technology stacks
- GitHub links with SVG icons
- Optimized images with lazy loading

## 🚀 Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the portfolio.

Build for production:

```bash
pnpm build
```

## 📝 Customization

### Update Personal Information

Edit `components/Hero.tsx` to change your name, title, and tagline.

### Add/Update Tech Stack

Edit `data/techStack.ts`:

```typescript
export const techStack: TechStack[] = [
    {
        name: "React",
        category: "frontend",
        proficiency: 95, // 0-100
    },
    // ... more technologies
];
```

### Add/Update Projects

Edit `data/projects.ts`:

```typescript
export const projects: Project[] = [
    {
        title: "Project Name",
        description: "Project description",
        url: "https://project-url.com",
        image: "/project-image.png",
        github: "https://github.com/username/repo",
        tags: ["react", "typescript"],
    },
    // ... more projects
];
```

## ♿ Accessibility Features

- **Reduced Motion Support**: Automatically detects and respects `prefers-reduced-motion`
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Screen Reader Friendly**: Semantic HTML and proper ARIA labels
- **No-JS Fallback**: All content accessible without JavaScript
- **Mobile Optimized**: Touch-friendly interactions and responsive design

## 🎯 Performance

- GPU-accelerated animations
- Lazy loading for images
- Optimized font loading with Google Fonts
- Minimal JavaScript bundle size
- 60fps smooth animations

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: SCSS Modules
- **Animations**: Framer Motion
- **Package Manager**: pnpm

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

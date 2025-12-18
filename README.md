# Iseehear Wrapped 2025

A modern, interactive landing page inspired by Spotify Wrapped and LinkedIn year-in-review stories.

## Features

- 🎨 Beautiful gradient backgrounds with animated glow effects
- 📱 Full mobile swipe support
- ⌨️ Keyboard navigation (Arrow keys)
- 🎭 Smooth slide transitions with Framer Motion
- 📊 Animated stat counters
- 🎯 Modal popups for detailed information
- ♿ Fully accessible (ARIA labels, keyboard navigation, focus management)

## Tech Stack

- **Vite** - Fast build tool
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Editing Slides

Edit `src/data/wrappedData.ts` to modify slides:

- Add/remove slides in the `slides` array
- Each slide supports:
  - `title` - Main headline
  - `subtitle` - Supporting text
  - `statLabel` - Optional stat label
  - `statValue` - Optional stat value (number or string)
  - `theme` - Color theme: "a", "b", "c", or "d"
  - `details` - Array of bullet points for modal

### Updating CTA Link

Edit the `CTA_LINK` constant in `src/data/wrappedData.ts`:

```typescript
export const CTA_LINK = "https://your-link-here.com";
```

## Project Structure

```
src/
├── App.tsx                 # Main app component
├── components/
│   ├── StorySlider.tsx     # Main slider with navigation
│   ├── StorySlide.tsx      # Individual slide component
│   ├── Progress.tsx        # Progress indicator
│   └── Modal.tsx           # Modal dialog component
├── data/
│   └── wrappedData.ts     # Mock data and slide content
├── hooks/
│   ├── useKeyNav.ts       # Keyboard navigation hook
│   ├── useSwipe.ts        # Swipe gesture hook
│   └── useCountUp.ts      # Animated counter hook
└── main.tsx               # Entry point
```

## Navigation

- **Arrow Right** / **Swipe Left** - Next slide
- **Arrow Left** / **Swipe Right** - Previous slide
- **Click "View Details"** - Open modal with more information
- **ESC** - Close modal

## License

MIT


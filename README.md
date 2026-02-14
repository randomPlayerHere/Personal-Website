# Portfolio - Khushal Nirwal

A modern, cyberpunk-inspired portfolio showcasing AI/ML projects with an immersive 3D experience and parallax city background.

## Design Theme

Retro Terminal Night aesthetic featuring:
- Terminal Green (#4ADE80) - Primary accent
- Lavender/Violet (#A78BFA) - Secondary accent
- Deep Purple gradients - Backgrounds
- Coral (#ea4884) - Call-to-action highlights

## Features

- 3D Computer Model with interactive Three.js rendering
- Multi-layer parallax city background
- Draggable skill cards and tech stack visualization
- Animated timeline for work experience
- Project showcase with hover previews
- Interactive 3D globe
- Responsive design
- Smooth animations powered by Framer Motion

## Tech Stack

**Frontend**
- React, Vite, Tailwind CSS, Framer Motion

**3D & Visualizations**
- Three.js, @react-three/fiber, @react-three/drei, Cobe

## Installation

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Customization

Update personal information in `/src/constants/index.js`

Modify theme colors in `/src/index.css`:
```css
--color-terminal: #4ADE80;
--color-lavender: #A78BFA;
--color-coral: #ea4884;
```

Replace 3D model in `/public/models/` and update import in `Computer.jsx`

Change background by replacing city layers in `/public/assets/city/`

## Future Improvements

- Backend integration for contact form with email service
- Blog section with markdown support
- Dark/light mode toggle
- Analytics integration
- Performance optimizations for mobile devices
- Add more interactive 3D elements
- Implement project filtering by technology
- Add unit and integration tests
- SEO optimization and meta tags
- Accessibility improvements (WCAG compliance)
- Multi-language support

## License

MIT License

## Author

Khushal Nirwal
- GitHub: [@randomPlayerHere](https://github.com/randomPlayerHere)
- LinkedIn: [khushalnirwal](https://www.linkedin.com/in/khushalnirwal/)
- Email: khushalnirwal@gmail.com

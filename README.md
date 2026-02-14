# 🌐 Portfolio - Khushal Nirwal

A modern, cyberpunk-inspired portfolio showcasing AI/ML projects with an immersive 3D experience and parallax city background.

![Portfolio Preview](./public/og_assets/preview.png)

## 🎨 Design Theme: Retro Terminal Night

A cohesive cyberpunk aesthetic featuring:
- **Terminal Green** (`#4ADE80`) - Primary accent matching the 3D computer screen
- **Cyan/Aqua** (`#33c2cc`) - Secondary accent inspired by city window lights
- **Deep Purple** gradients - Dark, immersive backgrounds
- **Coral** (`#ea4884`) - Call-to-action highlights

## ✨ Features

- **3D Computer Model** - Interactive Three.js model with terminal green screen
- **Parallax City Background** - Multi-layer cyberpunk cityscape with smooth scrolling
- **Interactive Grid Layout** - Draggable skill cards and tech stack visualization
- **Animated Timeline** - Work experience with progress visualization
- **Project Showcase** - Hover previews and detailed modal views
- **Globe Visualization** - Interactive 3D globe showing location
- **Responsive Design** - Optimized for all screen sizes
- **Smooth Animations** - Framer Motion powered transitions

## 🚀 Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library

### 3D & Visualizations
- **Three.js** / **@react-three/fiber** - 3D rendering
- **@react-three/drei** - Three.js helpers
- **Cobe** - Interactive globe

### Styling
- **Custom CSS** with CSS variables
- **Funnel Display** font from Google Fonts

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

## 🛠️ Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   ├── city/          # Parallax background layers
│   │   ├── logos/         # Technology logos
│   │   ├── projects/      # Project screenshots
│   │   └── socials/       # Social media icons
│   ├── models/            # 3D model files
│   └── og_assets/         # Original assets & icons
├── src/
│   ├── components/
│   │   ├── Card.jsx           # Draggable skill cards
│   │   ├── Computer.jsx       # 3D computer model
│   │   ├── CopyEmailButton.jsx
│   │   ├── FlipWords.jsx      # Animated text flipper
│   │   ├── Frameworks.jsx     # Tech stack orbiting circles
│   │   ├── globe.jsx          # 3D globe component
│   │   ├── HeroText.jsx       # Hero section text
│   │   ├── Loader.jsx         # 3D loading indicator
│   │   ├── OrbitingCircles.jsx
│   │   ├── ParallaxBackground.jsx
│   │   ├── Project.jsx        # Project list item
│   │   ├── ProjectDetails.jsx # Project modal
│   │   └── Timeline.jsx       # Experience timeline
│   ├── sections/
│   │   ├── About.jsx          # About section with grid
│   │   ├── Contact.jsx        # Contact form
│   │   ├── Experience.jsx     # Work experience
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx           # Landing section
│   │   ├── Navbar.jsx
│   │   └── Projects.jsx       # Projects showcase
│   ├── constants/
│   │   └── index.js           # Site content & data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css              # Theme styles
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎯 Key Sections

### Hero
- Animated hero text with flip words
- 3D computer model with floating animation
- Multi-layer parallax city background

### About
- Interactive grid layout with 5 sections
- Draggable skill cards
- 3D globe showing location
- Tech stack visualization with orbiting circles

### Projects
- Hover preview of project images
- Detailed modal views with tags
- Links to GitHub repositories

### Experience
- Animated timeline with scroll progress
- Role descriptions and achievements

### Contact
- Themed contact form
- Copy email functionality

## 🎨 Customization

### Update Personal Information
Edit `/src/constants/index.js`:
```javascript
export const myProjects = [...]
export const experiences = [...]
export const mySocials = [...]
```

### Modify Theme Colors
Edit `/src/index.css` theme variables:
```css
--color-terminal: #4ADE80;
--color-aqua: #33c2cc;
--color-coral: #ea4884;
```

### Replace 3D Model
Place your `.glb` or `.gltf` model in `/public/models/` and update the import in `Computer.jsx`

### Change Background
Replace city layers in `/public/assets/city/` (layers 1-5)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Khushal Nirwal**
- GitHub: [@randomPlayerHere](https://github.com/randomPlayerHere)
- LinkedIn: [khushalnirwal](https://www.linkedin.com/in/khushalnirwal/)
- Email: khushalnirwal@gmail.com

## 🙏 Acknowledgments

- Inspired by cyberpunk and terminal aesthetics
- 3D models and city assets created/sourced for this project
- Built with modern web technologies

---

Made with 💚 and terminal green

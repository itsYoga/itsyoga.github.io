# YuJia Liang - 3D Interactive Portfolio

這是一個基於 Three.js 的3D互動式個人作品集網站，重現了 Bokoko33 的獲獎作品設計。網站結合了3D建模、滾動動畫和響應式設計，提供沉浸式的瀏覽體驗。

🌐 **Live Site**: [https://itsyoga.github.io](https://itsyoga.github.io)

✅ **3D作品集已成功部署！** 包含3D場景、滾動動畫、項目展示和聯繫信息。

## Project Structure

```
/
├── docs/                    # 3D Portfolio Website
│   ├── index.html          # Main 3D website page
│   ├── main.js             # Three.js entry point
│   ├── style.css           # Styling and themes
│   ├── package.json        # Dependencies (Three.js, GSAP, etc.)
│   ├── vite.config.js      # Vite build configuration
│   ├── Experience/         # 3D Scene Management
│   │   ├── Experience.js   # Main 3D experience class
│   │   ├── Camera.js       # Camera controls
│   │   ├── Renderer.js     # WebGL renderer
│   │   ├── Theme.js        # Light/Dark theme switching
│   │   ├── Preloader.js    # Loading screen
│   │   ├── Utils/          # Utility classes
│   │   │   ├── Sizes.js    # Responsive sizing
│   │   │   ├── Time.js     # Animation timing
│   │   │   ├── Resources.js # Asset loading
│   │   │   └── assets.js   # Asset definitions
│   │   └── World/          # 3D World Objects
│   │       ├── World.js    # World management
│   │       ├── Room.js     # 3D room model
│   │       ├── Floor.js    # Floor and circles
│   │       ├── Controls.js # Scroll animations
│   │       └── Environment.js # Lighting
│   ├── public/             # Static assets
│   │   ├── models/         # 3D models (.glb files)
│   │   ├── textures/       # Textures and videos
│   │   └── draco/          # Draco compression
│   └── Resume_alt.pdf      # Resume PDF
├── resume/                  # Resume source files
│   ├── Resume.tex          # Main resume LaTeX source
│   ├── Resume_alt.tex     # Alternative resume LaTeX source
│   ├── Makefile            # Auto-compilation commands
│   ├── compile.sh          # Helper script
│   └── latexmkrc           # LaTeX configuration
└── README.md                # This file
```

## Features

- 🎮 **3D Interactive Scene**: Immersive Three.js 3D environment
- 📜 **Scroll-Based Animations**: GSAP ScrollTrigger for smooth transitions
- 🌓 **Theme Switching**: Light/Dark mode toggle
- 📱 **Responsive Design**: Optimized for desktop and mobile
- 🎨 **Custom 3D Models**: GLB format with Draco compression
- ⚡ **Smooth Scrolling**: ASScroll for enhanced scroll experience
- 🎯 **Progressive Loading**: Preloader with loading animations
- 📄 **Resume Integration**: PDF resume download

## Technologies Used

### Frontend & 3D
- **Three.js**: 3D graphics and WebGL rendering
- **GSAP**: Animation library with ScrollTrigger
- **ASScroll**: Smooth scrolling library
- **Vite**: Build tool and dev server
- **HTML5 & CSS3**: Structure and styling

### 3D Assets
- **GLB Models**: Compressed 3D models
- **Draco Compression**: Geometry compression
- **RectAreaLight**: Advanced lighting

### Backend & Deployment
- **GitHub Pages**: Static site hosting
- **LaTeX**: Resume generation

## Local Development

### 3D Portfolio Development

**Install Dependencies**
```bash
cd docs
npm install
```

**Start Development Server**
```bash
npm run dev
```
This starts Vite dev server with hot reloading.

**Build for Production**
```bash
npm run build
```

**Preview Production Build**
```bash
npm run preview
```

### Resume Compilation

**Quick Compile**
```bash
# Compile and update docs/ folder
cd resume && make resume-alt

# Or using pdflatex directly
cd resume && pdflatex Resume_alt.tex && cp Resume_alt.pdf ../docs/
```

**Auto-compile on Changes**
```bash
# Using latexmk (Recommended)
cd resume && latexmk -pdf -pvc Resume_alt.tex

# Using helper script
cd resume && ./compile.sh

# Using Makefile
cd resume && make watch
```

**Clean Build Artifacts**
```bash
cd resume && make clean          # Remove all LaTeX temp files
cd resume && make clean-all      # Remove temp files and PDFs
```

## Customization

### 3D Scene Customization

**Modify 3D Models**
- Replace `.glb` files in `docs/public/models/`
- Update model references in `docs/Experience/Utils/assets.js`

**Adjust Scroll Animations**
- Edit `docs/Experience/World/Controls.js`
- Modify GSAP timeline parameters for different scroll behaviors
- Change camera positions and room scaling

**Customize Colors and Themes**
- Update CSS variables in `docs/style.css`
- Modify theme switching logic in `docs/Experience/Theme.js`

**Add New Sections**
- Add HTML sections in `docs/index.html`
- Create corresponding scroll triggers in Controls.js

### Repository Configuration

**Change Repository Name**
1. Go to your repository on GitHub
2. Click **Settings** (gear icon)
3. Scroll down to **Repository name**
4. Change to your desired name
5. GitHub will automatically update the URL

**Update Website URL**
After renaming, update the live site URL in README.md:
```markdown
🌐 **Live Site**: [https://itsyoga.github.io/YOUR_NEW_REPO_NAME/](https://itsyoga.github.io/YOUR_NEW_REPO_NAME/)
```

**GitHub Pages Configuration**
1. Go to repository **Settings** → **Pages**
2. Under **Source**, select:
   - **Branch**: `main` (or `master`)
   - **Folder**: `/docs`
3. Click **Save**

Your site will be available at:
- `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Deploying Changes

**3D Portfolio Updates**
```bash
# Build the project
cd docs && npm run build

# Commit and push changes
git add docs/
git commit -m "Update 3D portfolio"
git push
```

**Resume Updates**
```bash
# Compile resume and push
cd resume && make resume-alt
git add docs/Resume_alt.pdf
git commit -m "Update resume"
git push
```

Changes will be live within a few minutes.

## Performance Optimization

- **Draco Compression**: 3D models use Draco compression for faster loading
- **Lazy Loading**: Assets are loaded progressively
- **Responsive Design**: Optimized for both desktop and mobile
- **Smooth Animations**: 60fps animations using GSAP

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by [Bokoko33's award-winning portfolio](https://bokoko33.me/)
- Built with Three.js and GSAP
- Uses ASScroll for smooth scrolling

## Contact

- 📧 Email: ch993115@gmail.com
- 💼 LinkedIn: [yu-jia-liang-77ab022a7](https://www.linkedin.com/in/yu-jia-liang-77ab022a7)
- 💻 GitHub: [itsYoga](https://github.com/itsYoga)

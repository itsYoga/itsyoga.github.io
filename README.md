# YuJia Liang - Personal Website

Personal website project featuring portfolio, resume, and photography showcase.

**Live Website:** [https://itsyoga.github.io](https://itsyoga.github.io)

## Project Structure

```
itsyoga/
├── website/              # Next.js website
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   ├── public/           # Static assets (including resume PDF)
│   └── package.json      # Project dependencies
├── resume/               # Resume files
│   └── YuJia_resume.pdf  # Resume PDF
├── .github/              # GitHub Actions configuration
│   └── workflows/
│       └── deploy.yml    # GitHub Pages auto-deployment
└── README.md             # This file
```

## Quick Start

### Local Development

```bash
cd website
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build

```bash
cd website
npm run build
```

## Deployment

The project is configured with GitHub Actions for automatic deployment to GitHub Pages:

- Pushing to `main` branch automatically triggers deployment
- Deployment configuration is in `.github/workflows/deploy.yml`
- The website is automatically built and deployed to GitHub Pages
- Website URL: https://itsyoga.github.io

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Content

The website includes:

- **Personal Introduction** - Background and interests
- **Technical Projects** - Programming project showcase
- **Photography** - Photography portfolio
- **Resume Download** - PDF resume file
- **Social Links** - GitHub, LinkedIn, Instagram, etc.

## Resume

Resume files are located at:
- `resume/YuJia_resume.pdf` - Source file
- `website/public/YuJia_resume.pdf` - Copy used by website

## Development Notes

For detailed development documentation, please refer to `website/README.md`

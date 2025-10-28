# YuJia Liang - Personal Website

This is my personal website and portfolio, featuring my professional resume, projects, and contact information. The site is deployed using GitHub Pages.

🌐 **Live Site**: [https://itsyoga.github.io](https://itsyoga.github.io)

**注意**: Repository 名稱必須完全匹配 GitHub 用戶名（大小寫敏感）

## Project Structure

```
/
├── docs/                    # Website files for GitHub Pages
│   ├── index.html          # Main website page
│   ├── Resume.pdf          # Resume PDF version
│   └── Resume_alt.pdf      # Alternative resume version
├── Resume.tex              # Main resume LaTeX source
├── Resume_alt.tex          # Alternative resume LaTeX source
├── README.md                # This file
├── Makefile                 # Auto-compilation commands
├── compile.sh              # Helper script
└── .gitignore              # Git ignore rules
```

## Features

- 📄 **Resume**: Professional resume in both HTML and PDF formats
- 🎨 **Responsive Design**: Modern, clean interface that works on all devices
- 📱 **Mobile-Friendly**: Optimized for mobile viewing
- 🚀 **Fast Loading**: Lightweight and optimized for performance
- 🔧 **Auto-Compile**: Automatic PDF generation on file changes

## Technologies Used

- HTML5 & CSS3
- LaTeX
- GitHub Pages (for hosting)

## Local Development

### Quick Compile
```bash
# Compile and update docs/ folder
make resume-alt

# Or using pdflatex directly
pdflatex Resume_alt.tex && cp Resume_alt.pdf docs/
```

### Auto-compile on Changes

**Option 1: Using latexmk (Recommended)**
```bash
latexmk -pdf -pvc Resume_alt.tex
```
This watches for file changes and automatically recompiles.

**Option 2: Using the helper script**
```bash
./compile.sh
```

**Option 3: Using Makefile**
```bash
# Watch and auto-compile
make watch

# Or compile manually
make resume-alt
```

### Clean Build Artifacts
```bash
make clean          # Remove all LaTeX temp files
make clean-all      # Remove temp files and PDFs
```

## Customization

### Change Repository Name

1. Go to your repository on GitHub
2. Click **Settings** (gear icon)
3. Scroll down to **Repository name**
4. Change "Resume" to your desired name (e.g., "portfolio", "website", or just your username)
5. GitHub will automatically update the URL

### Update Website URL in Files

After renaming, update these files:

**README.md** - Update the live site URL:
```markdown
🌐 **Live Site**: [https://itsyoga.github.io/YOUR_NEW_REPO_NAME/](https://itsyoga.github.io/YOUR_NEW_REPO_NAME/)
```

**docs/index.html** (if you have any absolute links):
- Check for any hardcoded repository URLs

### GitHub Pages Configuration

1. Go to repository **Settings** → **Pages**
2. Under **Source**, select:
   - **Branch**: `main` (or `master`)
   - **Folder**: `/docs`
3. Click **Save**

Your site will be available at:
- `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Deploying Changes

Simply push changes to the `docs/` directory:

```bash
git add docs/
git commit -m "Update website"
git push
```

Changes will be live within a few minutes.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- 📧 Email: ch993115@gmail.com
- 💼 LinkedIn: [yu-jia-liang-77ab022a7](https://www.linkedin.com/in/yu-jia-liang-77ab022a7)
- 💻 GitHub: [itsYoga](https://github.com/itsYoga)

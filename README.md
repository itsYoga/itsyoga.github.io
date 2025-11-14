# YuJia Liang - Personal Website

個人網站項目，包含作品集、履歷和攝影作品展示。

**Live Website:** [https://itsyoga.github.io](https://itsyoga.github.io)

## 項目結構

```
itsyoga/
├── website/              # Next.js 網站
│   ├── app/              # Next.js App Router 頁面
│   ├── components/       # React 組件
│   ├── public/           # 靜態資源（包含履歷 PDF）
│   └── package.json      # 項目依賴
├── resume/               # 履歷文件
│   └── YuJia_resume.pdf  # 履歷 PDF
├── .github/              # GitHub Actions 配置
│   └── workflows/
│       └── deploy.yml    # GitHub Pages 自動部署
└── README.md             # 本文件
```

## 快速開始

### 本地開發

```bash
cd website
npm install
npm run dev
```

訪問 [http://localhost:3000](http://localhost:3000)

### 構建

```bash
cd website
npm run build
```

## 部署

項目已配置 GitHub Actions 自動部署到 GitHub Pages：

- 推送到 `main` 分支會自動觸發部署
- 部署配置在 `.github/workflows/deploy.yml`
- 網站會自動構建並部署到 GitHub Pages
- 網站地址：https://itsyoga.github.io

## 技術棧

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React

## 內容

網站包含以下內容：

- **個人介紹** - 關於我的背景和興趣
- **技術項目** - 編程項目展示
- **攝影作品** - 攝影作品集
- **履歷下載** - PDF 履歷文件
- **社交連結** - GitHub, LinkedIn, Instagram 等

## 履歷

履歷文件位於：
- `resume/YuJia_resume.pdf` - 源文件
- `website/public/YuJia_resume.pdf` - 網站使用的副本

## 開發說明

詳細的開發文檔請參考 `website/README.md`

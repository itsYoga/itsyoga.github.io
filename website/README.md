# YuJia Liang - Personal Website

現代化的個人網站，使用 Next.js、TypeScript、Tailwind CSS 和 shadcn/ui 構建。包含作品集、履歷和攝影作品展示。

## 技術棧

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React

## 安裝

```bash
npm install
```

## 本地開發

```bash
npm run dev
```

在瀏覽器中打開 [http://localhost:3000](http://localhost:3000)

## 構建

```bash
npm run build
```

構建輸出會在 `out/` 目錄中。

## GitHub Pages 部署

這個項目已配置為自動部署到 GitHub Pages：

1. 推送到 `main` 分支會自動觸發部署
2. GitHub Actions 會自動構建並部署到 GitHub Pages
3. 部署配置在 `.github/workflows/deploy.yml`

### 配置說明

- 如果倉庫名是 `username.github.io`（用戶頁面），basePath 會自動設置為空
- 如果是項目頁面（如 `username/itsyoga`），basePath 會自動設置為 `/itsyoga`

## 項目結構

```
website/
├── app/
│   ├── layout.tsx      # 根佈局
│   ├── page.tsx        # 主頁面
│   └── globals.css     # 全局樣式
├── components/
│   └── ui/             # shadcn/ui 組件
├── lib/
│   └── utils.ts        # 工具函數
└── public/
    └── YuJia_resume.pdf # 履歷文件
```

## 功能

- 響應式設計
- 流暢的動畫效果
- Bento Grid 項目展示
- 技能標籤展示
- 攝影作品展示
- 履歷下載
- 社交媒體連結（GitHub, LinkedIn, Instagram）
- 靜態導出（適合 GitHub Pages）

## 自定義

編輯 `app/page.tsx` 來更新你的個人信息、項目和社交媒體連結。

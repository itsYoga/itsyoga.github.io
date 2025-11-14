# GitHub Pages 部署指南

## 部署配置檢查清單

### 1. GitHub 倉庫設置

在 GitHub 倉庫中：
1. 前往 **Settings** → **Pages**
2. 在 **Source** 部分選擇 **GitHub Actions**
3. 確保 **Build and deployment** 設置為使用 GitHub Actions

### 2. 部署觸發條件

部署會在以下情況自動觸發：
- 推送到 `main` 分支
- 手動觸發（通過 GitHub Actions 頁面的 "Run workflow" 按鈕）

### 3. BasePath 配置

`next.config.ts` 會根據倉庫名稱自動設置 basePath：

- **用戶頁面** (`username.github.io`): basePath = `''` (空)
- **項目頁面** (`username/itsyoga`): basePath = `'/itsyoga'`

### 4. 構建輸出

構建完成後，靜態文件會輸出到 `website/out/` 目錄，GitHub Actions 會自動部署這些文件。

### 5. 驗證部署

部署成功後，網站會在以下 URL 可用：
- 用戶頁面: `https://username.github.io`
- 項目頁面: `https://username.github.io/itsyoga`

### 6. 故障排除

如果部署失敗：

1. **檢查 GitHub Actions 日誌**
   - 前往 Actions 標籤頁
   - 查看最新的工作流運行日誌

2. **常見問題**
   - 確保 `website/package-lock.json` 存在
   - 確保 `website/public/YuJia_resume.pdf` 存在
   - 檢查 Node.js 版本是否為 20

3. **本地測試構建**
   ```bash
   cd website
   npm ci
   npm run build
   ```
   確保 `out/` 目錄成功生成

### 7. 手動觸發部署

如果需要手動觸發部署：
1. 前往 GitHub 倉庫的 **Actions** 標籤頁
2. 選擇 "Deploy to GitHub Pages" 工作流
3. 點擊 "Run workflow" 按鈕


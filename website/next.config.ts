import type { NextConfig } from "next";

// 根據 GitHub Pages 設置 basePath
// 如果倉庫名是 username.github.io（用戶頁面），basePath 為空
// 如果是項目頁面（如 username/itsyoga），basePath 為 '/itsyoga'
const getBasePath = () => {
  if (process.env.NODE_ENV !== 'production') {
    return '';
  }
  
  // 從環境變量獲取倉庫名稱
  const repo = process.env.GITHUB_REPOSITORY || '';
  const repoName = repo.split('/')[1] || '';
  
  // 如果倉庫名以 .github.io 結尾，說明是用戶頁面，basePath 為空
  if (repoName && repoName.endsWith('.github.io')) {
    return '';
  }
  
  // 否則是項目頁面，使用倉庫名作為 basePath
  if (repoName && repoName !== 'itsyoga') {
    return `/${repoName}`;
  }
  
  // 默認情況下，如果是 itsyoga 項目，使用 '/itsyoga'
  return '/itsyoga';
};

const nextConfig: NextConfig = {
  output: 'export',
  basePath: getBasePath(),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

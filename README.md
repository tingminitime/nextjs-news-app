## LIVE NEWS APP with Next.js 13

練習專案，來源 : [Let’s build a LIVE NEWS APP with Next.js 13 (TypeScript, StepZen, Tailwind, Dark Mode, GraphQL)](https://www.youtube.com/watch?v=QcEY72FX9go)。

## 功能

- 使用 StepZen GraphQL 串接 Mediastack API 獲取新聞資訊。
- 新聞分類
- 關鍵字搜尋新聞
- Dark Mode

## 安裝

### 安裝套件

```bash
pnpm install
```

### 環境變數說明

請參考 [.env.example](https://github.com/tingminitime/nextjs-news-app/blob/main/.env.example) 檔案。

```env
MEDIASTACK_API_KEY= # your mediastack api key
STEPZEN_API_KEY= # yout stepzen api key
```

### 運行專案

```bash
pnpm run dev
```

## 專案技術

- React
- Next.js v13 ( app directory )
- TypeScript
- ESLint
- StepZen
- graphql
- Tailwind CSS
- next-themes
- react-timeago
- heroicons

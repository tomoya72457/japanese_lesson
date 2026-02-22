# Nihongo.Pro

**世界とつながる、あなただけの日本語レッスン**

日本語ティーチングのデモLP（ランディングページ）です。多様な経験を持つプロ講師が、LINEで完結するオンライン日本語レッスンを提供するサービス紹介サイトです。

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2-38B2AC?style=flat-square&logo=tailwind-css)

---

## ✨ 主な機能

- **レスポンシブデザイン** … スマホ・タブレット・PC に対応
- **ヒーローセクション** … ビューポートフルサイズの背景画像（デバイスごとに最適化）
- **講師紹介** … 5名のプロ講師を紹介（横スクロール / 縦並び）
- **料金プラン** … シンプルで透明性の高い料金体系の説明
- **LINE連携** … 無料相談・予約のCTAを各所に配置

---

## 🛠 技術スタック

| カテゴリ | 技術 |
|---------|------|
| フレームワーク | Next.js 14 (App Router) |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS v4 |
| アイコン | Lucide React |

---

## 📁 プロジェクト構造

```
app/
├── components/
│   ├── home/          # トップページ用
│   │   └── HomePage.tsx
│   ├── instructors/   # 講師紹介ページ用
│   │   └── InstructorsPage.tsx
│   ├── pricing/       # 料金ページ用
│   │   └── PricingPage.tsx
│   └── shared/        # 共通コンポーネント
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── Button.tsx
│       └── LayoutWrapper.tsx
├── layout.tsx
├── page.tsx           # /
├── instructors/       # /instructors
├── pricing/           # /pricing
└── globals.css
```

---

## 🚀 セットアップ

### 必要な環境

- Node.js 18.17 以上
- npm 9 以上

### インストール

```bash
npm install
```

### 開発サーバー起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) で開きます。

### ビルド

```bash
npm run build
```

### 本番起動

```bash
npm run start
```

---

## 📍 ルーティング

| パス | 説明 |
|------|------|
| `/` | トップページ（ヒーロー、講師プレビュー、学習の流れなど） |
| `/instructors` | 講師紹介（5名のプロフィール） |
| `/pricing` | 料金・プラン |

---

## 📝 ライセンス

ISC

---

## 👤 作成者

Nihongo.Pro Demo LP

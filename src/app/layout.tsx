import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

export const metadata: Metadata = {
  title: "AI 貼文生成器 | 病毒式內容公式",
  description: "從 Reddit、Twitter/X、Dcard、PTT、Facebook 提取高讚公式模板，生成病毒式貼文",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
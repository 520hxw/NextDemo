/*
 * @Author: Mina
 * @Date: 2024-02-23 22:22:25
 * @LastEditors: Mina
 * @LastEditTime: 2024-05-08 17:30:39
 * @Description: 
 */
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

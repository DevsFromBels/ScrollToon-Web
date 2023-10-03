import Header from "@/ui/header/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Main from '@/ui/main/Main'
import { Provider } from "react-redux";
import store from '../store/store'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scrolltoon",
  description: "Scrolltoon - Webapp with anime-specific",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* <Provider store={store}> */}
        <Header />
        <Main>{children}</Main>
        {/* </Provider> */}
      </body>
    </html>
  );
}

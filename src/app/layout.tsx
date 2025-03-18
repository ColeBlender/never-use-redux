import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GlobalStateProvider from "@/providers/GlobalStateProvider";
import "@/styles/globals.css";
// import { Provider } from "react-redux";
// import { store } from "@/redux/store";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Never Use Redux",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalStateProvider>{children}</GlobalStateProvider>
        {/* <Provider store={store}>{children}</Provider> */}
      </body>
    </html>
  );
}

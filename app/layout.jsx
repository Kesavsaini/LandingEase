import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import AuthProvider from "./AuthProvider";
import { Toaster } from "sonner";
import GoogleAnalytics from "./GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LandingEase",
  description: "Create Your Simple Landing Page in Minutes",
  icons: {
    icon: "/icon.png",
  },
};

// export const viewport = {
//   width: '1024',
//   initialScale: 0,
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="LandingEase" />
        <meta
          name="twitter:site"
          content="@https://landing-ease.vercel.app/dashboard/create"
        />
        <meta
          name="twitter:description"
          content="Say Goodbye to Complicated Design Tools — Ease Lets You Craft Professional Landing Pages Quickly and Simply."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dv12kfa4w/image/upload/v1727082191/cjmibchvq0lnscu8g65t.png"
        />
      </head>
      <GoogleAnalytics />
      <body className={inter.className}>
        <Toaster position="top-center" richColors />
        <AuthProvider>
          <StoreProvider>{children}</StoreProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

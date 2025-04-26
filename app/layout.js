import { Inter } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: "Ai career coach",
  description: "career app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider afterSignOutUrl="/" appearance={{
      elements: {
        avatarBox: "h-12 w-12",
      }
    }}>

      <html lang="en" suppressHydrationWarning >
        <body
          className={`${inter.className}`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            {/* footer */}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center ">
                <p>Made with 💖 by Kundan</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

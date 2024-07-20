import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import Sidebar from "@/components/SideBar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Transaction Manager",
  description: "a transaction manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <Providers>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className=" relative grainy-light  min-h-[calc(100vh-3.5rem-1px)] grainy-dark">
              <NavBar />
              <div className="flex">
                <div className="sticky top-0 h-screen">
                  <Sidebar />
                </div>

                <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
                  <div className="w-full">{children}</div>
                </section>
              </div>
              {/* <Footer /> */}
            </main>
            <Toaster />
          </ThemeProvider>
        </body>
      </Providers>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import NavBar from "../../components/NavBar";
import { Toaster } from "../../components/ui/toaster";
import Footer from "../../components/Footer";
import Providers from "../../components/Providers";
import Sidebar from "../../components/SideBar";
import { ThemeProvider } from "../../components/theme-provider";
import * as React from "react";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <div className="flex">
        <div className="sticky top-[100px] h-screen">
          <Sidebar />
        </div>
        <section className="flex min-h-screen flex-1 flex-col px-6 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </Providers>
  );
};

export default Layout;

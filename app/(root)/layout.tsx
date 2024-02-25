import MobileNav from "@/components/shared/MobileNav";
import SideBar from "@/components/shared/SideBar";
import { Toaster } from "@/components/ui/toaster";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="root">
      {/* Sidebar */}
      <SideBar />
      {/* Mobile Nav */}
      <MobileNav />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
      <Toaster />
    </main>
  );
};

export default Layout;

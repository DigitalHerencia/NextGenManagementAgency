import { ReactNode } from 'react';
import Navbar from '../../components/nav/Navbar';
import React from 'react';

interface LayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="min-h-screen bg-logo-gradient text-primaryWhite font-sans">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default MainLayout;

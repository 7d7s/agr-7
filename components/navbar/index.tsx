"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NAV_ITEMS } from "./nav.config";
import { FaPhoneAlt, FaSearch, FaShoppingBag } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { MobileMenu } from "./MobileMenu";
import { NavItem } from "./NavItem";
import { MdArrowOutward } from "react-icons/md";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full relative z-50">
      {/* Top Yellow Bar */}
      <div className="bg-[#f3c200] text-center py-3 text-sm">
        Implementing regenerative agriculture practices!
          Contact Us <MdArrowOutward size={16} className="inline" />
      </div>

      {/* Main Navbar */}
      <div className="bg-[#f5f5f5] border-b">
        <div className="container mx-auto px-4 md:px-12 lg:px-20 flex items-center justify-between">

          {/* Logo */}
          <div className="py-4 pr-8 border-r">
            <Link href="/" className="text-3xl font-bold text-green-700">
              Agrowok
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <NavItem
                key={item.label}
                item={item}
                pathname={pathname}
              />
            ))}
          </nav>

          {/* Right Section */}
          <div className="hidden lg:flex items-center">

            <button className="bg-green-700 text-white p-4 rounded-md mr-4 hover:bg-green-800 transition">
              Get In Touch <MdArrowOutward size={20} className="inline" />
            </button>

            <div className="flex gap-3 mr-4">
              <IconBox><FaSearch /></IconBox>
              <IconBox><FaShoppingBag /></IconBox>
            </div>

            <div className="flex items-center gap-4 border-l pl-6 pr-8">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 flex items-center justify-center shadow-lg shadow-green-200/50">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center text-white shadow-md">
                    <FaPhoneAlt size={14} className="animate-pulse" />
                  </div>
                </div>
                {/* Enhanced Ping Animation */}
                <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-green-400 animate-ping opacity-75" />
                <div className="absolute inset-0 w-16 h-16 rounded-full border border-green-300 animate-ping animation-delay-200" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Sales team</p>
                <p className="font-semibold text-green-700">
                  +2 011 6114 5741
                </p>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-4 px-6 py-5">
            <IconBox><FaSearch /></IconBox>
            <IconBox><FaShoppingBag /></IconBox>
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <HiOutlineX size={26} /> : <HiOutlineMenuAlt3 size={26} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && <MobileMenu pathname={pathname} />}
    </header>
  );
}
function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-11 h-11 rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-100 transition">
      {children}
    </div>
  );
}

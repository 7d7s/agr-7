"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NAV_ITEMS } from "./nav.config";
import { FaPhoneAlt, FaSearch, FaShoppingBag } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { MobileMenu } from "./MobileMenu";
import { NavItem } from "./NavItem";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full relative z-50">
      {/* Top Yellow Bar */}
      <div className="bg-[#f3c200] text-center py-3 text-sm font-medium">
        Implementing regenerative agriculture practices!
        <span className="ml-2 font-semibold cursor-pointer">
          Contact Us →
        </span>
      </div>

      {/* Main Navbar */}
      <div className="bg-[#f5f5f5] border-b">
        <div className="container mx-auto flex items-center justify-between">

          {/* Logo */}
          <div className="px-8 py-6 border-r">
            <Link href="/" className="text-3xl font-bold text-green-700">
              Agritec
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10 text-[15px] font-medium">
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

            <button className="bg-green-700 text-white px-6 py-3 rounded-md mr-6 hover:bg-green-800 transition">
              Get In Touch →
            </button>

            <div className="flex gap-3 mr-6">
              <IconBox><FaSearch /></IconBox>
              <IconBox><FaShoppingBag /></IconBox>
            </div>

            <div className="flex items-center gap-4 border-l pl-6 pr-8">
              <div className="w-16 h-16 rounded-full border-4 border-green-200 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center text-white">
                  <FaPhoneAlt size={14} />
                </div>
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
    <div className="w-11 h-11 bg-white rounded-md flex items-center justify-center shadow-sm cursor-pointer hover:bg-gray-100 transition">
      {children}
    </div>
  );
}

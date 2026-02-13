import { useState } from "react";
import Link from "next/link";
import { NavItemType } from "./nav.config";

export function NavItem({
  item,
  pathname,
}: {
  item: NavItemType;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const isActive = item.href === pathname;

  const handleMouseEnter = () => {
    if (item.children) {
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <div 
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item.href ? (
        <Link
          href={item.href}
          className={`px-4 py-6 transition-all duration-200 flex items-center ${
            isActive 
              ? "text-green-700" 
              : "text-gray-700 hover:text-green-700"
          }`}
        >
          {item.label}
          {item.children && (
            <svg 
              className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </Link>
      ) : (
        <button
          className={`px-4 py-6 transition-all duration-200 flex items-center ${
            isActive 
              ? "text-green-700" 
              : "text-gray-700 hover:text-green-700"
          }`}
        >
          {item.label}
          {item.children && (
            <svg 
              className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </button>
      )}

      {item.children && (
        <div 
          className={`absolute left-0 top-full mt-0 w-64 bg-white shadow-2xl rounded-lg z-50 border border-gray-100 transition-all duration-200 transform origin-top ${
            open 
              ? 'opacity-100 translate-y-0 visible' 
              : 'opacity-0 -translate-y-2 invisible'
          }`}
        >
          <div className="py-2">
            {item.children.map((child, index) => (
              <Link
                key={child.label}
                href={child.href || "#"}
                className={`block px-6 py-2 text-xs text-gray-700 hover:bg-green-50 hover:text-green-700 hover:pl-8 transition-all duration-200 ${
                  index < item.children!.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className="flex items-center">
                  <span className="flex-1">{child.label}</span>
                  <svg 
                    className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

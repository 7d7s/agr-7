import { useState } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "./nav.config";
import { MdArrowOutward } from "react-icons/md";

export function MobileMenu({ pathname }: { pathname: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="lg:hidden bg-white shadow-lg border-t border-gray-100 flex flex-col min-h-[60vh]">
      <div className="px-6 py-6 space-y-1 flex-grow">
        {NAV_ITEMS.map((item, index) => {
          const isActive = item.href === pathname;
          const isOpen = openIndex === index;
          
          return (
            <div key={item.label} className="border-b border-gray-100 last:border-b-0">
              {item.href ? (
                <Link
                  href={item.href}
                  className={`flex justify-between items-center py-4 px-2 text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? "text-green-700" 
                      : "text-gray-700 hover:text-green-700 hover:bg-green-50"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
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
                  onClick={() => toggleItem(index)}
                  className={`flex justify-between items-center py-4 px-2 text-sm font-medium transition-all duration-200 w-full ${
                    isActive 
                      ? "text-green-700" 
                      : "text-gray-700 hover:text-green-700 hover:bg-green-50"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
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
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-4 pl-4 pr-2 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href || "#"}
                        className={`block py-2 px-3 text-xs text-gray-600 hover:text-green-700 hover:bg-green-50 hover:pl-6 transition-all duration-200 rounded ${
                          pathname === child.href ? 'text-green-700 bg-green-50' : ''
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
        })}
      </div>

      <div className="px-6 py-4 mt-auto">
        <button className="bg-green-700 text-white w-full py-3 px-4 rounded-md hover:bg-green-800 transition-all duration-200 flex items-center justify-center group">
          Get In Touch 
          <MdArrowOutward 
            size={18} 
            className="ml-2 transition-transform duration-200 group-hover:translate-x-1" 
          />
        </button>
      </div>
    </div>
  );
}

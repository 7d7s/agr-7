import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { NAV_ITEMS } from "./nav.config";
import { MdArrowOutward } from "react-icons/md";

export function MobileMenu({ pathname, onClose }: { pathname: string; onClose?: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Prevent scrolling when menu is open for an app-like experience
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Apply project's animation patterns with custom easing
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94], // Project's custom easing
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      } 
    },
  };

  const submenuVariants: Variants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: "auto", 
      opacity: 1, 
      transition: { 
        height: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
        opacity: { duration: 0.3, delay: 0.1 }
      } 
    },
    exit: { 
      height: 0, 
      opacity: 0, 
      transition: { 
        height: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
        opacity: { duration: 0.2 }
      } 
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className="lg:hidden bg-white/95 backdrop-blur-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col h-[calc(100vh)] fixed inset-x-0 top-0 z-50 relative"
    >
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
      
      <div className="px-6 py-6 flex-1 space-y-1.5 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 8rem)' }}>
        {NAV_ITEMS.map((item, index) => {
          const isActive = item.href === pathname || 
            (item.children && item.children.some(child => child.href === pathname));
          const isOpen = openIndex === index;
          
          return (
            <motion.div variants={itemVariants} key={item.label} className="w-full border-b border-gray-100/50 last:border-none">
              {item.href ? (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`group flex items-center py-4 px-4 text-[16px] tracking-wide transition-colors duration-200 ${
                    isActive 
                      ? "text-green-800 font-semibold" 
                      : "text-gray-700 font-medium hover:text-green-800"
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              ) : (
                <button
                  onClick={() => toggleItem(index)}
                  className={`group flex justify-between items-center py-4 px-4 text-[16px] tracking-wide transition-colors duration-200 w-full ${
                    isActive || isOpen
                      ? "text-green-800 font-semibold" 
                      : "text-gray-700 font-medium hover:text-green-800"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.children && (
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex items-center justify-center text-gray-400 group-hover:text-green-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  )}
                </button>
              )}

              <AnimatePresence initial={false}>
                {item.children && isOpen && (
                  <motion.div 
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={submenuVariants}
                    className="overflow-hidden bg-gray-50/50"
                  >
                    <div className="py-2 flex flex-col">
                      {item.children.map((child, childIdx) => {
                        const isChildActive = pathname === child.href;
                        return (
                          <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: childIdx * 0.05, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                            key={child.label}
                            whileHover={{ x: 5 }}
                          >
                            <Link
                              href={child.href || "#"}
                              onClick={onClose}
                              className={`flex items-center py-3 pl-8 pr-4 text-[15px] transition-colors duration-200 ${
                                isChildActive 
                                  ? 'text-green-700 font-medium bg-green-50/50 border-l-2 border-green-600' 
                                  : 'text-gray-600 hover:text-green-700 border-l-2 border-transparent'
                              }`}
                            >
                              <span>{child.label}</span>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Fixed bottom CTA wrapper */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="sticky bottom-0 p-6 bg-white/95 backdrop-blur-xl border-t border-gray-100/80 mt-auto"
      >
        <motion.button 
          onClick={onClose} 
          className="relative w-full py-4 px-6 rounded-2xl font-semibold text-white bg-green-700 hover:bg-green-800 shadow-[0_8px_20px_-6px_rgba(21,128,61,0.5)] hover:shadow-[0_12px_24px_-8px_rgba(21,128,61,0.6)] transition-all duration-300 flex items-center justify-center group overflow-hidden"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full -translate-x-full transition-transform duration-700 ease-in-out skew-x-12"></span>
          <span className="relative flex items-center tracking-wide">
            Get In Touch 
            <MdArrowOutward 
              size={20} 
              className="ml-2 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" 
            />
          </span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

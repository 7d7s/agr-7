import { useState } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "./nav.config";

export function MobileMenu({ pathname }: { pathname: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="lg:hidden bg-white px-6 py-6 space-y-5 shadow-md">
      {NAV_ITEMS.map((item, index) => (
        <div key={item.label} className="border-b pb-4">
          <div
            className="flex justify-between items-center text-lg font-medium"
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            {item.label}
            {item.children && <span>›</span>}
          </div>

          {item.children && openIndex === index && (
            <div className="mt-3 ml-4 space-y-2 text-gray-600">
              {item.children.map((child) => (
                <Link key={child.label} href={child.href || "#"}>
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}

      <button className="mt-6 bg-green-700 text-white w-full py-3 rounded-md">
        Get In Touch →
      </button>
    </div>
  );
}

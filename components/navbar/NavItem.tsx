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

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`px-4 py-6 transition ${
          isActive ? "text-green-700" : "text-gray-700 hover:text-green-700"
        }`}
      >
        {item.label}
      </button>

      {item.children && open && (
        <div className="absolute left-0 top-full mt-2 w-72 bg-white shadow-xl rounded-md z-50">
          {item.children.map((child) => (
            <Link
              key={child.label}
              href={child.href || "#"}
              className="block px-6 py-3 text-sm hover:bg-gray-50 hover:text-green-700"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

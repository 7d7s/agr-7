export interface NavItemType {
  label: string;
  href?: string;
  children?: NavItemType[];
}

export const NAV_ITEMS: NavItemType[] = [
  { label: "Home", href: "/" },
  {
    label: "About", href: "/about"
  },
  {
    label: "Services",
    children: [
      { label: "Seed Supply and Distribution", href: "/services/seed" },
      { label: "Soil Health and Management", href: "/services/soil" },
      { label: "Crop Irrigation Management", href: "/services/irrigation" },
      { label: "Detailed Field Reports", href: "/services/reports" },
      { label: "Crop Rotation Planning", href: "/services/rotation" },
      { label: "Soil Texture Mapping", href: "/services/mapping" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Shop", href: "/shop" },
];

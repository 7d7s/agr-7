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
    label: "Projects",
    children: [
      { label: "Seed Supply and Distribution", href: "/projects/seed-supply-and-distribution" },
      { label: "Soil Health and Management", href: "/projects/soil-health-and-management" },
      { label: "Crop Irrigation Management", href: "/projects/crop-irrigation-management" },
      { label: "Detailed Field Reports", href: "/projects/detailed-field-reports" },
      { label: "Crop Rotation Planning", href: "/projects/crop-rotation-planning" },
      { label: "Soil Texture Mapping", href: "/projects/soil-texture-mapping" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

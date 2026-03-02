import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

interface Project {
    name: string;
    href: string;
}
const projects: Project[] = [
    {
        name: "Seed Distribution",
        href: "/projects/seed-supply-and-distribution",
    },
    {
        name: "Soil Management",
        href: "/projects/soil-health-and-management",
    },
    {
        name: "Irrigation Management",
        href: "/projects/crop-irrigation-management",
    },
    {
        name: "Detailed Field Reports",
        href: "/projects/detailed-field-reports",
    },
    {
        name: "Crop Rotation Planning",
        href: "/projects/crop-rotation-planning",
    },
    {
        name: "Soil Texture Mapping",
        href: "/projects/soil-texture-mapping",
    },
];

const OurProjects = () => {
    return (
        <div>
            <div className="bg-[#e9eeea] p-8 rounded-2xl">
                <h3 className="text-lg font-semibold mb-6">Our Services</h3>
                <div className="space-y-3">
                    {projects.map((project, index) => (
                        <Link
                            href={project.href}
                            key={index}
                            className="w-full bg-[#0f4f2c] hover:bg-[#136b3c] transition-all duration-300 text-white px-5 py-4 rounded-md flex items-center justify-between text-sm font-medium"
                        >
                            {project.name}
                            <FiArrowRight />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurProjects
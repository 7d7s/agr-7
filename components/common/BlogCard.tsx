import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const BlogCard = ({
  image,
  tags,
  title,
  excerpt,
}: {
  image: string;
  tags: string[];
  title: string;
  excerpt: string;
}) => {
  return (
    <div className="group">
      {/* Image */}
      <div className="relative rounded-2xl overflow-hidden mb-6">
        <Image
          src={image}
          alt={title}
          width={500}
          height={350}
          className="object-cover w-full h-[260px] transition-transform duration-500 group-hover:scale-105"
        />

        {/* Tags */}
        <div className="absolute top-4 left-4 flex gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-yellow-400 text-black text-[13px] px-3 py-1 rounded-md font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl leading-7 font-semibold text-[#0b3d2e] mb-3">
        {title}
      </h3>

      {/* Meta */}
      <p className="text-[14px] text-gray-500 mb-4">
        September 4, 2025 —{" "}
        <span className="text-[#1f6b45]">Nikolas Gibbons</span>
      </p>

      {/* Excerpt */}
      <p className="text-[15px] text-gray-600 leading-7 mb-6">{excerpt}</p>

      {/* Button */}
      <button className="bg-[#0b3d2e] text-white px-6 py-3 rounded-md text-[14px] hover:bg-[#155437] transition">
        Read More <MdArrowOutward size={18} className="inline" />
      </button>
    </div>
  );
};

export default BlogCard;
"use client";

import BlogCard from "@/components/common/BlogCard";
import { Leaf } from "lucide-react";

const blogs = [
  {
    image: "/blog1.webp",
    tags: ["Agriculture", "Farm"],
    title:
      "How to optimize all your farm inputs for great efficiency during low commodity prices times!",
    excerpt:
      "When a producer evaluates what is necessary to grow a good crop, there are very few inputs that can be forgone. At that point, our objective is to make sure...",
  },
  {
    image: "/blog2.webp",
    tags: ["Fields", "Tax"],
    title:
      "Tax deductions available for residual fertility on purchased land beneficial ownership.",
    excerpt:
      "When farmland is purchased, tax code allows the purchaser to deduct the value of the excess fertility in the field like other improvements on the ground, such that...",
  },
  {
    image: "/blog3.webp",
    tags: ["Agriculture", "Food"],
    title:
      "Can urban agriculture feed our cities sustainably? Insights from experts around the world!!",
    excerpt:
      "In a typical food network model, you buy a 'share' before planting, this enables the farmer to purchase seeds, compost and technology without taking out loans...",
  },
];

export default function Blogs() {
  return (
    <section className="bg-[#f3f4f2] py-16 md:24">
      <div className="container mx-auto px-4 md:px-12 lg:px-20 ">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#1f6b45] md:text-lg mb-4">
            <Leaf size={22} className="inline mr-5"/>Latest ideas & insights from the world!
          </p>

          <h2 className="text-2xl md:text-5xl leading-9 font-semibold text-[#0b3d2e] mb-6">
            Farming and agriculture <br />
            news from farmers!
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
}

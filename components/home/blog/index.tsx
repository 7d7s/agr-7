"use client";

import BlogCard from "@/components/common/BlogCard";
import { Leaf } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/common/AnimatedSection";

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
    <AnimatedSection className="bg-[#f3f4f2] py-16 md:24" animation="fadeIn" delay={0.2}>
      <div className="container mx-auto px-4 md:px-12 lg:px-20 ">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="flex items-center justify-center text-[#1f6b45] md:text-lg mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline mr-5"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 15 }}
              transition={{ duration: 0.3 }}
            >
              <Leaf size={22} />
            </motion.span>
            Latest ideas & insights from world!
          </motion.p>

          <motion.h2 
            className="text-2xl md:text-5xl leading-9 font-semibold text-[#0b3d2e] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Farming and agriculture <br />
            news from farmers!
          </motion.h2>
        </motion.div>

        {/* Blog Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.7 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              <BlogCard {...blog} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

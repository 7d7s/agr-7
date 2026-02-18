"use client";

import Image from "next/image";
import { Mail, Clock, ChevronDown } from "lucide-react";
import { MdArrowOutward } from "react-icons/md";

export default function ContactSection() {
  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-4 md:px-12 lg:px-20">
        <div className="bg-[#e7efe9] rounded-[28px] px-6 md:px-10 overflow-hidden">

          <div className="grid lg:grid-cols-2 gap-16 py-10 md:py-16">

            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-[34px] leading-[44px] font-semibold text-[#0b3d2e] mb-12 max-w-md">
                If you have questions or you'd like to find out more about services, please get in touch!
              </h2>

              {/* Quick Contact */}
              <div className="mb-12">
                <h4 className="text-[16px] font-semibold text-[#0b3d2e] mb-6">
                  Quick Contact
                </h4>

                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 bg-[#1f6b45] rounded-full flex items-center justify-center text-white">
                    <Mail size={18} />
                  </div>
                  <div className="text-[15px] leading-[24px]">
                    <p className="text-[#1f6b45]">Agrowok@mail.com</p>
                    <p className="text-[#1f6b45]">+2 011 6114 5741</p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div>
                <h4 className="text-[16px] font-semibold text-[#0b3d2e] mb-6">
                  Working Hours
                </h4>

                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 bg-[#1f6b45] rounded-full flex items-center justify-center text-white">
                    <Clock size={18} />
                  </div>
                  <div className="text-[15px] leading-[24px] text-[#0b3d2e]">
                    <p>Mon – Fri: 8.00am – 18.00pm</p>
                    <p>Sat: 9.00am – 17.00pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div>
              <form className="space-y-4 md:space-y-7">

                <div className="grid md:grid-cols-2 gap-4 md:gap-7">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Email Address" />
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-7">
                  <Input placeholder="Company Name" />
                  <Input placeholder="Phone Number" />
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-7">
                  <CustomSelect placeholder="Property size (hectares)" />
                  <CustomSelect placeholder="AI Integration solutions" />
                </div>

                <textarea
                  rows={5}
                  placeholder="Kindly provide enough information about your farm business..."
                  className="w-full bg-white rounded-xl px-6 py-4 text-[15px] outline-none border border-transparent focus:border-[#1f6b45] transition resize-none"
                />

                <button className="w-full bg-[#1f6b45] text-white py-4 rounded-xl text-[15px] font-medium hover:bg-[#155437] transition">
                  Submit Request <MdArrowOutward size={18} className="inline" />
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translate(-50%, 0px); }
          50% { transform: translate(-50%, 12px); }
          100% { transform: translate(-50%, 0px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

/* Input */
function Input({ placeholder }: { placeholder: string }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full bg-white rounded-xl px-6 py-4 text-[15px] outline-none border border-transparent focus:border-[#1f6b45] transition"
    />
  );
}

/* Custom Select */
function CustomSelect({ placeholder }: { placeholder: string }) {
  return (
    <div className="relative">
      <select className="appearance-none w-full bg-white rounded-xl px-6 py-4 text-[15px] outline-none border border-transparent focus:border-[#1f6b45] transition text-gray-600">
        <option>{placeholder}</option>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
      <ChevronDown
        size={18}
        className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
      />
    </div>
  );
}
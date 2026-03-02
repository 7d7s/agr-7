"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/common/AnimatedSection";
import Breadcrumb from "@/components/common/Breadcrumb";
import Contact from "@/components/home/contact";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    propertySize: "",
    solution: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        propertySize: "",
        solution: "",
        message: ""
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <main className="bg-white text-gray-800">

      {/* ================= HERO BREADCRUMB ================= */}
      <Breadcrumb
        image="/pig_farm_images.png"
        title="Contact Us"
        description="Get in touch with our team to discuss how we can help transform your livestock farming operations with sustainable solutions."
      />

      {/* ================= CONTACT INFO & FORM ================= */}
      <AnimatedSection className="relative pt-10 md:pt-16 bg-white overflow-hidden" animation="fadeIn" delay={0.1}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20">

          {/* Section Header */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center justify-center gap-3 mb-6 text-[#063c23]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                <Mail size={20} />
              </motion.div>
              <span className="uppercase tracking-wider text-sm font-semibold">
                Get In Touch
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-semibold text-[#063c23] leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Let's Build a Sustainable <br />
              Future Together
            </motion.h2>

            <motion.p
              className="text-gray-600 text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Our team of experts is ready to help you implement cutting-edge livestock farming solutions
              tailored to your specific needs and requirements.
            </motion.p>
          </motion.div>
        </div>
      </AnimatedSection>
      <Contact />

      {/* ================= MAP SECTION ================= */}
      <AnimatedSection className="relative " animation="fadeIn" delay={0.3}>
        <div className="">
          <motion.div
            className="relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Map Container */}
            <div className="relative h-96 md:h-[500px] bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.2803037479985!2d77.13987918759602!3d28.651324620467307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0310af515fd9%3A0xce0d7b6154db1cb3!2sWS%20Clinic!5e0!3m2!1sen!2sin!4v1772451969916!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </main>
  );
}
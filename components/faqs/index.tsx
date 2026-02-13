import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const faqItems = [
  {
    id: 'accordion-a1',
    question: 'How often should I visit the dentist?',
    answer: "It's recommended to see your dentist every 6 months for a routine check-up and cleaning, unless advised otherwise."
  },
  {
    id: 'accordion-a2',
    question: 'What should I do in a dental emergency?',
    answer: 'Call our office immediately. We offer same-day emergency care for issues like severe pain, broken teeth, or swelling.'
  },
  {
    id: 'accordion-a3',
    question: 'Do you offer services for kids?',
    answer: 'Absolutely! We provide gentle, friendly pediatric dental care for children of all ages.'
  },
  {
    id: 'accordion-a4',
    question: 'What are my options for replacing missing teeth?',
    answer: 'We offer dental implants, bridges, and dentures depending on your needs and preferences.'
  },
  {
    id: 'accordion-a5',
    question: 'Is teeth whitening safe?',
    answer: 'Yes, when performed by a dental professional, teeth whitening is safe and effective with long-lasting results.'
  }
];

const FAQs = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const contentVariants: Variants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-12 lg:px-20">
        <motion.div
          className="flex flex-wrap -mx-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div
            className="w-full lg:w-5/12 px-4 mb-8 lg:mb-0"
            variants={itemVariants}
          >
            <span className="font-semibold text-primary-600 uppercase tracking-wider text-xs mb-3 inline-block">
              Everything You Need to Know
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed">
              Find answers to common questions about our dental services, appointments, and care.
            </p>
          </motion.div>

          <motion.div
            className="w-full lg:w-7/12 px-4"
            variants={itemVariants}
          >
            <div className="space-y-3">
              {faqItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="overflow-hidden bg-white border border-neutral-100 rounded-md hover:border-primary-200 transition-colors duration-300"
                  initial={false}
                  variants={itemVariants}
                >
                  <motion.div
                    className="px-6 py-4 cursor-pointer flex justify-between items-center group"
                    onClick={() => toggleAccordion(item.id)}
                    initial={false}
                  >
                    <h3 className={`text-base font-semibold ${activeId === item.id ? 'text-primary-700' : 'text-neutral-800 group-hover:text-primary-600'} transition-colors`}>
                      {item.question}
                    </h3>
                    <motion.span
                      className={`flex-shrink-0 ml-4 ${activeId === item.id ? 'text-primary-600' : 'text-neutral-400 group-hover:text-primary-600'} transition-colors`}
                      animate={{ rotate: activeId === item.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </motion.span>
                  </motion.div>
                  <AnimatePresence initial={false}>
                    {activeId === item.id && (
                      <motion.div
                        className="overflow-hidden"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={contentVariants}
                      >
                        <div className="px-6 pb-5 text-sm text-neutral-600 leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQs;
import React from "react";
import { Link } from "react-router-dom";
import { TbAlphabetArabic } from "react-icons/tb";
import { RiEnglishInput } from "react-icons/ri";
import { GiFrenchHorn } from "react-icons/gi";
import { motion } from "framer-motion";

const Category = () => {
  const categoryNames = [
    { id: 1, language: "English", tutors: "750 tutors", icon: <RiEnglishInput /> },
    { id: 2, language: "Spanish", tutors: "1,500 tutors", icon: "🇪🇸" },
    { id: 3, language: "French", tutors: "1,200 tutors", icon: <GiFrenchHorn /> },
    { id: 4, language: "German", tutors: "10,000 tutors", icon: "🇩🇪" },
    { id: 5, language: "Italian", tutors: "900 tutors", icon: "🇮🇹" },
    { id: 6, language: "Chinese", tutors: "2,500 tutors", icon: "通" },
    { id: 7, language: "Arabic", tutors: "1,100 tutors", icon: <TbAlphabetArabic /> },
    { id: 8, language: "Japanese", tutors: "800 tutors", icon: "な" },
    { id: 9, language: "Portuguese", tutors: "700 tutors", icon: "🇵🇹" },
  ];

  // Framer Motion Variants for Animation
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-center mb-6 text-black dark:text-slate-50"
        >
          Language Categories
        </motion.h2>

        {/* Grid of Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categoryNames.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex group items-center justify-between p-4 border rounded-lg shadow-md bg-white dark:bg-gray-900 text-black dark:text-slate-50 cursor-pointer hover:bg-[#AFD275] hover:text-white transition-colors duration-300"
            >
              <Link to={`/find-tutors/${category.language}`} className="w-full text-[#4c6a34] group-hover:text-[#2F4021]">
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <span
                    className="text-2xl text-[#2F4021] dark:text-slate-300"
                    style={{ fontSize: "1.5rem" }}
                  >
                    {category.icon}
                  </span>
                  {/* Language Details */}
                  <div>
                    <h3 className="text-lg font-bold">{category.language} Tutors</h3>
                    <p className="text-sm text-gray-600 dark:text-slate-400">
                      {category.tutors}
                    </p>
                  </div>
                </div>
              </Link>
              {/* Arrow Icon */}
              <span className="text-xl text-gray-500 dark:text-slate-300">&rarr;</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
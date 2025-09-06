import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { CERTIFICATES } from "../utils/data.js";
import CertificateCard from "./CertificateCard";
import { containerVariants, itemVariants } from "../utils/helper.js";

const CertificatesSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className={`py-24 px-6 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      } relative overflow-hidden`}
    >
      {/* Background gradient or blur */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-20 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-yellow-500" : "bg-yellow-400"
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className={`text-sm uppercase tracking-widest ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            } mb-4`}
          >
            Achievements
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            Certificates & <span className="text-blue-500 font-medium">Awards</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-lg ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto font-light`}
          >
            Certifications that highlight my dedication to learning and growth in
            the tech field.
          </motion.p>
        </motion.div>

        {/* Certificate Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {CERTIFICATES.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              index={index}
              isDarkMode={isDarkMode}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;

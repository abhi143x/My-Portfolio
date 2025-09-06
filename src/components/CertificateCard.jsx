import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const CertificateCard = ({ certificate, index, isDarkMode }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group relative"
    >
      <div
        className={`rounded-2xl overflow-hidden border transition-all duration-500 ${
          isDarkMode
            ? "bg-gray-900/50 border-gray-800 hover:border-gray-700 hover:shadow-2xl hover:shadow-green-500/10"
            : "bg-white/80 border-gray-200 hover:border-gray-300 hover:shadow-2xl hover:shadow-green-500/10"
        } backdrop-blur-sm`}
      >
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-48 object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          {/* Hover Overlay (desktop) */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center"
            >
              <motion.a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium transition-colors cursor-pointer"
                initial={{ y: 20, opacity: 0.5 }}
                whileHover={{ y: 10, opacity: 1, scale: 1.05 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <ExternalLink size={16} />
                <span>View Credential</span>
              </motion.a>
            </motion.div>
          )}
        </div>

        {/* Buttons for mobile */}
        {isMobile && (
          <div className="flex justify-center p-4">
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium transition-colors"
            >
              <ExternalLink size={16} />
              <span>View Credential</span>
            </a>
          </div>
        )}

        {/* Content */}
        <div className="p-6 pt-2">
          <h3 className="text-xl font-medium mb-2 group-hover:text-blue-500 transition-colors">
            {certificate.title}
          </h3>
          <p
            className={`text-sm mb-3 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Issued by {certificate.issuer}
          </p>
          <p
            className={`text-sm leading-relaxed ${
              isDarkMode ? "text-gray-500" : "text-gray-500"
            }`}
          >
            {certificate.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateCard;

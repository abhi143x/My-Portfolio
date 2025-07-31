import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";


import { containerVariants, itemVariants } from "../../utils/helper.cjs";

const HeroSection = () => {
  const { isDarkMode } = useTheme();

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Hero Section */}
      <motion.section
        id="home"
        style={{ y: heroY }}
        className="min-h-screen flex items-center justify-center relative px-6 pt-10"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 ${
              isDarkMode ? "bg-blue-500" : "bg-blue-400"
            }`}
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl opacity-10 ${
              isDarkMode ? "bg-purple-500" : "bg-purple-400"
            }`}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full z-10 mt-20">
          {/* Mobile Layout - Centered */}

          <div className="block lg:hidden">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center"
            >
              {/* Content - Mobile */}
              <motion.div
                variants={textVariants}
                className={`text-sm uppercase tracking-widest ${
                  isDarkMode ? "text-gray-500" : "text-gray-600"
                } mb-4`}
              >
                Full Stack Web Developer
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-3xl md:text-5xl font-light mb-6 leading-tight"
              >
                <span
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  Building digital
                </span>
                <span className="text-blue-500 font-medium ml-2">
                  experiences
                </span>
                <br />
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                  that matter
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`text-base md:text-lg ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } mb-8 max-w-xl mx-auto font-light leading-relaxed`}
              >
                I craft beautiful, functional web applications with modern
                technologies and thoughtful user experiences.
              </motion.p>

              {/* CTA Buttons - Mobile */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("work")}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                >
                  View Work
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className={`border ${
                    isDarkMode
                      ? "border-gray-700 hover:border-gray-600 text-gray-300"
                      : "border-gray-300 hover:border-gray-400 text-gray-700"
                  } px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}
                >
                  Get in Touch
                </motion.button>
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 inline-block text-center"
                >
                  VIEW RESUME
                </motion.a>
              </motion.div>

              {/* Social Links - Mobile */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center space-x-6 mb-8"
              >
                {[
                  { icon: FiGithub, href: "https://github.com/abhi143x" },
                  {
                    icon: FiLinkedin,
                    href: "https://www.linkedin.com/in/abhiraj-verma-249765334/",
                  },
                  { icon: Mail, href: "mailto:iabhirajverma35@gmail.com" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className={`p-3 rounded-full transition-colors ${
                      isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>

              {/* developer.js - Mobile */}
              <motion.div
  className="w-full max-w-[95vw] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex justify-center items-center px-4 md:px-6 py-6 md:py-10"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    duration: 0.8,
    delay: 1.2,
    type: "spring",
    stiffness: 100,
  }}
>
  <div className="relative">
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-blue-900 to-blue-500/5 rounded-2xl"
      animate={{ rotate: [0, 6, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="relative bg-white border border-gray-200 p-4 sm:p-6 rounded-2xl shadow-sm"
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-2">
          <motion.div
            className="w-3 h-3 rounded-full bg-red-500"
            whileHover={{ scale: 1.2 }}
          />
          <motion.div
            className="w-3 h-3 rounded-full bg-yellow-500"
            whileHover={{ scale: 1.2 }}
          />
          <motion.div
            className="w-3 h-3 rounded-full bg-green-500"
            whileHover={{ scale: 1.2 }}
          />
        </div>
        <div className="text-xs md:text-sm text-gray-500">developer.js</div>
      </div>

      <div className="space-y-2 font-mono text-sm md:text-base overflow-x-auto whitespace-nowrap sm:whitespace-normal">
        <div className="text-gray-500 flex justify-start">
          {"// Software Engineer"}
        </div>
        <div className="flex justify-start">
          <span className="text-pink-600">const</span>{" "}
          <span className="text-blue-600">developer</span>{" "}
          <span className="text-gray-500">=</span>{" "}
          <span className="text-orange-500">{"{"}</span>
        </div>

        <motion.div
          className="pl-6 flex justify-start"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.3 }}
        >
          <span className="text-purple-600">name</span>
          <span className="text-gray-500">:</span>{" "}
          <span className="text-green-600">'Abhiraj Verma'</span>
          <span className="text-gray-500">,</span>
        </motion.div>

        <motion.div
          className="pl-6 flex justify-start flex-wrap gap-x-1"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 0.3 }}
        >
          <span className="text-purple-600">skills</span>
          <span className="text-gray-500">:</span>{" "}
          <span className="text-orange-500">[</span>
          <span className="text-green-600">'JavaScript'</span>
          <span className="text-gray-500">,</span>{" "}
          <span className="text-green-600">'React.js'</span>
          <span className="text-gray-500">,</span>{" "}
          <span className="text-green-600">'Node.js'</span>
          <span className="text-gray-500">,</span>
          <span className="text-green-600">'MongoDB'</span>
          <span className="text-gray-500">,</span>{" "}
          <span className="text-green-600">'MySQL'</span>
          <span className="text-orange-500">]</span>
          <span className="text-gray-500">,</span>
        </motion.div>

        <motion.div
          className="pl-6 flex justify-start"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, duration: 0.3 }}
        >
          <span className="text-purple-600">focuses</span>
          <span className="text-gray-500">:</span>{" "}
          <span className="text-orange-500">[</span>
          <span className="text-green-600">'Full-Stack'</span>
          <span className="text-orange-500">]</span>
          <span className="text-gray-500">,</span>
        </motion.div>

        <motion.div
          className="pl-6 flex justify-start"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.0, duration: 0.3 }}
        >
          <span className="text-purple-600">learning</span>
          <span className="text-gray-500">:</span>{" "}
          <span className="text-green-600">'Always'</span>
        </motion.div>

        <div className="flex justify-start">
          <span className="text-orange-500">{"}"}</span>
          <span className="text-gray-500">;</span>
        </div>
      </div>
    </motion.div>
  </div>
</motion.div>

            </motion.div>
          </div>

          {/* Desktop Layout - Split  */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left Column - Content  */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-left"
            >
              <motion.div
                variants={textVariants}
                className={`text-sm uppercase tracking-widest ${
                  isDarkMode ? "text-gray-500" : "text-gray-600"
                } mb-6`}
              >
                Full Stack Web Developer
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl xl:text-7xl font-light mb-8 leading-tight"
              >
                <span
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  Building digital
                </span>
                <br />
                <span className="text-blue-500 font-medium">experiences</span>
                <br />
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                  that matter
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`text-xl ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } mb-12 font-light leading-relaxed max-w-lg`}
              >
                I craft beautiful, functional web applications with modern
                technologies and thoughtful user experiences.
              </motion.p>

              {/* CTA Buttons - Desktop  */}
              <motion.div variants={itemVariants} className="flex gap-6 mb-8">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("work")}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 inline-block text-center cursor-pointer"
                >
                  View Work
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className={`border ${
                    isDarkMode
                      ? "border-gray-700 hover:border-gray-600 text-gray-300"
                      : "border-gray-300 hover:border-gray-400 text-gray-700"
                  } px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 inline-block text-center cursor-pointer`}
                >
                  Get in Touch
                </motion.button>
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 inline-block text-center"
                >
                  VIEW RESUME
                </motion.a>
              </motion.div>

              {/* Social Links - Desktop  */}
              <motion.div
                variants={itemVariants}
                className="flex space-x-6 mb-12"
              >
                {[
                  { icon: FiGithub, href: "https://github.com/abhi143x" },
                  {
                    icon: FiLinkedin,
                    href: "https://www.linkedin.com/in/abhiraj-verma-249765334/",
                  },
                  { icon: Mail, href: "mailto:iabhirajverma35@gmail.com" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className={`p-3 rounded-full transition-colors ${
                      isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column  */}
            <motion.div
              className="w-full max-w-md px-4 sm:px-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                type: "spring",
                stiffness: 100,
              }}
            >
              <div className="relative">
                {/* Animated Gradient Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-400/25 via-blue-900 to-blue-400/10 rounded-2xl"
                  animate={{ rotate: [0, 6, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />

                {/* Tech Stack - Desktop Only */}
                <motion.div
                  variants={itemVariants}
                  className="hidden sm:flex items-center space-x-4 text-[10px] sm:text-xs uppercase tracking-widest absolute -top-16 left-1/2 -translate-x-1/2"
                >
                  <span
                    className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                  >
                    React
                  </span>
                  <span
                    className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                  >
                    .
                  </span>
                  <span
                    className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                  >
                    Node.js
                  </span>
                  <span
                    className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                  >
                    .
                  </span>
                  <span
                    className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                  >
                    Express.js
                  </span>
                  <span
                    className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                  >
                    .
                  </span>
                  <span
                    className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                  >
                    MongoDB
                  </span>
                  <span
                    className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                  >
                    .
                  </span>
                  <span
                    className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                  >
                    MySQL
                  </span>
                </motion.div>

                {/* Developer Card */}
                <motion.div
                  className="relative bg-white border border-gray-200 p-4 sm:p-6 rounded-2xl shadow-sm z-10"
                  role="region"
                  aria-label="Developer code card"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-2">
                      <motion.div
                        className="w-3 h-3 rounded-full bg-red-500"
                        whileHover={{ scale: 1.2 }}
                      />
                      <motion.div
                        className="w-3 h-3 rounded-full bg-yellow-500"
                        whileHover={{ scale: 1.2 }}
                      />
                      <motion.div
                        className="w-3 h-3 rounded-full bg-green-500"
                        whileHover={{ scale: 1.2 }}
                      />
                    </div>
                    <div className="text-xs text-gray-500">developer.js</div>
                  </div>

                  {/* Code Lines */}
                  <div className="space-y-2 font-mono text-[10px] sm:text-sm">
                    <div className="text-gray-500">// Software Engineer</div>
                    <div>
                      <span className="text-pink-600">const</span>{" "}
                      <span className="text-blue-600">developer</span>{" "}
                      <span className="text-gray-500">=</span>{" "}
                      <span className="text-orange-500">{"{"}</span>
                    </div>

                    <motion.div
                      className="pl-6"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4, duration: 0.3 }}
                    >
                      <span className="text-purple-600">name</span>
                      <span className="text-gray-500">:</span>{" "}
                      <span className="text-green-600">'Abhiraj Verma'</span>
                      <span className="text-gray-500">,</span>
                    </motion.div>

                    <motion.div
                      className="pl-6 flex justify-start flex-wrap"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.6, duration: 0.3 }}
                    >
                      <span className="text-purple-600">skills</span>
                      <span className="text-gray-500">:</span>{" "}
                      <span className="text-orange-500">[</span>
                      <span className="text-green-600">'JavaScript'</span>
                      <span className="text-gray-500">,</span>{" "}
                      <span className="text-green-600">'React.js'</span>
                      <span className="text-gray-500">,</span>{" "}
                      <span className="text-green-600">'Node.js'</span>
                      <span className="text-gray-500">,</span> <br />{" "}
                      <span className="text-green-600 ml-16">'MongoDB'</span>
                      <span className="text-gray-500">,</span>{" "}
                      <span className="text-green-600">'MySQL'</span>
                      <span className="text-orange-500">]</span>
                      <span className="text-gray-500">,</span>
                    </motion.div>

                    <motion.div
                      className="pl-6"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.8, duration: 0.3 }}
                    >
                      <span className="text-purple-600">focuses</span>
                      <span className="text-gray-500">:</span>{" "}
                      <span className="text-orange-500">[</span>
                      <span className="text-green-600">'Full-Stack'</span>
                      <span className="text-orange-500">]</span>
                      <span className="text-gray-500">,</span>
                    </motion.div>

                    <motion.div
                      className="pl-6"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.0, duration: 0.3 }}
                    >
                      <span className="text-purple-600">learning</span>
                      <span className="text-gray-500">:</span>{" "}
                      <span className="text-green-600">'Always'</span>
                    </motion.div>

                    <div>
                      <span className="text-orange-500">{"}"}</span>
                      <span className="text-gray-500">;</span>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Borders */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-4 rounded-3xl border border-blue-500/20"
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-8 rounded-3xl border border-purple-500/10"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator  */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown
            size={20}
            className={isDarkMode ? "text-gray-600" : "text-gray-400"}
          />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default HeroSection;

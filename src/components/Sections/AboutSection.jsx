import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { JOURNEY_STEPS, PASSIONS } from "../../utils/data.cjs";

import SIGNATURE from "../../assets/images/sign.svg";
import PROFILE_PIC from "../../assets/images/img.jpg";
import { containerVariants, itemVariants } from "../../utils/helper.cjs";

const AboutSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const timelineRefDesktop = useRef(null);
  const timelineRefMobile = useRef(null);

  const timelineInViewDesktop = useInView(timelineRefDesktop, {once: true, margin: "-50px"});
  const timelineInViewMobile = useInView(timelineRefMobile, {once: true, margin: "-50px"});

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const stepVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-24 px-6 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      } relative overflow-hidden`}
    >
      {/* Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-40 right-1/3 w-80 h-80 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
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
            Get to Know Me
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            About <span className="text-blue-500 font-medium">Me</span>
          </motion.h2>
        </motion.div>

        {/* Mobile Profile Image */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="lg:hidden mb-12 flex justify-center"
        >
          {/* Relative container for profile + border */}
          <div className="relative w-32 h-32">
            {/* Decorative rotating border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-2xl border border-blue-500/20"
            />

            {/* Profile image with border */}
            <motion.div
              variants={itemVariants}
              className={`w-full h-full rounded-2xl overflow-hidden border-4 shadow-xl ${
                isDarkMode ? "border-gray-800" : "border-gray-300"
              }`}
            >
              <img
                src={PROFILE_PIC}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Left: Text Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Personal Story */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
              className="space-y-8"
            >
              <motion.div
                variants={itemVariants}
                className={`p-8 rounded-2xl border ${
                  isDarkMode
                    ? "bg-gray-800/50 border-gray-700 backdrop-blur-sm"
                    : "bg-gray-50/80 border-gray-200 backdrop-blur-sm"
                }`}
              >
                <h3 className="text-2xl font-medium mb-6">My Mission</h3>
                <p
                  className={`text-lg leading-relaxed mb-6 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  I believe technology should be a bridge that connects people
                  and solves real-world problems. My passion lies in crafting
                  digital experiences that are not just functional, but
                  delightful and accessible to everyone.
                </p>
                <p
                  className={`text-base leading-relaxed ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  When I'm not coding, you'll find me exploring new frameworks.
                  I love the constant evolution of web technologies and the
                  endless possibilities they bring to create meaningful digital
                  experiences.
                </p>
              </motion.div>

              {/* What I Love Building */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="text-xl font-medium mb-6">
                  What I Love Building
                </h3>
                <div className="grid gap-4">
                  {PASSIONS.map((passion) => (
                    <motion.div
                      key={passion.title}
                      variants={itemVariants}
                      whileHover={{ x: 4 }}
                      className={`flex items-center space-x-4 p-4 rounded-xl ${
                        isDarkMode
                          ? "bg-gray-800/30 hover:bg-gray-800/50"
                          : "bg-gray-50/50 hover:bg-gray-100/50"
                      } transition-all duration-300`}
                    >
                      <div
                        className={`p-3 rounded-lg ${
                          isDarkMode ? "bg-gray-700" : "bg-white"
                        }`}
                      >
                        <passion.icon size={20} className="text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{passion.title}</h4>
                        <p
                          className={`text-sm ${
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {passion.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Desktop Timeline (2-column) */}
              <motion.div
                ref={timelineRefDesktop}
                initial="hidden"
                animate={timelineInViewDesktop ? "visible" : "hidden"}
                variants={timelineVariants}
                className="hidden lg:block max-w-5xl mx-auto text-center px-4 mt-20"
              >
                <h3 className="text-2xl font-medium mb-8 flex items-end justify-end">
                  My Developer Journey
                </h3>

                <div className="space-x-6 w-6xl grid grid-cols-2">
                  {JOURNEY_STEPS.map((step) => (
                    <motion.div
                      key={step.year}
                      variants={stepVariants}
                      whileHover={{ x: 4 }}
                      className="relative flex items-start space-x-4 group text-left"
                    >
                      <div
                        className={`relative z-10 flex-shrink-0 w-14 h-14 rounded-full ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <step.icon size={24} className="text-white" />
                      </div>
                      <div
                        className={`flex-grow p-5 rounded-xl border transition-all duration-300 ${
                          isDarkMode
                            ? "bg-gray-800/50 border-gray-700 group-hover:border-gray-600 group-hover:bg-gray-800/70"
                            : "bg-white/80 border-gray-200 group-hover:border-gray-300 group-hover:bg-white"
                        } backdrop-blur-sm`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold">
                            {step.title}
                          </h4>
                          <span
                            className={`text-sm px-3 py-1 rounded-full ${
                              isDarkMode
                                ? "bg-gray-700 text-gray-300"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {step.year}
                          </span>
                        </div>
                        <div
                          className={`text-sm font-medium mb-2 ${
                            isDarkMode ? "text-blue-400" : "text-blue-600"
                          }`}
                        >
                          {step.company}
                        </div>
                        <p
                          className={`text-sm leading-relaxed ${
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Mobile Timeline (1-column) */}
              <motion.div
                ref={timelineRefMobile}
                initial="hidden"
                animate={timelineInViewMobile ? "visible" : "hidden"}
                variants={timelineVariants}
                className="block lg:hidden max-w-xl mx-auto text-center px-4 mt-20"
              >
                <h3 className="text-2xl font-medium mb-8 text-center">
                  My Developer Journey
                </h3>

                <div className="flex flex-col gap-8">
                  {JOURNEY_STEPS.map((step) => (
                    <motion.div
                      key={step.year}
                      variants={stepVariants}
                      whileHover={{ x: 2 }}
                      className="flex flex-col items-center group text-center"
                    >
                      <div
                        className={`w-14 h-14 rounded-full ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <step.icon size={24} className="text-white" />
                      </div>
                      <div
                        className={`w-full p-5 rounded-xl border transition-all duration-300 ${
                          isDarkMode
                            ? "bg-gray-800/50 border-gray-700 group-hover:border-gray-600 group-hover:bg-gray-800/70"
                            : "bg-white/80 border-gray-200 group-hover:border-gray-300 group-hover:bg-white"
                        } backdrop-blur-sm text-left`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold">
                            {step.title}
                          </h4>
                          <span
                            className={`text-sm px-3 py-1 rounded-full ${
                              isDarkMode
                                ? "bg-gray-700 text-gray-300"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {step.year}
                          </span>
                        </div>
                        <div
                          className={`text-sm font-medium mb-2 ${
                            isDarkMode ? "text-blue-400" : "text-blue-600"
                          }`}
                        >
                          {step.company}
                        </div>
                        <p
                          className={`text-sm leading-relaxed ${
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Desktop Image + Signature */}

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="hidden lg:flex flex-col items-center gap-8"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className={`w-64 h-80 rounded-3xl overflow-hidden border-4 shadow-2xl ${
                isDarkMode ? "border-gray-800" : "border-gray-300"
              }`}
            >
              <img
                src={PROFILE_PIC}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute w-76 h-80 -z-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-0 rounded-3xl border-2 border-blue-500/20"
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-2 rounded-3xl border-2 border-purple-500/10"
                />
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="text-center">
              <div
                className={`text-sm ${
                  isDarkMode ? "text-gray-500" : "text-gray-600"
                } mb-2`}
              >
                Crafted with passion by
              </div>
              <img
                src={SIGNATURE}
                alt="Abhiraj verma"
                className="w-40 mx-auto"
              />
              <div className="text-lg font-medium text-blue-500 mt-2 uppercase">
                Abhiraj Verma
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile - sign */}
        <motion.div variants={itemVariants} className="block lg:hidden text-center mt-20">
              <div
                className={`text-sm ${
                  isDarkMode ? "text-gray-500" : "text-gray-600"
                } mb-2`}
              >
                Crafted with passion by
              </div>
              <img
                src={SIGNATURE}
                alt="Abhiraj verma"
                className="w-40 mx-auto"
              />
              <div className="text-lg font-medium text-blue-500 mt-2 uppercase">
                Abhiraj Verma
              </div>
            </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center space-y-6"
          >
            <p
              className={`text-lg ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Ready to bring your ideas to life?
            </p>
            <motion.button
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection("contact")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
            >
              Let's Work Together
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

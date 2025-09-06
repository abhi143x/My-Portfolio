import {
  Code2,
  Briefcase,
  Heart,
  Coffee,
  BookOpen,
  Database,
  Server,
  Mail,
  MapPin,
  Phone,
  ToolCase,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/ems.jpg";
import PROJECT_IMG_2 from "../assets/images/port.png";
import PROJECT_IMG_3 from "../assets/images/food.png";
import PROJECT_IMG_4 from "../assets/images/weather.jpg";
import PROJECT_IMG_5 from "../assets/images/signUp.jpg";
import PROJECT_IMG_6 from "../assets/images/todo.jpg";

import CERTIFICATE_IMG_1 from "../assets/images/Rays-Mern-Cert.jpeg";
import CERTIFICATE_IMG_2 from "../assets/images/Hack2skill-Certificate.png";
import CERTIFICATE_IMG_3 from "../assets/images/GEN-AI.jpg";
import CERTIFICATE_IMG_4 from "../assets/images/Job-deloitee.jpg";
import CERTIFICATE_IMG_5 from "../assets/images/SQL-Bootcamp.jpg";

export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Crafting beautiful, responsive user interfaces",
    skills: [
      { name: "HTML", level: 95, color: "bg-orange-500" },
      { name: "CSS", level: 85, color: "bg-blue-600" },
      { name: "JavaScript", level: 88, color: "bg-green-600" },
      { name: "React", level: 85, color: "bg-cyan-500" },
      { name: "Tailwind CSS", level: 82, color: "bg-pink-500" },
    ],
  },

  {
    title: "Backend",
    icon: Server,
    description: "Building robust server-side solution",
    skills: [
      { name: "Node.js", level: 82, color: "bg-green-500" },
      { name: "Express.js", level: 80, color: "bg-cyan-500" },
      { name: "REST APIs", level: 90, color: "bg-orange-500" },
    ],
  },

  {
    title: "Database",
    icon: Database,
    description: "Managing and optimizing data storage",
    skills: [
      { name: "MongoDB", level: 75, color: "bg-green-600" },
      { name: "MySQL", level: 80, color: "bg-blue-700" },
    ],
  },

  {
    title: "Developer Tools",
    icon: ToolCase,
    description: "Tools for coding, testing, and version control",
    skills: [
      { name: "VS Code", level: 90, color: "bg-orange-700" },
      { name: "Postman", level: 70, color: "bg-purple-600" },
      { name: "Git", level: 75, color: "bg-green-600" },
      { name: "Github", level: 80, color: "bg-blue-700" },
    ],
  },
];

export const TECH_STACK = [
  "JavaScript",
  "HTML5",
  "CSS3",
  "React",
  "Node.Js",
  "Express.Js",
  "MongoDB",
  "MySQL",
  "Tailwind CSS",
];

export const STATS = [
  { number: "3+", label: "Projects Completed" },
  { number: "Fresher", label: "Years Experience" },
  { number: "4+", label: "Technologies" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Expense Management System",
    description:
      "This app includes user authentication with JWT, income and expense tracking, interactive charts, and the ability to export data in Excel format.",
    image: PROJECT_IMG_1,
    tags: [
      "React",
      "JavaScript",
      "Node.Js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    liveUrl: "https://expense-management-system-ui-juxs.onrender.com",
    githubUrl: "https://github.com/abhi143x/Expense-management-system",
    featured: false,
    category: "Web Application",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "Developed a Portfolio Website using React.js . Showcasing my projects, skills, and experiences.",
    image: PROJECT_IMG_2,
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://abhiraj-verma-portfolio.vercel.app/",
    githubUrl: "https://github.com/abhi143x/My-Portfolio",
    featured: false,
    category: "Web Application",
  },
  {
    id: 3,
    title: "Food Delivery",
    description:
      "Developed a dynamic Food Delivery App using React.js for food ordering and CSS for responsive UI design.",
    image: PROJECT_IMG_3,
    tags: ["React", "CSS", "React Router","Context API"],
    liveUrl: "https://food-delivery-red-three.vercel.app/",
    githubUrl: "https://github.com/abhi143x/Food-Delivery",
    featured: false,
    category: "Web Application",
  },
  {
    id: 4,
    title: "Weather App",
    description:
      "Developed a Weather App using React JS. Here we will get the current Weather data from OpenWeatherMap API and display the weather data like Temperature,  Weather condition, Humidity and Wind Speed according to the city.",
    image: PROJECT_IMG_4,
    tags: ["React", "CSS", "Open Source API"],
    liveUrl: "https://weather-app-khaki-nine-13.vercel.app",
    githubUrl: "https://github.com/abhi143x/weather-app",
    featured: false,
    category: "Web Application",
  },
  {
    id: 5,
    title: "Sign Up Form",
    description:
      "Developed a full-stack SignUp system using React.js, Node.js & Express.js, and MySQL.",
    image: PROJECT_IMG_5,
    tags: ["React", "CSS", "Node.js", "Express.js", "MySQL"],
    liveUrl: "https://signup-form-ui.onrender.com",
    githubUrl: "https://github.com/abhi143x/Signup_form",
    featured: false,
    category: "Web Application",
  },
  {
    id: 6,
    title: "TO-DO List",
    description:
      "Developed a dynamic To-Do List web application using React.js for state management and CSS for responsive UI design.",
    image: PROJECT_IMG_6,
    tags: ["React", "CSS"],
    liveUrl: "https://to-do-list-one-theta-35.vercel.app/",
    githubUrl: "https://github.com/abhi143x/To-Do-List",
    featured: true,
    category: "Web Application",
  },
];

export const CERTIFICATES = [
  {
    id: 1,
    title: "Full Stack Web Development in MERN",
    issuer: "Rays Edutech PVT Ltd.",
    image: CERTIFICATE_IMG_1,
    credentialUrl: "https://drive.google.com/file/d/1azAinfzruhe9MipRt_iETVuVZR3Kmr5H/view?usp=sharing",
    description:
      "Completed a comprehensive Full Stack Web Development course covering HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB and MySQL.",
  },
  {
    id: 2,
    title: "Google Developer Group on Campus Solution Challenge",
    issuer: "Hack2Skill",
    image: CERTIFICATE_IMG_2,
    credentialUrl: "https://drive.google.com/file/d/1OGtW-6GOJW_dAHn1J7hddSyobaTelqDu/view?usp=sharing",
    description:
      "Participated in the Google Developer Group on Campus Solution Challenge, focusing on innovative solutions for campus issues.",
  },
  {
    id: 3,
    title: "Introduction to Generative AI powered by Google Cloud",
    issuer: "Simplilearn SkillUp",
    image: CERTIFICATE_IMG_3,
    credentialUrl: "https://drive.google.com/file/d/15QFXsXC_6bLbfBMd4rlHy0cA1wWFL5Ux/view?usp=sharing",
    description:
      "Completed a course on Generative AI, focusing on its applications and implications in various fields.",
  },
  {
    id: 4,
    title: "Technology Job Simulation - Deloitte",
    issuer: "Forage",
    image: CERTIFICATE_IMG_4,
    credentialUrl: "https://drive.google.com/file/d/1dGzHbn3mUU1wEluSw0AXx9wX4xLCjriw/view?usp=sharing",
    description:
      "Completed a job simulation program with Deloitte, gaining insights into the technology consulting industry.",
  },
  {
    id: 5,
    title: "SQL Bootcamp in collaboration with National Skill Development Corporation",
    issuer: "Lets Upgrade",
    image: CERTIFICATE_IMG_5,
    credentialUrl: "https://drive.google.com/file/d/1NP8VCcC9jd4mcaqlXA9C5Fe2q1HceBZh/view?usp=sharing",
    description:
      "Completed a SQL Bootcamp, gaining hands-on experience in database management and SQL querying.",
  },
];


export const JOURNEY_STEPS = [
  {
    year: "2023",
    title: "Started Coding Journey",
    company: "Self-taught",
    description:
      "Began learning web development with HTML, CSS, and JavaScript. Built my first website and fell in love with creating digital experiences.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2024",
    title: "First Internship",
    company: "Rays Edutech PVT Ltd.",
    description:
      "Joined as a Full Stack Web Intern, working with React.js, Express.js, Node.js, MongoDB, MySQL and learning modern development practices.",
    icon: Briefcase,
    color: "bg-green-500",
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting intuitive interfaces that users love",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/abhi143x",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/abhiraj-verma-249765334/",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/10",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:iiabhirajverma35@gmail.com",
    color: "hover:text-green-400",
    bgColor: "hover:bg-green-500/10",
  },
];

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "PATNA, BIHAR",
  },
  {
    icon: Mail,
    label: "Email",
    value: "iabhirajverma35@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8804825065",
  },
];
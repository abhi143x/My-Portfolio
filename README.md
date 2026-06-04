<div align="center">

# ✨ Abhiraj Verma — Personal Portfolio

A modern, responsive personal portfolio website built with **React 19**, **Tailwind CSS 4**, and **Framer Motion** — designed to showcase projects, skills, certifications, and experience.

[![React](https://img.shields.io/badge/React-19.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

🔗 **[Live - https://abhiraj-verma-portfolio.vercel.app/](https://abhiraj-verma-portfolio.vercel.app/)**

</div>

---

## 🚀 Features

- **Dark / Light Theme** — Toggle between themes with persistent preference via `localStorage`
- **Smooth Animations** — Page transitions and scroll-driven animations powered by Framer Motion
- **Fully Responsive** — Mobile-first design that works flawlessly on all screen sizes
- **Project Showcase** — Filterable project cards with live demo & GitHub links
- **Certificates Section** — Display certifications with credential verification links
- **Skills Visualization** — Categorized skill bars (Frontend, Backend, Database, Tools)
- **Contact Form** — Functional contact section with form validation
- **Lightning-Fast** — Built on Vite 7 for instant HMR and optimized production builds
- **Modular Architecture** — Reusable component-based structure for easy maintenance

---

## 🛠 Tech Stack

| Category       | Technology                                                                 |
| -------------- | -------------------------------------------------------------------------- |
| **Framework**  | React 19                                                                   |
| **Styling**    | Tailwind CSS 4                                                             |
| **Animations** | Framer Motion 12                                                           |
| **Build Tool** | Vite 7                                                                     |
| **Icons**      | Lucide React, React Icons                                                  |
| **Linting**    | ESLint 9                                                                   |
| **Deployment** | Vercel                                                                     |

---

## 📁 Project Structure

```
My-Portfolio/
├── public/
│   ├── logo.png                 # Favicon / logo
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── images/              # Project & certificate images
│   ├── components/
│   │   ├── Sections/
│   │   │   ├── HeroSection.jsx      # Landing hero with intro & CTA
│   │   │   ├── SkillsSection.jsx    # Categorized skill bars
│   │   │   ├── AboutSection.jsx     # Bio, journey timeline & passions
│   │   │   ├── ContactSection.jsx   # Contact form & info
│   │   │   └── Footer.jsx          # Footer with social links
│   │   ├── Input/
│   │   │   └── TextInput.jsx        # Reusable text input component
│   │   ├── Navbar.jsx               # Navigation bar with theme toggle
│   │   ├── ProjectCard.jsx          # Individual project card
│   │   ├── ProjectsSection.jsx      # Projects grid layout
│   │   ├── CertificateCard.jsx      # Individual certificate card
│   │   ├── CertificatesSection.jsx  # Certificates grid layout
│   │   └── SuccessModal.jsx         # Form submission success modal
│   ├── context/
│   │   └── ThemeContext.jsx     # Dark/Light theme context provider
│   ├── utils/
│   │   ├── data.js              # All portfolio data (projects, skills, etc.)
│   │   └── helper.js            # Utility helper functions
│   ├── App.jsx                  # Root app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint configuration
├── package.json
└── README.md
```

---

## ⚙ Getting Started

### Prerequisites

- **Node.js** — v18 or higher recommended
- **npm** — v9 or higher (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/abhi143x/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Navigate to `http://localhost:5173` to view the portfolio.

---

## 📜 Available Scripts

| Command             | Description                                 |
| ------------------- | ------------------------------------------- |
| `npm run dev`       | Start local dev server with hot reload      |
| `npm run build`     | Create optimized production build           |
| `npm run preview`   | Preview the production build locally        |
| `npm run lint`      | Run ESLint to check for code issues         |

---

## 🧱 Sections

| Section          | Description                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| **Hero**         | Animated landing section with introduction, tech stack ticker, stats, and call-to-action buttons  |
| **Skills**       | Categorized skill bars across Frontend, Backend, Database, and Developer Tools                    |
| **Projects**     | Showcase of projects with tags, descriptions, live URLs, and GitHub links                         |
| **Certificates** | Display of earned certifications with issuer details and credential verification                  |
| **About**        | Personal bio, coding journey timeline, and passions                                               |
| **Contact**      | Contact form with validation, contact info (location, email, phone), and success modal            |
| **Footer**       | Social links (GitHub, LinkedIn, Email), quick navigation, and copyright                           |

---

## 🌐 Deployment

This project is deployed on **[Vercel](https://vercel.com/)**. To deploy your own:

1. Push your code to a GitHub repository.
2. Import the repository on [vercel.com](https://vercel.com/).
3. Vercel auto-detects Vite and configures the build — no extra setup needed.
4. Your site will be live at `https://your-project.vercel.app`.

Alternatively, build and deploy manually:

```bash
npm run build
# Upload the `dist/` folder to any static hosting provider
```

---

## 📬 Contact

**Abhiraj Verma**

- 🌐 Portfolio — [abhiraj-verma-portfolio.vercel.app](https://abhiraj-verma-portfolio.vercel.app/)
- 💼 LinkedIn — [Abhiraj Verma](https://www.linkedin.com/in/abhiraj-verma-249765334/)
- 🐙 GitHub — [@abhi143x](https://github.com/abhi143x)
- 📧 Email — [iabhirajverma35@gmail.com](mailto:iabhirajverma35@gmail.com)

---
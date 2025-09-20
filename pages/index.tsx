import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from "next/head";

//icons
import { BsMoonStarsFill } from "react-icons/bs";
import { FaGithub, FaReact, FaNodeJs, FaDatabase, FaPhp, FaJava, FaLaravel, FaAngular } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiFirebase, SiNestjs, SiMysql } from "react-icons/si";

//images
import profileImage from "../public/dev1.png";
import UIUX from "../public/design.png";
import webDevelop from "../public/code.png";
import mobileAppDev from "../public/mobiledev.png";
import work1 from "../public/work1.png";
import work2 from "../public/work2.png";
import work3 from "../public/work3.jpg";
import work4 from "../public/work4.png";
import work5 from "../public/work5.jpg";
import work6 from "../public/work6.jpg";

//framer motion
import { motion, AnimatePresence } from 'framer-motion';

//type animation
import { TypeAnimation } from 'react-type-animation';

//hooks
import React, { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkmode, setdarkmode] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Binary rain animation elements
  const binaryElements = [
    '01', '10', '001', '110', '0101', 
    'const', 'let', 'function', 'return',
    '{ }', '[ ]', '( )', '=>', '++;',
    'npm', 'git', 'dev', 'push', 'pull'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const techStack = [
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <FaReact />, name: 'React' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <SiTailwindcss />, name: 'Tailwind' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiFirebase />, name: 'Firebase' },
    { icon: <SiNestjs />, name: 'NestJS' },
    { icon: <SiMysql />, name: 'MySQL' },
    { icon: <FaLaravel />, name: 'Laravel' },
    { icon: <FaPhp />, name: 'PHP' },
    { icon: <FaJava />, name: 'Java' },
    { icon: <FaAngular />, name: 'Angular' }
  ];

  return (
    <div className={darkmode ? "dark" : ""}>
      <Head>
        <title>Portfolio</title>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Fira+Code:wght@400;500&display=swap');
            
            ::-webkit-scrollbar {
              width: 8px;
            }
            
            ::-webkit-scrollbar-track {
              background: ${darkmode ? '#111' : '#f0fdfa'};
            }
            
            ::-webkit-scrollbar-thumb {
              background: #14b8a6;
              border-radius: 4px;
            }

            ::selection {
              background: #14b8a6;
              color: white;
            }

            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }

            @keyframes fadeInOut {
              0%, 100% { opacity: 0.1; }
              50% { opacity: 0.3; }
            }

            .binary-rain {
              font-family: 'Fira Code', monospace;
              color: #14b8a6;
              opacity: 0.1;
              animation: fadeInOut 3s infinite;
            }

            .dark .binary-rain {
              color: #2dd4bf;
              text-shadow: 0 0 8px #2dd4bf40;
            }

            .dark ::selection {
              background: #2dd4bf;
              color: #0f172a;
            }

            .dark ::-webkit-scrollbar-track {
              background: #0f172a;
            }

            .dark ::-webkit-scrollbar-thumb {
              background: #2dd4bf;
              box-shadow: 0 0 8px #2dd4bf40;
            }
          `}
        </style>
      </Head>

      <main className="font-poppins bg-gradient-to-br from-slate-50 via-teal-50/30 to-cyan-50/30 min-h-screen dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950 transition-colors duration-300 relative overflow-hidden">
        {/* Code-themed background */}
        <div className="fixed inset-0 -z-10">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Binary rain effect */}
          <div className="absolute inset-0 overflow-hidden">
            {binaryElements.map((text, index) => (
              <motion.div
                key={index}
                initial={{ y: -100, x: Math.random() * 100 - 50 }}
                animate={{ 
                  y: ['100vh'],
                  x: [
                    Math.random() * 100 - 50,
                    Math.random() * 100 - 50,
                  ]
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 5,
                }}
                className="binary-rain absolute text-sm"
                style={{
                  left: `${(index / binaryElements.length) * 100}%`,
                }}
              >
                {text}
              </motion.div>
            ))}
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-100/10 via-slate-100/30 to-transparent dark:from-cyan-500/5 dark:via-slate-900/50 dark:to-slate-950/80" />
          
          {/* Additional dark mode glow effects */}
          <div className="hidden dark:block">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
          </div>

          {/* Floating code elements */}
          <div className="absolute inset-0">
            {[
              { text: '<div>', top: '10%', left: '5%' },
              { text: 'function()', top: '20%', left: '80%' },
              { text: '{code}', top: '40%', left: '15%' },
              { text: 'return()', top: '60%', left: '75%' },
              { text: '</div>', top: '80%', left: '25%' },
            ].map((element, index) => (
              <motion.div
                key={index}
                className="absolute binary-rain text-lg"
                style={{ top: element.top, left: element.left }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: index,
                }}
              >
                {element.text}
              </motion.div>
            ))}
          </div>

          {/* Tech circles */}
          <div className="absolute inset-0">
            {[
              { size: 'w-32 h-32', top: '15%', left: '10%', delay: 0 },
              { size: 'w-24 h-24', top: '45%', left: '85%', delay: 1 },
              { size: 'w-40 h-40', top: '75%', left: '20%', delay: 2 },
            ].map((circle, index) => (
              <motion.div
                key={index}
                className={`absolute ${circle.size} rounded-full bg-gradient-to-br from-teal-200/5 to-cyan-200/5 dark:from-teal-700/5 dark:to-cyan-700/5 backdrop-blur-sm`}
                style={{ top: circle.top, left: circle.left }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: circle.delay,
                }}
              />
            ))}
          </div>
        </div>

        {/* Navigation */}
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-950/70 px-6 md:px-20 lg:px-40 border-b border-teal-100 dark:border-teal-950/50"
        >
          <div className="py-4 flex justify-between items-center max-w-7xl mx-auto">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-400 dark:from-teal-500 dark:to-cyan-500 flex items-center justify-center text-white font-bold">
                TD
              </div>
              <span className="text-sm md:text-xl dark:text-white font-bold">
                Tharindu Dilshan
              </span>
            </motion.div>
            <ul className="flex items-center gap-6">
              <motion.li whileHover={{ scale: 1.2, rotate: 180 }}>
                <BsMoonStarsFill 
                  onClick={() => setdarkmode(!darkmode)}
                  className="cursor-pointer text-xl dark:text-teal-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors"
                />
              </motion.li>
              <motion.li whileHover={{ scale: 1.05 }}>
                <a 
                  href="https://drive.google.com/file/d/17qWwMy1hr-OF1wyGWnEgHfjqovOTgnr3/view?usp=drive_link" 
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-teal-400 dark:to-cyan-400 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-teal-500/20 dark:hover:shadow-teal-400/20"
                >
                  Resume
                </a>
              </motion.li>
            </ul>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 md:px-20 lg:px-40">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 text-center lg:text-left"
              >
                <div className="inline-block px-4 py-1 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 text-sm mb-6">
                  Welcome to my portfolio
                </div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent md:text-6xl lg:text-7xl lg:mb-6">
            Tharindu Dilshan
          </h1>
                <h3 className="text-2xl py-4 md:text-3xl text-slate-700 dark:text-slate-300">
                  I am a{" "}
                  <TypeAnimation 
                    sequence={['Mobile App Developer', 2000, 'UI | UX Designer', 2000, 'Web Developer', 2000]}
                    speed={50}
                    repeat={Infinity}
                    className="text-teal-600 dark:text-teal-400 font-semibold"
                  />
          </h3>
                <p className="text-base text-slate-600 leading-relaxed md:text-lg max-w-xl mx-auto lg:mx-0 dark:text-slate-400">
                  I craft modern digital experiences with cutting-edge technologies. 
                  From sleek mobile apps to responsive web applications, I bring ideas to life.
                </p>
                
                {/* Tech Stack */}
                <div className="mt-8">
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Tech Stack</p>
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    {techStack.map((tech, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-teal-400 dark:hover:border-teal-400 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-300 group"
                      >
                        <span className="text-xl text-teal-600 dark:text-teal-400 group-hover:text-teal-500 dark:group-hover:text-teal-300 transition-colors">{tech.icon}</span>
                        <span className="text-sm text-slate-600 dark:text-slate-300">{tech.name}</span>
                      </motion.div>
                    ))}
        </div>
        </div>

                <motion.div 
                  className="flex gap-6 justify-center lg:justify-start text-3xl mt-8 text-slate-400"
                >
                  {[
                    { href: 'https://github.com/Tharindu1222', icon: <FaGithub /> },
                    { href: 'https://www.linkedin.com/in/tharindu-dilshan-6735662a9/', icon: <CiLinkedin /> },
                    { href: 'https://www.facebook.com/tharindu1222/', icon: <FaFacebook /> }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.2, y: -5 }}
                      className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>

        <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex-1 relative"
              >
                <div className="relative w-80 h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full animate-pulse" />
                  <div className="absolute -inset-4 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full opacity-30 blur-xl animate-pulse" />
                  <Image 
                    src={profileImage} 
                    alt="Profile" 
                    layout="fill" 
                    objectFit="cover"
                    className="rounded-full relative z-10"
                  />
                  
                  {/* Decorative elements */}
                  <div className="absolute -inset-4 border-2 border-dashed border-teal-200 dark:border-teal-800 rounded-full animate-spin-slow" />
                  <div className="absolute -inset-8 border-2 border-dashed border-cyan-200 dark:border-cyan-800 rounded-full animate-spin-slow-reverse" />
        </div>
        </motion.div>
            </div>
          </div>
        </section>
      
        {/* Services Section */}
        <motion.section 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 px-6 md:px-20 lg:px-40 bg-white/50 dark:bg-black/50 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 text-sm mb-6"
              >
                What I Do
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent mb-6">
              Services I Offer
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Comprehensive solutions in UI/UX Design, Web Development, and Mobile App Development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: UIUX,
                  title: "UI/UX Design",
                  description: "Creating intuitive and visually stunning interfaces that enhance user experience.",
                  tech: ["Figma", "Adobe XD", "Sketch"],
                  code: "const design = {\n  type: 'UI/UX',\n  tools: ['Figma', 'XD'],\n};"
                },
                {
                  icon: webDevelop,
                  title: "Web Development",
                  description: "Building modern, responsive websites with cutting-edge technologies.",
                  tech: ["React", "Next.js", "Node.js", "Laravel", "PHP", "MySQL", "Angular", "Java", "NestJS"],
                  code: "function buildWeb() {\n  return {\n    stack: 'MERN',\n    focus: 'Performance'\n  };\n}"
                },
                {
                  icon: mobileAppDev,
                  title: "Mobile Development",
                  description: "Developing powerful mobile applications for iOS and Android platforms.",
                  tech: ["Flutter"],
                  code: "class MobileApp {\n  build() {\n    platform: ['iOS', 'Android']\n  }\n}"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="group bg-white dark:bg-slate-900/50 rounded-2xl p-8 shadow-lg hover:shadow-xl dark:shadow-teal-500/5 dark:hover:shadow-teal-400/10 transition-all duration-300 border border-slate-100 dark:border-slate-800 backdrop-blur-sm"
                >
                  <div className="w-16 h-16 mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-xl group-hover:scale-[2.5] transition-transform duration-300" />
                    <Image 
                      src={service.icon} 
                      alt={service.title} 
                      width={64} 
                      height={64} 
                      className="relative z-10" 
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {service.description}
                  </p>
                  <div className="mb-6 p-4 bg-slate-900 dark:bg-slate-950 rounded-lg overflow-hidden ring-1 ring-slate-800 dark:ring-slate-700">
                    <pre className="text-sm font-mono text-teal-400 dark:text-teal-300">
                      <code>{service.code}</code>
                    </pre>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-sm px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Portfolio Section */}
        <motion.section 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 px-6 md:px-20 lg:px-40"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 text-sm mb-6"
              >
                My Work
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent mb-6">
                Featured Projects
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                A showcase of my best work in UI/UX design, web development, and mobile applications.
              </p>
            </div>

            {/* Project Categories */}
            {[
              {
                title: "UI/UX Design",
                works: [work1, work4],
                description: "Modern and intuitive interface designs"
              },
              {
                title: "Mobile Development",
                works: [work2, work3],
                description: "Native and cross-platform mobile applications"
              },
              {
                title: "Web Development",
                works: [work6, work5],
                description: "Responsive and dynamic web applications"
              }
            ].map((category, index) => (
              <div key={index} className="mb-20 last:mb-0">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {category.description}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {category.works.map((work, workIndex) => (
                    <motion.div
                      key={workIndex}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: darkmode ? "0 20px 25px -5px rgba(45, 212, 191, 0.1), 0 8px 10px -6px rgba(45, 212, 191, 0.1)" : "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                      }}
                      className="group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 backdrop-blur-sm"
                    >
                      <div className="relative aspect-video">
                        <Image 
                          src={work} 
                          alt={`Project ${workIndex + 1}`} 
                          layout="fill" 
                          objectFit="cover"
                          className="group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h4 className="text-lg font-semibold mb-2">Project {workIndex + 1}</h4>
                        <p className="text-sm opacity-90">Click to view details</p>
            </div>
            </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="bg-white/50 dark:bg-black/50 py-12 px-6 md:px-20 lg:px-40 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 text-sm mb-6"
            >
              Get in Touch
            </motion.div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent mb-4">
              Let's Create Something Amazing
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Ready to start your next project? I'm here to help turn your vision into reality.
            </p>
            <motion.div 
              className="flex justify-center gap-8 text-3xl text-slate-400"
            >
              {[
                { href: 'https://github.com/Tharindu1222', icon: <FaGithub /> },
                { href: 'https://www.linkedin.com/in/tharindu-dilshan-6735662a9/', icon: <CiLinkedin /> },
                { href: 'https://www.facebook.com/tharindu1222/', icon: <FaFacebook /> }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </footer>
      </main>
    </div>
  );
}

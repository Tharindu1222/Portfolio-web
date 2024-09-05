import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from "next/head";

//icons
import { BsMoonStarsFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";

//images
import profileImage from "../public/dev.png";
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
import { motion } from 'framer-motion';

//type animation
import { TypeAnimation } from 'react-type-animation';

//hooks
import React, { useState } from 'react';
import { GiDuration } from 'react-icons/gi';

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  //function
  const [darkmode, setdarkmode] = useState(false);
  return (
    <div className={darkmode ? "dark" : ""}>

      <Head>
        <title>
          Portfolio
        </title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
        </style>
      </Head>

      <main className="font-poppins bg-teal-100 min-h-screen px-10 md:px-20 lg:px-40 dark:bg-black" >
        {/* nav and hero*/}
        <section>
        {/* nav*/}
        <nav className=" py-10 flex justify-between">
          <h1 className=' text-sm md:text-xl dark:text-white' >Developed by Tharindu Dilshan</h1>
          <ul className=' flex items-center'>
            <li>
              {/*icon*/}
              <BsMoonStarsFill onClick={()=> setdarkmode(!darkmode)}
              className=' cursor-pointer text-xl mx-5 dark:text-white'/>
            </li>
            <li>
              <a href='https://drive.google.com/file/d/17qWwMy1hr-OF1wyGWnEgHfjqovOTgnr3/view?usp=drive_link' className=' bg-teal-500 text-black px-4 py-2 border-none rounded-md'>Resume</a>
            </li>
          </ul>
        </nav>

        {/*hero*/}
        <div className=' text-center p-10'>
          <h1 className='text-5xl font-bold text-teal-700 md:text-6xl lg:text-7xl lg:mb-4'>
            Tharindu Dilshan
          </h1>
          <h3 className='text-2xl py-4 md:text-3xl dark:text-white'>
            I am a <TypeAnimation sequence={['Mobile App Developer',2000,'UI | UX Designer',2000,'Web Developer',2000]}speed={50}repeat={Infinity}/>
          </h3>
          <p className=' text-sm py-4 text-slate-900 leading-6 md:text-1xl max-w-xl mx-auto md:text-md dark:text-white'>
          I'm a UI/UX designer and web developer, 
          blending creativity with functionality. 
          From sleek designs to seamless coding, 
          I specialize in crafting immersive digital experiences. 
          Explore my portfolio to witness the fusion of art and technology.
          </p>
        </div>

        {/*social*/}
        <div className=' text-5xl flex justify-center gap-16 text-gray-800 dark:text-gray-600' >
          <a href='https://github.com/Tharindu1222'><FaGithub/></a>
          <a href='https://www.linkedin.com/in/tharindu-dilshan-6735662a9/'><CiLinkedin/></a>
          <a href='https://www.facebook.com/tharindu1222/'><FaFacebook/></a>
        </div>

        {/*profile image*/}
        <motion.div 
        initial={{opacity:0, scale:0.5 }}
        animate={{opacity:1, scale:1}}
        transition={{duration:0.5}}>
        <div className=' m-auto relative bg-gradient-to-b from-teal-900 w-80 h-80 p-5 mt-20 rounded-full'>
          <Image src={profileImage} alt='Profile' layout='fill' objectFit='cover'/>
        </div>
        </motion.div>
        </section>
      

        {/*Services*/}
        <section>
          <div>
            <h2 className='text-5xl py-10 font-bold opacity-60 dark:text-white'>
              Services I Offer
            </h2>
            <p className=' text-sm py-2 text-slate-900 leading-6 dark:text-white'>
            UI/UX Design, Web Development, and Mobile App Development Services<br></br><br></br>
Enhance your digital footprint with my comprehensive services. I specialize in UI/UX design, creating intuitive and visually appealing interfaces that boost user engagement. My web development expertise ensures robust, scalable, and responsive websites tailored to your business needs. Additionally, I develop high-performance mobile applications for iOS and Android, transforming your ideas into seamless and engaging mobile experiences. Let's work together to bring your vision to life.
            </p>
          </div>

          {/*Services cards*/}
          <div className='md:flex lg-flex gap-10 mx-auto' >
            {/*UIUX*/}
            <motion.div
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}>
            <div className=' bg-teal-400 text-center shadow-sm p-5 rounded-xl my-10 '>
              <Image src={UIUX} alt='UIUX image' width={100} height={100} className='inline'/>
              <h2 className=' text-2xl font-bold'>
                UI/UX Designing
              </h2>
              <p className='text-sm py-2 text-slate-900 leading-6'>
              "Transform your digital presence with intuitive and visually stunning UI/UX design. I specialize in creating user-centric interfaces that enhance the user experience and drive engagement. From wireframing to prototyping, I ensure that every aspect of the design process is tailored to meet your specific needs and goals"
              </p>
            </div>
            </motion.div>


            {/*Web Developing*/}
            <motion.div
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}>
            <div className=' bg-teal-400 text-center shadow-sm p-5 rounded-xl my-10'>
              <Image src={webDevelop} alt='webdevelop image' width={100} height={100} className='inline'/>
              <h2 className=' text-2xl font-bold'>
                Web Develop
              </h2>
              <p className='text-sm py-2 text-slate-900 leading-6'>
              "Build a robust and scalable online presence with my web development services. I provide custom web solutions tailored to your business needs, ensuring high performance, security, and seamless user experiences. From front-end design to back-end development, I create responsive and interactive websites that engage and convert visitors."
              </p>
            </div>
            </motion.div>

            {/*mobileApp Developing*/}
            <motion.div
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}>
            <div className=' bg-teal-400 text-center shadow-sm p-5 rounded-xl my-10'>
              <Image src={mobileAppDev} alt='mobileApp image' width={100} height={100} className='inline'/>
              <h2 className=' text-2xl font-bold'>
                Mobile App Develop
              </h2>
              <p className='text-sm py-2 text-slate-900 leading-6'>
              "Bring your ideas to life with top-notch mobile 
              app development. I specialize in creating intuitive and high-performance mobile applications for both iOS and Android platforms. From concept to deployment, I ensure your app is user-friendly, feature-rich, and tailored to meet your specific business needs. Transform your vision into a seamless mobile experience that engages users and drives results."
              </p>
            </div>  
            </motion.div>

          </div>
        </section>

        {/*my work*/}
        <section>
          <div>
            <h2 className='text-5xl py-10 font-bold opacity-60 dark:text-white'>
              Portfolio
            </h2>
            <p className='text-sm py-2 text-slate-900 leading-6 dark:text-white'>
            "Dive into my portfolio to witness the fusion of design and functionality. 
            As a UI/UX designer and web developer, 
            my work reflects a commitment to creating engaging and seamless digital experiences. 
            Explore and envision the possibilities."
            </p>
          </div><br></br>
          {/*my work images*/}
          <h1 className=' text-sm md:text-xl dark:text-white' >UI | UX Designs</h1>
          <div className='flex flex-col gap-10 p-10 lg:flex-row lg:flex-wrap'>
            <div className=' basis-1/3 flex-1'><motion.div
          whileHover={{scale:1.1 , rotate:3}}
          whileTap={{scale:0.8 , rotate:-10 , borderRadius:"100%"}}><Image src={work1} alt='work1' layout='responsive' className='rounded-lg object-cover'/></motion.div></div>
            <div className=' basis-1/3 flex-1'><motion.div
          whileHover={{scale:1.1 , rotate:3}}
          whileTap={{scale:0.8 , rotate:-10 , borderRadius:"100%"}}><Image src={work4} alt='work4' layout='responsive' className='rounded-lg object-cover'/></motion.div></div>
            </div>

            <br></br><h1 className=' text-sm md:text-xl dark:text-white' >Mobile App Development</h1><br></br>
            <div className='flex flex-col gap-10 p-10 lg:flex-row lg:flex-wrap'>
            <div className=' basis-1/3 flex-1'><motion.div
          whileHover={{scale:1.1 , rotate:3}}
          whileTap={{scale:0.8 , rotate:-10 , borderRadius:"100%"}}><Image src={work2} alt='work2' layout='responsive' className='rounded-lg object-cover'/></motion.div></div>
            <div className=' basis-1/3 flex-1'><motion.div
          whileHover={{scale:1.1 , rotate:3}}
          whileTap={{scale:0.8 , rotate:-10 , borderRadius:"100%"}}><Image src={work3} alt='work3' layout='responsive' className='rounded-lg object-cover'/></motion.div></div>
            </div>

            <br></br><h1 className=' text-sm md:text-xl dark:text-white' >Web Development</h1><br></br>
            <div className='flex flex-col gap-10 p-10 lg:flex-row lg:flex-wrap'>
            <div className=' basis-1/3 flex-1'><motion.div
          whileHover={{scale:1.1 , rotate:3}}
          whileTap={{scale:0.8 , rotate:-10 , borderRadius:"100%"}}><Image src={work6} alt='work2' layout='responsive' className='rounded-lg object-cover'/></motion.div></div>
            <div className=' basis-1/3 flex-1'><motion.div
          whileHover={{scale:1.1 , rotate:3}}
          whileTap={{scale:0.8 , rotate:-10 , borderRadius:"100%"}}><Image src={work5} alt='work3' layout='responsive' className='rounded-lg object-cover'/></motion.div></div>
            </div>
        </section>

        {/*footer*/}
        <footer className=' border-t-2 border-black text-sm opacity-60 flex flex-col 
        gap-5 items-center justify-center py-10 lg:flex-row lg:items-center dark:text-white'>
          <div>
            <h3 className='text-base mb-2'>Contact For Me More Details</h3>
            <p>
            "Let's connect! Whether you have a project in mind or just want to say hello, I'm here. 
            Drop me a message, and let's bring your ideas to life."
            </p>
          </div>
          <div>
          <div className=' text-3xl flex justify-center gap-16 text-gray-800 dark:text-gray-500'>
          <a href='https://github.com/Tharindu1222'><FaGithub/></a>
          <a href='https://www.linkedin.com/in/tharindu-dilshan-6735662a9/'><CiLinkedin/></a>
          <a href='https://www.facebook.com/tharindu1222/'><FaFacebook/></a>
        </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

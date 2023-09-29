import React, { useState } from "react";
import '/tailwind.config';
import {
  AiOutlineRobot,
  AiOutlineAntDesign,
  AiOutlineFileText,
  AiOutlineEye,
} from 'react-icons/ai';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Artificial Intelligence',
        icons: [<AiOutlineRobot />], // You can use an appropriate AI-related icon here
      },
      {
        title: 'Machine Learning',
        icons: [<AiOutlineAntDesign />], // You can use an appropriate ML-related icon here
      },
      {
        title: 'Natural Language Processing',
        icons: [<AiOutlineFileText />], // You can use an appropriate NLP-related icon here
      },
      {
        title: 'Computer Vision',
        icons: [<AiOutlineEye />], // You can use an appropriate CV-related icon here
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Best AI Company of the Year',
        stage: '2023',
      },
      {
        title: 'Innovation Award',
        stage: '2022',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'AI Development Lead',
        stage: '2022 - Present',
      },
      {
        title: 'Machine Learning Engineer',
        stage: '2019 - 2022',
      }
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Certified AI Solution Provider',
        stage: '2021',
      },
      {
        title: 'Machine Learning Accreditation',
        stage: '2020',
      },
    ],
  },
];
// components

import Avatar from '../../components/Avatar';

import Circles from "../../components/Circles";

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp  from "react-countUp";


const About = () => {
  const [index, setIndex] = useState(8)
  console.log(index);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar */}
      <motion.div
        variants={fadeIn('right', 0.2)} initial="hidden"
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'>
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col item-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex-col justify-center'>
        <motion.h2
        variants={fadeIn('right', 0.2)} initial="hidden"
        animate='show'
        exit='hidden' 
        className='h2'>Captivating <span className='text-accent'>stories</span> birth magnificent <span className='text-accent'>MainTechAI</span>.</motion.h2>
        <motion.p
        variants={fadeIn('right', 0.4)} initial="hidden"
        animate='show'
        exit='hidden'
        className='max-w-[500pc] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>Your trusted partner in the world of artificial intelligence and digital innovation, MainTechAI is leading the way into a dynamic future. With a commitment to pushing boundaries and creating intelligent solutions, we're here to redefine how you experience the digital realm.</motion.p>
        {/* counters */}
        <div>
          <div>
          <motion.div
          variants={fadeIn('right', 0.6)} initial="hidden"
          animate='show'
          exit='hidden'
          className='flex space-x-4'>
            {/* MainTechAI Software Users */}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-3xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={999} duration={50}/>+
              </div>
              <div className='text-xs tracking-[1px] leading-[1.4] max-w-[100px]'>MainTechAI Software Users</div>
            </div>

            {/* Satisfied Users */}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-3xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={968} duration={60}/>+
              </div>
              <div className='text-xs tracking-[1px] leading-[1.4] max-w-[100px]'>Satisfied Users</div>
            </div>

            {/* Type of software's */}
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-3xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={5} duration={30}/>
              </div>
              <div className='text-xs tracking-[1px] leading-[1.4] max-w-[100px]'>Type of Software's</div>
            </div>
          </motion.div>

          </div>
        </div>
        </div>
        {/* info */}
        <div className='flex flex-col w-full xl:max-w-[48%] h-480px]'> 
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return <div
                key={itemIndex}
                className={`${index === itemIndex && 
              'text-accent after:w-[100%] after:bg-accent after:transition-all after:duation-300'
            } cursor - pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
            onClick={() => setIndex(itemIndex)}
           >
            {item.title}
          </div>;
            
          })}
          
          </div>
          <motion.div
          variants={fadeIn('down', 0.4)} initial="hidden"
          animate='show'
          exit='hidden'
          className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
  {aboutData && aboutData[index] && aboutData[index].info ? (
    aboutData[index].info.map((item, itemIndex) => (
      <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
      >
        {/* title */}
        <div className='font-light md-2'>{item.title}</div>
        <div className='hidden md:flex'>-</div>
        <div>{item.stage}</div>
        <div className='flex gap-x-4'>

        </div>
        {/* icons */}
        {item.icons?.map((icon, itemIndex)=> {
          return <div className='text-2xl text-white'>{icon}</div>
        })}
      </div>
    ))
  ) : (
    <p>No information available for this index.</p>
  )}
        </motion.div>
      </div>
    </div>
  </div >
  );
};

export default About;

import React from 'react';
import SoftwareSlider from '../../components/SoftwareSlider';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Software = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-primary/30'>
      <Circles />
      <div className='container mx-auto'>
        <div className='text-center flex flex-col lg:text-left mb-8 xl:mb-0'>
          <div className='flex items-center justify-center mb-4 xl:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='text-3xl xl:text-4xl font-bold text-accent'
            >
              Software's
              <span className='text-white'>.</span>
            </motion.h2>
          </div>
          <motion.p
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='mb-3 max-w-lg mx-auto xl:mx-0 text-lg xl:text-xl'
          >
            At MainTechAI (MTA), we specialize in creating AI-driven software solutions that breathe life into everyday tasks, making them faster and more efficient. Experience the future in seconds with MainTechAI.
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn('left', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='w-full xl:max-w-[65%]'
        >
          <SoftwareSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Software;

// Correct the import statements
import ServiceSlider from '../../components/ServiceSlider'; // Correct the path
import Bulb from '../../components/Bulb'; // Correct the path
import Circles from '../../components/Circles'; // Correct the path
// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'; // Correct the path


const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 xl:mx-5'
            >
              MTA services<span className=' text-accent'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0'
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
            {/* slider */}
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;

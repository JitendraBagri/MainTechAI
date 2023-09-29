import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper';
import { BsArrowDown } from 'react-icons/bs';

const SoftwareSlides = {
  slides: [
    {
      title: 'Natasha',
      description: 'Voice-controlled computer systems with AI capabilities. This refers to computer systems that can be operated and interacted with using voice commands.',
      downloadPath: 'download/software2.zip',
    },
    {
      title: 'Mouse Cursor AI',
      description: 'Move the computer mouse cursor without direct user input. It can assist users with tasks, automate actions, or enhance interactive experiences in various applications.',
      downloadPath: '/download/software2.zip',
    },
    {
      title: 'Audio file converter',
      description: 'This technology is commonly used for transcription purposes, making it easier to transcribe spoken content, such as interviews, lectures, meetings, or podcasts, into a textual format.',
      downloadPath: '/download/software3.zip',
    },
    {
      title: 'Software 4',
      description: 'Description of Software 4.',
      downloadPath: '/download/software4.zip',
    },
    {
      title: 'Software 5',
      description: 'Description of Software 5.',
      downloadPath: '/download/software5.zip',
    },
  ],
};

const SoftwareSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='mx-auto w-full sm:h-[300px] mt-5'
    >
      {SoftwareSlides.slides.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-[max-content] rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 '>
              <div>
                <div className='mb-2 text-lg text-green-500 font-bold'>{item.title}</div>
                <p className='max-w-full leading-normal'>{item.description}</p>
              </div>
              <div className='text-3xl ml-auto'>
                <a href={item.downloadPath} download>
                  <BsArrowDown className='group-hover:text-accent transition-all duration-300' />
                </a>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SoftwareSlider;

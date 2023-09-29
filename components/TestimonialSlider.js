import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import { FaQuoteLeft, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Image from 'next/image';

const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Sarah Johnson',
    position: 'User',
    message:
      'I\'m incredibly impressed with the exceptional service provided by [Your Company Name]. They\'ve exceeded my expectations in every way!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Emily Williams',
    position: 'User',
    message:
      'Choosing MainTechAI was one of the best decisions I\'ve made. Their commitment to excellence is truly remarkable!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Michael Brown',
    position: 'User',
    message:
      'I\'ve had the pleasure of working with MainTechAI, and I must say, their dedication to customer satisfaction is unparalleled!',
  },
];


const TestimonialSlider = () => {
  return (
    <div className="mr-20 ml-10 flex justify-center items-center h-full ">
      <Swiper
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className='h-[400px] relative'
      >
        {testimonialData.map((person, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='  flex flex-col items-center md:flex-row gap-x-0 h-full px-5'>
                {/* avatar, name, position */}
                <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                  <div className='flex flex-col justify-center text-center'>
                    {/* avatar */}
                    <div className='mb-2 mx-auto'>
                      <Image src={person.image} width={100} height={100} alt='' />
                    </div>

                    {/* name */}
                    <div className='text-lg'>{person.name}</div>
                    {/* position */}
                    <div className='text-[12px] uppercase font-extralight tracking-widest'>
                      {person.position}
                    </div>
                  </div>
                </div>
                {/* quote & message */}
                <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-h[200px] relative xl:pl-20'>
                  {/* quote icon */}
                  <div className='mb-4'>
                    <FaQuoteLeft className='text-3xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                  </div>
                  {/* message */}
                  <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className='swiper-button-prev'>
          <FaAngleLeft className='text-4xl text-white' />
        </div>
        <div className='swiper-button-next'>
          <FaAngleRight className='text-4xl text-white' />
        </div>
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;

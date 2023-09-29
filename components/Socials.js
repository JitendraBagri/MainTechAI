//links
import Link from "next/link";

// icons
import {RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiLinkedinLine, RiDriveLine} from 'react-icons/ri'

const Socials = () => {
  return (
  <div className='flex items-center gap-x-5 text-lg'>
    <Link href={'https://www.youtube.com/@NinjaAnupam'} className='hover:text-accent transition-all duration-300'>
      <RiYoutubeLine/>

    </Link>
    <Link href={'https://www.instagram.com/anupam_bagri_03/'} className='hover:text-accent transition-all duration-300'>
      <RiInstagramLine/>

    </Link>
    <Link href={'https://www.facebook.com/Anupambagri1129'} className='hover:text-accent transition-all duration-300'>
      <RiFacebookLine/>

    </Link>
  
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiLinkedinLine/>

    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiDriveLine/>

    </Link>
   
  </div>
  );
};

export default Socials;

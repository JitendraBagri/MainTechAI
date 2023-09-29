import Image from "next/image";

//next link
import Link from "next/link";

// components
import Socials from '../components/Socials';

const Header = () => {
  return <header className='absolute z-30 w-full flex item-center px-16 xl:px-0 xl:h-[90px]'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row justify-between item-center gap-y-6 py-8'>
        {/* logo */}
        <Link href={'/'}>
        
        <h1 className="text-4xl font-bold " >MTA</h1> 
        <hr className="border-t border-gray-300 my-0.5"></hr>
        <p style={{ marginTop: '0.1rem', lineHeight: '1' }} className="text-lg">MainTechAI</p>
        


         
        </Link>
        {/* socials */}
        <Socials/>
      </div>
    </div>
  </header>;
};

export default Header;
 
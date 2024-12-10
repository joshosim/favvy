
import Logo from '@/assets/logosaas.png'
import Image from 'next/image';
import SocialX from '@/assets/social-x.svg'
import Socialinsta from '@/assets/social-insta.svg'
import SocialLinkedIn from '@/assets/social-linkedin.svg'
import SocialYoutube from '@/assets/social-youtube.svg'
import SocialPin from '@/assets/social-pin.svg'
export const Footer = () => {
  return (
    <footer className='bg-black text-[#bcbcbc] text-sm py-10 text-center'>
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:h-full before:w-full before:bg-[linear-gradient(to_right,#f87bff,#ffdd9b,#c2f0b1,#2fd8fe)] before:absolute ">
          <Image
            src={Logo}
            alt="Logo image"
            height={40}
            className='relative'
          />
        </div>
        <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Updates</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className='flex justify-center gap-6 mt-6'>
          <SocialX className='' />
          <Socialinsta className='' />
          <SocialLinkedIn className='' />
          <SocialYoutube className='' />
          <SocialPin className='' />
        </div>
        <p className='mt-6'>
          &copy; 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

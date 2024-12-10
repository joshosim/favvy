'use client'
import acmeLogo from '@/assets/logo-acme.png'
import quantumLogo from '@/assets/logo-quantum.png'
import echoLogo from '@/assets/logo-echo.png'
import celectialLogo from '@/assets/logo-celestial.png'
import pulse from '@/assets/logo-pulse.png'
import apex from '@/assets/logo-apex.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const LogoTicker = () => {
  return (
    <div className='py-8 md:py-12 bg-white'>
      <div className="container">
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
          <motion.div className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: '-50%'
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop'
            }}
          >
            <Image alt='acmeLogo' src={acmeLogo}
              className='logo-ticker-image'
            />
            <Image alt='quantumLogo' src={quantumLogo}
              className='logo-ticker-image'
            />
            <Image alt='echoLogo' src={echoLogo}
              className='logo-ticker-image'
            />
            <Image alt='celectialLogo' src={celectialLogo}
              className='logo-ticker-image'
            />
            <Image alt='pulse' src={pulse}
              className='logo-ticker-image'
            />
            <Image alt='apex' src={apex}
              className='logo-ticker-image'
            />
            {/* sd */}
            <Image alt='acmeLogo' src={acmeLogo}
              className='logo-ticker-image'
            />
            <Image alt='quantumLogo' src={quantumLogo}
              className='logo-ticker-image'
            />
            <Image alt='echoLogo' src={echoLogo}
              className='logo-ticker-image'
            />
            <Image alt='celectialLogo' src={celectialLogo}
              className='logo-ticker-image'
            />
            <Image alt='pulse' src={pulse}
              className='logo-ticker-image'
            />
            <Image alt='apex' src={apex}
              className='logo-ticker-image'
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

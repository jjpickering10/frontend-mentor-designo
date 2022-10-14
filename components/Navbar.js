import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../public/assets/shared/desktop/logo-dark.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  console.log(logo);

  const handleNav = () => {
    setNav((prevNav) => !prevNav);
  };
  return (
    <>
      <div className='fixed top-0 left-0 w-full h-24 md:h-[155px] flex items-center justify-between px-6 md:px-[39px] lg:px-[165px] bg-white z-50'>
        <Link href={'/'}>
          <Image
            src={logo.src}
            alt='logo-dark'
            width={logo.width / 2}
            height={logo.height / 2}
            className='cursor-pointer'
          />
          {/* <Image
            src='/../public/assets/shared/desktop/logo-dark.png'
            alt='logo-dark'
            width={'202px'}
            height={'27px'}
            className='cursor-pointer'
          /> */}
        </Link>

        <svg
          onClick={handleNav}
          className='md:hidden'
          width={nav ? '20' : '24'}
          height='20'
          xmlns='http://www.w3.org/2000/svg'
        >
          {nav ? (
            <path
              d='M17.071.1L19.9 2.93l-7.071 7.07 7.071 7.072-2.828 2.828L10 12.828l-7.071 7.071L.1 17.071 7.17 10 .102 2.929 2.929.1l7.07 7.07 7.072-7.07z'
              fill='#1D1C1E'
              fillRule='evenodd'
            />
          ) : (
            <g fill='#1D1C1E' fillRule='evenodd'>
              <path d='M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z' />
            </g>
          )}
        </svg>

        <ul className='hidden md:flex md:w-[370px] justify-between text-[14px] uppercase tracking-[2px]'>
          <Link href={'/about'}>
            <li className=' hover:underline cursor-pointer'>Our Company</li>
          </Link>
          <Link href={'/locations'}>
            <li className=' hover:underline cursor-pointer'>Locations</li>
          </Link>
          <Link href={'/contact'}>
            <li className=' hover:underline cursor-pointer'>Contact</li>
          </Link>
        </ul>
      </div>

      {nav && (
        <div className='fixed top-[96px] w-full h-screen md:hidden z-10 bg-black/70'>
          <div>
            <ul className='flex flex-col h-[235px] bg-black text-white justify-between text-[24px] leading-[25px] uppercase tracking-[2px] px-6 py-[48px]'>
              <Link href={'/about'}>
                <li className=' font-normal'>Our Company</li>
              </Link>
              <Link href={'/locations'}>
                <li className=' font-normal'>Locations</li>
              </Link>
              <Link href={'/contact'}>
                <li className=' font-normal'>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='fixed w-full h-24 md:h-[155px] flex items-center justify-between px-6 md:px-[39px] lg:px-[165px]'>
      <Image
        src='/../public/assets/shared/desktop/logo-dark.png'
        alt='logo-dark'
        width={'202px'}
        height={'27px'}
      />
      <svg
        className='md:hidden'
        width='24'
        height='20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g fill='#1D1C1E' fillRule='evenodd'>
          <path d='M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z' />
        </g>
      </svg>
      <ul className='hidden md:flex md:w-[370px] justify-between text-[14px] uppercase tracking-[2px]'>
        <li>Our Company</li>
        <li>Locations</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;

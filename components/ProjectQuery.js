import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import svg from '../public/assets/shared/desktop/bg-pattern-call-to-action.svg';

const ProjectQuery = () => {
  const [size, setSize] = useState(null);

  useEffect(() => {
    setSize(window.innerWidth);
  }, []);

  useEffect(() => {
    const resizer = window.addEventListener('resize', (e) => {
      setSize(e.target.innerWidth);
    });

    return window.removeEventListener('resize', resizer);
  }, []);
  return (
    <div className=' z-10 relative overflow-hidden h-[379px] md:h-[350px] lg:h-[292px] mx-6 md:mx-[39px] lg:mx-[165px] bg-peach rounded-[15px] text-center flex flex-col lg:flex-row justify-center lg:justify-between items-center translate-y-1/2 md:translate-y-1/4'>
      <div className='absolute top-[12%] right-[-30%] scale-[2] md:scale-[1] md:top-auto md:left-auto md:right-[-20%] lg:-top-1/2 lg:left-auto lg:right-0 z-[-1]'>
        <Image
          src={svg.src}
          height={svg.height}
          width={svg.width}
          alt={'circle watermark'}
        />
      </div>
      <div className='mx-6 md:mx-[58px] lg:w-[459px] h-[163px] md:h-[148px] flex flex-col justify-around items-center lg:items-start lg:ml-[95px] lg:text-left '>
        <h4 className='text-white font-medium text-[32px] leading-[35px] w-[279px]'>
          Let&apos;s talk about your project
        </h4>
        <p className='text-white text-[15px] leading-[25px] md:w-[445px]'>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <Link href={'/contact'}>
        <button className='lg:mr-[95px] mt-[32px] lg:mt-0'>Get in touch</button>
      </Link>
    </div>
  );
};

export default ProjectQuery;

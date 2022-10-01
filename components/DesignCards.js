import svg from '../public/assets/shared/desktop/icon-right-arrow.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const DesignCards = ({ cards }) => {
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

  const designCards = cards.map((card, index) => {
    const url =
      size < 768
        ? card.mobile.src
        : size < 1440
        ? card.tablet.src
        : cards.length === 2 && card.heading === 'web design'
        ? card.desktopSmall.src
        : card.desktop.src;
    const height =
      size < 768
        ? card.mobile.height
        : size < 1440
        ? card.tablet.height
        : cards.length === 2 && card.heading === 'web design'
        ? card.desktopSmall.height
        : card.desktop.height;
    const width =
      size < 768
        ? card.mobile.width
        : size < 1440
        ? card.tablet.width
        : cards.length === 2 && card.heading === 'web design'
        ? card.desktopSmall.width
        : card.desktop.width;
    return (
      <Link key={card.heading} href={`/${card.heading.split(' ').join('')}`}>
        <div
          className={`relative text-white overflow-hidden rounded-[15px] ${
            card.heading === 'web design' && cards.length === 3
              ? 'lg:row-span-2 lg:justify-self-end'
              : cards.length === 2 && index === 0
              ? 'lg:justify-self-end'
              : 'lg:justify-self-start'
          }`}
          style={{ height: height, width: size >= 1440 ? width : '100%' }}
        >
          <Image
            src={url}
            alt={card.heading}
            height={height}
            width={width}
            className='absolute top-0 left-0 rounded-[15px]'
            layout='responsive'
          />
          <div className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full text-center z-10 pointer-events-none'>
            <h2 className='uppercase'>{card.heading}</h2>
            <div></div>
            <p className='uppercase text-[15px] tracking-[5px] font-medium'>
              view projects&nbsp;
              <Image
                src={svg.src}
                alt={'arrow'}
                height={svg.height}
                width={svg.width}
              />
            </p>
          </div>
          <div className='absolute top-0 left-0 w-full h-full bg-darkGrey opacity-70 hover:bg-peach cursor-pointer'></div>
        </div>
      </Link>
    );
  });
  return (
    <div className='flex flex-col gap-6 lg:grid lg:grid-cols-2 items-center justify-center mx-6 md:mx-[39px] lg:mx-[164px] my-[120px]'>
      {designCards}
    </div>
  );
};

export default DesignCards;

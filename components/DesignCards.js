import desktopWebImage from '../public/assets/home/desktop/image-web-design-large.jpg';
import desktopGraphicImage from '../public/assets/home/desktop/image-graphic-design.jpg';
import desktopAppImage from '../public/assets/home/desktop/image-app-design.jpg';

import mobileWebImage from '../public/assets/home/mobile/image-web-design.jpg';
import mobileGraphicImage from '../public/assets/home/mobile/image-graphic-design.jpg';
import mobileAppImage from '../public/assets/home/mobile/image-app-design.jpg';

import tabletWebImage from '../public/assets/home/tablet/image-web-design.jpg';
import tabletGraphicImage from '../public/assets/home/tablet/image-graphic-design.jpg';
import tabletAppImage from '../public/assets/home/tablet/image-app-design.jpg';

import svg from '../public/assets/shared/desktop/icon-right-arrow.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';

console.log(svg);

const cards = [
  {
    heading: 'web design',
    mobile: mobileWebImage,
    tablet: tabletWebImage,
    desktop: desktopWebImage,
  },
  {
    heading: 'app design',
    mobile: mobileAppImage,
    tablet: tabletAppImage,
    desktop: desktopAppImage,
  },
  {
    heading: 'graphic design',
    mobile: mobileGraphicImage,
    tablet: tabletGraphicImage,
    desktop: desktopGraphicImage,
  },
];

const DesignCards = () => {
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
        : card.desktop.src;
    const height =
      size < 768
        ? card.mobile.height
        : size < 1440
        ? card.tablet.height
        : card.desktop.height;
    const width =
      size < 768
        ? card.mobile.width
        : size < 1440
        ? card.tablet.width
        : card.desktop.width;
    return (
      <div
        key={card.heading}
        // className={`relative text-white overflow-hidden rounded-[15px]`}
        className={`relative text-white overflow-hidden rounded-[15px] ${
          card.heading === 'web design'
            ? 'lg:row-span-2 lg:justify-self-end'
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
        <div className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full text-center z-10'>
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
        <div className='absolute top-0 left-0 w-full h-full bg-black/70'></div>
      </div>
    );
  });
  return (
    <div className='flex flex-col gap-6 lg:grid lg:grid-cols-2 items-center justify-center mx-6 md:mx-[39px] lg:mx-[164px] my-[120px]'>
      {designCards}
    </div>
  );
};

export default DesignCards;

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const AboutInfo = ({ section, about }) => {
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

  const aboutImage = section.images.map((card, index) => {
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
      <div key={card.mobile.url} className='w-full'>
        <Image
          src={url}
          height={height}
          width={width}
          alt={'about-image'}
          layout='responsive'
        />
      </div>
    );
  });
  const paragraphs = section.paragraphs.map((paragraph) => {
    return (
      <p
        key={paragraph}
        className={` text-[15px] ${about ? 'text-white' : 'text-black'} `}
      >
        {paragraph}
      </p>
    );
  });
  return (
    <div
      className={`${
        about ? 'bg-peach mt-24 md:mt-[155px] md:mb-[120px]' : 'bg-faintPeach'
      } relative overflow-hidden md:mx-[39px] lg:mx-[165px] md:rounded-[15px] flex flex-col lg:flex-row ${
        section.heading === 'The real deal' || about
          ? 'lg:flex-row-reverse'
          : ''
      } lg:items-center lg:justify-center`}
    >
      {aboutImage}
      <div
        className={`flex flex-col items-center justify-center text-center lg:text-left mx-6 lg:mx-0 ${
          about ? 'h-[395px]' : 'h-[545px]'
        } py-[80px] lg:py-0`}
      >
        <div
          className={`flex flex-col gap-6 justify-between items-center lg:items-start ${
            about
              ? 'lg:h-[210px] lg:pl-[95px] lg:pr-[80px]'
              : 'lg:h-[332px] lg:px-[95px]'
          }  lg:w-[635px]`}
        >
          {about ? (
            <h1 className={`${about ? 'text-white' : 'text-peach'}`}>
              {section.heading}
            </h1>
          ) : (
            <h2 className={`${about ? 'text-white' : 'text-peach'}`}>
              {section.heading}
            </h2>
          )}
          {paragraphs}
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;

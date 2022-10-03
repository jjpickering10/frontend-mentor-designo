import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const AboutInfo = ({ section }) => {
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
    return <p key={paragraph}>{paragraph}</p>;
  });
  return (
    <div
      className={`bg-faintPeach relative overflow-hidden md:mx-[39px] lg:mx-[165px] md:rounded-[15px] flex flex-col lg:flex-row ${
        section.heading === 'The real deal' ? 'lg:flex-row-reverse' : ''
      } lg:items-center lg:justify-center`}
    >
      {aboutImage}
      <div className='flex flex-col items-center justify-center text-center lg:text-left mx-6 lg:mx-0 h-[545px] py-[80px] lg:py-0'>
        <div className='h-[360px] flex flex-col justify-between items-center lg:items-start lg:h-[332px] lg:w-[635px] lg:px-[95px]'>
          <h2 className='text-peach'>{section.heading}</h2>
          {paragraphs}
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;

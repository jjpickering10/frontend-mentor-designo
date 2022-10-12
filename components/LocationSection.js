import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const LocationSection = ({ locations }) => {
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

  const newLocations = locations.map((location) => {
    const newParagraphs = location.paragraphs.map((p) => {
      return (
        <div key={p.heading} className='md:w-[255px]'>
          <p className=' font-bold'>{p.heading}</p>
          <p>{p.p1}</p>
          <p>{p.p2}</p>
        </div>
      );
    });
    const url =
      size < 768
        ? location.images[0].mobile.src
        : size < 1440
        ? location.images[0].tablet.src
        : location.images[0].desktop.src;
    const height =
      size < 768
        ? location.images[0].mobile.height
        : size < 1440
        ? location.images[0].tablet.height
        : location.images[0].desktop.height;
    const width =
      size < 768
        ? location.images[0].mobile.width
        : size < 1440
        ? location.images[0].tablet.width
        : location.images[0].desktop.width;
    return (
      <div
        key={location.location}
        className={`md:mx-[39px] lg:mx-[165px] lg:h-[326px] flex flex-col ${
          location.location === 'Australia'
            ? 'lg:flex-row'
            : 'lg:flex-row-reverse'
        } md:gap-8 lg:gap-[30px] lg:justify-center`}
      >
        <div className='w-full lg:w-fit md:rounded-[15px] overflow-hidden'>
          <Image
            src={url}
            height={size < 1440 ? height : '326px'}
            width={size < 1440 ? width : '350px'}
            layout={size < 1440 ? 'responsive' : 'intrinsic'}
            alt={`location-image-${location.location}`}
            className='lg:rounded-[15px]'
          />
        </div>
        <div
          className={`relative overflow-hidden bg-faintPeach flex flex-col gap-6 items-center md:items-start md:min-w-[730px] justify-center px-6 py-20 md:p-[90px] text-center md:text-left md:rounded-[15px]`}
        >
          <div className='absolute top-[0%] left-[-0%] md:top-[-77%]'>
            <Image
              src={location.images[0].svg.src}
              height={location.images[0].svg.height}
              width={location.images[0].svg.width}
              alt={'circle watermark'}
            />
          </div>
          <h2 className='text-peach'>{location.location}</h2>
          <div className='relative flex flex-col md:flex-row gap-6'>
            {newParagraphs}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className='mt-24 md:mt-[155px] flex flex-col gap-10 md:gap-[120px] lg:gap-8'>
      {newLocations}
    </div>
  );
};

export default LocationSection;

import Image from 'next/image';
import React from 'react';
import svg from '../public/assets/shared/desktop/bg-pattern-leaf.svg';

const Pattern = ({ page }) => {
  return (
    <>
      {page === 'home' ||
      page === 'design' ||
      page === 'about' ||
      page === 'contact' ? (
        <div
          className={` hidden lg:block absolute ${
            page === 'home' || page === 'about'
              ? 'top-[475px]'
              : page === 'design'
              ? //   ? 'top-[47.3%]'
                'top-[281px]'
              : page === 'contact'
              ? 'top-[885px] right-0 left-auto'
              : ''
          }  left-0`}
        >
          <Image
            src={svg.src}
            alt='image-pattern-leaf'
            width={svg.width}
            height={svg.height}
          />
        </div>
      ) : (
        ''
      )}
      {page === 'home' || page === 'about' ? (
        <div
          className={`hidden lg:block absolute ${
            page === 'home'
              ? 'top-[1879px] right-0'
              : 'top-[1777px] right-[-28%]'
          } left-auto rotate-180`}
        >
          <Image
            src={svg.src}
            alt='image-pattern-leaf'
            width={svg.width}
            height={svg.height}
          />
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Pattern;

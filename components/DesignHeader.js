import Image from 'next/image';

const DesignHeader = ({ page }) => {
  return (
    <div className='z-[1] bg-peach h-[320px] md:h-[252px] overflow-hidden mt-24 md:mt-[155px] flex flex-col lg:flex-row items-center justify-center relative md:px-[39px] md:mx-[39px] lg:mx-[164px] md:rounded-[15px] mb-[60px]'>
      <div className='absolute md:hidden top-0 left-[-496px]'>
        <Image
          src={page.headerImages.mobile.src}
          height={page.headerImages.mobile.height}
          width={page.headerImages.mobile.width}
          alt={'circle watermark'}
        />
      </div>
      <div className='absolute hidden md:block lg:hidden top-[-155px] left-auto right-[-155px]'>
        <Image
          src={page.headerImages.tablet.src}
          height={page.headerImages.tablet.height}
          width={page.headerImages.tablet.width}
          alt={'circle watermark'}
        />
      </div>
      <div
        className={`absolute hidden lg:block ${
          page.header === 'Web'
            ? 'top-[-165px] left-auto right-0'
            : 'top-[-165px] left-[-57px] right-0'
        } top-[-165px] left-auto right-0`}
      >
        <Image
          src={page.headerImages.desktop.src}
          height={page.headerImages.desktop.height}
          width={page.headerImages.desktop.width}
          alt={'circle watermark'}
        />
      </div>
      <div className='lg:w-[540px] md:h-[124px] text-white flex flex-col text-center items-center justify-between mx-6 min-h-[110px] md:mx-14 lg:mt-0 z-10'>
        <h1>{page.header}</h1>
        <p className=' text-[15px] leading-[25px] md:w-[445px]'>
          {page.paragraph}
        </p>
      </div>
    </div>
  );
};

export default DesignHeader;

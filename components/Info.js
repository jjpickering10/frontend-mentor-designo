import Image from 'next/image';

const Info = ({ sections, page }) => {
  const infoSections = sections.map((section, index) => {
    return (
      <div
        className={` z-[1] flex flex-col ${
          page === 'home' ? 'md:flex-row' : ''
        } lg:flex-col justify-center md:justify-between lg:justify-center items-center mx-6 md:mx-10 text-center md:text-left lg:text-center mt-10 mb-10 md:mt-4 lg:m-0 lg:w-[350px]`}
        key={index}
      >
        <div className={`w-[202px] relative`}>
          <div
            className={`absolute top-0 left-0 ${
              section.heading === 'passionate' ||
              section.heading === 'australia'
                ? '-rotate-90'
                : section.heading === 'resourceful' ||
                  section.heading === 'united kingdom'
                ? 'rotate-180'
                : 'rotate-0'
            }`}
          >
            <Image
              src={section.background.src}
              alt={'background circle shape svg'}
              height={section.background.height}
              width={section.background.width}
            />
          </div>
          <Image
            src={section.svg.src}
            alt={section.heading + ' svg'}
            height={section.svg.height}
            width={section.svg.width}
          />
        </div>
        <div
          className={` ${
            page === 'home' ? 'md:ml-12 md:items-start' : ''
          } lg:ml-0 md:max-w-[439px] flex flex-col items-center justify-center gap-4 lg:items-center`}
        >
          <h3
            className={`uppercase mt-12 mb-8 ${
              page === 'home' ? 'md:m-0 ' : ''
            } lg:mt-12 lg:mb-8`}
          >
            {section.heading}
          </h3>
          {page === 'home' && <p>{section.paragraph}</p>}
          {page !== 'home' && (
            <button className='bg-peach text-white hover:bg-lightPeach text-[15px] tracking-[1px]'>
              {section.paragraph}
            </button>
          )}
        </div>
      </div>
    );
  });
  return (
    <div className='flex flex-col lg:flex-row lg:mx-[164px] lg:justify-between lg:mt-[160px] lg:mb-[87px]'>
      {[infoSections]}
    </div>
  );
};

export default Info;

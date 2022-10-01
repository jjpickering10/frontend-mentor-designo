import Image from 'next/image';
import passionate from '../public/assets/home/desktop/illustration-passionate.svg';
import resourceful from '../public/assets/home/desktop/illustration-resourceful.svg';
import friendly from '../public/assets/home/desktop/illustration-friendly.svg';
import background from '../public/assets/home/desktop/bg-pattern-hero-home.svg';

const sections = [
  {
    heading: 'passionate',
    paragraph:
      'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
    svg: passionate,
    background: background,
  },
  {
    heading: 'resourceful',
    paragraph:
      'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
    svg: resourceful,
    background: background,
  },
  {
    heading: 'friendly',
    paragraph:
      ' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
    svg: friendly,
    background: background,
  },
];

const Info = () => {
  const infoSections = sections.map((section, index) => {
    return (
      <div
        className={`flex flex-col md:flex-row lg:flex-col justify-center md:justify-between lg:justify-center items-center mx-6 md:mx-10 text-center md:text-left lg:text-center mt-10 mb-10 md:mt-4 lg:m-0 lg:max-w-[350px]`}
        key={index}
      >
        <div className={`w-[202px] relative rotate`}>
          <div
            className={`absolute top-0 left-0 ${
              section.heading === 'passionate'
                ? '-rotate-90'
                : section.heading === 'resourceful'
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
        <div className='md:ml-12 lg:ml-0 md:max-w-[439px] flex flex-col items-left justify-center gap-4'>
          <h3 className='uppercase mt-12 mb-8 md:m-0 lg:mt-12 lg:mb-8'>
            {section.heading}
          </h3>
          <p>{section.paragraph}</p>
        </div>
      </div>
    );
  });
  return (
    <div className='flex flex-col lg:flex-row lg:mx-[164px] lg:justify-between lg:mt-[120px] lg:mb-[60px]'>
      {[infoSections]}
    </div>
  );
};

export default Info;

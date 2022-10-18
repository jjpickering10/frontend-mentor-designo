import Image from 'next/image';
import Link from 'next/link';
import img from '../public/assets/home/desktop/image-hero-phone.png';

const Main = () => {
  return (
    <>
      <div className='z-[1] bg-peach h-[843px] lg:h-[640px] overflow-hidden mt-24 md:mt-[155px] flex flex-col lg:flex-row items-center relative md:px-[39px] lg:pr-0 md:mx-[39px] lg:mx-[164px] md:rounded-[15px] mb-[60px]'>
        <div className='lg:w-[540px] lg:h-[350px] text-white flex flex-col text-center lg:text-left items-center justify-between lg:items-start mx-6 mt-20 min-h-[312px] md:mx-14 md:mt-[60px] lg:mt-0 lg:mr-0 z-10'>
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p className=' text-[15px] leading-[25px] md:w-[445px]'>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Link href={'/about'}>
            <button>Learn More</button>
          </Link>
        </div>
        <div className='mx-[46px] lg:mx-0 w-[624px] h-[913px] relative top-[-89px] lg:top-[-30px] lg:right-[-74px] lg:left-auto lg:absolute'>
          <Image
            src={img.src}
            alt='image-phone'
            width={img.width}
            height={img.height}
          />
        </div>
        <svg
          className=' absolute top-24 left-0 md:left-1/4 lg:top-0 lg:left-auto lg:right-0'
          width='640'
          height='639'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient x1='0%' y1='50%' x2='100%' y2='50%' id='a'>
              <stop stopColor='#5D0202' stopOpacity='0' offset='0%' />
              <stop stopColor='#5D0202' stopOpacity='.498' offset='100%' />
            </linearGradient>
          </defs>
          <circle
            fill='url(#a)'
            transform='matrix(0 -1 -1 0 640 640)'
            cx='320'
            cy='320'
            r='320'
            fillRule='evenodd'
            opacity='.309'
          />
        </svg>
      </div>
    </>
  );
};

export default Main;

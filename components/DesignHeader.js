const DesignHeader = ({ page }) => {
  console.log(page);
  return (
    <div className='bg-peach h-[320px] md:h-[252px] overflow-hidden mt-24 md:mt-[155px] flex flex-col lg:flex-row items-center justify-center relative md:px-[39px] lg:pr-0 md:mx-[39px] lg:mx-[164px] md:rounded-[15px] mb-[60px]'>
      <div className='lg:w-[540px] md:h-[124px] text-white flex flex-col text-center items-center justify-between mx-6 min-h-[110px] md:mx-14 lg:mt-0 lg:mr-0 z-10'>
        <h1>{page.header}</h1>
        <p className=' text-[15px] leading-[25px] md:w-[445px]'>
          {page.paragraph}
        </p>
      </div>
    </div>
  );
};

export default DesignHeader;

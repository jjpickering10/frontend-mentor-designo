import React from 'react';

const ProjectQuery = () => {
  return (
    <div className='h-[379px] md:h-[350px] lg:h-[292px] mx-6 lg:mx-[165px] bg-peach rounded-[15px] text-center flex flex-col lg:flex-row justify-center lg:justify-between items-center translate-y-1/2 md:translate-y-1/4'>
      <div className='mx-6 md:mx-[58px] lg:w-[459px] h-[163px] md:h-[148px] flex flex-col justify-around items-center lg:items-start lg:ml-[95px] lg:text-left '>
        <h4 className='text-white font-medium text-[32px] leading-[35px] w-[279px]'>
          Let&apos;s talk about your project
        </h4>
        <p className='text-white text-[15px] leading-[25px]'>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <button className='lg:mr-[95px] mt-[32px] lg:mt-0'>Get in touch</button>
    </div>
  );
};

export default ProjectQuery;

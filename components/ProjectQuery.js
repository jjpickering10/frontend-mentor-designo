import React from 'react';

const ProjectQuery = () => {
  return (
    <div className='h-[379px] md:h-[350px] lg:h-[292px] w-[327px] md:w-[690px] lg:w-[1111px] bg-peach rounded-lg text-center flex flex-col justify-center items-center'>
      <div className='w-[279px] h-[251px] flex flex-col justify-between items-center'>
        <h4 className='text-white text-[32px] leading-[35px] w-[279px]'>
          Let&apos;s talk about your project
        </h4>
        <p className='text-white text-[15px] leading-[25px]'>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
        <button>Get in touch</button>
      </div>
    </div>
  );
};

export default ProjectQuery;

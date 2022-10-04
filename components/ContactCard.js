import React from 'react';

const ContactCard = ({ section }) => {
  console.log(section);
  return (
    <div className='bg-peach mt-24 md:mt-[155px] md:mx-[39px] lg:mx-[165px] lg:px-[95px] md:rounded-[15px] py-[72px] lg:py-[55px] text-white flex flex-col lg:flex-row gap-12 md:gap-10 lg:gap-0 text-center md:text-left lg:h-[480px] lg:justify-between'>
      <div className='flex flex-col items-center justify-center mx-6 lg:mx-0 gap-6 md:gap-8 md:px-[58px] lg:px-0 md:items-start'>
        <h1 className=''>{section.heading}</h1>
        <p className=' lg:w-[445px]'>{section.paragraphs[0]}</p>
      </div>
      <div className='flex flex-col items-center justify-center mx-6 lg:mx-0 gap-10 md:gap-6 md:px-[58px] lg:px-0 lg:w-[380px]'>
        <form
          action=''
          method='post'
          className='flex flex-col w-full lg:h-[291px]'
        >
          <input
            className='bg-peach text-white border-b-white border-b pb-[11px] pl-[13.77px] placeholder:text-white placeholder:opacity-50 focus-visible:outline-none focus-visible:border-b-[3px]'
            type='text'
            id='fname'
            name='fname'
            placeholder='Name'
          />
          <input
            className='bg-peach text-white border-b-white border-b pt-[25px] pb-[11px] pl-[13.77px] placeholder:text-white placeholder:opacity-50 focus-visible:outline-none focus-visible:border-b-[3px]'
            type='email'
            id='email'
            name='email'
            placeholder='Email Address'
          />
          <input
            className='bg-peach text-white border-b-white border-b pt-[25px] pb-[11px] pl-[13.77px] placeholder:text-white placeholder:opacity-50 focus-visible:outline-none focus-visible:border-b-[3px]'
            type='tel'
            id='phone'
            name='phone'
            placeholder='Phone'
            pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
          />
          <textarea
            id=''
            name='message'
            rows='4'
            cols='50'
            placeholder='Your Message'
            className=' bg-peach text-white border-b-white border-b pt-[25px] pb-[11px] pl-[13.77px] placeholder:text-white placeholder:opacity-50 focus-visible:outline-none focus-visible:border-b-[3px]'
          ></textarea>
        </form>
        <button className=' md:self-end'>Submit</button>
      </div>
    </div>
  );
};

export default ContactCard;

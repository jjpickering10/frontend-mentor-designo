import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import error from '../public/assets/contact/desktop/icon-error.svg';

const ContactCard = ({ section }) => {
  const initialValues = { fname: '', email: '', message: '', phone: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fname) {
      errors.fname = true;
    }
    if (!values.email) {
      errors.email = true;
    } else if (!regex.test(values.email)) {
      errors.email = true;
    }
    if (!values.message) {
      errors.message = true;
    }

    return errors;
  };
  return (
    <div className='relative overflow-hidden bg-peach mt-24 md:mt-[155px] md:mx-[39px] lg:mx-[165px] lg:px-[95px] md:rounded-[15px] py-[72px] lg:py-[55px] text-white flex flex-col lg:flex-row gap-12 md:gap-10 lg:gap-0 text-center md:text-left lg:h-[480px] lg:justify-between'>
      <div className='absolute hidden md:block md:top-[-5%] md:left-[-20%] lg:top-[-155px] lg:left-0 '>
        <Image
          src={section.headerImages.desktop.src}
          height={section.headerImages.desktop.height}
          width={section.headerImages.desktop.width}
          alt={'circle watermark'}
        />
      </div>
      <div className='absolute top-[0%] left-[-50%] right-[-108%] md:hidden'>
        <Image
          src={section.headerImages.mobile.src}
          height={section.headerImages.mobile.height}
          width={section.headerImages.mobile.width}
          alt={'circle watermark'}
        />
      </div>
      <div className='z-[1] flex flex-col items-center justify-center mx-6 lg:mx-0 gap-6 md:gap-8 md:px-[58px] lg:px-0 md:items-start'>
        <h1 className=''>{section.heading}</h1>
        <p className=' lg:w-[445px]'>{section.paragraphs[0]}</p>
      </div>
      <div className='z-[1] flex flex-col items-center justify-center mx-6 lg:mx-0 gap-10 md:gap-6 md:px-[58px] lg:px-0 lg:w-[380px]'>
        <form
          action=''
          method='post'
          className='flex flex-col w-full lg:h-[291px]'
        >
          <div className='relative'>
            <input
              className='w-full bg-peach bg-opacity-0 text-white border-b-white border-b pb-[11px] pl-[13.77px] placeholder:text-white placeholder:opacity-50 focus-visible:outline-none focus-visible:border-b-[3px]'
              type='text'
              id='fname'
              name='fname'
              placeholder='Name'
              value={formValues.fname}
              onChange={handleChange}
            />
            {formErrors.fname && (
              <p className=' flex items-center italic text-xs absolute top-[0] left-auto right-0'>
                Can&apos;t be empty
                <span className=' pl-[7px]'>
                  <Image
                    src={error.src}
                    height={error.height}
                    width={error.width}
                    alt='error'
                  />
                </span>
              </p>
            )}
          </div>
          <div className='relative'>
            <input
              className='w-full bg-peach bg-opacity-0 text-white border-b-white border-b pt-[25px] pb-[11px] pl-[13.77px] placeholder:text-white placeholder:opacity-50 focus-visible:outline-none focus-visible:border-b-[3px]'
              type='email'
              id='email'
              name='email'
              placeholder='Email Address'
              value={formValues.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <p className=' flex items-center italic text-xs absolute top-[28px] left-auto right-0'>
                Can&apos;t be empty
                <span className=' pl-[7px]'>
                  <Image
                    src={error.src}
                    height={error.height}
                    width={error.width}
                    alt='error'
                  />
                </span>
              </p>
            )}
          </div>
          <div className='relative'>
            <input
              className='w-full bg-peach bg-opacity-0 text-white border-b-white border-b pt-[25px] pb-[11px] pl-[13.77px] placeholder:text-white placeholder:opacity-50 focus-visible:outline-none focus-visible:border-b-[3px]'
              type='tel'
              id='phone'
              name='phone'
              placeholder='Phone'
              pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
              value={formValues.phone}
              onChange={handleChange}
            />
            {formErrors.phone && (
              <p className=' flex items-center italic text-xs absolute top-[28px] left-auto right-0'>
                Can&apos;t be empty
                <span className=' pl-[7px]'>
                  <Image
                    src={error.src}
                    height={error.height}
                    width={error.width}
                    alt='error'
                  />
                </span>
              </p>
            )}
          </div>
          <div className='relative'>
            <textarea
              id=''
              name='message'
              rows='4'
              cols='50'
              placeholder='Your Message'
              value={formValues.message}
              onChange={handleChange}
              className='w-full bg-peach bg-opacity-0 text-white border-b-white border-b pt-[25px] pb-[11px] pl-[13.77px] placeholder:text-white placeholder:opacity-50 focus-visible:outline-none focus-visible:border-b-[3px]'
            ></textarea>
            {formErrors.message && (
              <p className=' flex items-center italic text-xs absolute top-[28px] left-auto right-0'>
                Can&apos;t be empty
                <span className=' pl-[7px]'>
                  <Image
                    src={error.src}
                    height={error.height}
                    width={error.width}
                    alt='error'
                  />
                </span>
              </p>
            )}
          </div>
        </form>
        <button onClick={handleSubmit} className=' md:self-end'>
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactCard;

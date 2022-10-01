import Image from 'next/image';

const DesignSection = ({ page }) => {
  const designCards = page.cards.map((card, index) => {
    const url = card.image.src;
    const height = card.image.height;
    const width = card.image.width;
    return (
      <div
        key={card.header}
        className={`group relative overflow-hidden rounded-[15px] bg-faintPeach hover:bg-peach text-peach hover:text-white flex flex-col md:flex-row lg:flex-col items-center justify-center cursor-pointer`}
      >
        <Image
          src={url}
          alt={card.header}
          height={height}
          width={width}
          className='absolute top-0 left-0 rounded-t-[15px] md:rounded-tr-none'
        />
        <div className='flex flex-col items-center justify-center text-center z-10 pointer-events-none h-[158px] w-[278px] md:w-full gap-6'>
          <h3 className='uppercase'>{card.header}</h3>
          <p className='md: w-[286px] text-black group-hover:text-white'>
            {card.paragraph}
          </p>
        </div>
      </div>
    );
  });
  return (
    <div className='flex flex-col gap-10 lg:grid lg:grid-cols-3 items-center justify-center mx-6 md:mx-[39px] lg:mx-[164px] my-[120px]'>
      {designCards}
    </div>
  );
};

export default DesignSection;

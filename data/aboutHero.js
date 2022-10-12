import heroMobile from '../public/assets/about/mobile/image-about-hero.jpg';
import heroTablet from '../public/assets/about/tablet/image-about-hero.jpg';
import heroDesktop from '../public/assets/about/desktop/image-about-hero.jpg';

import mobile from '../public/assets/about/mobile/bg-pattern-hero-about-mobile.svg';
import tablet from '../public/assets/about/desktop/bg-pattern-hero-about-desktop.svg';
import desktop from '../public/assets/about/desktop/bg-pattern-hero-about-desktop.svg';

const aboutSections = [
  {
    heading: 'About Us',
    paragraphs: [
      'Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.',
    ],
    images: [{ mobile: heroMobile, tablet: heroTablet, desktop: heroDesktop }],
    headerImages: { mobile: mobile, tablet: tablet, desktop: desktop },
  },
];

export default aboutSections;

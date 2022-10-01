import desktopWebImageLarge from '../public/assets/home/desktop/image-web-design-large.jpg';
import desktopWebImageSmall from '../public/assets/home/desktop/image-web-design-small.jpg';
import desktopGraphicImage from '../public/assets/home/desktop/image-graphic-design.jpg';
import desktopAppImage from '../public/assets/home/desktop/image-app-design.jpg';

import mobileWebImage from '../public/assets/home/mobile/image-web-design.jpg';
import mobileGraphicImage from '../public/assets/home/mobile/image-graphic-design.jpg';
import mobileAppImage from '../public/assets/home/mobile/image-app-design.jpg';

import tabletWebImage from '../public/assets/home/tablet/image-web-design.jpg';
import tabletGraphicImage from '../public/assets/home/tablet/image-graphic-design.jpg';
import tabletAppImage from '../public/assets/home/tablet/image-app-design.jpg';

const cards = {
  web: {
    heading: 'web design',
    mobile: mobileWebImage,
    tablet: tabletWebImage,
    desktop: desktopWebImageLarge,
    desktopSmall: desktopWebImageSmall,
  },
  app: {
    heading: 'app design',
    mobile: mobileAppImage,
    tablet: tabletAppImage,
    desktop: desktopAppImage,
  },
  graphic: {
    heading: 'graphic design',
    mobile: mobileGraphicImage,
    tablet: tabletGraphicImage,
    desktop: desktopGraphicImage,
  },
};

export default cards;

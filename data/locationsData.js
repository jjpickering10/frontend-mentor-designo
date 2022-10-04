import canadaMobile from '../public/assets/locations/desktop/image-map-canada.png';
import canadaTablet from '../public/assets/locations/tablet/image-map-canada.png';
import canadaDesktop from '../public/assets/locations/desktop/image-map-canada.png';

import australiaMobile from '../public/assets/locations/desktop/image-map-australia.png';
import australiaTablet from '../public/assets/locations/tablet/image-map-australia.png';
import australiaDesktop from '../public/assets/locations/desktop/image-map-australia.png';

import uKMobile from '../public/assets/locations/desktop/image-map-united-kingdom.png';
import uKTablet from '../public/assets/locations/tablet/image-map-uk.png';
import uKDesktop from '../public/assets/locations/desktop/image-map-united-kingdom.png';

const locations = [
  {
    location: 'Canada',
    images: [
      { mobile: canadaMobile, tablet: canadaTablet, desktop: canadaDesktop },
    ],
    paragraphs: [
      {
        heading: 'Designo Central Office',
        p1: '3886 Wellington Street',
        p2: 'Toronto, Ontario M9C 3J5',
      },
      {
        heading: 'Contact',
        p1: 'P : +1 253-863-8967',
        p2: 'M : contact@designo.co',
      },
    ],
  },
  {
    location: 'Australia',
    images: [
      {
        mobile: australiaMobile,
        tablet: australiaTablet,
        desktop: australiaDesktop,
      },
    ],
    paragraphs: [
      {
        heading: 'Designo AU Office',
        p1: '19 Balonne Street',
        p2: 'New South Wales 2443',
      },
      {
        heading: 'Contact',
        p1: 'P : (02) 6720 9092',
        p2: 'M : contact@designo.au',
      },
    ],
  },
  {
    location: 'United Kingdom',
    images: [{ mobile: uKMobile, tablet: uKTablet, desktop: uKDesktop }],
    paragraphs: [
      {
        heading: 'Designo UK Office',
        p1: '13 Colorado Way',
        p2: 'Rhyd-y-fro SA8 9GA',
      },
      {
        heading: 'Contact',
        p1: 'P : 078 3115 1400',
        p2: 'M : contact@designo.uk',
      },
    ],
  },
];

export default locations;

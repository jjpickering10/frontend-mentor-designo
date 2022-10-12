import talentMobile from '../public/assets/about/mobile/image-world-class-talent.jpg';
import talentTablet from '../public/assets/about/tablet/image-world-class-talent.jpg';
import talentDesktop from '../public/assets/about/desktop/image-world-class-talent.jpg';

import realDealMobile from '../public/assets/about/mobile/image-real-deal.jpg';
import realDealTablet from '../public/assets/about/tablet/image-real-deal.jpg';
import realDealDesktop from '../public/assets/about/desktop/image-real-deal.jpg';

import svg from '../public/assets/shared/desktop/bg-pattern-three-circles.svg';

const sections = [
  {
    heading: 'World-class talent',
    paragraphs: [
      'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.',
      'Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.',
    ],
    images: [
      {
        mobile: talentMobile,
        tablet: talentTablet,
        desktop: talentDesktop,
        svg: svg,
      },
    ],
  },
  {
    heading: 'The real deal',
    paragraphs: [
      'As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.',
      'We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.',
    ],
    images: [
      {
        mobile: realDealMobile,
        tablet: realDealTablet,
        desktop: realDealDesktop,
        svg: svg,
      },
    ],
  },
];

export default sections;

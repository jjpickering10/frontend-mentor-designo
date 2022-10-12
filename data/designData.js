import express from '../public/assets/web-design/desktop/image-express.jpg';
import transfer from '../public/assets/web-design/desktop/image-transfer.jpg';
import photon from '../public/assets/web-design/desktop/image-photon.jpg';
import builder from '../public/assets/web-design/desktop/image-builder.jpg';
import blogr from '../public/assets/web-design/desktop/image-blogr.jpg';
import camp from '../public/assets/web-design/desktop/image-camp.jpg';

import airfilter from '../public/assets/app-design/desktop/image-airfilter.jpg';
import eyecam from '../public/assets/app-design/desktop/image-eyecam.jpg';
import faceit from '../public/assets/app-design/desktop/image-faceit.jpg';
import loopstudios from '../public/assets/app-design/desktop/image-loopstudios.jpg';
import todo from '../public/assets/app-design/desktop/image-todo.jpg';

import science from '../public/assets/graphic-design/desktop/image-science.jpg';
import change from '../public/assets/graphic-design/desktop/image-change.jpg';
import boxedWater from '../public/assets/graphic-design/desktop/image-boxed-water.jpg';

import webDesktop from '../public/assets/web-design/desktop/bg-pattern-intro-web.svg';
import appDesktop from '../public/assets/app-design/desktop/bg-pattern-intro-app.svg';
import graphicDesktop from '../public/assets/graphic-design/desktop/bg-pattern-intro-graphic.svg';
import mobile from '../public/assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg';
import tablet from '../public/assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg';

const design = {
  web: {
    header: 'Web Design',
    headerImages: { mobile: mobile, tablet: tablet, desktop: webDesktop },
    paragraph:
      'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
    cards: [
      {
        header: 'express',
        paragraph: 'A multi-carrier shipping website for ecommerce businesses',
        image: express,
      },
      {
        header: 'transfer',
        paragraph:
          'Site for low-cost money transfers and sending money within seconds',
        image: transfer,
      },
      {
        header: 'photon',
        paragraph:
          'A state-of-the-art music player with high-resolution audio and DSP effects',
        image: photon,
      },
      {
        header: 'builder',
        paragraph:
          'Connects users with local contractors based on their location',
        image: builder,
      },
      {
        header: 'blogr',
        paragraph:
          'Blogr is a platform for creating an online blog or publication',
        image: blogr,
      },
      {
        header: 'camp',
        paragraph:
          'Get expert training in coding, data, design, and digital marketing',
        image: camp,
      },
    ],
  },
  app: {
    header: 'App Design',
    headerImages: { mobile: mobile, tablet: tablet, desktop: appDesktop },
    paragraph:
      'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',
    cards: [
      {
        header: 'airfilter',
        paragraph:
          'Solving the problem of poor indoor air quality by filtering the air',
        image: airfilter,
      },
      {
        header: 'eyecam',
        paragraph:
          'Product that lets you edit your favorite photos and videos at any time',
        image: eyecam,
      },
      {
        header: 'faceit',
        paragraph:
          'Get to meet your favorite internet superstar with the faceit app',
        image: faceit,
      },
      {
        header: 'todo',
        paragraph:
          'A todo app that features cloud sync with light and dark mode',
        image: todo,
      },
      {
        header: 'loopstudios',
        paragraph: 'A VR experience app made for Loopstudios',
        image: loopstudios,
      },
    ],
  },
  graphic: {
    header: 'Graphic Design',
    headerImages: { mobile: mobile, tablet: tablet, desktop: graphicDesktop },
    paragraph:
      'We deliver eye-catching branding materials that are tailored to meet your business objectives.',
    cards: [
      {
        header: 'Tim Brown',
        paragraph:
          "A book cover designed for Tim Brown's new release, 'Change'",
        image: change,
      },
      {
        header: 'Boxed Water',
        paragraph: 'A simple packaging concept made for Boxed Water',
        image: boxedWater,
      },
      {
        header: 'Science!',
        paragraph:
          'A poster made in collaboration with the Federal Art Project',
        image: science,
      },
    ],
  },
};

export default design;

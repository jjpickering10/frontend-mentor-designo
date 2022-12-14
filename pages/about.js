import Head from 'next/head';
import AboutInfo from '../components/AboutInfo';
import Info from '../components/Info';
import countries from '../data/countriesInfo';
import sections from '../data/aboutInfo';
import aboutSections from '../data/aboutHero';
import Pattern from '../components/Pattern';

export default function About() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Designo Agency Website Challenge</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <AboutInfo section={aboutSections[0]} about={true} />
      <AboutInfo section={sections[0]} about={false} />
      <Info sections={countries} page={'about'} />
      <AboutInfo section={sections[1]} about={false} />
      <Pattern page={'about'} />
    </>
  );
}

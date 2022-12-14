import Head from 'next/head';
import Main from '../components/Main';
import Info from '../components/Info';
import DesignCards from '../components/DesignCards';
import cards from '../data/designCardData';
import sections from '../data/homeInfo';
import Pattern from '../components/Pattern';

export default function Home() {
  const cardArray = [];
  for (let key in cards) {
    if (cards.hasOwnProperty(key)) {
      let value = cards[key];
      cardArray.push(value);
    }
  }
  return (
    <>
      <Head>
        <title>Frontend Mentor | Designo Agency Website Challenge</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main />
      <DesignCards cards={cardArray} />
      <Info sections={sections} page={'home'} />
      <Pattern page={'home'} />
    </>
  );
}

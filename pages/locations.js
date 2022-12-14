import Head from 'next/head';
import LocationSection from '../components/LocationSection';
import locations from '../data/locationsData';

export default function Locations() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Designo Agency Website Challenge</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <LocationSection locations={locations} />
    </>
  );
}

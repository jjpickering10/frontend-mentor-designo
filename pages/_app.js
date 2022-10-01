import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectQuery from '../components/ProjectQuery';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      {router.pathname != '/contact' && <ProjectQuery />}
      <Footer />
    </>
  );
}

export default MyApp;

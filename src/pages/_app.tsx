import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import '@/styles/globals.css';
import Head from 'next/head';
import HomePage from '.';
import Services from './services';
import About from './about';
import Offers from './offers';
import Contact from './contact';

function MyApp() {
  const router = useRouter();

  const renderPage = () => {
    switch (router.pathname) {
      case '/services':
        return <Services />;
      case '/about':
        return <About />;
      case '/offers':
        return <Offers />;
      case '/contact':
        return <Contact />;
      default:
        return <HomePage />;
    }
  };

  return (
    <ChakraProvider>
      <Head>
        <title>ECOTEC CS</title> 
      </Head>
      {renderPage()}
    </ChakraProvider>
  );
}

export default MyApp;

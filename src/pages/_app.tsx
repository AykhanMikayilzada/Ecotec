import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import '@/styles/globals.css';
import HomePage from './HomePage';
import Head from 'next/head';

function MyApp() {
  return (
    <ChakraProvider>
      <Head>
        <title>Ecotec CS My App</title> 
      </Head>
      <HomePage />
    </ChakraProvider>
  );
}

export default MyApp;

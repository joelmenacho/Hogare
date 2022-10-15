import React from "react";
import Head from 'next/head';

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from "../components/Footer";
import Banner from "../components/Banner";

// Scroll To Top Hook
import useScrollTop from '../Hooks/useScrollTop';

export default function Home() {

  useScrollTop();
  
  return (
    <div>
      <Head>
        <title>Hogar Menacho Store</title>
        <meta name="description" content="Responsive, clean and open source food delivery app using Next.js & Tailwind CSS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-3 max-w-7xl m-auto">
        <Navbar />
        <Hero />
        <Banner />

        <Footer />
      </div>
    </div>
  )
}
import Head from 'next/head';
// import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Donations from '../components/Donations';
// import InstagramEmbed from 'react-instagram-embed';

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Head>
        <title>PRESERVATE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <Navbar />
      <Hero />
      <About />
      <Donations />
      <footer>Hecho con 💚 por AgusMar y GianB</footer>
    </div>
  );
}

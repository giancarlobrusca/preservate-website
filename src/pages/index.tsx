import Head from 'next/head';
import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
// import InstagramEmbed from 'react-instagram-embed';

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Head>
        <title>PRESERVATE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <footer>Hecho con 💚 por AgusMar y GianB</footer>
    </div>
  );
}

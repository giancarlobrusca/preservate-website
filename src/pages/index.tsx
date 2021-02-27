import Head from 'next/head';
import Header from '../components/Header';
import InstagramEmbed from 'react-instagram-embed';

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-yellow-300">
      <Head>
        <title>PRESERVATE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="p-10">
        <InstagramEmbed
          url="https://www.instagram.com/p/CLp3vqYBSrq/?utm_source=ig_web_copy_link"
          clientAccessToken="1310888445964786|863fbb5153d3191d3199801e33464b18"
          maxWidth={320}
        />
      </main>
      <footer></footer>
    </div>
  );
}

import { AppHead, Hero, Donations, About, Navbar, Footer } from '../components';
// import Header from '../components/Header';
// import InstagramEmbed from 'react-instagram-embed';

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <AppHead />
      <Navbar />
      <Hero />
      <About />
      <Donations />
      <Footer />
    </div>
  );
}

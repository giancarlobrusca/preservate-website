import { AppHead, Hero, Donations, About, Navbar, Footer } from '../components';

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <AppHead />
      <Hero />
      <About />
      <Donations />
    </div>
  );
}

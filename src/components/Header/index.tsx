import Link from 'next/link';

const navItems = [
  { title: 'Nosotros', link: '/nosotros' },
  { title: 'Biblioteca', link: '/' },
  { title: 'Actividades Online', link: '/' },
  { title: 'Contacto', link: '/' },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-lg">
      <nav className="container flex items-center justify-between mx-auto">
        <div className="py-1 ml-10">
          <Link href="/">
            <a>
              <img
                src="/img/logo.jpg"
                alt="Logo Preservate"
                className="p-2 transition duration-150 border-2 border-transparent rounded-full hover:border-yellow-500"
                style={{ width: '70px' }}
              />
            </a>
          </Link>
        </div>
        <div className="flex w-full" style={{ width: '700px' }}>
          {navItems.map((item) => (
            <Link href={item.link} key={item.link}>
              <a className="w-full px-4 py-2 font-medium text-center transition duration-200 hover:text-yellow-400">
                {item.title}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;

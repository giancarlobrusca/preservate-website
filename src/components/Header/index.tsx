import Link from 'next/link';

const navItems = [
  { title: 'Nosotros', link: '/nosotros' },
  { title: 'Biblioteca', link: '/' },
  { title: 'Actividades Online', link: '/' },
  { title: 'Contacto', link: '/' },
];

const Header = () => {
  return (
    <header className="sticky top-0 w-full bg-white shadow-lg z-50">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="ml-10 py-1">
          <Link href="/">
            <a>
              <img
                src="/img/logo.jpg"
                alt="Logo Preservate"
                className="p-2 rounded-full  border-2 border-transparent hover:border-yellow-500 transition duration-150"
                style={{ width: '70px' }}
              />
            </a>
          </Link>
        </div>
        <div className="flex w-full" style={{ width: '700px' }}>
          {navItems.map((item) => (
            <Link href={item.link} key={item.link}>
              <a className="w-full px-4 py-2 text-center font-medium transition duration-200 hover:text-yellow-400">
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

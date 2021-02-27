import Link from 'next/link';

const navItems = [
  { title: 'Nosotros', link: '/nosotros' },
  { title: 'Biblioteca', link: '/' },
  { title: 'Contacto', link: '/' },
  { title: 'Actividades Online', link: '/' },
];

const Header = () => {
  return (
    <header className="w-full bg-gray-900 shadow-lg z-50">
      <nav className="w-full flex items-center justify-between px-4">
        <div className="ml-20">
          <Link href="/">
            <a>
              <img src="/logo.png" alt="Logo Preservate" className="p-2" />
            </a>
          </Link>
        </div>
        <div className="flex w-full" style={{ width: '700px' }}>
          {navItems.map((item) => (
            <Link href={item.link} key={item.link}>
              <a className="w-full px-4 py-2 text-center text-white font-medium transition duration-200 hover:text-yellow-400">
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

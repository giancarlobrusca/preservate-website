import Link from 'next/link';

const navItems = [
  { title: 'Nosotros', link: '/nosotros' },
  { title: 'Biblioteca', link: '/biblioteca' },
  { title: 'Contacto', link: '/contacto' },
  { title: 'Actividades Online', link: '/actividades' },
];

const Header = () => {
  return (
    <header className="w-full bg-yellow-400 shadow-lg z-50">
      <nav className="w-full flex items-center justify-between px-4">
        <div>
          <Link href="/">
            <a>
              <img src="/logo.png" alt="Logo Preservate" className="p-2" />
            </a>
          </Link>
        </div>
        <div className="flex w-full">
          {navItems.map((item) => (
            <Link href="/" key={item.link}>
              <a className="w-full px-4 py-2 text-center text-white font-medium transition duration-200 hover:text-gray-800">
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

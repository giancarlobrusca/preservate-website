import Link from 'next/link';
import { useState } from 'react';
import styles from './navbar.module.css';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className={styles.wrapper}>
      <nav className="container flex items-center w-full mx-auto">
        <a href="/" className="inline-flex items-center p-2 mr-4 ">
          <Link href="/">
            <img
              src="/img/logo.jpg"
              alt="Logo Preservate"
              className="p-2 transition duration-150 border-2 border-transparent rounded-full"
              style={{ width: '70px' }}
            />
          </Link>
          <span className="text-xl font-bold tracking-wide text-gray-900 uppercase hover:text-yellow-300">
            PRESERVATE
          </span>
        </a>
        <button
          className="inline-flex p-3 ml-auto text-gray-900 rounded outline-none hover:bg-yellow-300 lg:hidden hover:text-white"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
            <Link href="/nosotros">
              <a className="items-center justify-center w-full px-3 py-2 text-lg font-medium text-gray-800 rounded lg:inline-flex lg:w-auto hover:text-yellow-300 ">
                Nuestro Equipo
              </a>
            </Link>

            <Link href="/galleries">
              <a className="items-center justify-center w-full px-3 py-2 text-lg font-medium text-gray-800 rounded lg:inline-flex lg:w-auto hover:text-yellow-300">
                Galería
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex flex-wrap items-center w-full bg-white shadow-md'>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <Link href="/">
              <a>
                <img
                  src="/img/logo.jpg"
                  alt="Logo Preservate"
                  className="p-2 transition duration-150 border-2 border-transparent rounded-full"
                  style={{ width: '70px' }}
                />
              </a>
            </Link>
            <span className='text-xl font-bold tracking-wide text-gray-900 uppercase hover:text-yellow-300'>
              PRESERVATE
            </span>
          </a>
        </Link>
        <button
          className='inline-flex p-3 ml-auto text-gray-900 rounded outline-none hover:bg-yellow-300 lg:hidden hover:text-white'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto'>
            <Link href='/nosotros'>
              <a className='items-center justify-center w-full px-3 py-2 text-lg font-medium text-gray-800 rounded lg:inline-flex lg:w-auto hover:text-yellow-300 '>
                Nosotros
              </a>
            </Link>
            <Link href='/'>
              <a className='items-center justify-center w-full px-3 py-2 text-lg font-medium text-gray-800 rounded lg:inline-flex lg:w-auto hover:text-yellow-300'>
              Biblioteca
              </a>
            </Link>
            <Link href='/'>
              <a className='items-center justify-center w-full px-3 py-2 text-lg font-medium text-gray-800 rounded lg:inline-flex lg:w-auto hover:text-yellow-300'>
                Actividades Online
              </a>
            </Link>
            <Link href='/'>
              <a className='items-center justify-center w-full px-3 py-2 text-lg font-medium text-gray-800 rounded lg:inline-flex lg:w-auto hover:text-yellow-300'>
                Contacto
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
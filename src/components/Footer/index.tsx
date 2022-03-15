import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="container flex flex-col items-center py-8 mx-auto">
      <div className="flex flex-col w-full lg:flex-row lg:items-center">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
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
            <span className="text-xl font-bold tracking-wide text-gray-900 uppercase hover:text-yellow-300">
              PRESERVATE
            </span>
          </a>
        </Link>
        <div className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
          <Link href="https://www.facebook.com/Preservate-315693722696751">
            <a className="text-gray-500 hover:text-yellow-300">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
          </Link>
          <Link href="https://twitter.com/preservate__">
            <a className="ml-3 text-gray-500 hover:text-yellow-300">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
          </Link>
          <Link href="https://www.instagram.com/preservate_/">
            <a className="ml-3 text-gray-500 hover:text-yellow-300">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </Link>
        </div>
      </div>
      <div>
        <p className="text-lg text-gray-700">
          Hecho con 💚 por AgusMar y GianB
        </p>
      </div>
    </footer>
  );
};

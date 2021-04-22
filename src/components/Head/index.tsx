import Head from 'next/head';

export const AppHead = () => {
  return (
    <Head>
      <title>PRESERVATE</title>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

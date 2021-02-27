import Head from 'next/head';
import Header from '../../components/Header';

export default function Nosotros() {
  return (
    <div className="flex flex-col items-center bg-gray-900">
      <Head>
        <title>PRESERVATE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main
        className="p-10 text-xl text-white font-medium"
        style={{ height: '40vw' }}
      >
        <p>
          Somos un colectivo de graduados y estudiantes de Medicina con fuerte
          compromiso social. El Proyecto Preservate surge con el objetivo de
          brindar educación sexual integral, con respaldo científico a través de
          un lenguaje claro para que todas las personas puedan comprenderlo. En
          nuestros talleres se trabajan diversos ejes temáticos con materiales y
          contenidos específicos, diseñados y adaptados por nuestro equipo para
          cada grupo etario.
        </p>

        <p>
          Los contenidos desarrollados en nuestras actividades se adecúan a la
          propuesta de Educación Sexual Integral brindada por el Ministerio de
          Educación de la Nación. Trabajamos dictando talleres y conferencias,
          presenciales y virtuales, sobre cuestiones relativas a la sexualidad
          saludable en alianza con instituciones públicas y privadas,
          especialmente, aquellas que se encuentren emplazadas en contextos
          vulnerables y realizamos abordajes interdisciplinarios orientados en
          función de la audiencia.
        </p>
      </main>
      <footer></footer>
    </div>
  );
}

import Head from 'next/head';
import Header from '../../components/Header';

export default function Nosotros() {
  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>PRESERVATE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container mx-auto p-10 text-xl text-gray-500">
        <h1 className="text-yellow-400 text-5xl text-center m-10">
          QUIENES SOMOS
        </h1>
        <p>
          Somos un colectivo de graduados y estudiantes de Medicina con fuerte
          compromiso social. El <b>Proyecto Preservate</b> surge con el objetivo
          de brindar educación sexual integral, con respaldo científico a través
          de un lenguaje claro para que todas las personas puedan comprenderlo.
          En nuestros talleres se trabajan diversos ejes temáticos con
          materiales y contenidos específicos, diseñados y adaptados por nuestro
          equipo para cada grupo etario.
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

        <h1 className="text-yellow-400 text-5xl text-center m-10">
          NUESTRA MISIÓN
        </h1>

        <p>
          Nuestro objetivo es brindar información en un lenguaje claro y
          sencillo para que todas las personas puedan tomar decisiones de una
          manera libre e informada. Promovemos un concepto integral de salud por
          lo que abordamos cada uno de los ejes desde esta amplia perspectiva.
          Se trabajarán temáticas tales como el uso de métodos anticonceptivos,
          la prevención de enfermedades de transmisión sexual y la prevención de
          embarazos no planificados; así como temas relacionados al género y a
          la reflexión sobre los estereotipos sociales. Creemos en el ejercicio
          de una sexualidad responsable donde los actos sean consensuados y se
          realicen en un marco de respeto mutuo, teniendo en cuenta la
          diversidad sexual.
        </p>
      </main>
      <footer></footer>
    </div>
  );
}

export const About = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 mx-auto md:py-24 md:flex-row bg-blue-50 mb-24">
      <div className="w-450 mb-10 lg:max-w-lg lg:w-full md:mb-0">
        <img src="/img/todes.png" alt="personas" />
      </div>
      <div className="flex flex-col items-center md:w-1/2 md:p-0 md:items-start md:text-left">
        <h1 className="text-2xl items-center font-medium text-gray-900 lg:text-5xl title-font">
          Sobre Preservate:
        </h1>
        <p className="mb-2 text-justify font-normal leading-relaxed text-gray-500 text-md lg:text-2xl">
          Somos un <b>equipo interdisciplinario</b> de estudiantes y
          profesionales de las áreas de medicina, psicología, docencia, trabajo
          social, entre otras. Luchamos por la vivencia de una{' '}
          <b>sexualidad libre, sin mitos ni tabúes</b>. Desde el equipo
          trabajamos para fomentar la <b>Educación Sexual Integral (ESI)</b> con
          una perspectiva diversa e inclusiva.
        </p>
        <p className="font-light text-justify leading-relaxed text-gray-500 text-md lg:text-2xl">
          <b>
            Lo hacemos a través de charlas y talleres en instituciones formales
            e informales como colegios, hogares y empresas de manera voluntaria.
          </b>
        </p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="container flex flex-col items-center justify-center p-10 mx-auto md:py-24 md:flex-row bg-blue-50">
      <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:mb-0">
        <img src="/img/todes.png" alt="personas" />
      </div>
      <div className="flex flex-col items-center text-center md:w-1/2 md:p-0 md:items-start md:text-left">
        <h1 className="text-2xl font-medium text-gray-900 lg:text-5xl title-font">Sobre Preservate
        </h1>
        <p className="mb-2 font-normal leading-relaxed text-gray-500 text-md lg:text-2xl"><b>Somos un equipo interdisciplinario</b> de estudiantes y 
        graduados de medicina, psicología y docentes <b>por una sexualidad sin mitos ni tabúes. </b> Desde el equipo trabajamos para fomentar la Educación Sexual Integral (ESI) con una perspectiva diversa e inclusiva.</p>
        <p className="font-light leading-relaxed text-gray-500 text-md lg:text-2xl"><b>Lo hacemos a través de charlas y talleres en colegios, 
        hogares y empresas, pero sobre todo de forma voluntaria y gratuita.</b></p>
      </div>
    </div>
  );
};

export default About;
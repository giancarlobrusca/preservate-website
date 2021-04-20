const Hero = () => {
  return (
    <div className="flex flex-col justify-around w-full h-full p-12 bg-center bg-contain lg:items-center md:px-24 lg:flex-row">
      <div>
        <h1 className="text-4xl font-semibold md:text-6xl lg:text-5xl xl:text-6xl">La salud sexual</h1>
        <h1 className="-mt-3 text-4xl font-semibold md:-mt-6 md:text-6xl lg:text-5xl xl:text-6xl">es un <span className="underline">derecho,</span></h1>
        <h1 className="-mt-3 text-4xl font-semibold md:-mt-6 md:text-6xl lg:text-5xl xl:text-6xl">no un privilegio.</h1>
        <h2 className="text-xl font-medium lg:pb-36 md:text-3xl">Asociación Civil Preservate</h2>
      </div>
      <div>
        <img src="/img/esi.png" alt="esi" />
      </div>
    </div>
  );
};

export default Hero;

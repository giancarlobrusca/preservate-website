import Image from 'next/image';

export const PersonaCard = ({ persona }) => {
  return (
    <div className="p-4 text-center rounded-lg shadow-lg flex flex-col justify-between w-full">
      <div className="flex flex-col items-center">
        <img
          src={persona.imageUrl}
          alt="User Img Placeholder"
          className="object-cover object-top w-28 h-28 ring ring-yellow-400 rounded-full shadow-lg mb-4"
        />
        <div className="flex-grow">
          <h1 className="leading-none text-xl font-bold tracking-tighter mb-1">
            {persona.title}
          </h1>
          <h2 className="leading-none tracking-tighter mb-1">{persona.rol}</h2>
          <h3 className="leading-none tracking-tighter">{persona.age} Años</h3>
        </div>
      </div>
      <div className="text-center text-sm w-full h-full items-center justify-center my-4 whitespace-pre-line">
        {persona.bio.map((block) => {
          return <p key={block.children[0].text}>{block.children[0].text}</p>;
        })}
      </div>
    </div>
  );
};

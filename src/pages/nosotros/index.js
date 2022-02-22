import { AppHead, Navbar, PersonaCard } from '../../components';
import { getPersons, getPrincipals } from '../../lib/api';

export default function QuienesSomos({ principals, persons }) {
  return (
    <div className="flex flex-col items-center">
      <AppHead />
      <Navbar />
      <main className="container px-4 pt-16 mx-auto text-gray-500">
        <h1 className="text-6xl mt-2 leading-snug tracking-tight py-20 text-center">
          Conocé a nuestro equipo
        </h1>
        <div className="grid grid-cols-1 gap-8 px-6 py-5 text-gray-700 md:grid-cols-2 lg:grid-cols-3 place-content-stretch">
          {principals.map((person) => (
            <PersonaCard key={person.title} persona={person} />
          ))}
        </div>
        <h2 className="text-6xl mt-2 leading-snug tracking-tight py-20 text-center">
          Y a quienes colaboran con nosotros
        </h2>
        <div className="grid grid-cols-1 gap-8 px-6 py-5 text-gray-700 md:grid-cols-2 lg:grid-cols-3 place-content-stretch">
          {persons.map((person) => (
            <PersonaCard key={person.title} persona={person} />
          ))}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export const getServerSideProps = async () => {
  const persons = await getPersons();
  const principals = await getPrincipals();

  return {
    props: { persons, principals },
  };
};

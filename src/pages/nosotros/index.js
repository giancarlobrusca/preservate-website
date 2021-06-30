import { AppHead, Navbar, PersonaCard } from '../../components';
import { getPersons } from '../../lib/api';

export default function QuienesSomos({ persons }) {
  console.log(persons);
  return (
    <div className="flex flex-col items-center">
      <AppHead />
      <Navbar />
      <main className="container px-4 pt-16 mx-auto text-gray-500">
        <h1 className="text-6xl mt-2 leading-snug tracking-tight py-20 text-center">
          Conocé a nuestro equipo
        </h1>
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

export const getStaticProps = async (preview = false) => {
  const persons = await getPersons(preview);

  return {
    props: { persons },
  };
};

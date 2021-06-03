import { AppHead, Navbar } from '../../components';
import { getPersons } from '../../lib/api';

export default function QuienesSomos({persons}) {
  console.log(persons)
  return (
    <div className="flex flex-col items-center">
      <AppHead />
      <Navbar />
      <main className="container p-10 mx-auto text-xl text-gray-500">
        <h1 className="m-10 text-5xl text-center text-yellow-400">
          Quienes somos
        </h1>
        {persons.map(person => (
          <p>{person.title}</p>
        ))}
      </main>
      <footer></footer>
    </div>
  );
}

export const getStaticProps = async (preview = false) => {
  const persons = await getPersons(preview)

  return {
    props: {persons}
  }
}

import { AppHead, Navbar, PersonaCard } from '../../components';
import { getPersons, getPrincipals } from '../../lib/api';
import styles from './nosotros.module.css';

export default function QuienesSomos({ principals, persons }) {
  return (
    <div className={styles.wrapper}>
      <AppHead />
      <main>
        <h1 className={styles.title}>Conocé a nuestro equipo</h1>
        <div className="grid grid-cols-1 gap-8 py-5 text-gray-700 md:grid-cols-2 lg:grid-cols-3 place-content-stretch">
          {principals.map((person) => (
            <PersonaCard key={person.title} persona={person} />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-8 py-5 text-gray-700 md:grid-cols-2 lg:grid-cols-3 place-content-stretch">
          {persons.map((person) => (
            <PersonaCard key={person.title} persona={person} />
          ))}
        </div>
      </main>
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

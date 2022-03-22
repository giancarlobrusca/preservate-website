import { useState } from 'react';
import { AppHead } from '../../components';
import { Form } from '../../components/Form';
import styles from './contact.module.scss';

export default function Contact() {
  const [type, setType] = useState(null);

  return (
    <>
      <AppHead />
      <main>
        <h1 className={styles.title}>Contactate con nosotros</h1>
        <div className={styles.introText}>
          <h2>¡Hola!</h2>
          <h3>
            Somos la Asociación Civil Preservate para la promoción de la Salud
            Sexual.
          </h3>
          <h4>
            Preservate es un equipo interdisciplinario formado por estudiantes y
            profesionales de las áreas de Medicina, Docencia, Periodismo,
            Trabajo Social y Psicología, entre otras.
          </h4>
          <p>
            Ya contamos con 3 años de trayectoria y hoy en día somos más de 40
            personas voluntarias.
          </p>
          <Form />
        </div>
      </main>
    </>
  );
}

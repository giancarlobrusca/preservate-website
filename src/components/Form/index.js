import { useState } from 'react';
import styles from './form.module.scss';

export const Form = () => {
  const [type, setType] = useState(null);

  return (
    <>
      <div className={styles.radiosWrapper}>
        <div>
          <input
            checked={type === 'company'}
            onChange={(e) => setType(e.target.value)}
            type="radio"
            id="company"
            value="company"
          />
          <label for="company">Represento a una institución o empresa</label>
        </div>
        <div>
          <input
            checked={type === 'volunteer'}
            onChange={(e) => setType(e.target.value)}
            type="radio"
            id="volunteer"
            value="volunteer"
          />
          <label for="volunteer">¡Quiero ser voluntarix!</label>
        </div>
        <div>
          <input
            checked={type === 'info'}
            onChange={(e) => setType(e.target.value)}
            type="radio"
            id="info"
            value="info"
          />
          <label for="info">Quiero recibir información sobre la E.S.I.</label>
        </div>
      </div>
      <FormContent type={type} />
    </>
  );
};

function FormContent({ type }) {
  function onSubmit(e) {
    console.log('submitted');
  }

  if (type === 'company') {
    return (
      <>
        <p>
          Tenemos un objetivo en común: dar charlas y talleres de ESI (Educación
          Sexual Integral) a la comunidad, abarcando y dándole importancia a
          todos sus ejes: respetar la diversidad, promover el cuidado y respeto
          del cuerpo, conocer y ejercer derechos, garantizar la equidad de
          género y valorar la afectividad. Abordamos la tarea tanto con niños,
          niñas y adolescentes como con personas adultas a cargo del
          acompañamiento de grupos. Este año haremos especial hincapié en el
          alcance de la capacitación docente y a formadores educativos,
          generando encuentros de debate y reflexión que permitan el crecimiento
          individual y colectivo.
        </p>
        <p>
          Buscamos, como modalidad de abordaje, trabajar en conjunto con cada
          institución y su equipo profesional en la identificación de
          necesidades y demandas en pos de construir una misión conjunta a
          alcanzar con la población destinataria.
        </p>
        <p>
          Cualquier inquietud o si es de interés saber más sobre nuestro equipo
          y tareas, estamos a disposición.
        </p>
        <form className={styles.form} onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Nombre de la institución y/o empresa"
            required
          />
          <input type="text" placeholder="Rubro" required />
          <input
            type="text"
            placeholder="Nombre y apellido del contacto"
            required
          />
          <input
            type="text"
            placeholder="Rol ocupado por el contacto"
            required
          />
          <input type="mail" placeholder="Mail" required />
          <input type="number" placeholder="Teléfono" />
          <textarea placeholder="Cómo conociste a Preservate" />
          <textarea placeholder="Motivo de contacto" required />
          <button type="submit">Enviar</button>
        </form>
      </>
    );
  }

  if (type === 'volunteer') {
    return (
      <>
        <p>
          Si tenes ganas de sumarte como voluntarix, completá el formulario para
          más información y ya estarás inscriptx para la próxima convocatoria!
        </p>
        <form className={styles.form} onSubmit={onSubmit}>
          <input type="text" placeholder="Nombre completo" required />
          <input type="number" placeholder="Edad" required />
          <input type="mail" placeholder="Mail" required />
          <input type="number" placeholder="Teléfono" required />
          <input type="text" placeholder="Trabajo o estudios" />
          <textarea placeholder="Cómo conociste a Preservate" />
          <button type="submit">Enviar</button>
        </form>
      </>
    );
  }

  if (type === 'info') {
    return (
      <>
        <p>
          Acorde a nuestra misión de brindar información y asesoramiento a todas
          las personas interesadas en la temática es que te invitamos a que nos
          compartas tus inquietudes. Recordá que las respuestas son de carácter
          informativo y que siempre debes consultar con un profesional.{' '}
        </p>
        <form className={styles.form} onSubmit={onSubmit}>
          <input type="text" placeholder="Nombre completo" required />
          <input type="number" placeholder="Edad" required />
          <input type="mail" placeholder="Mail" required />
          <input type="number" placeholder="Teléfono" required />
          <textarea placeholder="Cómo conociste a Preservate" />
          <textarea
            type="text"
            placeholder="¿De qué te gustaría recibir información?"
          />
          <button type="submit">Enviar</button>
        </form>
      </>
    );
  }

  return null;
}

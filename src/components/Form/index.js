import { useState } from 'react';
import styles from './form.module.scss';
import emailjs from 'emailjs-com';

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
      </div>
      <FormContent type={type} />
    </>
  );
};

function FormContent({ type }) {
  function onSubmitCompany(e) {
    e.preventDefault();

    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_COMPANY_TEMPLATE_ID, e.target, process.env.NEXT_PUBLIC_USER_ID)
      .then((result) => {
        alert('Su petición se envio correctamente!!')
        location.reload();
      }, (error) => {
        alert('Hubo un error, volve a intentarlo.')
      });
  }
  function onSubmitVolunteer(e) {
    e.preventDefault();

    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_VOLUNTEER_TEMPLATE_ID, e.target, process.env.NEXT_PUBLIC_USER_ID)
      .then((result) => {
        alert('Su petición se envio correctamente!!')
        location.reload();
      }, (error) => {
        alert('Hubo un error, volve a intentarlo.')
      });
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
        <form id='form' className={styles.form} onSubmit={onSubmitCompany}>
          <input
            type="text"
            placeholder="Nombre de la institución y/o empresa*"
            name='place'
            required
          />
          <input
            type="text"
            placeholder="Rubro*"
            name='field'
            required
          />
          <input
            type="text"
            placeholder="Nombre y apellido del contacto*"
            name='name'
            required
          />
          <input
            type="text"
            placeholder="Rol ocupado por el contacto*"
            name='occupation'
            required
          />
          <input type="mail" placeholder="Mail*" name='mail' required />
          <input type="number" placeholder="Teléfono" name='phone' />
          <textarea placeholder="Cómo conociste a Preservate" name='how' />
          <textarea placeholder="Motivo de contacto*" name='motive' required />
          <button type="submit" id='button'>Enviar</button>
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
        <form className={styles.form} onSubmit={onSubmitVolunteer}>
          <input type="text" placeholder="Nombre completo*" name='name' required />
          <input type="number" placeholder="Edad*" name='age' required />
          <input type="mail" placeholder="Mail*" name='mail' required />
          <input type="number" placeholder="Teléfono*" name='phone' required />
          <input type="text" placeholder="Trabajo o estudios" name='occupation' />
          <textarea placeholder="Cómo conociste a Preservate" name='how' />
          <textarea
            type="text"
            placeholder="¿De qué te gustaría recibir información?"
            name='info'
          />
          <button type="submit">Enviar</button>
        </form>
      </>
    );
  }

  return null;
}
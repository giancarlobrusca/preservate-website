import { useState } from 'react';
import { BsInstagram } from 'react-icons/bs';
import styles from './persona-card.module.css';

export const PersonaCard = ({ persona }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <article
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        position: isHovering && 'relative',
        zIndex: isHovering && 20,
        transition: 'all 1s ease-in',
      }}
      className={styles.wrapper}
    >
      <div className={styles.cardimgshape}>
        <img
          src={persona.imageUrl}
          alt="User Img Placeholder"
          className={styles.cardimg}
        />
      </div>
      <div className="flex-grow">
        <h1 className="leading-none text-xl font-bold tracking-tighter mb-1">
          {persona.title}
        </h1>
        {persona.ig && (
          <a
            href={persona.ig}
            className={styles.iglink}
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
            <h3 style={{ fontSize: '1rem' }}>@{persona.ig.split('/')[3]}</h3>
          </a>
        )}
        <h2 className="leading-none tracking-tighter mb-1">{persona.rol}</h2>
        <h3 className="leading-none tracking-tighter">{persona.age} Años</h3>
      </div>
      <div
        style={{
          height: '100px',
          overflow: 'auto',
        }}
        className="text-center text-sm w-full h-full items-center justify-center my-4 whitespace-pre-line"
      >
        {persona.bio
          ? persona.bio.map((block) => {
              return (
                <p key={block.children[0].text}>{block.children[0].text}</p>
              );
            })
          : null}
      </div>
    </article>
  );
};

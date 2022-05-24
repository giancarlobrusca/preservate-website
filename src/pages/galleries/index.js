import { useState } from 'react';
import { AppHead, Navbar } from '../../components';
import { getGalleries } from '../../lib/api';
import styles from './galleries.module.css';

export default function Galleries({ gallery }) {
  const [filter, setFilter] = useState('');
  const photos = gallery[0].images;

  const filteredPhotos = filter
    ? photos.filter((photo) => photo.imgType === filter)
    : photos;

  return (
    <>
      <AppHead />
      <h1 className={styles.title}>La Galería de Preservate</h1>
      <div className={styles.filters}>
        <button onClick={() => setFilter('team')}>Equipo</button>
        <button onClick={() => setFilter('talks')}>Charlas</button>
        <button onClick={() => setFilter('event')}>Evento Preservate</button>
        <button onClick={() => setFilter('meeting')}>Convivencia</button>
      </div>
      <div className={styles.gallery}>
        {filteredPhotos.map((photo, index) => (
          <img
            key={index}
            className={styles.galleryPhoto}
            src={photo.imageUrl}
          />
        ))}
      </div>
    </>
  );
}

function GalleryPhoto({ url, alt }) {
  return <img className={styles.galleryPhoto} src={url} alt={alt} />;
}

export const getStaticProps = async () => {
  const galleries = await getGalleries();

  return {
    props: { gallery: galleries },
    revalidate: 3600,
  };
};

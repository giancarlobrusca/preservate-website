import { AppHead, Navbar } from '../../components';
import { getExampleGallery, getGalleries } from '../../lib/api';
import styles from './galleries.module.css';

const staticPhotos = [
  'https://assets.codepen.io/12005/windmill.jpg',
  'https://assets.codepen.io/12005/suspension-bridge.jpg',
  'https://assets.codepen.io/12005/sunset.jpg',
  'https://assets.codepen.io/12005/snowy.jpg',
  'https://assets.codepen.io/12005/bristol-balloons1.jpg',
  'https://assets.codepen.io/12005/dog-balloon.jpg',
  'https://assets.codepen.io/12005/abq-balloons.jpg',
  'https://assets.codepen.io/12005/disney-balloon.jpg',
  'https://assets.codepen.io/12005/bristol-harbor.jpg',
  'https://assets.codepen.io/12005/bristol-balloons2.jpg',
  'https://assets.codepen.io/12005/toronto.jpg',
];

export default function Galleries({ gallery }) {
  const photos = [...staticPhotos, ...gallery[0].photos];
  return (
    <>
      <AppHead />
      <h1 className={styles.title}>La Galería de Preservate</h1>
      <div className={styles.gallery}>
        {photos.map((photo, index) => (
          <img className={styles.galleryPhoto} key={index} src={photo} />
        ))}
      </div>
    </>
  );
}

function GalleryPhoto({ url, alt }) {
  return <img className={styles.galleryPhoto} src={url} alt={alt} />;
}

export const getServerSideProps = async () => {
  const exampleGallery = await getExampleGallery();
  // const galleries = await getGalleries();

  return {
    props: { gallery: exampleGallery },
  };
};

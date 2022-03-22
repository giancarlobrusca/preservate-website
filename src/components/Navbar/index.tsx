import Link from 'next/link';
import styles from './navbar.module.scss';

export const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navWrapper}>
        <a href="/" className={styles.homeLink}>
          <Link href="/">
            <img src="/img/logo.jpg" alt="Logo Preservate" />
          </Link>
          <span>PRESERVATE</span>
        </a>
        <nav>
          <Link href="/nosotros">
            <a>EQUIPO</a>
          </Link>

          <Link href="/galleries">
            <a>GALERIA</a>
          </Link>

          <Link href="/contact">
            <a>CONTACTO</a>
          </Link>
        </nav>
      </div>
    </div>
  );
};

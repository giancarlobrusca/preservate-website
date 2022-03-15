import { Footer, Navbar } from '../components';
import styles from './layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.contentWrapper}>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

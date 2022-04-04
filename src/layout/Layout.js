import { Footer, Navbar } from '../components';
import styles from './layout.module.scss';

export const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

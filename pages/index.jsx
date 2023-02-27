import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>FRONTEND</h1>
          <h1>DEV.</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Diego Nonato</h1>
            <h6 className={styles.bio}>Desenvolvedor Frontend Jr.</h6>
            <Link href="/projects">
              <button className={styles.button}>Projetos</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contato</button>
            </Link>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}

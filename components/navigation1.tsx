import type { NextPage } from "next";
import styles from "./navigation1.module.css";

export type Navigation1Type = {
  className?: string;
};

const Navigation1: NextPage<Navigation1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.navigation, className].join(" ")}>
      <header className={styles.nav}>
        <nav className={styles.navInner}>
          <nav className={styles.homeParent}>
            <a className={styles.home}>Home</a>
            <a className={styles.about}>About</a>
            <a className={styles.contact}>Contact</a>
          </nav>
        </nav>
        <div className={styles.rectangle} />
        <div className={styles.landingLink}>
          <a className={styles.landie}>Landing</a>
        </div>
        <div className={styles.elementbuttonsmallfilledWrapper}>
          <div className={styles.elementbuttonsmallfilled}>
            <div className={styles.bg} />
            <a className={styles.buttonLabel}>Buy Now</a>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Navigation1;

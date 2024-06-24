import type { NextPage } from "next";
import SmallCardItems from "./small-card-items";
import styles from "./undraw-mobile-login-ikmv-ele.module.css";

export type UndrawMobileLoginIkmvEleType = {
  className?: string;
};

const UndrawMobileLoginIkmvEle: NextPage<UndrawMobileLoginIkmvEleType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.undrawMobileLoginIkmvEle, className].join(" ")}>
      <div className={styles.mask} />
      <div className={styles.cardContainer}>
        <div className={styles.cardContent}>
          <div className={styles.titleParent}>
            <h1 className={styles.title}>{`Light, Fast & Powerful`}</h1>
            <div className={styles.body}>
              <p
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus `}</p>
              <p className={styles.musDonecQuam}>
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
          </div>
          <div className={styles.smallCardItemsParent}>
            <SmallCardItems />
            <SmallCardItems />
          </div>
        </div>
      </div>
      <img
        className={styles.undrawMobileLoginIkmvIcon}
        loading="lazy"
        alt=""
        src="/undraw-mobile-login-ikmv@2x.png"
      />
    </section>
  );
};

export default UndrawMobileLoginIkmvEle;

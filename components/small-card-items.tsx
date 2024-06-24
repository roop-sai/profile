import type { NextPage } from "next";
import styles from "./small-card-items.module.css";

export type SmallCardItemsType = {
  className?: string;
};

const SmallCardItems: NextPage<SmallCardItemsType> = ({ className = "" }) => {
  return (
    <div className={[styles.smallCardItems, className].join(" ")}>
      <img
        className={styles.elementcardinfoCardsmalliIcon}
        loading="lazy"
        alt=""
        src="/elementcardinfocardsmalliconpositionleft@2x.png"
      />
      <div className={styles.titleParent}>
        <div className={styles.title}>Title Goes Here</div>
        <div
          className={styles.body}
        >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. `}</div>
      </div>
    </div>
  );
};

export default SmallCardItems;

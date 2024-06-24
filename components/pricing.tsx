import type { NextPage } from "next";
import styles from "./pricing.module.css";

export type PricingType = {
  className?: string;
};

const Pricing: NextPage<PricingType> = ({ className = "" }) => {
  return (
    <section className={[styles.pricing, className].join(" ")}>
      <div className={styles.pricingContent}>
        <div className={styles.priceCard}>
          <h1 className={styles.title}>A Price To Suit Everyone</h1>
          <div
            className={styles.body}
          >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus `}</div>
        </div>
        <div className={styles.priceInfo}>
          <div className={styles.priceValue}>
            <div className={styles.price}>$40</div>
            <div className={styles.title1}>UI Design Kit</div>
          </div>
        </div>
        <div className={styles.pricingButton}>
          <div className={styles.buttonContainer}>
            <div className={styles.body1}>See, One price. Simple.</div>
            <div className={styles.contentTitle}>
              <div className={styles.elementbuttonmediumfilled}>
                <div className={styles.bg} />
                <div className={styles.buttonLabel}>Purchase Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

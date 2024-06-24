import type { NextPage } from "next";
import Navigation1 from "../components/navigation1";
import UndrawMobileLoginIkmvEle from "../components/undraw-mobile-login-ikmv-ele";
import FrameComponent from "../components/frame-component";
import CallToAction from "../components/call-to-action";
import Pricing from "../components/pricing";
import Footer from "../components/footer";
import styles from "./index.module.css";

const LandingPage: NextPage = () => {
  return (
    <div className={styles.landingPage2}>
      <div className={styles.mask} />
      <Navigation1 />
      <div className={styles.mainContent}>
        <div className={styles.frameParent}>
          <div className={styles.titleParent}>
            <h1
              className={styles.title}
            >{`Introduce Your Product Quickly & Effectively`}</h1>
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
          <div className={styles.largeButtons}>
            <div className={styles.elementbuttonlargefilled}>
              <div className={styles.bg} />
              <div className={styles.buttonLabel}>Purchase UI Kit</div>
            </div>
            <div className={styles.elementbuttonlargefilledCo}>
              <div className={styles.bg1} />
              <a className={styles.buttonLabel1}>Learn More</a>
            </div>
          </div>
        </div>
      </div>
      <UndrawMobileLoginIkmvEle />
      <FrameComponent />
      <section className={styles.introCopy}>
        <div className={styles.rectangle} />
        <img
          className={styles.undrawSocialInfluencerSgsvIcon}
          loading="lazy"
          alt=""
          src="/undraw-social-influencer-sgsv.svg"
        />
        <div className={styles.contentTitleWrapper}>
          <div className={styles.contentTitle}>
            <h1 className={styles.title1}>{`Light, Fast & Powerful`}</h1>
            <div className={styles.body1}>
              <p
                className={styles.loremIpsumDolor1}
              >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus `}</p>
              <p className={styles.musDonecQuam1}>
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
      <Pricing />
      <Footer />
      <img className={styles.rectangleIcon} alt="" src="/rectangle.svg" />
    </div>
  );
};

export default LandingPage;

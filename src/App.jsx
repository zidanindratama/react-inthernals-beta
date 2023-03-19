import React from "react";
import { Navbar, Hero, Reason, ForDevelopers, Footer } from "./components";
import styles from "./style";

const App = () => {
  return (
    <div className="w-full overflow-hidden bg-darkestGray">
      <div className={`${styles.paddingX} ${styles.boxNavbar}`}>
        <Navbar />
      </div>
      <div className={`bg-darkestGray ${styles.flexStart}`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
          <Hero />
          <Reason />
          <ForDevelopers />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;

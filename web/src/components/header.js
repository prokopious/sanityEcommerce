import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import * as styles from "./header.module.css";

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding} id="banner">
        <Link to="/">{siteTitle}</Link>
      </div>



      <nav>
      
            <Link to="/"><button className="snipcart-checkout">Cart</button></Link>
      </nav>
    </div>
  </div>
);

export default Header;

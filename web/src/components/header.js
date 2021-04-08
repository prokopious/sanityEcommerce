import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import { GiShoppingCart } from 'react-icons/gi';

import * as styles from "./header.module.css";

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div id="shadow" className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding} id="banner">
        <Link to="/">{siteTitle}</Link>
      </div>



      <nav>
      
            <Link to="/"><div className="snipcart-checkout"><GiShoppingCart /></div></Link>
      </nav>
    </div>
  </div>
);

export default Header;

import * as styles from "./blog-post-preview.module.css";
import { buildImageObj, cn, getBlogUrl } from "../lib/helpers";
import { Link } from "gatsby";
import PortableText from "./portableText";
import React from "react";
import { format } from "date-fns";
import { imageUrlFor } from "../lib/image-url";

import { responsiveTitle3 } from "./typography.module.css";

function BlogPostPreview(props) {
  return (
    <><Link
      className={props.isInList ? styles.inList : styles.inGrid}
      to={getBlogUrl(props.publishedAt, props.slug.current)}
    >
      <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .auto("format")
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <div className={styles.text}>
        <h3 id="horse" className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
        <p id="price">${props.price}</p>
        <button id="but" type="button" className="snipcart-add-item"
 data-item-name={props.title}
 data-item-price={props.price}
 data-item-id="42"
 data-item-url="/">
  Add to cart
</button>


      </div>
    </Link>
    
    </>
  );
}

export default BlogPostPreview;

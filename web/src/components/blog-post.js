import * as styles from "./blog-post.module.css";
import { differenceInDays, formatDistance, format } from "date-fns";
import AuthorList from "./author-list";
import Container from "./container";
import PortableText from "./portableText";
import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

function BlogPost(props) {
  const {
    _rawBody,
    authors,
    categories,
    title,
    price,
    mainImage,
    publishedAt,
  } = props;
  return (
    <article className={styles.root}>   <Container>            <h1 className={styles.title}>{title}</h1> <h2>${props.price}</h2>
    <button type="button" className="snipcart-add-item"
data-item-name={title}
data-item-price={price}
data-item-id="42"
data-item-url="/">
Add to cart
</button>
      {mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .auto("format")
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
  
        <div className={styles.grid}>
          <div className={styles.mainContent}>

            {_rawBody && <PortableText blocks={_rawBody} />}
          </div>


          <aside className={styles.metaContent}>
     
              <div className={styles.categories}>
  
                <ul>
                  {categories.map((category) => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>

         
          </aside>
        </div>

      </Container>

    </article>
  );
}

export default BlogPost;

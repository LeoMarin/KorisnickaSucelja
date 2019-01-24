import React from "react";
import { Link } from "gatsby";
import styles from "./styles.module.css";
import NewsItem from "./NewsItem";
import {Helmet} from "react-helmet";

export default ({ posts }) => {
  const mainPost = posts[0];

  const { title, slug, image } = mainPost.node.frontmatter;
  const { publicURL } = image;

  const postList = posts.filter(post => {
    if(post === mainPost)
      return false;
    return true;
  }).map(post => {
    const { title, slug, image } = post.node.frontmatter;
    const { publicURL } = image;
    return (
      <NewsItem
        key={slug}
        to={`news/${slug}`}
        className={styles.newsItem}
        image={publicURL}
      >
        {title}
      </NewsItem>
    )
  });

  return (
    <>     
    <Helmet>
      <meta charSet="utf-8" />
      <title>Worlds - News</title>
    </Helmet>
      <div className={styles.background}>
        <div className={styles.backgroundOverlay}></div> 
        <h1 className={styles.mainTitle}>EVERYTHING<br/>YOU NEED TO KNOW</h1>
      </div>
      <div className={styles.posts}>
        <h2>MAIN NEWS</h2>
        <Link
          to={`news/${slug}`}
          className={styles.mainNews}
        >
          <img src={publicURL} className={styles.mainNewsImage} alt="MainNews"/>
          <div className={styles.mainNewsOverlay}></div>
          <div className={styles.mainNewsTitle}>{title}</div>
          <button className={styles.mainNewsButton}>Read more</button>
        </Link>
        <h2>READ MORE ON OUR BLOG</h2>
        <div  className={styles.postList}>{postList}</div>
      </div>
    </>
  );
};

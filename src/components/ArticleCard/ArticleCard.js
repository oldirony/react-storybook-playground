import React from 'react'
import { propTypes as articleCardPropTypes } from './Model.ArticleCard'
import styles from './ArticleCard.css'

const ArticleCard = ({title, excerpt, link: { url, labelText }}) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>
        {title}
      </h1>
      <p>
        {excerpt}
      </p>
      <a href={url} className={styles.link}>
        {labelText}
      </a>
    </div>
  )
}

ArticleCard.propTypes = articleCardPropTypes;

export default ArticleCard
import React from 'react'
import { propTypes as articleCardPropTypes } from './Model.ArticleCard'

const ArticleCard = ({title, excerpt, link: { url, labelText }}) => {
  return (
    <div>
      <h1>
        {title}
      </h1>
      <p>
        {excerpt}
      </p>
      <a href={url}>
        {labelText}
      </a>
    </div>
  )
}

ArticleCard.propTypes = articleCardPropTypes;

export default ArticleCard
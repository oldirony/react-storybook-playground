import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'
import ArticleCard from "../ArticleCard/ArticleCard"
import { propTypes as articleCardPropTypes } from '../ArticleCard/Model.ArticleCard'

const ArticleGrid = ({articles}) => {
  const renderArticles = () => articles.map(article => (
    <Col xs={6} md={3} key={article.id}>
      <ArticleCard {...article} />
    </Col>
  ))

  if(!articles) return <div>No articles</div>;

  return (
    <Grid fluid>
      <Row>
        {renderArticles()}
      </Row>
    </Grid>
  )
}

ArticleGrid.defaultProps = {
  articles: null
}

ArticleGrid.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape(articleCardPropTypes)
  )
}

export default ArticleGrid
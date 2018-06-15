import PropTypes from 'prop-types'

const ArticleCardModel = ({ id, title, excerpt, link: { url, labelText } }) => ({
  id,
  title,
  excerpt,
  link: {
    url,
    labelText,
  },
})

export default ArticleCardModel;

export const propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
  }),
}

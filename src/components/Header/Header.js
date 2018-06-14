import React from 'react'
import PropTypes from 'prop-types'
import {
  header
} from './Header.css'
import Navigation from "../Navigation/Navigation"

const Header = ({showNav}) => {
  return (
    <div className={header}>
      this is a header

      {showNav && <Navigation/>}
    </div>
  )
}

Header.propTypes = {
  showNav: PropTypes.bool
}

export default Header
import React from 'react'
import { nav, list } from './Navigation.css'

const Navigation = () => {
  return (
    <nav className={nav}>
      <ul className={list}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </nav>
  )
}

Navigation.propTypes = {}

export default Navigation
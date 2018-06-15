import React, { Component } from 'react';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import {app} from './App.css'
import ArticleGrid from "./components/ArticleGrid/ArticleGrid"
import { articles } from './stories/dummyData'

class App extends Component {
  render() {
    return (
      <div className={app}>
        <Header/>
        <ArticleGrid articles={articles}/>
        <Footer/>
      </div>
    );
  }
}

export default App;

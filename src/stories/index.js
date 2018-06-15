import React from 'react';

import { storiesOf } from '@storybook/react';
//import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';

import { articles as dummyArticles } from './dummyData'
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import App from "../App"
import ArticleGrid from "../components/ArticleGrid/ArticleGrid"
import ArticleCard from "../components/ArticleCard/ArticleCard"

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('with text', () => <Header/>)
  .add('with text and nav', () => (
    <Header
      showNav={boolean('Show navigation', true)}/>
  ))
storiesOf('Footer', module)
  .add('default', () => <Footer/>)

storiesOf('ArticleCard', module)
  .add('default', () => <ArticleCard {...dummyArticles[0]}/>)

storiesOf('ArticleGrid', module)
  .add('default', () => <ArticleGrid articles={dummyArticles}/>)
  .add('with no articles', () => <ArticleGrid/>)

storiesOf('Layout', module)
  .add('default', () => <App/>)
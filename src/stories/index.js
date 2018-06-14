import React from 'react';

import { storiesOf } from '@storybook/react';
//import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import App from "../App"

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Header', module)
  .add('with text', () => <Header/>)
  .add('with text and nav', () => <Header showNav={true}/>)
storiesOf('Footer', module)
  .add('default', () => <Footer/>)
storiesOf('Layout', module)
  .add('default', () => <App/>)
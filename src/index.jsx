import React from 'react'
import ReactDOM from 'react-dom'

import App from './containers/App'

import { injectGlobal } from 'styled-components';
injectGlobal`
  @font-face {
    font-family: 'Open Sans';
    src: url('https://fonts.googleapis.com/css?family=Open+Sans:400,500,600,700');
  }

  body, input {
    font-family: 'Open Sans';
    font-size: 1rem;
  }

  body {
    margin: 1rem 2rem;
  }
`

window.document.body.innerHTML = '<div id="root"></div>'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
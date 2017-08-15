import React from 'react'
import ReactDOM from 'react-dom'

import App from './containers/App'

window.document.body.innerHTML = '<div id="root"></div>'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)


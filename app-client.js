  // app-client.js
  import React from 'react'
  import { render } from 'react-dom'
  import { Router, browserHistory } from 'react-router'

  const history = (browserHistory)

  // Routes
  import routes from './routes'

  const Routes = (
    <Router history={history}>
      { routes }
    </Router>
  )

  const app = document.getElementById('app')
  render(Routes, app)

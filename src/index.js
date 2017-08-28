import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import './styles/App.css'
import registerServiceWorker from './registerServiceWorker'
import { NavLink, Link } from 'react-router-dom'
import Details from './components/Details.js'
import Explorer from './components/Explorer.js'
import Films from './Films.js'
import Layout from './Layout.js'
import People from './People.js'
import Starships from './Starships.js'

ReactDOM.render(
  {
    /* >>>>>>>>>>>>>>>>>>>>>
          Add a router components with routes to:
          Explorer. Use an exact path to "/"
          Starships
          Films
          People
          Details: Dynamic route with the following params: endpoing and id
          <<<<<<<<<<<<<<<<<<<<<<
          */
  },
  return (
    <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/people/:actor" component={ActorInfo} />
            <Route path="/people" component={PeopleMenu} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
  document.getElementById('root')
)
registerServiceWorker()

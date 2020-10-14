import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landind from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMap'
import Orphanages from './pages/Orphanage'
import CreateOrphanages from './pages/CreateOrphanage'


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Landind } />
        <Route path="/app" component={ OrphanagesMap } />
        <Route path="/orphanages/:id" component={ Orphanages } />
        <Route path="/orphanages/create" component={ CreateOrphanages}  />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
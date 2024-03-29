import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landind from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMap'
import Orphanages from './pages/Orphanage'
import CreateOrphanage from './pages/CreateOrphanage'


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Landind } />
        <Route path="/app" component={ OrphanagesMap } />
        <Route path="/orphanages/create" component={ CreateOrphanage}  />
        <Route path="/orphanages/:id" component={ Orphanages } />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
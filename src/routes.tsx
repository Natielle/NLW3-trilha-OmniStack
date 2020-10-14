import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Landing from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMap'

function Routes() {
  return (
    <BrowserRouter>
      <Switch> // permite que apenas uma rota seja escolhida
        <Route path="/" exact component={Landing}/>
        <Route path="/app" component={OrphanagesMap}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
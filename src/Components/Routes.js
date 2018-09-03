import React, { Component}  from 'react';
import { Switch, Route } from 'react-router-dom'

import Landing from './Landing/Landing';
//import Support from './Support';


const Routes = () => (
  <main>
    <Switch>
    	<Route exact path="/" component={Landing}/>        	        
    </Switch>
  </main>
)

export default Routes;
import React from "react"
import { Home } from "./pages/Home";

import { Projects } from './pages/Projects';
import { Blog } from './pages/Blog';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
function App() {


  return (<Router>
    <Switch>
    
    <Route path='/' exact>
     <Home/>
    </Route>

   <Route path='/projects'>
    <Projects/>
   </Route>
  
    <Route path='/ash/blog' >
    <Blog/>

    </Route>
     <Redirect to='/'/>
    </Switch>

    </Router>
)
}

export default App

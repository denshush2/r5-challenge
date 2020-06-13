import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { HomeScreen } from '../views/Home'

export const Routes:React.FC=()=>(
    <Router>
        <Switch>
            <Route path="/" component={HomeScreen}></Route>
        </Switch>
    </Router>
)
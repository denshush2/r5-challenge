import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeScreen } from '../views/Home';
import { BookDescriptionScreen } from '../views/BookDescription';

export const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={HomeScreen}></Route>
      <Route path="/book/:id" exact component={BookDescriptionScreen} />
    </Switch>
  </Router>
);

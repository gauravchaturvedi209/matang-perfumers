import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import './App.css';

const HatsPage = () => {
  return(
    <div>
      <h1>Hats Pages</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './components/Main';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Main}/>
        <Route path='/*' component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

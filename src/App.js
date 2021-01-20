import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Watched } from './components/Watched';
import { Add } from './components/Add';
import { Watchlist } from './components/Watchlist';
import { Home } from "./components/Home";
import './css/App.css';
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from "./context/GlobalState";
import Details  from './components/Details';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
  <GlobalProvider>
   <Router>
     <Header/>

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/watchlist">
          <Watchlist />
        </Route>

        <Route exact path="/watched">
          <Watched />
        </Route>

        <Route exact path="/add">
          <Add />
        </Route>

          <Route path="/details/:title" component={Details} />
       
      </Switch>
    </Router>
  </GlobalProvider>
  );
 }

export default App;
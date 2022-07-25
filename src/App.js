import logo from './logo.svg';
import './App.css';
import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Component/Home/Home';
import CountryDetail from './Component/CountryDetail/CountryDetail';
import NoMatch from './Component/NoMatch/NoMatch';

function App() {
  return (
    <Router>
      <Switch>
        
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/country/:countryName">
          <CountryDetail></CountryDetail>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Employee from './components/Employee/Employee';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import SingleEmployee from './components/SingleEmployee/SingleEmployee';
import NavBar from './components/NavBar/NavBar';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div>
    

      <Router>
        <NavBar></NavBar>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/employee">
            <Employee></Employee>
          </Route>
          <Route exact path="/employee/:id">
            <SingleEmployee></SingleEmployee>
          </Route>
          <Route exact path="*">
            <NotFoundPage></NotFoundPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

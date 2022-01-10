import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* exact keyword is used for exact match of url other wise react 
              supply Home component even at /signin or /signup
              React works on 1st match 1st supply */}
          <Route path='/' exact component={Home} />             
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

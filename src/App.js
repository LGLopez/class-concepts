import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from './components/Navigation';
import Login from './components/Login';
import Signup from './components/SignUp';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      navRoute: 'login' 
    }
  }

  render() {
    return (
      <Router>  
        <div className="">
          <div className="bg-secondary">
            <Navigation></Navigation>
          </div>
          <Switch>
            <Route path="/login" exact>
                <Login></Login>
            </Route>
            <Route path="/signup" exact>
                <Signup></Signup>
            </Route>
            <Route path="/" exact>

            </Route>
          </Switch>
          <div>
            <Footer></Footer>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

import React from 'react';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Signup from './components/SignUp';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      navRoute: 'login' 
    }
  }

  render() {
    return (
      <div className="">
        <div className="bg-secondary">
          <Navigation></Navigation>
        </div>
          <Signup></Signup>
      </div>
    );
  }
}

export default App;

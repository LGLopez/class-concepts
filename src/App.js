import React from 'react';
import Navigation from './components/Navigation';

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
      </div>
    );
  }
}

export default App;

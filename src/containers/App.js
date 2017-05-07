import React, { Component } from 'react';

import Cover from '../components/Cover';
import Navbar from '../components/Navbar';
import Chatounerie from '../components/Chatounerie';
import Office from '../components/Office';
import Footer from '../components/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenWidth: '0',
      screenHeight: '0'
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight
    });
  }

  render() {
    return (
      <div className="App">
        <Cover
          screenWidth={this.state.screenWidth}
          screenHeight={this.state.screenHeight}
        />
        <Navbar />
        <Chatounerie />
        <Office
          screenHeight={this.state.screenHeight}
        />
        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Cover from '../components/Cover';
import Navbar from '../components/Navbar';
import Chatounerie from '../components/Chatounerie';
import Office from '../components/Office';
import Services from '../components/Services';
import Galery from '../components/Galery';
import Prices from '../components/Prices';
import Contact from '../components/Contact';
import GoogleMap from '../components/GoogleMap';
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
          screenHeight={this.state.screenHeight}
        />
        <Navbar />
        <Chatounerie />
        <Office
          screenHeight={this.state.screenHeight}
        />
        <Services />
        <Galery
          screenHeight={this.state.screenHeight}
        />
        <Prices />
        <Contact />
        <GoogleMap />
        <Footer />

        <ToastContainer />
      </div>
    );
  }
}

export default App;

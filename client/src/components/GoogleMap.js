import React, { Component } from 'react';
import withSheet from 'react-jss';
import GoogleMapReact from 'google-map-react';

const styles = {
  container: {
    width: '100vw',
    height: 500,
    maxHeight: '50vh',
  },
};

const Marker = ({ text }) => (
  <div style={{
    position: 'relative'
  }}>
    <div style={{
      fontWeight: 'bold',
      position: 'absolute',
      bottom: '5px',
      left: '20px',
      width: '110px',
      backgroundColor: 'black',
      color: 'whitesmoke',
      fontSize: 13,
      textAlign: 'center',
      borderRadius: '5px',
      opacity: 0.7
    }}>
      {text}
    </div>
    <div style={{

    }}>
      <i className="fa fa-map-marker fa-2x" style={{
        color: 'red',
        opacity: 0.85,
        position: 'absolute',
        bottom: 5
      }} />
    </div>

  </div>
);

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.8609491,
      lng: 5.1310694
    },
    zoom: 10,
    label: 'La Chatounerie',
  };

  render() {
    const { classes } = this.props;

    return (
      <div
        className={classes.container}
      >
        <GoogleMapReact
          onZoomChange={null}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          bootstrapURLKeys={{
            key: 'AIzaSyAp8kRvRUCd2PyuRC5bWvF8_VM8MRAXjeU',
            language: 'fr',
          }}
        >
          <Marker
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text={this.props.label}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default withSheet(styles)(GoogleMap);

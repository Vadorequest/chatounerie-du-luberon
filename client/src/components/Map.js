import React, { Component } from 'react';
import withSheet from 'react-jss';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";

const styles = {
  container: {
    width: '100vw',
    height: 500,
    maxHeight: '50vh',
  },
};

const settings = {
  position: {
    lat: 43.8609491,
    lng: 5.1310694
  },
  zoom: 10,
  label: 'La Chatounerie',
  defaultAnimation: 2,
};

const SimpleMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultCenter={settings.position}
      defaultZoom={settings.zoom}
      defaultOptions={{
        scrollwheel: false,
      }}
    >
      <Marker
        position={settings.position}
        defaultAnimation={settings.defaultAnimation}
      />
    </GoogleMap>
  ))
);

class Map extends Component {
  render() {
    const { classes, config } = this.props;

    return (
      <div
        className={classes.container}
      >
        <SimpleMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${config.googleMap.key}`}
          loadingElement={
            <div style={{ height: `100%` }}>
              <div
                className="fa fa-spin"
                style={{
                  display: `block`,
                  width: `80px`,
                  height: `80px`,
                  margin: `150px auto`,
                  animation: `fa-spin 2s infinite linear`,
                }}
              />
            </div>
          }
          containerElement={
            <div className={classes.container} />
          }
          mapElement={
            <div className={classes.container} />
          }
        />
      </div>
    );
  }
}

export default withSheet(styles)(Map);

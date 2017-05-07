import React from 'react';
import withSheet from 'react-jss';
import classNames from 'classnames';
import { Carousel } from 'react-responsive-carousel';

import { styles as NavbarStyles } from './Navbar';
const { navbar: { minHeight } } = NavbarStyles;

const styles = {
  container: {
    // maxHeight: '200vh',
    // height: '200vh',
  },
};

const Cover = ({classes, screenHeight}) => {
  const maxImageHeight = screenHeight - minHeight;
  const settings = {
    showThumbs: false,
    showArrows: true,
    // dynamicHeight: true,
    emulateTouch: true,
    infiniteLoop: true,
    useKeyboardArrows: true,
    autoPlay: true,
  };

  return (
    <section
      id="office"
      className={classes.container}
    >
      <Carousel
        {...settings}
      >
        <div>
          <img
            src="../../images/carousel/carousel1.jpg"
            height={maxImageHeight}
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img
            src="../../images/carousel/carousel2.jpg"
            height={maxImageHeight}
          />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img
            src="../../images/carousel/carousel3.jpg"
            height={maxImageHeight}
          />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </section>
  );
};

export default withSheet(styles)(Cover);

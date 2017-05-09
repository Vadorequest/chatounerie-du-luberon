import React, { PropTypes } from 'react';
import withSheet from 'react-jss';
import { Carousel } from 'react-responsive-carousel';
import times from 'lodash.times';

import { styles as NavbarStyles } from './Navbar';
const { navbar: { minHeight } } = NavbarStyles;

/* eslint-disable jsx-a11y/img-redundant-alt */

const styles = {
  container: {
    '& img': {
      objectFit: 'cover',
    },

    '& .legend': {
      fontSize: '20px !important',
    }
  },
};

const GalleryCats = ({classes, screenHeight, config}) => {
  const imagesCount = 18;
  const maxImageHeight = screenHeight - minHeight;
  const settings = {
    showThumbs: false,
    showArrows: true,
    emulateTouch: true,
    infiniteLoop: true,
    useKeyboardArrows: true,
    autoPlay: true,
    stopOnHover: true,
    interval: 3000,
  };

  return (
    <section
      id="galeryCats"
      className={classes.container}
    >
      <Carousel
        {...settings}
      >
        {
          times(imagesCount, (i) => (
            <div key={i}>
              <img
                src={`../../images/galleryCats/galery${i+1}.jpg`}
                height={maxImageHeight}
                alt={`Gallery image ${i+1}`}
              />
            </div>
          ))
        }
      </Carousel>
    </section>
  );
};

GalleryCats.propTypes = {
  screenHeight: PropTypes.number.isRequired,
  config: PropTypes.object.isRequired,
};

export default withSheet(styles)(GalleryCats);

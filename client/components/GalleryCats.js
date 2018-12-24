import React from 'react';
import PropTypes from 'prop-types';

import withSheet from 'react-jss';
import { Carousel } from 'react-responsive-carousel';

import { styles as NavbarStyles } from './Navbar';
const { navbar: { minHeight } } = NavbarStyles;

import GalleryItem from './GalleryItem';

/* eslint-disable jsx-a11y/img-redundant-alt */

const styles = {
  container: {
    '& img': {
      objectFit: 'contain',
    },

    '& .legend': {
      fontSize: '20px !important',
    }
  },
};

const GalleryCats = ({classes, screenHeight, config}) => {
  const maxImageHeight = screenHeight - minHeight;
  const settings = {
    showThumbs: false,
    showArrows: true,
    emulateTouch: true,
    infiniteLoop: true,
    useKeyboardArrows: true,
    autoPlay: false,
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
          config.galleryCats.items.map((item, index) => (
            <GalleryItem
              key={index}
              src={`../../images/galleryCats/${item.filename}`}
              height={maxImageHeight}
              legend={item.legend}
            />
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

import React from 'react';
import PropTypes from 'prop-types';

import withSheet from 'react-jss';
import { Carousel } from 'react-responsive-carousel';

import GalleryItem from './GalleryItem';
import { styles as NavbarStyles } from './Navbar';
const { navbar: { minHeight } } = NavbarStyles;

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

const GalleryOffice = ({classes, screenHeight, config}) => {
  const maxImageHeight = screenHeight - minHeight;
  const settings = {
    showThumbs: false,
    showArrows: true,
    emulateTouch: true,
    infiniteLoop: true,
    useKeyboardArrows: true,
    autoPlay: true,
    stopOnHover: true,
    interval: 6000,
  };

  return (
    <section
      id="galeryOffice"
      className={classes.container}
    >
      <Carousel
        {...settings}
      >
        {
          config.galleryOffice.items.map((item, index) => (
            <GalleryItem
              key={index}
              src={`/static/images/galleryOffice/${item.filename}`}
              height={maxImageHeight}
              legend={item.legend}
            />
          ))
        }
      </Carousel>
    </section>
  );
};

GalleryOffice.propTypes = {
  screenHeight: PropTypes.number.isRequired,
  config: PropTypes.object.isRequired,
};

export default withSheet(styles)(GalleryOffice);

import React from 'react';
import withSheet from 'react-jss';
import { Carousel } from 'react-responsive-carousel';

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

const GaleryOffice = ({classes, screenHeight}) => {
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
        <div>
          <img
            src="../../images/galeryOffice/office1.jpg"
            height={maxImageHeight}
            alt="La Chatounerie, vue de l'extérieur"
          />
          <p className="legend">La Chatounerie, vue de l'extérieur</p>
        </div>
      </Carousel>
    </section>
  );
};

export default withSheet(styles)(GaleryOffice);

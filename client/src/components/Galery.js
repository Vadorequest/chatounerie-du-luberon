import React from 'react';
import withSheet from 'react-jss';
import { Carousel } from 'react-responsive-carousel';
import times from 'lodash.times';

import { styles as NavbarStyles } from './Navbar';
const { navbar: { minHeight } } = NavbarStyles;

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

const Galery = ({classes, screenHeight}) => {
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
      id="galery"
      className={classes.container}
    >
      <Carousel
        {...settings}
      >
        {
          times(imagesCount, (i) => (
            <div>
              <img
                src={`../../images/galery/galery${i+1}.jpg`}
                height={maxImageHeight}
                alt={`Galery image ${i+1}`}
              />
            </div>
          ))
        }
      </Carousel>
    </section>
  );
};

export default withSheet(styles)(Galery);

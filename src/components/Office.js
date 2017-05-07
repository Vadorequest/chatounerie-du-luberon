import React from 'react';
import withSheet from 'react-jss';
import classNames from 'classnames';
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

const Cover = ({classes, screenHeight}) => {
  const maxImageHeight = screenHeight - minHeight;
  const settings = {
    showThumbs: false,
    showArrows: true,
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
            src="../../images/office/office1.jpg"
            height={maxImageHeight}
          />
          <p className="legend">La Chatounerie, vue de l'extérieur</p>
        </div>
        <div>
          <img
            src="../../images/office/office2.jpg"
            height={maxImageHeight}
          />
          <p className="legend">Notre arbre à chats, tant convoité</p>
        </div>
        <div>
          <img
            src="../../images/office/office3.jpg"
            height={maxImageHeight}
          />
          <p className="legend">Chatounerie vue de l'intérieur (droite porte d'entrée)</p>
        </div>
        <div>
          <img
            src="../../images/office/office4.jpg"
            height={maxImageHeight}
          />
          <p className="legend">Chatounerie vue de l'intérieur (gauche porte d'entrée)</p>
        </div>
      </Carousel>
    </section>
  );
};

export default withSheet(styles)(Cover);

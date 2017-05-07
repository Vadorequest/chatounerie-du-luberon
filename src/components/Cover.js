import React from 'react';
import withSheet from 'react-jss';
import smoothScroll from 'smoothscroll';
import classNames from 'classnames';

import { randomInt } from '../utils/helpers';
import overlayPatternImage from '../../public/images/overlay_pattern.png';

const coverImage = `../../images/covers/cover${randomInt(1, 5)}.jpg`;

const styles = {
  container: {
    background: {
      image: `url(${coverImage})`,
      attachment: 'fixed',
      size: 'cover',
    },
    padding: 0,
  },
  overlay: {
    background: {
      color: 'rgba(44, 62, 80, 0.3)',
      image: `url(${overlayPatternImage})`,
      repeat: `repeat`,
    },
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 0,
    height: '100vh',
  },
  intro: {
    position: 'absolute',
    width: '100%',
    top: '20%',
    left: 0,
    textAlign: 'center',
    transform: 'translate(0%, -50%)',
    padding: '0 15px',
    color: 'white',
  },
  introParagraph: {
    font: {
      size: 20,
      style: 'normal',
      family: `Raleway, "Times New Roman", Times, sans-serif`,
    },
    textTransform: 'none',
    margin: '15px 0',
  },
  scrollDown: {
    position: 'absolute',
    left: '50%',
    bottom: 40,
    border: '2px solid #fff',
    borderRadius: '50%',
    height: 50,
    width: 50,
    marginLeft: -15,
    display: 'block',
    zIndex: 10,
    textAlign: 'center',
    '& span': {
      position: 'relative',
      color: 'white',
      animation: 'bounce 1s infinite',
      '& i': {
        paddingTop: 10,
      }
    }
  }
};

const Cover = ({classes, screenWidth, screenHeight}) => {
  return (
    <section
      id="home"
      className={classes.container}
      style={{ height: screenHeight }}
    >
      <div className={classes.overlay} />

      <div className={classes.intro}>
        <p className={classes.introParagraph}>
          Bonjour et bienvenue à
        </p>
        <h1>La Chatounerie du Lubéron</h1>
        <p className={classes.introParagraph}>
          un endroit sympa où nous laisser votre chat et partir voyager en toute sérénité !
        </p>
      </div>

      <a
        onClick={() => smoothScroll(document.querySelector('#navbar'))}
        className={classNames(classes.scrollDown, 'pointer')}
      >
        <span>
          <i className="fa fa-angle-down fa-2x"></i>
        </span>
      </a>
    </section>
  );
};

export default withSheet(styles)(Cover);

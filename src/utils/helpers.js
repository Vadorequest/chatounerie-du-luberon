import smoothScroll from 'smoothscroll';

import { styles as NavbarStyles } from './../components/Navbar';

export const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const scrollTo = (target) => {
  const { navbar: { minHeight: minNavbarHeight } } = NavbarStyles;
  const $target = document.querySelector(target);
  const $targetPos = getPosition($target);
  console.log($targetPos.y + minNavbarHeight);

  if(target === '#home'){
    return smoothScroll($target);
  }else{
    return smoothScroll($target); // TODO find a way to calculate the new top position that ignores the navbar height
    // return smoothScroll($targetPos.y - minNavbarHeight);
  }
};

export const getPosition = (el) => {
  let xPos = 0;
  let yPos = 0;

  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      let xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      let yScroll = el.scrollTop || document.documentElement.scrollTop;

      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }

    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
};

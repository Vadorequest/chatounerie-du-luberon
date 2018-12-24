import React, { PropTypes } from 'react';

const GaleryItem = ({height, src, legend}) => {

  return (
    <div>
      <img
        src={`../../images/galeryOffice/${src}`}
        height={height}
        alt={legend}
      />
      {
        legend && legend.length && (
          <p className="legend">{legend}</p>
        )
      }
    </div>
  );
};

GaleryItem.propTypes = {
  height: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  legend: PropTypes.string,
};

export default GaleryItem;

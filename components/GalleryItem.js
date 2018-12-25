import React from 'react';
import PropTypes from 'prop-types';

const GaleryItem = ({ height, src, legend, alt = '' }) => {

  return (
    <div>
      <img
        src={`${src}`}
        height={height}
        alt={alt || legend}
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

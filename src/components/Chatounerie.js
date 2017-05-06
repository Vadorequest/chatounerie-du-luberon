import React from 'react';
import withSheet from 'react-jss';

const styles = {
  container: {
    height: 8000
  }
};

const Chatounerie = ({classes}) => {
  return (
    <section
      className={classes.container}
    >
      <h1>La Chatounerie</h1>
    </section>
  );
};

export default withSheet(styles)(Chatounerie);

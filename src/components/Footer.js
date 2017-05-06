import React from 'react';
import withSheet from 'react-jss';
import classNames from 'classnames';
import { Container, Row, Col } from 'reactstrap';


const styles = {
  footer: {
    background: {
      color: '#222',
    },
    color: 'white',
  },
  subfooter: {
    paddingLeft: 20,
    fontStyle: 'italic',
  },
};

const Footer = ({classes}) => {
  return (
    <section className={classNames(classes.footer, 'pt-3')}>
      <Container>
        <Row>
          <Col xs={{offset: 3}}>
            <p>
              <i className="fa fa-map-marker"></i> <strong>Adresse:</strong><br/>
              <p className={classes.subfooter}>
                La Chatounerie<br/>
                899 Chemin du Moulin D'Oise<br/>
                84440 Robion - FRANCE
              </p>
            </p>
            <p>
              <i className="fa fa-phone"></i> <strong>Portable :</strong> 06 73 51 77 04<br/>
              <i className="fa fa-envelope-o"></i> <strong>Email :</strong> vauclusechatounerie@gmail.com
            </p>
          </Col>
          <Col>
            <p>
              <i className="fa fa-address-card-o"></i> <strong>Identification éleveur professionel:</strong><br/>
              <p className={classes.subfooter}>
                Certificat de capacité N°C2660<br/>
                CETAC N°84 115<br/>
                N° Siret 43875234700031​
              </p>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default withSheet(styles)(Footer);

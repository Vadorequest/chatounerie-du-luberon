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

const Footer = ({classes, toggleConditionsModal}) => {
  return (
    <section className={classNames(classes.footer, 'pt-4', 'pb-4')}>
      <Container>
        <Row>
          <Col>
            <div>
              <i className="fas fa-map-marker"></i> <strong>Adresse:</strong><br/>
              <div className={classes.subfooter}>
                La chatounerie du Luberon<br/>
                899 B Chemin du Moulin D'Oise<br/>
                84440 Robion - FRANCE
              </div>
            </div>
            <div>
              <i className="fas fa-phone"></i> <strong>Portable :</strong> 06 73 51 77 04<br/>
              <i className="fas fa-envelope-o"></i> <strong>Email :</strong> vauclusechatounerie@gmail.com
            </div>
          </Col>
          <Col>
            <div>
              <i className="fas fa-address-card-o"></i> <strong>Identification éleveur professionel:</strong><br/>
              <div className={classes.subfooter}>
                Certificat de capacité N°C2660<br/>
                CETAC N°84 115<br/>
                N° Siret 43875234700031​
              </div>
              <div>
                <i className="fas fa-book"></i> <a onClick={toggleConditionsModal}>Conditions Générales d'Utilisation</a><br/>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <a href="http://www.annuaire-felin.com/"><img src="http://www.annuaire-felin.com/logochats.jpg" title="l'annuaire gratuits des chats" alt="l'annuaire gratuit des chats" /></a>
              &nbsp;
              <a href="http://www.annuaire-felin.fr/"><img src="http://www.annuaire-felin.fr/referencement.jpg" title="Felin L'annuaire des éleveurs" alt="Felin L'annuaire des éleveurs"/></a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default withSheet(styles)(Footer);

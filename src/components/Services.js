import React from 'react';
import withSheet from 'react-jss';
import classNames from 'classnames';
import {
  Card, Button, Col, Row, CardText, CardBlock,
  CardTitle, Jumbotron
} from 'reactstrap';

const styles = {
  container: {
    '& .jumbotron': {
      marginBottom: 0,
    },
    '& .icon': {
      textAlign: 'center',
    },
  },
  btnCGU: {
    float: 'right',
  },
};

const Services = ({classes}) => {
  return (
    <section
      id="services"
      className={classes.container}
    >
      <Jumbotron style={{ paddingBottom: 'none' }}>
        <Card className="mb-3">
          <CardBlock>
            <CardTitle>Prestations et Services <Button className={classes.btnCGU} color="info">Voir nos Conditions</Button></CardTitle>
            <CardText>
              <br/>
              ​​Notre Chatounerie est un lieu convivial qui permettra à votre chat de séjourner agréablement en attendant votre retour.
              Il pourra y recevoir les caresses et les  soins nécéssaires dont il a besoin et ce, avec attention.
            </CardText>
          </CardBlock>
        </Card>

        <Row>
          <Col className="mb-3">
            <Card className="mb-3">
              <CardBlock>
                <CardTitle>Lieu de vie</CardTitle>
                <CardText>
                  <ul>
                    <li>
                      ​La chatounerie est chauffée en hiver, une température de confort y est maintenue.
                    </li>
                    <li>
                      Elle est équipée de tout le confort nécessaire, éclairée de lumière naturelle par les fénêtres et la baie vitrée d'où les chats peuvent à loisir observer les extérieurs.​
                    </li>
                    <li>
                      Les petits récipients d'eau et de croquettes sont lavés quotidiennement, les coussins, tapis, hamacs, sont lavés avant l'arrivée d'autres pensionnaires.
                    </li>
                    <li>
                      Les toilettes sont garnies de litière végétale.
                    </li>
                  </ul>
                </CardText>
              </CardBlock>
            </Card>
          </Col>

          <Col className="mb-3">
            <Card className="item">
              <CardBlock>
                <CardTitle>Nos installations</CardTitle>
                <CardText>
                  <ul>
                    <li>
                      ​Afin de leur offrir le loisir de se détendre, de courir, de sauter et de jouer avec les éléments naturels, les chats ont la possibilité (les jours de beau temps) d'accéder à la chatterie extérieure qui est équipée de plateformes, de troncs d'arbre, et de poutres, ainsi ils peuvent à loisir profiter du grand air, observer insectes et papillons et écouter le chant des oiseaux et les cigales en été.
                    </li>
                    <li>
                      Même le chat qui n'a pas l'habitude d'être en compagnie de ses congénères, se comportera différemment à la Chatounerie car il n'a pas de territoire à défendre, n'étant pas chez lui, il deviendra plus sociable. C'est pour cette raison que nous ne pourrons accepter les effets personnels de vos chatounets.
                    </li>
                    <li>
                      Nous demanderons à votre chat de rester courtois et poli (nous ne sommes pas équipés pour l'accueil des chats associaux).
                    </li>
                  </ul>
                </CardText>
              </CardBlock>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col className="mb-3">
            <Card className="mb-3">
              <CardBlock>
                <CardTitle>La restauration</CardTitle>
                <CardText>
                  <ul>
                    <li>
                      L'alimentation que nous avons choisie pour nos fins gourmets est réputée être de qualité. Nous avons opté pour des croquettes Royal Canin, sensible 33, pour permettre même aux plus délicats une bonne digestion.
                    </li>
                    <li>
                      Dans nos tarifs, la pension, la nourriture, la litière, les soins de base ainsi que l'administration de médicaments sur ordonnance sont compris.
                    </li>
                  </ul>
                </CardText>
              </CardBlock>
            </Card>
          </Col>

          <Col className="mb-3">
            <Card className="item">
              <CardBlock>
                <CardTitle>Les soins vétérinaires</CardTitle>
                <CardText>
                  <ul>
                    <li>
                      La clinique est située à 3 minutes de la Chatounerie elle est ouverte du lundi au vendredi de 8h30 à 12h00 et de 14h00 à 19h00.
                    </li>
                    <li>
                      Les samedis de 8h30 à 12h00 et de 14h00 à 18h00.
                    </li>
                    <li>
                      Les autres horaires et les dimanches sont en tarif d'urgence.
                    </li>
                  </ul>
                </CardText>
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </Jumbotron>
    </section>
  );
};

export default withSheet(styles)(Services);

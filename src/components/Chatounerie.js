import React from 'react';
import withSheet from 'react-jss';
import {
  Card, CardImg, Col, Row, CardText, CardBlock,
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
    '& .item': {
      minHeight: 275,
    }
  }
};

const Chatounerie = ({classes}) => {
  return (
    <section
      id="chatounerie"
      className={classes.container}
    >
      <Jumbotron style={{ paddingBottom: 'none' }}>
        <Card className="mb-3">
          <CardBlock>
            <CardTitle>Vous partez en week end ou en vacances, laissez nous votre chat, nous nous en occupons !</CardTitle>
            <CardText>
              La Chatounerie, notre petite pension féline est située à 30 Km d'Avignon, 37 Km de Salon de Provence et 27 Km d'Apt.<br/>
              En plein coeur du <strong>Lubéron</strong>, proche des communes de Gordes, Lacoste, Roussillon et Lourmarin, en Vaucluse.<br/>
            </CardText>
          </CardBlock>
        </Card>

        <Row>
          <Col className="mb-3">
            <Card className="item">
              <CardImg tag="i" className="fa fa-graduation-cap fa-3x pt-3 icon"></CardImg>
              <CardBlock>
                <CardTitle>Éleveur professionnel</CardTitle>
                <CardText>
                  Grande passionnée d'animaux, cette chatounerie est un lieu confortable pour les chats.<br/>
                  Je suis diplômée des Cetac "Chats" et "Chiens".
                </CardText>
              </CardBlock>
            </Card>
          </Col>

          <Col className="mb-3">
            <Card className="item">
              <CardImg tag="i" className="fa fa-users fa-3x pt-3 icon"></CardImg>
              <CardBlock>
                <CardTitle>Disponibles</CardTitle>
                <CardText>
                  Vous redoutez de confier votre animal de compagnie à n'importe qui ? Venez découvrir nos locaux !<br/>
                  Notre pension est ouverte toute l'année du lundi au samedi.<br/>
                </CardText>
              </CardBlock>
            </Card>
          </Col>

          <Col className="mb-3">
            <Card className="item">
              <CardImg tag="i" className="fa fa-comments-o fa-3x pt-3 icon"></CardImg>
              <CardBlock>
                <CardTitle>À l'écoute</CardTitle>
                <CardText>Nous sommes à l'écoute de nos clients et de leurs besoins, et pratiquons des tarifs dégressifs en fonction le nombre d'animaux et la durée de séjour.</CardText>
              </CardBlock>
            </Card>
          </Col>

          <Col className="mb-3">
            <Card className="item">
              <CardImg tag="i" className="fa fa-h-square fa-3x pt-3 icon"></CardImg>
              <CardBlock>
                <CardTitle>Soins à proximité</CardTitle>
                <CardText>La clinique vétérinaire est située à 3 minutes de la Chatounerie, ouverte 24/24, 7/7.</CardText>
              </CardBlock>
            </Card>
          </Col>

        </Row>
      </Jumbotron>
    </section>
  );
};

export default withSheet(styles)(Chatounerie);

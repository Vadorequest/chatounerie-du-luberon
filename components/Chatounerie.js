import React from 'react';
import withSheet from 'react-jss';
import { Card, CardBody, CardImg, CardText, CardTitle, Col, Jumbotron, Row } from 'reactstrap';

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
    },
  },
};

const Chatounerie = ({ classes }) => {
  return (
    <section
      id="chatounerie"
      className={classes.container}
    >
      <Jumbotron style={{ paddingBottom: 'none' }}>
        <Card className="mb-3">
          <CardBody>
            <CardTitle>Vous partez en week end ou en vacances, laissez nous votre chat, nous nous en occupons&nbsp;!</CardTitle>
            <CardText>
              La chatounerie, notre petite pension féline est située à 30 Km d'Avignon, 37 Km de Salon de Provence et 27 Km d'Apt.<br />
              En plein coeur du <strong>Luberon</strong>, proche des communes de Gordes, Lacoste, Roussillon et Lourmarin, en Vaucluse.<br />
            </CardText>
          </CardBody>
        </Card>

        <Row>
          <Col className="mb-3" xs="12" md="6" lg="3">
            <Card className="item">
              <CardImg tag="i" className="fas fa-graduation-cap fa-3x pt-3 icon" />
              <CardBody>
                <CardTitle>Éleveur professionnel</CardTitle>
                <CardText>
                  Grande passionnée d'animaux, cette chatounerie collective est un lieu confortable pour les chats.<br />
                  <strong>Diplômée Cetac "Chats" et "Chiens".</strong>
                </CardText>
              </CardBody>
            </Card>
          </Col>

          <Col className="mb-3" xs="12" md="6" lg="3">
            <Card className="item">
              <CardImg tag="i" className="fas fa-users fa-3x pt-3 icon" />
              <CardBody>
                <CardTitle>Disponibilité</CardTitle>
                <CardText>
                  Vous redoutez de confier votre animal de compagnie à n'importe qui ? Venez <strong>découvrir nos locaux</strong>&nbsp;!<br />
                  <br />
                  <b>Notre pension est ouverte toute l'année du lundi au samedi de 10h à midi et de 14h à 18h. <br />
                    Nous sommes fermés les dimanches et jours fériés.</b><br />
                </CardText>
              </CardBody>
            </Card>
          </Col>

          <Col className="mb-3" xs="12" md="6" lg="3">
            <Card className="item">
              <CardImg tag="i" className="fas fa-comments fa-3x pt-3 icon" />
              <CardBody>
                <CardTitle>À l'écoute</CardTitle>
                <CardText>Nous sommes <strong>à l'écoute de nos clients et de leurs besoins</strong>, et pratiquons des <strong>tarifs dégressifs</strong> en fonction le nombre d'animaux et la durée de séjour (à partir de 3 chats).</CardText>
              </CardBody>
            </Card>
          </Col>

          <Col className="mb-3" xs="12" md="6" lg="3">
            <Card className="item">
              <CardImg tag="i" className="fas fa-h-square fa-3x pt-3 icon" />
              <CardBody>
                <CardTitle>Soins à proximité</CardTitle>
                <CardText>La clinique vétérinaire est située à <strong>3 minutes</strong> de la Chatounerie, <strong>ouverte 24/24, 7/7</strong>.</CardText>
              </CardBody>
            </Card>
          </Col>

        </Row>
      </Jumbotron>
    </section>
  );
};

export default withSheet(styles)(Chatounerie);

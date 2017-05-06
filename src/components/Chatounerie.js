import React from 'react';
import withSheet from 'react-jss';
import { Jumbotron } from 'reactstrap';

const styles = {
  container: {
    height: 800
  }
};

const Chatounerie = ({classes}) => {
  return (
    <section
      id="chatounerie"
      className={classes.container}
    >
      <Jumbotron>
        <p>
          Vous partez en week end ou en vacances, laissez nous votre chat, nous nous en occupons !
        </p>

        <p>
          La Chatounerie, notre petite pension féline est située à 30 Km d'Avignon, 37 Km de Salon de Provence, 27 Km d'Apt.
          En plein coeur du Luberon, proche des communes de Gordes, Lacoste, Roussillon et Lourmarin, en Vaucluse.
        </p>

        <p>
          Passionnée d'animaux, cette chatounerie est un lieu confortable pour les chats.
          Je suis diplômée des Cetac "Chats" et "Chiens".
        </p>

        <p>
          La clinique vétérinaire est située à 3 minutes de la Chatounerie, ouverte 24/24, 7/7.
        </p>

        <p>
          Vous pouvez nous visiter afin de découvrir nos locaux.
          Notre pension est ouverte toute l'année du lundi au samedi.
          Fermée aux visites les dimanches et jours fériés.Pour mieux vous recevoir merci de prendre rendez-vous.
        </p>
      </Jumbotron>
    </section>
  );
};

export default withSheet(styles)(Chatounerie);

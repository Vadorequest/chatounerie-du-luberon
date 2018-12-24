import React from 'react';
import withSheet from 'react-jss';
import { Button, Form, FormGroup, Label, Input, Col, Container, Alert, Row } from 'reactstrap';
import classNames from 'classnames';
import { toast } from 'react-toastify';
import fetch from 'isomorphic-fetch';

const styles = {
  container: {

  },
};

const sendForm = () => {
  // XXX Old school, faster.
  const payload = {
    identity: document.querySelector('#inputIdentity').value,
    email: document.querySelector('#inputEmail').value,
    phone: document.querySelector('#inputPhone').value,
    message: document.querySelector('#inputMessage').value,
  };

  fetch('sendContactForm', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
    .then((body) => {
      return body.json();
    })
    .then((response) => {
      if(response.statusCode !== 200){
        return toast.error(response.message);
      }

      document.querySelector('#formContact').reset();
      return toast.success(response.message, { autoClose: 10000 });
    })
    .catch((err) => {
      toast.error(err.message);
    });
};

const Contact = ({classes}) => {
  return (
    <section
      id="contact"
      className={classNames(classes.container, 'pb-3')}
    >
      <Container>
        <h2 className="mb-3">Nous contacter</h2>

        <Row>
          <Col xs="12" xl="6">
            <Form id="formContact">
              <FormGroup row>
                <Label for="inputIdentity" sm={2}>Nom et prénom</Label>
                <Col sm={10}>
                  <Input name="inputIdentity" id="inputIdentity" placeholder="Nom et Prénom" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="inputEmail" sm={2}>Adresse E-mail</Label>
                <Col sm={10}>
                  <Input type="email" name="inputEmail" id="inputEmail" placeholder="Adresse E-mail" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="inputPhone" sm={2}>N° de téléphone</Label>
                <Col sm={10}>
                  <Input type="phone" name="inputPhone" id="inputPhone" placeholder="N° de téléphone" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="inputMessage" sm={2}>Message</Label>
                <Col sm={10}>
                  <Input type="textarea" name="inputMessage" id="inputMessage" rows="8" placeholder="Merci d'indiquer le nombre de chats ainsi que les dates désirées" />
                </Col>
              </FormGroup>
              <FormGroup check row>
                <Col sm={{ size: 10, offset: 2 }}>
                  <Button color="primary" onClick={sendForm}>Envoyer</Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>

          <Col xs="12" xl="6">
            <Alert color="info">
              Vous pouvez également nous joindre par e-mail ou par téléphone&nbsp;:<br/>
              <ul>
                <li>
                  <strong>Téléphone:</strong> 06 73 51 77 04
                </li>
                <li>
                  <strong>Email:</strong> <a href="mailto:vauclusechatounerie@gmail.com?subject=[Chatounerie] Demande de renseignements&body=Bonjour,">vauclusechatounerie@gmail.com</a>
                </li>
                <li>
                  <strong>Adresse:</strong> 899 B Chemin du Moulin D'Oise, 84440 Robion
                </li>
              </ul>
            </Alert>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default withSheet(styles)(Contact);

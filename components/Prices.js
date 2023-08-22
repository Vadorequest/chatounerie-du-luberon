import React, { Component } from 'react';
import withSheet from 'react-jss';
import classNames from 'classnames';
import {
  Card, Alert, Col, Row, CardText, CardBody,
  CardTitle, Table,
  TabContent, TabPane, Nav, NavItem, NavLink
} from 'reactstrap';

const styles = {
  container: {

  },

};

class Prices extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeTab: '1'
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render(){
    const { classes } = this.props;

    return (
      <section
        id="prices"
        className={classNames(classes.container)}
      >
        <Card className={classNames('mb-3')}>
          <CardBody className="bg-faded">
            <Card className="mb-5 mt-5">
              <CardBody>
                <CardTitle>Tarification et fonctionnement</CardTitle>
                <CardText tag="div">
                  <ul>
                    <li>
                      Tout séjour fera l'objet d'une réservation qui devra être confirmée et ne sera effective qu'après réception d'un acompte de 6€ par jour et par chat, le solde du séjour est exigible le jour de l'entrée de votre minou à la chatounerie.
                    </li>
                    <li>
                      En cas d'annulation, en tout ou en partie, moins de 3 semaines avant la date d'entrée prévue, l'acompte ne vous sera pas remboursé. <small>(Sauf en cas de décès du chat et sur présentation d'un certificat médical vétérinaire)</small>
                    </li>
                    <li>
                      Si le séjour est annulé en totalité plus de 3 semaines avant la date prévue, l'acompte sera restitué avec une retenue de 30€ pour couvrir les frais de dossier.
                    </li>
                    <li>
                      Les frais vétérinaires qui pourraient être engagés pendant le séjour du chat devront être remboursés par son propriétaire dès son retour.
                    </li>
                    <li>
                      Toutes les journées réservées seront comptabilisées même en cas d'arrivée retardée ou de sortie anticipée de l'animal.
                    </li>
                    <li>
                      Les frais de garde des paniers (identifiés et propres) seront facturés 1 € par jour en saison basse, et 2€ par jour en saison haute.
                    </li>
                    <li>
                      Toute journée complémentaire non mentionnée au contrat sera facturée au tarif selon la période (haute/basse saison), en fonction du nombre de chats et majorée de <strong>25%</strong>.
                    </li>
                  </ul>
                </CardText>
              </CardBody>
            </Card>

            <Row>
              <Col xs={12} md={6}>
                <Card className="mb-3">
                  <CardBody>
                    <CardTitle>Dates de Haute saison</CardTitle>
                    <CardText tag="div">
                      <Table striped hover responsive>
                        <thead>
                          <tr>
                            <th></th>
                            <th>Début</th>
                            <th>Fin</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Hiver</th>
                            <td>10 Février 2022</td>
                            <td>11 Mars 2022</td>
                          </tr>
                          <tr>
                            <th scope="row">Printemps</th>
                            <td>06 Avril 2022</td>
                            <td>06 Mai 2022</td>
                          </tr>
                          <tr>
                            <th scope="row">Ascension</th>
                            <td>08 Mai 2022</td>
                            <td>13 Mai 2022</td>
                          </tr>
                          <tr>
                            <th scope="row">Été</th>
                            <td>01 Juillet 2022</td>
                            <td>02 Septembre 2022</td>
                          </tr>
                          <tr>
                            <th scope="row">Toussaint</th>
                            <td>26 Octobre 2021</td>
                            <td>06 Novembre 2021</td>
                          </tr>
                          <tr>
                            <th scope="row">Noël</th>
                            <td>23 Décembre 2021</td>
                            <td>08 Janvier 2022</td>
                          </tr>
                        </tbody>
                      </Table>

                      <Alert color="info">
                        <strong>Basse Saison:</strong> Toute période non indiquée ci-dessus est en Basse saison.
                      </Alert>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>

              <Col xs={12} md={6}>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classNames({ active: this.state.activeTab === '1' })}
                      onClick={() => { this.toggle('1'); }}
                    >
                      Basse Saison
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classNames({ active: this.state.activeTab === '2' })}
                      onClick={() => { this.toggle('2'); }}
                    >
                      Haute Saison
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <Card className="mb-3">
                      <CardBody>
                        <CardTitle>Tarifs en Basse Saison</CardTitle>
                        <CardText tag="div">
                          <Table striped hover responsive>
                            <thead>
                              <tr>
                                <th>Nombre de chats</th>
                                <th>Tarif par jour et par chat</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">Un ou deux chats</th>
                                <td>14€</td>
                              </tr>
                              <tr>
                                <th scope="row">Trois chats et plus</th>
                                <td>12€</td>
                              </tr>
                            </tbody>
                          </Table>

                          <Alert color="info">
                            <strong>Séjour longue durée:</strong> 20% de réduction
                            <small>(Pour tout séjour de 30 jours consécutifs, à partir du 31ème jour.)</small><br />
                            <small><b>N.B</b>: Il n'y a pas de tarifs dégressifs durant les périodes de Noël/Nouvel an et juillet/août.</small><br />
                          </Alert>
                          <Alert color="warning">
                            <strong>Vétérinaire:</strong> Forfait de <strong>60€</strong> (transport aller-retour)<br />
                            <small>(Uniquement en cas de visite chez le vétérinaire)</small>
                          </Alert>
                        </CardText>
                      </CardBody>
                    </Card>
                  </TabPane>
                  <TabPane tabId="2">
                    <Card className="mb-3">
                      <CardBody>
                        <CardTitle>Tarifs en Haute Saison</CardTitle>
                        <CardText tag="div">
                          <Table striped hover responsive>
                            <thead>
                              <tr>
                                <th>Nombre de chats</th>
                                <th>Tarif par jour et par chat</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">Un ou deux chats</th>
                                <td>16€</td>
                              </tr>
                              <tr>
                                <th scope="row">Trois chats et plus</th>
                                <td>14€</td>
                              </tr>
                            </tbody>
                          </Table>

                          <Alert color="info">
                            <strong>Séjour longue durée:</strong> 20% de réduction<br/>
                            <small>(Pour tout séjour de 30 jours consécutifs, à partir du 31ème jour.)</small>
                            <small><b>N.B</b>: Il n'y a pas de tarifs dégressifs durant les périodes de Noël/Nouvel an et juillet/août.</small><br />
                          </Alert>
                          <Alert color="warning">
                            <strong>Vétérinaire:</strong> Forfait de <strong>60€</strong> (transport aller-retour)<br/>
                            <small>(Uniquement en cas de visite chez le vétérinaire)</small>
                          </Alert>
                        </CardText>
                      </CardBody>
                    </Card>
                  </TabPane>
                </TabContent>
              </Col>

              {/*<Col xs={12} md={12}>*/}
                {/*<Alert color="danger" style={{"textAlign": "center"}}>*/}
                  {/*<strong>Nos tarifs vont augmenter de 1€ (par jour et par chat) à compter du 20 décembre 2017, en basse et en haute saison.</strong>*/}
                {/*</Alert>*/}
              {/*</Col>*/}
            </Row>

          </CardBody>
        </Card>
      </section>
    );
  };
}

export default withSheet(styles)(Prices);

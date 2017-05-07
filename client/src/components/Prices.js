import React, { Component } from 'react';
import withSheet from 'react-jss';
import classNames from 'classnames';
import {
  Card, Alert, Col, Row, CardText, CardBlock,
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
        className={classes.container}
      >
        <Card className={classNames('mb-3')}>
          <CardBlock className="bg-faded">
            <Card className="mb-3">
              <CardBlock>
                <CardTitle>Tarification et fonctionnement</CardTitle>
                <CardText>
                  <ul>
                    <li>
                      Tout séjour fera l'objet d'une réservation qui devra être confirmée et ne sera effective qu'après réception d'un acompte de 6€ par jour et par chat, le solde du séjour est exigible le jour de l'entrée de votre minou à la chatounerie.
                    </li>
                    <li>
                      En cas d'annulation, en tout ou en partie, moins de 3 semaines avant la date d'entrée prévue, l'acompte ne sera pas remboursé sauf en cas de décès du chat et sur présentation d'un certificat médical vétérinaire.
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
                  </ul>
                </CardText>
              </CardBlock>
            </Card>

            <Row>
              <Col xs={12} md={6}>
                <Card className="mb-3">
                  <CardBlock>
                    <CardTitle>Dates de Haute saison</CardTitle>
                    <CardText>
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
                            <th scope="row">Toussaint</th>
                            <td>Samedi 19 octobre 2016</td>
                            <td>Lundi 3 novembre 2016</td>
                          </tr>
                          <tr>
                            <th scope="row">Noël</th>
                            <td>Samedi 17 décembre 2016</td>
                            <td>Lundi 3 janvier 2017</td>
                          </tr>
                          <tr>
                            <th scope="row">Hiver</th>
                            <td>Samedi 11 février 2016</td>
                            <td>Lundi 27 février 2017</td>
                          </tr>
                          <tr>
                            <th scope="row">Printemps</th>
                            <td>Samedi 8 avril 2016</td>
                            <td>Lundi 24 avril 2017</td>
                          </tr>
                          <tr>
                            <th scope="row">Été</th>
                            <td>mercredi 8 juillet 2017</td>
                            <td>Lundi 1 septembre 2017</td>
                          </tr>
                        </tbody>
                      </Table>

                      <Alert color="info">
                        <strong>Basse Saison:</strong> Toute période non indiquée ci-dessus est en Basse saison.
                      </Alert>
                    </CardText>
                  </CardBlock>
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
                      <CardBlock>
                        <CardTitle>Tarifs en Basse Saison</CardTitle>
                        <CardText>
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
                                <td>11€</td>
                              </tr>
                              <tr>
                                <th scope="row">Trois chats et plus</th>
                                <td>10€</td>
                              </tr>
                            </tbody>
                          </Table>

                          <Alert color="info">
                            <strong>Séjour longue durée:</strong> 20% de réduction<br/>
                            <small>(Pour tout séjour de 30 jours consécutifs, à partir du 31ème jour.)</small>
                          </Alert>
                          <Alert color="warning">
                            <strong>Vétérinaire:</strong> Forfait de <strong>20€</strong> + 0.50€/KM (transport aller simple)<br/>
                            <small>(En cas de visite chez le vétérinaire.)</small>
                          </Alert>
                        </CardText>
                      </CardBlock>
                    </Card>
                  </TabPane>
                  <TabPane tabId="2">
                    <Card className="mb-3">
                      <CardBlock>
                        <CardTitle>Tarifs en Haute Saison</CardTitle>
                        <CardText>
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
                                <td>13€</td>
                              </tr>
                              <tr>
                                <th scope="row">Trois chats et plus</th>
                                <td>11€</td>
                              </tr>
                            </tbody>
                          </Table>

                          <Alert color="info">
                            <strong>Séjour longue durée:</strong> 20% de réduction<br/>
                            <small>(Pour tout séjour de 30 jours consécutifs, à partir du 31ème jour.)</small>
                          </Alert>
                          <Alert color="warning">
                            <strong>Vétérinaire:</strong> Forfait de <strong>30€</strong> + 0.50€/KM (transport aller simple)<br/>
                            <small>(En cas de visite chez le vétérinaire.)</small>
                          </Alert>
                        </CardText>
                      </CardBlock>
                    </Card>
                  </TabPane>
                </TabContent>

              </Col>
            </Row>

          </CardBlock>
        </Card>
      </section>
    );
  };
}

export default withSheet(styles)(Prices);

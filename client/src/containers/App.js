import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import classNames from 'classnames';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
  TabContent, TabPane, Nav, NavItem, NavLink, Card,
  Alert, CardText, Row, Col
} from 'reactstrap';

import Cover from '../components/Cover';
import Navbar from '../components/Navbar';
import Chatounerie from '../components/Chatounerie';
import Office from '../components/Office';
import Services from '../components/Services';
import Galery from '../components/Galery';
import Prices from '../components/Prices';
import Contact from '../components/Contact';
import GoogleMap from '../components/GoogleMap';
import Footer from '../components/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenWidth: '0',
      screenHeight: '0',
      isConditionsModalOpen: false,
      conditionsModalActiveTab: '1',
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.toggleConditionsModal = this.toggleConditionsModal.bind(this);
    this.toggleConditionsModalActiveTab = this.toggleConditionsModalActiveTab.bind(this);
  }

  toggleConditionsModal() {
    this.setState({
      isConditionsModalOpen: !this.state.isConditionsModalOpen
    });
  }

  toggleConditionsModalActiveTab(tab) {
    if (this.state.conditionsModalActiveTab !== tab) {
      this.setState({
        conditionsModalActiveTab: tab
      });
    }
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight
    });
  }

  render() {
    return (
      <div className="App">
        <Cover
          screenHeight={this.state.screenHeight}
        />
        <Navbar />
        <Chatounerie />
        <Office
          screenHeight={this.state.screenHeight}
        />
        <Services
          toggleConditionsModal={this.toggleConditionsModal}
        />
        <Galery
          screenHeight={this.state.screenHeight}
        />
        <Prices />
        <Contact />
        <GoogleMap />
        <Footer
          toggleConditionsModal={this.toggleConditionsModal}
        />

        <ToastContainer />

        <Modal
          isOpen={this.state.isConditionsModalOpen}
          toggle={this.toggleConditionsModal}
          size="lg"
        >
          <ModalHeader toggle={this.toggleConditionsModal}>
            Conditions Générales d'Utilisation
          </ModalHeader>
          <ModalBody>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classNames({ active: this.state.conditionsModalActiveTab === '1' })}
                  onClick={() => { this.toggleConditionsModalActiveTab('1'); }}
                >
                  Conditions d'Hébergement
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classNames({ active: this.state.conditionsModalActiveTab === '2' })}
                  onClick={() => { this.toggleConditionsModalActiveTab('2'); }}
                >
                  Conditions Sanitaires
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.conditionsModalActiveTab}>
              <TabPane tabId="1">
                <Row>
                  <Col>
                    <Card block>
                      <CardText>
                        <Alert color="info">
                          En nous confiant la garde son animal, le propriétaire adhère totalement aux présentes conditions générales.
                        </Alert>
                        <ul>
                          <li>
                            Compte tenu des directives vétérinaires DSV, les chats qui nous sont confiés doivent avoir été vaccinés 15 jours révolus avant leur entrée à la Chatounerie, <strong>contre le Typhus, le Coryza et la Leucose</strong>.
                          </li>
                          <li>
                            <strong>Pour les animaux venant des départements à risque, la vaccination antirabique est exigée.</strong>
                          </li>
                          <li>
                            Le carnet de vaccination des animaux laissés en garde sera confié à la Chatounerie pendant tout son séjour.
                          </li>
                          <li>
                            Les chats devront tous avoir été identifiés par puce électronique ou tatouage.
                          </li>
                          <li>
                            Les mâles devront avoir été castré, s'ils ont plus de six mois. Les femelles avoir été stérilisées ou avoir reçu un contraceptif et ne pas être en chaleur.
                          </li>
                          <li>
                            Un justificatif  devra être remis concernant l'administration par un vétérinaire d'un anti-parasitaire, ce médicament aura été administré 10 jours avant l'arrivée du chat à la Chatounerie.
                          </li>
                        </ul>
                        <div className="pb-3">
                          Dans tous les cas s'il s'avérait que pendant son séjour, l'animal confié déclenche, ou soit atteint de symptômes ou d'une maladie, ou anomalie comportementale, l'animal sera ausculté par un vétérinaire, les mesures nécessaires prises pour son bon rétablissement, tous les frais afférents seront demandés au propriétaire, au moment de la remise de l'animal, aucune dérogation ne sera consentie.
                        </div>
                        <Alert color="warning">
                          Si l'animal remis en garde doit suivre un traitement, il sera demandé les médicaments en nombre suffisant et la prescription vétérinaire pour toute la période du séjour.<br/>
                          Aucune injection même prescrite ne sera faite autrement que par un vétérinaire.<br/>
                          Nous pourrons selon les besoins de l'animal, l'y emmener.<br/>

                          Tout déplacement chez le vétérinaire sera facturé 20 euros en basse saison et 30 euros en haute saison pour un aller simple (dépose de l'animal à la clinique), 40 euros en basse saison et 60 euros en haute saison pour un aller-retour.​
                        </Alert>
                        <Alert color="info">
                          Le prix de la pension comprend la nourriture, cependant si vous préférez nous apporter ses croquettes favorites nous pourrons lui en mettre à disposition, sans que cela n'affecte le montant de la pension.
                        </Alert>
                      </CardText>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col>

                    <Card block>
                      <CardText>
                        <Alert color="info">
                          En nous confiant la garde son animal, le propriétaire adhère totalement aux présentes conditions générales.
                        </Alert>
                        <ul>
                          <li>
                            Les locaux sont nettoyés quotidiennement.
                          </li>
                          <li>
                            La pension n'est pas responsable  des épidémies ou eczémas qui pourraient survenir pendant ni après le séjour du chat. Certaines affections pouvant être présente dans l'organisme d'un animal pendant des années sans aucune manifestations (porteur sain) et ne se déclencher que lors de stress (mise en pension, changement d'habitude) et faire apparaître les signes cliniques de ces symptômes à ce moment là.
                          </li>
                          <li>
                            Les maladies comme la PIF, la FIV, la teigne et certains coryzas chroniquesd'insuffisance hépatique ou rénale.
                          </li>
                          <li>
                            La Chatounerie ne pourra être tenu pour responsable en cas d'apparition de maladies.
                          </li>
                          <li>
                            La Chatounerie se réserve le droit de refuser l'animal qui ne remplit pas les conditions sanitiaires, administratives ou comportementales (agressif ou dangereux et l'acompte ne sera pas remboursé).
                          </li>
                          <li>
                            Aucune responsabilité de la Chatounerie ne sera engagée lors d'accident de nature imprévisible, crise cardiaque, problème lié à la vieillesse, torsion, épidémie, perte de poids, etc. Ou si l'agressivité de l'animal empêche de lui prodiguer les soins nécessaires. En cas de décès de l'animal, il sera pratiqué une autopsie qui déterminera les causes du décès. Un compte rendu, ou une attestation du vétérinaire vous sera remis. L'animal sera incinéré. Les sommes dûes seront réglées par le propriétaire. Si vous vous opposez à l'autopsie, veuillez l'indiquer dans la case appropriée sur le formulaire qu'il vous faudra remplir au moment de la réservation.
                          </li>
                          <li>
                            Nous pourrons prodiguer quelques soins de toilettage à votre animal (s'il se laisse faire facilement) brossage, nettoyage des yeux, nous ne sommes pas toiletteur, l'animal devra arriver à la Chatounerie en bon état général et d'entretien sans parasite.
                          </li>
                        </ul>
                        <Alert color="warning">
                          <ul>
                            <li>
                              Tout animal laissé plus de 7 jours à la pension après la date de départ fixée (et ce, sans nouvelle de son propriétaire) sera considéré comme abandonné et nous serons dans l'obligation, de prendre les dispositions nécessaires relatives aux abandons des animaux (Art 453, 511-11 et 521-1 du code pénal).
                            </li>
                            <li>
                              Des poursuites seront donc engagées contre le propriétaire, la pension pourra disposer librement de l'animal et mettre en recouvrement tous les frais inhérents à cette situation.                          Aucune injection même prescrite ne sera faite autrement que par un vétérinaire.<br/>
                            </li>
                            <li>
                              D'un point de vue juridique, le propriétaire qui doit assurer en responsabilité civile son animal, reste responsable de tous les dommages éventuels causés par ce dernier pendant son séjour en pension, sauf faute grave reconnue imputable au gardien de la pension. La mise en pension n'a pas pour effet un transfert pur et simple de responsabilités.
                            </li>
                          </ul>
                        </Alert>
                        <Alert color="info">
                          Si vous désirez prolonger le séjour de votre chat, veuillez nous en informer au moins 48 h à l'avance, en fonction des places disponibles nous essayerons de satisfaire votre demande, mais nous ne pouvons vous garantir de pouvoir le faire.
                          <ul>
                            <li>
                              L'acompte de 6€/jour/chat ne sera pas restitué si le séjour est annulé en tout ou en partie moins de 3 semaines avant la date d'entrée prévue de l'animal.
                            </li>
                            <li>
                              Si le séjour est annulé en totalité plus de 3 semaines avant la date prévue, l'acompte sera restitué avec une retenue de 30 euros par chat pour couvrir les frais de dossier.
                            </li>
                            <li>
                              Les jours d'entrée et de départ seront tous les deux facturés.
                            </li>
                            <li>
                              Nous ne pouvons nous permettre de conserver vos paniers de transport (tarif de garde des paniers 1€/jour en basse saison, 2€/jour en haute saison, celui-ci devra porter votre nom);
                            </li>
                          </ul>
                        </Alert>
                        <Alert color="warning">
                          <ul>
                            <li>
                              Le propriétaire est conscient que son animal vivant avec d'autres congénères n'est pas à l'abri d'un incident.
                            </li>
                            <li>
                              La pension reçoit toute l'année du lundi au samedi, fermés les dimanches et jours fériés.Les entrées et sorties se font sur rendez-vous aux jours d'ouverture soit du lundi au samedi de 10 h00 à 12 h00 et de 14 h00 à 19h00, samedi fermeture à 18 h00.
                            </li>
                            <li>
                              La signature du contrat de réservation vaut acceptation sans réserve de toutes les conditions indiquées ci-dessus:
                            </li>
                            <li>
                              En signant le contrat de garde, vous autorisez tous les soins, interventions ou décisions qui s'imposent et acceptez d'en régler les frais.
                            </li>
                          </ul>
                        </Alert>
                      </CardText>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleConditionsModal}>Fermer</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import classNames from 'classnames';
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardText,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap';

import Cover from '../components/Cover';
import Navbar from '../components/Navbar';
import Chatounerie from '../components/Chatounerie';
import GalleryOffice from '../components/GalleryOffice';
import Services from '../components/Services';
import GalleryCats from '../components/GalleryCats';
import Prices from '../components/Prices';
import Contact from '../components/Contact';
import Map from '../components/Map';
import Footer from '../components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenWidth: 0,
      screenHeight: 0,
      isConditionsModalOpen: false,
      conditionsModalActiveTab: '1',
      config: {
        covers: {
          items: [
            {
              filename: 'office1-min.jpg',
              legend: 'La Chatounerie, vue de l\'extérieur'
            }
          ],
        },
        galleryOffice: {
          items: [
            {
              filename: 'office1-min.jpg',
              legend: 'La Chatounerie, vue de l\'extérieur'
            }
          ],
        },
        galleryCats: {
          items: [
            {
              filename: 'office1-min.jpg',
              legend: 'La Chatounerie, vue de l\'extérieur'
            }
          ],
        },
        googleMap: {
          key: '',
        },
      },
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.toggleConditionsModal = this.toggleConditionsModal.bind(this);
    this.toggleConditionsModalActiveTab = this.toggleConditionsModalActiveTab.bind(this);
  }

  toggleConditionsModal() {
    this.setState({
      isConditionsModalOpen: !this.state.isConditionsModalOpen,
    });
  }

  toggleConditionsModalActiveTab(tab) {
    if (this.state.conditionsModalActiveTab !== tab) {
      this.setState({
        conditionsModalActiveTab: tab,
      });
    }
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillMount() {
    // fetch('config')
    //   .then(body => body.json())
    //   .then(response => {
    //     this.setState({config: response})
    //   })
    //   .catch(err => console.error(err));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    });
  }

  renderApp() {
    const config = this.state.config;

    return (
      <div className="app">
        <Cover
          screenHeight={this.state.screenHeight}
          config={config}
        />
        <Navbar />
        <Chatounerie />
        <GalleryOffice
          screenHeight={this.state.screenHeight}
          config={config}
        />
        <Services
          toggleConditionsModal={this.toggleConditionsModal}
        />
        <GalleryCats
          screenHeight={this.state.screenHeight}
          config={config}
        />
        <Prices />
        <Contact />
        <Map
          config={config}
        />
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
                  onClick={() => {
                    this.toggleConditionsModalActiveTab('1');
                  }}
                >
                  Conditions d'Hébergement
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classNames({ active: this.state.conditionsModalActiveTab === '2' })}
                  onClick={() => {
                    this.toggleConditionsModalActiveTab('2');
                  }}
                >
                  Conditions Sanitaires
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.conditionsModalActiveTab}>
              <TabPane tabId="1">
                <Row>
                  <Col>
                    <CardBody>
                      <CardText>
                        <Alert color="info">
                          En nous confiant la garde de son animal, le propriétaire adhère totalement aux présentes conditions générales.
                        </Alert>
                        <ul>
                          <li>
                            Compte tenu des directives vétérinaires DSV, les chats qui nous sont confiés doivent avoir été vaccinés au moins 15 jours révolus avant leur entrée à la Chatounerie, <strong>contre le Typhus, le Coryza et la Leucose</strong>.
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
                            Les mâles devront avoir été castré, s'ils ont plus de six mois.
                            Les femelles devront avoir été stérilisées ou avoir reçu un contraceptif et ne pas être en chaleur.
                          </li>
                          <li>
                            Un justificatif devra être remis concernant l'administration par un vétérinaire d'un anti-parasitaire, ce médicament aura été administré 10 jours avant l'arrivée du chat à la Chatounerie.
                          </li>
                        </ul>
                        <div className="pb-3">
                          Dans tous les cas, s'il s'avérait que pendant son séjour l'animal confié déclenche, des symptômes, maladies, ou anomalie comportementale alors l'animal sera ausculté par un vétérinaire, les mesures nécessaires prises pour son <strong>bon rétablissement</strong>.
                          Tous les frais afférents seront demandés au propriétaire, au moment de la remise de l'animal, aucune dérogation ne sera consentie.
                        </div>
                        <Alert color="warning">
                          Si l'animal remis en garde doit suivre un traitement, il sera demandé les médicaments en nombre suffisant et la prescription vétérinaire pour toute la période du séjour.<br />
                          Aucune injection même prescrite ne sera faite autrement que par un vétérinaire.<br />
                          Nous pourrons selon les besoins de l'animal, l'y emmener.<br />

                          Tout déplacement chez le vétérinaire sera facturé 20 euros en basse saison et 30 euros en haute saison pour un aller simple (dépose de l'animal à la clinique), 40 euros en basse saison et 60 euros en haute saison pour un aller-retour.​
                          <small>(Voir notre grille de tarifs</small>
                        </Alert>
                        <Alert color="info">
                          Le prix de la pension comprend la nourriture. Cependant, si vous préférez nous apporter ses croquettes favorites nous pourrons lui en mettre à disposition, sans que cela n'affecte le montant de la pension.
                        </Alert>
                      </CardText>
                    </CardBody>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col>
                    <CardBody>
                      <CardText>
                        <Alert color="info">
                          En nous confiant la garde de son animal, le propriétaire adhère totalement aux présentes conditions générales.
                        </Alert>
                        <ul>
                          <li>
                            Les locaux sont nettoyés quotidiennement.
                          </li>
                          <li>
                            Nous pourrons prodiguer quelques soins de toilettage à votre animal (s'il se laisse faire facilement) brossage, nettoyage des yeux, etc.
                            Cependant, nous ne sommes pas toiletteurs, l'animal devra donc arriver à la Chatounerie en bon état général et d'entretien, sans parasite.
                          </li>
                          <li>
                            La Chatounerie n'est pas responsable des épidémies ou eczémas qui pourraient survenir pendant ni après le séjour du chat.
                            Certaines affections pouvant être présente dans l'organisme d'un animal pendant des années sans aucune manifestations (porteur sain) et ne se déclencher que lors de stress (mise en pension, changement d'habitude) et faire apparaître les signes cliniques de ces symptômes à ce moment-là.
                          </li>
                          <li>
                            La Chatounerie ne pourra être tenu pour responsable en cas d'apparition de maladies. <small>(Les maladies comme la PIF, la FIV, la teigne et certains coryzas chroniques d'insuffisance hépatique ou rénale, etc.)</small>
                          </li>
                          <li>
                            La Chatounerie se réserve le droit de refuser l'animal qui ne remplit pas les conditions sanitiaires, administratives ou comportementales (agressif ou dangereux, et l'acompte ne sera pas remboursé).
                          </li>
                          <li>
                            Aucune responsabilité de la Chatounerie ne sera engagée lors d'accident de nature imprévisible, crise cardiaque, problème lié à la vieillesse, torsion, épidémie, perte de poids, etc.
                            Ou si l'agressivité de l'animal empêche de lui prodiguer les soins nécessaires.
                          </li>
                          <li>
                            <strong>En cas de décès de l'animal,</strong> une autopsie sera pratiquée par le vétérinaire si vous l'avez stipulé lors de son inscription.
                            <ul>
                              <li>Un compte rendu, ou une attestation du vétérinaire vous sera remis. L'animal sera incinéré.</li>
                              <li>Les sommes dûes devront être réglées par le propriétaire.</li>
                              <li>Si vous vous opposez à l'autopsie, veuillez l'indiquer dans la case appropriée sur le formulaire qu'il vous faudra remplir au moment de la réservation.</li>
                            </ul>
                          </li>
                        </ul>
                        <Alert color="warning">
                          <ul>
                            <li>
                              Tout animal laissé plus de 7 jours à la pension après la date de départ fixée (et ce, sans nouvelle de son propriétaire) sera considéré comme abandonné et nous serons alors dans l'obligation de prendre les dispositions nécessaires relatives aux abandons des animaux. <strong>Art 453, 511-11 et 521-1 du code pénal</strong>.<br />
                              Dans ce cas de figure, des poursuites seront donc engagées contre le propriétaire, la pension pourra disposer librement de l'animal et mettre en recouvrement tous les frais inhérents à cette situation.
                            </li>
                            <li>
                              D'un point de vue juridique, le propriétaire qui doit assurer en responsabilité civile son animal, reste responsable de tous les dommages éventuels causés par ce dernier pendant son séjour en pension, sauf faute grave reconnue imputable au gardien de la pension.
                              La mise en pension n'a pas pour effet un transfert pur et simple de responsabilités.
                            </li>
                          </ul>
                        </Alert>
                        <Alert color="info">
                          Si vous désirez prolonger le séjour de votre chat, veuillez nous en informer au moins 48 h à l'avance.
                          Nous essayerons de satisfaire votre demande en fonction des places disponibles, mais nous ne pouvons vous garantir de pouvoir le faire.<br />
                          Tout jour supplémentaire en dehors des jours établit au contrat seront facturés selon les tarifs de la période majorés de <strong>25%</strong>.
                          <ul>
                            <li>
                              L'acompte ne sera pas restitué si le séjour est annulé en tout ou en partie moins de 3 semaines avant la date d'entrée prévue de l'animal.
                            </li>
                            <li>
                              Les jours d'entrée et de départ seront tous les deux facturés.
                            </li>
                            <li>
                              Nous ne pouvons pas nous permettre de conserver vos paniers de transport (tarif de garde des paniers 1€/jour en basse saison, 2€/jour en haute saison, celui-ci devra porter votre nom);
                            </li>
                          </ul>
                        </Alert>
                        <Alert color="warning">
                          <ul>
                            <li>
                              Le propriétaire est conscient que son animal, vivant avec d'autres congénères, n'est pas à l'abri d'un incident éventuel.
                            </li>
                            <li>
                              Pension ouverte toute l'année, aucune arrivée ni départ de chat les dimanches et jours fériés.
                              Les entrées et sorties se font sur rendez-vous aux jours d'ouverture:
                              <ul>
                                <li>Du lundi au samedi de 10h00 à 12h00 et de 14h00 à 19h00.</li>
                                <li>Le samedi, fermeture à 18h00.</li>
                              </ul>
                            </li>
                            <li>
                              La signature du contrat de réservation vaut acceptation sans réserve de toutes les conditions indiquées ci-dessus.
                            </li>
                            <li>
                              En signant le contrat de garde, vous autorisez tous les soins, interventions et/ou décisions qui s'imposent et acceptez d'en régler les frais.
                            </li>
                          </ul>
                        </Alert>
                      </CardText>
                    </CardBody>
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

  renderSpinner() {
    return (
      <div
        className="app-waiting" style={{
        textAlign: 'center',
        marginTop: '45vh',
      }}
      >
        <i className="fas fa-spinner fa-pulse fa-4x fa-fw"></i>
      </div>
    );
  }

  render() {
    const config = this.state.config;

    return (
      <div>
        { // Wait for the config to be loaded and display a spinner meanwhile.
          !config && (
            this.renderSpinner()
          )
        }
        { // Render the app when the config has been loaded.
          config && (
            this.renderApp()
          )
        }
      </div>
    );
  }
}

export default App;

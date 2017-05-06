import React from 'react';
import { Collapse, Navbar as NavbarStrap, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import withSheet from 'react-jss';
import { StickyContainer, Sticky } from 'react-sticky';

const styles = {

};

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <StickyContainer id="navbar">
        <Sticky>
          {
            ({
              style,
              // the following are also available but unused in this example
              isSticky,
              wasSticky,
              distanceFromTop,
              distanceFromBottom,
              calculatedHeight
            }) => {
              return (
                <NavbarStrap color="faded" light toggleable>
                  <NavbarToggler right onClick={this.toggle} />
                  <NavbarBrand href="/">La Chatounerie du Lubéron</NavbarBrand>
                  <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                      <NavItem>
                        <NavLink href="#home">Accueil</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#chatounerie">La Chatounerie</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#office">Nos locaux</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#services">Prestations et services</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#customers">Ils nous recommandent</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#contact">Nous contacter</NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </NavbarStrap>
              )
            }
          }
        </Sticky>
      </StickyContainer>
    );
  }
}

export default withSheet(styles)(Navbar);

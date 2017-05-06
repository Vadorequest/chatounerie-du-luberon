import React from 'react';
import { Collapse, Navbar as NavbarStrap, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import withSheet from 'react-jss';
// import { StickyContainer, Sticky } from 'react-sticky';
import Sticky from 'react-stickynode';
import smoothScroll from 'smoothscroll';
import classNames from 'classnames';

const styles = {
  navLinks: {
    '& li': {
      cursor: 'pointer',
    }
  }
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
    const { classes } = this.props;

    return (
      <div id="navbar">
        <Sticky enabled>
          <NavbarStrap color="faded" light toggleable>
            <NavbarToggler right onClick={this.toggle} />
            <NavbarBrand href="/">La Chatounerie du Lubéron</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className={classNames("ml-auto", classes.navLinks)} navbar>
                <NavItem>
                  <NavLink onClick={() => smoothScroll(document.querySelector('#home'))}>Accueil</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={() => smoothScroll(document.querySelector('#chatounerie'))}>La Chatounerie</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={() => smoothScroll(document.querySelector('#office'))}>Nos locaux</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={() => smoothScroll(document.querySelector('#services'))}>Prestations et services</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={() => smoothScroll(document.querySelector('#customers'))}>Ils nous recommandent</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={() => smoothScroll(document.querySelector('#contact'))}>Nous contacter</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </NavbarStrap>
        </Sticky>
      </div>
    );
  }
}

export default withSheet(styles)(Navbar);

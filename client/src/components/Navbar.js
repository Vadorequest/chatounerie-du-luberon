import React from 'react';
import { Collapse, Navbar as NavbarStrap, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import withSheet from 'react-jss';
import Sticky from 'react-stickynode';
import classNames from 'classnames';

import { scrollTo } from './../utils/helpers';

export const styles = {
  navbar: {
    backgroundColor: 'white',
    minHeight: 56,
    // height: 56, // XXX Can't set an height or it won't work in mobile mode when clicking on the dropdown button

  },
  navLinks: {
    '& li': {
      cursor: 'pointer',
    }
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
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
        <Sticky innerZ={10} enabled>
          <NavbarStrap className={classes.navbar} light toggleable>
            <NavbarToggler right onClick={this.toggle} />
            <NavbarBrand href="/">La Chatounerie du Lubéron</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} onClick={this.toggle} navbar>
              <Nav className={classNames("ml-auto", classes.navLinks)} navbar>
                <NavItem>
                  <NavLink onClick={() => scrollTo('#chatounerie')}>Chatounerie</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={() => scrollTo('#services')}>Prestations et services</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={() => scrollTo('#galery')}>Galerie</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={() => scrollTo('#prices')}>Tarifs</NavLink>
                </NavItem>
                {/*<NavItem>*/}
                  {/*<NavLink onClick={() => scrollTo('#testimonials')}>Témoignages</NavLink>*/}
                {/*</NavItem>*/}
                <NavItem>
                  <NavLink onClick={() => scrollTo('#contact')}>Nous contacter</NavLink>
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

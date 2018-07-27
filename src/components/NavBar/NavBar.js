import React from 'react';
import logo from '../../Assets/logo.png'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


class NavBar extends React.Component {
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
            <div>
                <Navbar color="dark" className="navbar-dark bg-dark" light expand="md">
                    <NavbarBrand href="/">
                        <img src={logo} className={'img-fluid'} style={{width: '250px', backgroundColor: 'transparent'}}alt="Logo"/>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/">Bill Builder</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/journal">Journal</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/clients">Clients</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/services">Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/categories">Categories</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/discounts">Discounts</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

Navbar.propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
};
NavbarBrand.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
};

export default NavBar;

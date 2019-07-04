import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class NavbarComponent extends React.Component {
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
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Mundo</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Everything</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/category/sports">
                  Top Headlines
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Category
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>All</DropdownItem>
                  <DropdownItem>Politics</DropdownItem>
                  <DropdownItem>Sports</DropdownItem>
                  <DropdownItem>Business</DropdownItem>
                  <DropdownItem>Entertainment</DropdownItem>
                  <DropdownItem>Health</DropdownItem>
                  <DropdownItem>General</DropdownItem>
                  <DropdownItem>Science</DropdownItem>
                  <DropdownItem>Technology</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

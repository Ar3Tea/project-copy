
import React from "react"
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
  DropdownItem } from 'reactstrap';

  export default class Navigation extends React.Component {
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
          <Navbar expand="md" background="dark" variant="dark" className="navbar-dark">
            <NavbarBrand href="/">http://RecallMy.MP</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="text-white" href="https://en.wikipedia.org/wiki/Recall_of_MPs_Act_2015">Recall of MPs Act 2015</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-white" href="https://en.wikipedia.org/wiki/2019_Peterborough_recall_petition">Peterborough petition</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-white" href="https://www.peterborough.gov.uk/news/council/notification-received-from-speaker-on-recall-petition/">Official Notification</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle className="text-white" nav caret>
                    Signing Stations
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem >
                      <a className="text-dark" href="/werrington">
                        Werrington Library
                  </a>
                    </DropdownItem>
                    <DropdownItem>
                      <a className="text-dark" href="/bretton">
                        Bretton Library
                  </a>
                    </DropdownItem>
                    <DropdownItem>
                      <a className="text-dark" href="/stluke">
                        St Luke's Church on Mayor's Walk
                  </a>
                    </DropdownItem>
                    <DropdownItem>
                      <a className="text-dark" href="/petetown">
                        Peterborough Town Hall
                  </a>
                    </DropdownItem>
                    <DropdownItem>
                      <a className="text-dark" href="/eastcentre">
                        East Community Centre
                  </a>
                    </DropdownItem>
                    <DropdownItem>
                      <a className="text-dark" href="/dogsthorpe">
                        Dogsthorpe Library
                  </a>
                    </DropdownItem>
                    <DropdownItem>
                      <a className="text-dark" href="/eyecentre">
                        Eye Youth & Community Centre
                  </a>
                    </DropdownItem>
                    <DropdownItem>
                      <a className="text-dark" href="/bedford">
                        Bedford Hall in Thorney
                  </a>
                    </DropdownItem>
                    <DropdownItem>
                      <a className="text-dark" href="/honeyhill">
                        Honeyhill Children's Centre in Paston
                  </a>
                    </DropdownItem>
                    <DropdownItem>
                      <a className="text-dark" href="/thebull">
                        The Bull publin house in Guntons Road, Newborough
                  </a>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }

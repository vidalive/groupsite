import React from 'react'
import logo from '../logo.png';
import logoAlt from '../logoAlt.png';
import { Row, Col, Container, Navbar, Nav, NavbarBrand, } from 'react-bootstrap';

class  Header extends React.Component{
    renderNavItem(name){
      if (this.props.page === name){
        return(
          <li class="nav-item active">
            <a class="nav-link"> {name}</a> 
        </li>
        );
      }else{
        return(
          <li class="nav-item">
            <a class="nav-link" onClick={() =>{this.props.onClick(name)}}> {name}</a>
          </li>
        );
      }
    }

    render(){
    var pages = this.props.pages;
    let navItems = [];
    // for (var i = 0; i < pages.length; i++) { 
    //   navItems.push(this.renderNavItem(pages[i]));
    // }
    return (
      <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Navbar.Brand>
            <img src={logoAlt} alt="logo" width="30" height="30" />
          </Navbar.Brand>
          <Nav.Item>
            <Nav.Link>Test Link </Nav.Link>
          </Nav.Item>

        
      </Navbar>


  

      </>
    )
    }
  }

  export default Header;
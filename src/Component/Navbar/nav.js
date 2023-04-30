import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/logo.png';
import './nav.css';
import SimpleImageSlider from "react-simple-image-slider";
var w = window.innerWidth;
const images = [
  
  { url: "../../img/img1.png" },
  { url: "images/3.jpg" },
  { url: "images/4.jpg" },
  { url: "images/5.jpg" },
  { url: "images/6.jpg" },
  { url: "images/7.jpg" },
];
function nav() {
  return (
    <>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" color='white' className='sticky-top'>
      <Container>
        <Navbar.Brand href="#home">
            <img className='logo'
            src={logo}/>
            <h4>Remine India</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className='navlink'>Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className='new'>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#bottom">About US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>    
    </>
  );
}

export default nav;
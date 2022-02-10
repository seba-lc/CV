import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid className='nav-box'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-auto m-2' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to='/' className='mx-3 nav-link'>Inicio</Link>
            <Link to='/aboutme' className='mx-3 nav-link'>About me</Link>
            <Link to='/education' className='mx-3 nav-link'>Educación</Link>
            <Link to='/portfolio' className='ms-3 me-5 nav-link disabled'>Portafolio</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

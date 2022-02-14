import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = ({width}) => {
  return (
    <Navbar bg="transparent" expand="lg" className='position-fixed top-0 nav-box'>
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav my-0" className='ms-auto m-2 border-light' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to='/' className={`mx-3 nav-link ${width < 992 ? 'text-dark' : 'text-light'}`}>Inicio</Link>
            <Link to='/aboutme' className={`mx-3 nav-link ${width < 992 ? 'text-dark' : 'text-light'}`}>About me</Link>
            <Link to='/education' className={`mx-3 nav-link ${width < 992 ? 'text-dark' : 'text-light'}`}>Educación</Link>
            <Link to='/portfolio' className={`ms-3 me-5 nav-link disabled-forme disabled`}>Portafolio (próximamente)</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

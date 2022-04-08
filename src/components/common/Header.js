import { useEffect, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = ({width}) => {
  const [pos, setPos] = useState(true);

  const handleScroll = () => {
    if(window.scrollY !== 0){
      setPos(false)
    }else{
      setPos(true)
    }
  }

  const handleClick = () => {
    const navBox = document.querySelector('.nav-box');
    if(navBox.classList.contains('collapse_true')){
      navBox.classList.remove('collapse_true')
    }else{
      navBox.classList.add('collapse_true');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    const navbarBtn = document.querySelector('.navbar-toggler');
    navbarBtn.addEventListener('click', handleClick);

    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Navbar expand="lg" className={`position-fixed top-0 nav-box ${pos ? 'nav-box_top' : null}`}>
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav my-0" className='ms-auto m-2 border-light' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to='/' className={`mx-3 nav-link ${width < 992 ? 'text-darkk' : 'text-light border-bottom'}`}>Inicio</Link>
            <Link to='/aboutme' className={`mx-3 nav-link ${width < 992 ? 'text-darkk' : 'text-light border-bottom'}`}>Sobre mi</Link>
            <Link to='/education' className={`mx-3 nav-link ${width < 992 ? 'text-darkk' : 'text-light border-bottom'}`}>Educación</Link>
            <Link to='/portfolio' className={`ms-3 me-5 nav-link ${width < 992 ? 'text-darkk' : 'text-light border-bottom'}`}>Portafolio</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

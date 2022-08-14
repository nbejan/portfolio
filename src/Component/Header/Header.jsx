import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import css from './Header.module.css'
import logo from '../img/logo.png'

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className={css.NavBar} variant="dark" align='center' fixed="top">
      <Container >
        <Navbar.Brand href="#home"><img src={logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
          <Nav >
            <Nav.Link className={css.n_links} href="#about">About</Nav.Link>
            <Nav.Link className={css.n_links} href="#servises">Servises</Nav.Link>
            <Nav.Link className={css.n_links} href="#pricing">Pricing</Nav.Link>
            <Nav.Link className={css.n_links} href="#blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'

const Navbarr = () => {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary navv">
      <Container>
        <Navbar.Brand className='navbrand' href="#home">Staff Database System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto links">
            <Nav.Link className='text-light'><Link to={'/'} className='dectext'>All Staffs</Link></Nav.Link>
            <Nav.Link className='text-light'><Link to={'/create'} className='dectext'>Create New Staff</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>   
    </div>
  )
}

export default Navbarr
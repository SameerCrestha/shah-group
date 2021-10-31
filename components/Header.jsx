import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Image from 'next/image'
import logo from '../public/logos/logo.png'



export default function Header() {
    return (
        <Navbar collapseOnSelect expand="md" bg='dark' variant="dark" sticky='top' className='p-0'>
            <Container>
                <Navbar.Brand className=' p-0 mb-0' href="/">
                    <Image className='pointer' src={logo} width={112} height={50} priority quality="1"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about-us">About us</Nav.Link>

                        <NavDropdown title="Products" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/products/water">Water Products</NavDropdown.Item>
                            <NavDropdown.Item href="/products">Other Products</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/contact-us">Contact us</Nav.Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}


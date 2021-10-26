import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'



export default function Header() {
    return (
        <Navbar collapseOnSelect expand="md" bg='dark' variant="dark" fixed='top' >
            <Container>
                <Navbar.Brand href="/">SHAH GROUP</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about-us">About us</Nav.Link>
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/contact-us">Contact us</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}


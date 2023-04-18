import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

export function Header(props) {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>
                    Hello Website
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-nav" />
                <Navbar.Collapse id="main-nav">

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
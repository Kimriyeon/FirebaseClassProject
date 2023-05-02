import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button";

import { useState, useEffect } from "react";

export function Signup(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validEmail, setValidEmail] = useState(false)
    const [validPassword, setValidPassword] = useState(false)

    useEffect(() => {
        if (email.indexOf("@") > 0) {
            setValidEmail(true)
        } else {
            setValidEmail(false)
        }
    }, [email]);

    useEffect(() => {
        if (password.length > 8) {
            setValidPassword(true)
        } else {
            setValidPassword(false)
        }
    }, [password]);

    return (
        <Container fluid className="mt-4">
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Form>
                        <h3>Sign up for an account</h3>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="you@domain.com"
                                onChange={({ target }) => setEmail(target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="minimum 8 characters"
                                onChange={({ target }) => setPassword(target.value)}
                            />
                        </Form.Group>
                        <Button
                            ariant="primary"
                            type="submit"
                            className="my-2 w-100"
                            disabled={(validEmail && validPassword) ? false : true}
                        >
                            Sign up
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container >
    )
}
import React, { useState, FunctionComponent } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { timeToCrack, Duration } from "./time_to_crack";

export const Calculator: FunctionComponent = () => {
    const cracksPerSecond: number = 2800000000;
    const [password, setPassword] = useState("");
    return (
        <div>
            {JSON.stringify(timeToCrack(cracksPerSecond, password.length, 26 + 26 + 10))}
            <Form onSubmit={(event) => { event.preventDefault() }} autoComplete="off">
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Click me!
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                    <Form.Group>
                        <Form.Row>
                            <Form.Label column="lg" lg={2}>
                                Password
                        </Form.Label>
                            <Col>
                                <Form.Control size="lg" onChange={(event) => { setPassword(event.target.value) }} type="password" placeholder="Password to Test" />
                            </Col>
                        </Form.Row>
                    </Form.Group>
            </Form>
        </div>)
}
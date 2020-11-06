import React, { useState, useEffect, FunctionComponent } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormCheck from 'react-bootstrap/FormCheck';
import FormControl from 'react-bootstrap/FormControl';
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { calculateTimeToCrack, Duration } from "./api";

type CalculatorProps = {
    setDuration: (d: Duration) => void;
}

export const Calculator: FunctionComponent<CalculatorProps> = ({ setDuration }) => {
    const cracksPerSecond: number = 2800000000;
    const [passwordLength, setPasswordLength] = useState(8);
    const [lowerCase, setLowerCase] = useState(true);
    const [upperCase, setUpperCase] = useState(true);
    const [specialCharacters, setSpecialCharacters] = useState(true);
    const SPECIAL_CHARACTERS: Array<String> = [
        ' ', '!', '"', '#', '$', '%',
        '&', "'", '(', ')', '*', '+',
        ',', '-', '.', '/', ':', ';',
        '<', '=', '>', '?', '@', '[',
        ']', '^', '_', '`', '{', '|',
        '}', '~'
    ];

    useEffect(() => {
        setDuration(calculateTimeToCrack(cracksPerSecond, passwordLength, (lowerCase ? 26 : 0) + (upperCase ? 26 : 0) + (specialCharacters ? SPECIAL_CHARACTERS.length : 0)));
        console.log({ password: passwordLength })
    },
        [passwordLength, lowerCase, upperCase, specialCharacters]);
    return (
        <div>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Advanced Options
                            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <FormCheck inline label="Lower Case (26)" defaultChecked={lowerCase} onClick={() => { setLowerCase(!lowerCase) }} />
                            <FormCheck inline label="Upper Case (26)" defaultChecked={upperCase} onClick={() => { setUpperCase(!upperCase) }} />
                            <FormCheck inline label={"Special Characters (" + SPECIAL_CHARACTERS.length + ")"} defaultChecked={specialCharacters} onClick={() => { setSpecialCharacters(!specialCharacters) }} />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <Card>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>{passwordLength}</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl defaultValue={passwordLength} onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setPasswordLength(parseInt(event.target.value)) }} type="range" />
                </InputGroup>
            </Card>

        </div>)
}
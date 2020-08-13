import React, { useState } from 'react';
import { FormattedMessage } from "react-intl";
import LocaleContext from '@contexts/localeContext';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Config } from './../../config/config.model';

type Props = { config: Config };

export const Home = (props: Props) => {
    const [name, setName] = useState("Halil Şafak KILIÇ");

    const languages = props.config.languages;

    return (
        <LocaleContext.Consumer>
            {({ locale, setLocale }) => (<Container>
                <Row className="mt-2">
                    <Col>
                        If you are wondering what's going on in this exercise?<br />
                        React TypeScript, Babel, WebPack<br />
                        React Hooks, React Intl, React Router, WebPack Alias<br />
                        dotenv, Bootstrap, Theme Provider
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <Form.Group controlId="formLanguage">
                            <Form.Label><FormattedMessage id="chooseLanguage" /></Form.Label>
                            <Form.Control as="select" custom onChange={(e) => setLocale(e.target.value)} defaultValue={locale}>
                                {languages.map((langugage, i) => {
                                    return (<option key={i} value={langugage.code}>{langugage.name}</option>);
                                })}
                            </Form.Control>
                        </Form.Group>
                    </Col>

                    <Col>
                        <FormattedMessage id="inputNamePlaceholder">
                            {(placeholder: string) =>
                                <Form.Group controlId="formName">
                                    <Form.Label><FormattedMessage id="inputNameLabel" /></Form.Label>
                                    <Form.Control type="text" placeholder={placeholder} defaultValue={name} required onChange={(e) => setName(e.target.value)} />
                                </Form.Group>
                            }
                        </FormattedMessage>

                        <p>
                            <FormattedMessage id="greeting" values={{ name }} />
                            <br />
                            <FormattedMessage id="time" values={{ xTime: Date.now() }} />
                            <br />
                            <FormattedMessage id="date" values={{ xDate: Date.now() }} />
                        </p>
                    </Col>
                </Row>
            </Container>)}
        </LocaleContext.Consumer>
    );
}
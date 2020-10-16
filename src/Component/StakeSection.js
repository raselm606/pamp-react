import React, {Component, Fragment} from 'react';
import {Alert, Button,  Col, Container, Form, Modal, Row} from "react-bootstrap";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCalculator } from '@fortawesome/free-solid-svg-icons';
import success from '../asset/image/success.png';

class StakeSection extends Component {
    constructor(){
        super();
        this.state={
            show: false,
            startDate: null,
            endDate: null,
            modshow:false
        }
    }
    modalOff=()=>this.setState({show:false});
    modalOn=()=>this.setState({show:true});

    //popup two
    modClose=()=>this.setState({modshow:false});
    modShow=()=>this.setState({modshow:true});


    render() {

        return (
            <Fragment>
                <div className="bannerArea">
                    <Container>
                        <Row>
                            <Col lg={6} md={5} sm={12}>
                                <div className="stakeArea mb-5">
                                    <h2>Stake</h2>
                                    <Alert variant="success "> <Button onClick={this.modalOn} size="sm" ><FontAwesomeIcon icon={faCalculator} /> Calculate Stake</Button> </Alert>
                                    <Alert variant="success ">Current Expected Rewards : <span style={{color:'#2ecc71'}}>850 PAMP</span>
                                        <Button onClick={this.modShow} size="sm" className="ml-3">Stake</Button>
                                    </Alert>
                                    <Alert variant="success "> Next Expected Rewards : <span style={{color:'#2ecc71'}}>850 PAMP</span>  </Alert>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                {/*Calculate Modal*/}
                <Modal size="lg" show={this.state.show} onHide={this.modalOff}>
                    <Modal.Header closeButton>
                        <Modal.Title>Calculate Stake</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="p-3">
                            <Form.Group controlId="stake">
                                <Form.Label>Stake</Form.Label>
                                <Form.Control type="text" placeholder="eg: 850" />
                            </Form.Group>

                            <Form.Group controlId="infla">
                                <Form.Label>Inflation Adjustment Factor</Form.Label>
                                <Form.Control type="text" placeholder="enter here" />
                            </Form.Group>

                            <Form.Group controlId="daySta">
                                <Form.Label>Days Staked </Form.Label> <br/>
                                <date className="form-control">
                                    <DateRangePicker
                                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                                    />


                                </date>
                            </Form.Group>

                            <Form.Group controlId="totalSu">
                                <Form.Label>Total Supply</Form.Label>
                                <Form.Control type="text" placeholder="eg: 1000" />
                            </Form.Group>

                            <Form.Group controlId="Lastup">
                                <Form.Label>Last Update Price</Form.Label>
                                <Form.Control type="text" placeholder="eg: 0.5" />
                            </Form.Group>

                            <Form.Group controlId="lastVo">
                                <Form.Label>Last Update Volume</Form.Label>
                                <Form.Control type="text" placeholder="eg: 100" />
                            </Form.Group>

                            <Form.Group controlId="lastNu">
                                <Form.Label>Last Update Numerator</Form.Label>
                                <Form.Control type="text" placeholder="eg: 100" />
                            </Form.Group>

                            <Form.Group controlId="lastDeno">
                                <Form.Label>Last Update Denominator</Form.Label>
                                <Form.Control type="text" placeholder="eg: 100" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.modalOff}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.modalOff}>
                            Stake
                        </Button>
                    </Modal.Footer>
                </Modal>


                {/*success modal*/}

                <Modal centered show={this.state.modshow} onHide={this.modClose}>
                    <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="successImg text-center">
                            <img src={success} alt="success"/>
                            <h4>Thank you for your purchase!</h4>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>

            </Fragment>
        );
    }
}

export default StakeSection;
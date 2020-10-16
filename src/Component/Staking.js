import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Staking extends Component {
    render() {
        return (
            <Fragment>
                <div className="staking pb-100 pbt-100">
                    <Container>
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                <div className="stakingTitle">
                                    <h2>When staking begins, this information will be updated to reflect the current status
                                        of the Pamp Network.</h2>
                                    <p>Join the best. Join the Pamp Network.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="mt-5">
                            <Col lg={3} md={3} sm={12} className="mb-3">
                                <div className="stakingDetails">
                                    <h3>0.00097 ETH</h3>
                                    <p>Latest PAMP price</p>
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm={12} className="mb-3">
                                <div className="stakingDetails">
                                    <h3>$24,786.00</h3>
                                    <p>24H Volume</p>
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm={12} className="mb-3">
                                <div className="stakingDetails">
                                    <h3>3018439.62</h3>
                                    <p>Total Supply</p>
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm={12} className="mb-3">
                                <div className="stakingDetails">
                                    <h3>400</h3>
                                    <p>Stakers Receiving <br/>Rewards</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="footerArea text-center">
                    <Container>
                        <Row>
                            <Col lg={12} sm={12} md={12}>
                                <p>&copy;2020 pamp.network</p>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </Fragment>
        );
    }
}

export default Staking;
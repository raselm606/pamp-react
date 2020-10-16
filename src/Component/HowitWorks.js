import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import featw1 from "../asset/image/how1.png";
import featw2 from "../asset/image/how2.png";
import featw3 from "../asset/image/how3.png";

class HowitWorks extends Component {
    render() {
        return (
            <Fragment>
                <div className="howitWork pbt-100 pb-100">
                    <Container>
                        <Row>
                            <Col lg={12} md={12} sm={12} >
                                <div className="titleWork mb-5 text-center">
                                    <h2>How it Works</h2>
                                    <p>It’s easy to reap the rewards of holding PAMP tokens.</p>
                                </div>
                            </Col>

                            <Col lg={14} md={4} sm={12}>
                                <div className="featureWork text-center mb-3">
                                    <img src={featw1} alt=""/>
                                    <h4>Buy and Hold PAMP Tokens</h4>
                                    <p>Purchase PAMP tokens on any exchange, such as Uniswap or IDEX*, and send them to your Metamask wallet.</p>
                                </div>
                            </Col>

                            <Col lg={14} md={4} sm={12}>
                                <div className="featureWork text-center mb-3">
                                    <img src={featw2} alt=""/>
                                    <h4>Claim Your Stakes Every Day</h4>
                                    <p>When the latest prices have been updated, visit our website (https://pamp.network) and claim your staking rewards.
                                        Internally, this calls the smart contract function that determines how much you are owed based on the price change
                                        and other factors such as how long you have been holding for.</p>
                                </div>
                            </Col>

                            <Col lg={14} md={4} sm={12}>
                                <div className="featureWork text-center mb-3">
                                    <img src={featw3} alt=""/>
                                    <h4>Grow Your Portfolio Infinitely</h4>
                                    <p>As long as you HODL and claim your stakes every positive day, the price will inevitably appreciate and so will your
                                        portfolio! It’s as simple as that. HODLers are incentivized to keep HODLing, and sellers pay high fees and lose future
                                        staking rewards when they don’t HODL.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </Fragment>
        );
    }
}

export default HowitWorks;
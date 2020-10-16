import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import pampImg from "../asset/image/network.jpeg";
import Features from "./Features";

class WhatPamp extends Component {
    render() {
        return (
            <Fragment>
                <div className="whatPamp mt-120">
                    <Features/>
                    <Container>
                        <Row>
                            <Col lg={12} md={12} sm={12} className="mb-5 mt-5">
                                <div className="whatisPamap">
                                    <h5>What is the Pamp Network?</h5>
                                    <p>Pamp Network is the world’s first price-reactive cryptocurrency.
                                        When the token price <span  style={{color:'#2ecc71'}}>appreciates</span>, token holders receive staking rewards
                                        based on several factors including the percentage price increase, how long they have been holding for and how many tokens they hold. Rewards are distributed on a daily basis!</p>
                                </div>

                                <div className="pamImg">
                                    <img className="img-thumbnail" src={pampImg} alt="img"/>
                                </div>

                                <div className="extraParagraph mt-4">
                                    <p>If the token price does not appreciate, no rewards are minted. Sellers who move their tokens around have their stakes reset,
                                        <span style={{color:'#f00'}}> negating </span> any bonus rewards they may receive when the token appreciates in value.</p>
                                    <p>In addition, PAMP is deflationary, meaning that all token transfers have between 1-3% of the transfer burned.</p>
                                    <p>Holders are strongly incentivized to buy tokens and HODL for as long as possible, and are penalized for not doing so.</p>
                                    <p>Additionally, being semi-deflationary, the Pamp Network embodies a similar value structure to Bitcoin and Ethereum 2.0 – the
                                        system has incentive structures built in that promote
                                        holding the token, thereby acting as a proper hedge against inflationary fiat currency.
                                    </p>
                                    <p>The Pamp Network is secured by a series of smart contracts on the Ethereum network.</p>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </div>

            </Fragment>
        );
    }
}

export default WhatPamp;
import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import featOne from "../asset/image/1.png";
import featTwo from "../asset/image/2.png";
import featThree from "../asset/image/3.jpg";

class Features extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={4} md={4} sm={12}>
                            <div className="threefeature text-center">
                                <img src={featOne} alt="featOne"/>
                                <h4>Just HODL</h4>
                                <p>No need to run complicated nodes to receive staking rewards. The Pamp Network is neither PoW or PoS, meaning there is no
                                    mining cost or staking risk involved. Just buy and HODL in your own wallet, and remember to claim your rewards every day.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <div className="twofeature text-center">
                                <img src={featTwo} alt="featTwo"/>
                                <h4>Instant Exchange</h4>
                                <p>Easily transact PAMP tokens on decentralized exchanges like Uniswap or IDEX*. The higher the volume on positive days,
                                    the more tokens minted.
                                </p>
                            </div>
                        </Col>

                        <Col lg={4} md={4} sm={12}>
                            <div className="threefeature text-center">
                                <img src={featThree} alt="featThree"/>
                                <h4>Price Streaks</h4>
                                <p>When the price appreciates for several days without pause, the Price Streak results in a positive multiplier to daily rewards.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Features;
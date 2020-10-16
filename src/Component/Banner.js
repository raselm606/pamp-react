import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import bigLogo from "../asset/image/hero_logo.png";
import Button from "@material-ui/core/Button";

class Banner extends Component {
    render() {
        return (
            <Fragment>
                <div className="bannerArea">
                    <Container>
                        <Row>
                            <Col lg={12} sm={12}>
                                <div className="heroImg mb-5 pd-5">
                                    <div className="imgHero text-center">
                                        <img src={bigLogo} alt=""/>
                                    </div>
                                    <h1>The first price-reactive cryptocurrency </h1>
                                    <p>The PAMP token contract <span style={{color:'#2ecc71'}}>rewards  </span> holders when the price increases, <br/>
                                        and <span style={{color:'#f00'}}>penalizes</span>  sellers when it does not. </p>

                                    <div className="tokenSwap mb-3">
                                        <h4>TOKEN SWAP</h4>
                                    </div>

                                    <div className="someBtn text-center">
                                        <Button variant="contained"  className="btn btnMain mr-3" color="primary">Approve (click first)</Button>
                                        <Button variant="contained" className="btn btnMain mr-3" color="primary">Swap (click second)</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </Fragment>
        );
    }
}

export default Banner;
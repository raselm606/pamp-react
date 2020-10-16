import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Iframe from "react-iframe";
import Button from "@material-ui/core/Button";

class IframeSection extends Component {



    render() {

        return (
            <Fragment>
                <div className="ifreameToke mt-5 mb-5">
                    <Container>
                        <Row>
                            <Col lg={12} sm={12}>
                                <div className="iframe_area">
                                    <iframe src="https://uniswap.exchange/swap?theme=light&&outputCurrency=0xf0fac7104aac544e4a7ce1a55adf2b5a25c65bd1&&slippage=1000" height="700" width="100%" scrolling="yes" frameBorder="0" sandbox> </iframe>
                                    <div className="someBtn text-center mt-3">

                                        <Button variant="contained" color="primary" className="btn btnMain mr-3">Reset Staking Time</Button>
                                        <Button variant="contained" color="primary" className="btn btnMain   ">Claim Rewards</Button>
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

export default IframeSection;
import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import annImg from "../asset/image/pampnetwork.png";
import Button from "@material-ui/core/Button";

class Announcement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            link: "",
        };
    }

    render() {
        return (
            <Fragment>
                <div className="annouceMent mt-5">
                    <Container>
                        <Row>


                            <Col lg={5} md={5} sm={12} className="order-last">
                                <div className="imgArra mb-4 mt-4 ">
                                    <img src={annImg} alt="annImg"/>
                                </div>
                            </Col>
                            <Col lg={7} md={7} sm={12} className="order-md-first">
                                <div className="textAreaAnn ">
                                    <h2><span style={{color:'#2ecc71'}}>Pamp</span> Network is excited to announce a bug bounty for Solidity developers</h2>
                                    <h5 className="underline">Help ensure the security and integrity of our smart contracts</h5>

                                    <p>100,000 PAMP tokens for a bug that allows you to duplicate tokens and/or increase your account
                                        balance maliciously (but is not related to staking or rewards)</p>
                                    <p>50,000 PAMP for a bug that allows a user to abuse rewards or staking functionality</p>
                                    <p>10,000 PAMP tokens for a bug the prevents a user from claiming rewards (after following all rules regarding rewards)</p>
                                    <p>Any other bug outside of these categories can still be submitted for a reward based on its respective severity.</p>

                                    <div className="btnhere mt-4">
                                        <Button target="_blank" onClick={event =>  window.location.href='https://t.me/pampnetwork'} variant="contained" color="primary" className="btn btnMain">Message Us</Button>
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

export default Announcement;
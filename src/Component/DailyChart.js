import React, {Component, Fragment} from 'react';
import {Alert, Col, Container, ProgressBar, Row, Table} from "react-bootstrap";
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

class StakeTable extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[
                {
                    name: 'july 1', rewards: 1500,
                },
                {
                    name: 'july 2', rewards: 2000,
                },
                {
                    name: 'july 3', rewards: 1200,
                },
                {
                    name: 'july 4', rewards: 1500,
                },
                {
                    name: 'july 5', rewards: 900,
                },
                {
                    name: 'july 6', rewards: 1500,
                },
                {
                    name: 'july7', rewards: 1700,
                },
                {
                    name: 'july8', rewards: 1900,
                },
                {
                    name: 'july9', rewards: 1500,
                },
                {
                    name: 'july10', rewards: 1000,
                },
                {
                    name: 'july11', rewards: 2000,
                },
                {
                    name: 'july12', rewards: 2000,
                },
                {
                    name: 'july13', rewards: 1050,
                },
                {
                    name: 'july14', rewards: 1100,
                },
                {
                    name: 'july15', rewards: 1600,
                },
                {
                    name: 'july16 ', rewards: 1500,
                },
                {
                    name: 'july17', rewards: 700,
                },
                {
                    name: 'july18', rewards: 1500,
                },
                {
                    name: 'july19', rewards: 1150,
                },
                {
                    name: 'july20', rewards: 1000,
                },
                {
                    name: 'july21', rewards: 1250,
                },
                {
                    name: 'july22', rewards: 1500,
                },
                {
                    name: 'July23', rewards: 1700,
                },
                {
                    name: 'july24', rewards: 1800,
                },
                {
                    name: 'july25', rewards: 1450,
                },
                {
                    name: 'july26', rewards: 1100,
                },
                {
                    name: 'july27', rewards: 1550,
                },
                {
                    name: 'july28', rewards: 1500,
                },
                {
                    name: 'july29', rewards: 1700,
                },
                {
                    name: 'july30', rewards: 1900,
                },
                {
                    name: 'july31', rewards: 2000,
                },
            ]
        }
    }

    render() {
        return (
            <Fragment>
                <Alert varient="light">
                <div className="stakeTable">
                    <Container>

                        <Row>
                            <Col  lg={12} md={12} sm={12} className="mb-5 ">
                                <div className="activeBarchart mb-5" style={{width:'100%', height:'430px'}}>
                                    <div className="tableStake ml-4 mb-5 mt-5">
                                        <h3>Daily Rewards</h3>

                                    </div>
                                    <ResponsiveContainer>
                                        <BarChart
                                            width={100}
                                            height={300}
                                            scaleToFit={true}
                                            data={this.state.data}
                                            margin={{
                                                top: 5, right: 0, left: 0, bottom: 5,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name"  fontSize={13}/>
                                            <YAxis fontSize={13}/>
                                            <Tooltip />

                                            <Bar  dataKey="rewards" fill="#82ca9d" />
                                        </BarChart>

                                    </ResponsiveContainer>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </div>
                </Alert>

            </Fragment>
        );
    }
}

export default StakeTable;
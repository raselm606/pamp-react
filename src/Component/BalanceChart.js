import React, {Component, Fragment} from 'react';
import {Alert, Col, Container, Row} from "react-bootstrap";
import {
    Area,
    Bar,
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

class BalanceChart extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[
                {
                    name: 'july1', balance: 1500,
                },
                {
                    name: 'july2', balance: 2000,
                },
                {
                    name: 'july3', balance: 1200,
                },
                {
                    name: 'july4', balance: 1500,
                },
                {
                    name: 'july5', balance: 900,
                },
                {
                    name: 'july6', balance: 1500,
                },
                {
                    name: 'july7', balance: 1700,
                },
                {
                    name: 'july8', balance: 1900,
                },
                {
                    name: 'july9', balance: 1500,
                },
                {
                    name: 'july10', balance: 1000,
                },
                {
                    name: 'july11', balance: 2000,
                },
                {
                    name: 'july12', balance: 2000,
                },
                {
                    name: 'july13', balance: 1050,
                },
                {
                    name: 'july14', balance: 1100,
                },
                {
                    name: 'july15', balance: 1600,
                },
                {
                    name: 'july16 ', balance: 1500,
                },
                {
                    name: 'july17', balance: 700,
                },
                {
                    name: 'july18', balance: 1500,
                },
                {
                    name: 'july19', balance: 1150,
                },
                {
                    name: 'july20', balance: 1000,
                },
                {
                    name: 'july21', balance: 1250,
                },
                {
                    name: 'july22', balance: 1500,
                },
                {
                    name: 'July23', balance: 1700,
                },
                {
                    name: 'july24', balance: 1800,
                },
                {
                    name: 'july25', balance: 1450,
                },
                {
                    name: 'july26', balance: 1100,
                },
                {
                    name: 'july27', balance: 1550,
                },
                {
                    name: 'july28', balance: 1500,
                },
                {
                    name: 'july29', balance: 1700,
                },
                {
                    name: 'july30', balance: 1900,
                },
                {
                    name: 'july31', balance: 2000,
                },
            ]
        }
    }
    render() {
        return (
            <Fragment>
                <Alert varient="light">
                <Container >
                    <Row>
                        <Col  lg={12} md={12} sm={12} className="mb-5 mt-5">
                            <div className="activeBarchart mb-5" style={{width:'100%', height:'430px'}}>
                                <div className="tableStake ml-4 mb-5 mt-5">
                                    <h3>Daily Balance</h3>
                                </div>

                                <ResponsiveContainer>
                                    <LineChart
                                        width={100}
                                        height={300}
                                        data={this.state.data}
                                        margin={{
                                            top: 20, right: 10, left: 10, bottom: 20,
                                        }}
                                    >
                                        <CartesianGrid stroke='#f5f5f5' strokeDasharray="3 3"/>
                                        <XAxis dataKey="name" fontSize={13}/>
                                        <YAxis  fontSize={13}/>
                                        <Tooltip />
                                        <Area type='monotone' dataKey='balance' fill='#8884d8' stroke='#8884d8'/>
                                        <Bar dataKey="balance" barSize={20} fill='#413ea0' />
                                        <Line type='monotone' dataKey='balance' stroke='#82ca9d' activeDot={{r: 8}}/>
                                    </LineChart>

                                </ResponsiveContainer>
                            </div>
                        </Col>
                    </Row>
                </Container>

                </Alert>

            </Fragment>
        );
    }
}

export default BalanceChart;
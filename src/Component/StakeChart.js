import React, {Component, Fragment} from 'react';
import {Alert, Button, Col, Container, Row} from "react-bootstrap";
import {
    Area,
    Bar,
    CartesianGrid,
    ComposedChart,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons";
import {DateRangePicker} from "react-dates";

class StakeChart extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[
                {
                    name: 'july 1', rewards: 250,
                },
                {
                    name: 'july 2', rewards: 700,
                },
                {
                    name: 'july 3', rewards: 1200,
                },
                {
                    name: 'july 4', rewards: 1000,
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
                    name: 'july11', rewards: 1600,
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
                    name: 'july29', rewards: 650,
                },
                {
                    name: 'july30', rewards: 950,
                },
                {
                    name: 'july31', rewards: 450,
                },
            ]
        }
    }
    render() {
        return (
            <Fragment>
                <Alert variant="light" className="mt-5 mb-5 pb-5" >
                    <Container >
                        <Row>
                            <Col  lg={12} md={12} sm={12} className="mb-5">
                                <div className="activeBarchart mb-5" style={{width:'100%', height:'430px'}}>
                                    <div className="tableStake ml-4 mb-5 mt-5">
                                        <h3>Check Rewards Stake</h3>
                                    </div>

                                    <Row className="ml-5">
                                            <Alert variant="info ">
                                                <FontAwesomeIcon icon={faCalendarAlt} /> Select Date:
                                            </Alert>
                                        <Col lg={4} md={4}>
                                            <div className="dateStake mt-2">
                                                <DateRangePicker
                                                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                                                    endDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                                                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                                                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                                                    onDatesChange={({ endDate, startDate  }) => this.setState({ endDate, startDate })} // PropTypes.func.isRequired,
                                                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                                                />
                                            </div>
                                        </Col>

                                    </Row>

                                    <ResponsiveContainer >
                                        <ComposedChart
                                            width={100}
                                            height={300}
                                            data={this.state.data}
                                            margin={{
                                                top: 15, right: 15, left: 15, bottom: 15,
                                            }}
                                        >
                                            <CartesianGrid stroke='#f5f5f5'/>
                                            <XAxis dataKey="name" fontSize={13}/>
                                            <YAxis fontSize={13}/>
                                            <Tooltip />



                                            <Bar dataKey="rewards" barSize={20} fill='#413ea0' />
                                            <Line type='monotone' dataKey='rewards' stroke='#82ca9d' activeDot={{r: 8}}/>
                                        </ComposedChart>

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

export default StakeChart;
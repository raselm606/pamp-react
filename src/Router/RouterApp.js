import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../Allpage/HomePage";
import StakePage from "../Allpage/StakePage";

class RouterApp extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/stake" component={StakePage} />
                </Switch>
            </Fragment>
        );
    }
}

export default RouterApp;
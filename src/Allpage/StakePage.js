import React, {Component, Fragment} from 'react';
import Staking from "../Component/Staking";
import TopNav from "../Component/TopNav";
import StakeSection from "../Component/StakeSection";
import DailyChart from "../Component/DailyChart";
import StakeChart from "../Component/StakeChart";
import BalanceChart from "../Component/BalanceChart";

class StakePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNav var="contained"  class="btn btntwo btn-danger mr-3 mb-1" btn="Add MetaMask" balance="Balance: 850 PAMP" balanceClass=" btn btn-primary"/>
                <StakeSection/>
                <DailyChart/>
                <StakeChart/>
                <BalanceChart/>
                <Staking/>

            </Fragment>
        );
    }
}

export default StakePage;
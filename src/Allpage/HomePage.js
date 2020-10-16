import React, {Component, Fragment} from 'react';
import TopNav from "../Component/TopNav";
import IframeSection from "../Component/IframeSection";
import WhatPamp from "../Component/WhatPamp";
import Announcement from "../Component/Announcement";
import HowitWorks from "../Component/HowitWorks";
import Staking from "../Component/Staking";
import Banner from "../Component/Banner";
import {Button} from "react-bootstrap";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNav class="btn  mr-3" />
                <Banner/>
                <IframeSection/>
                <WhatPamp/>
                <Announcement/>
                <HowitWorks/>
                <Staking/>


            </Fragment>
        );
    }
}

export default HomePage;
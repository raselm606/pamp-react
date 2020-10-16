import React, {Component, Fragment} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import "../asset/css/bootstrap.min.css";
import "../asset/css/style.css";
import logo from "../asset/image/logo.png";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";

class TopNav extends Component {

    constructor(){
        super();
        this.state={
            topNavBg: "topNavbar",

        }
    }

    onScroll=()=>{
        if (window.scrollY>300){
            this.setState({ topNavBg:"topNavScroll"})
        } else if(window.scrollY <100){
            this.setState({topNavBg:"topNavbar"})
        }
    };
    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }
    render(props) {
        return (
            <Fragment>
                <div className={this.props.topClass}>
                    <div className={this.state.topNavBg} >
                        <Container>

                            <Navbar className={this.state.topNavBg} bg="bg-dark" expand="lg"  fixed="top" collapseOnSelect>
                                <Navbar.Brand className="mr-auto"><NavLink to="/"><img src={logo} alt="logo"/></NavLink></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className=" ml-auto mr-5">

                                        <Nav.Link><NavLink exact  activeStyle={{color:'#2ecc71'}} to="/">Home</NavLink></Nav.Link>
                                        <Nav.Link><NavLink exact  activeStyle={{color:'#2ecc71'}} to="/stake"> Staking</NavLink></Nav.Link>
                                        <Nav.Link href="https://medium.com/@pampnetwork/updates-staking-rewards-live-otc-liquidity-drive-996f09a14703"><link/>Updates</Nav.Link>
                                        <Nav.Link href="https://t.me/pampnetwork" target="_blank">Telegram</Nav.Link>
                                        <Nav.Link href="https://etherscan.io/address/0xf0fac7104aac544e4a7ce1a55adf2b5a25c65bd1"  target="_blank">Contact</Nav.Link>

                                    </Nav>
                                    <Button variant={this.state.var} href="" className={this.props.class}>{this.props.btn}</Button>
                                    <Button variant={this.state.var} className={this.props.balanceClass} >{this.props.balance}</Button>
                                </Navbar.Collapse>
                            </Navbar>
                        </Container>
                    </div>
                </div>



            </Fragment>
        );
    }
}

export default TopNav;
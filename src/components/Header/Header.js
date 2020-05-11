import React from 'react';
import "./Header.css";
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';

const popover = (
    <Popover id="popover-positioned-left">
        <strong>Instructions!</strong><br />
        Click on a character to earn points, but don't select a character more than once!
    </Popover>
);

const Header = props => (
    <header className="header row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 text-center">
        <OverlayTrigger trigger="click" placement="left" overlay={popover}>
                <Button className="logo-button btn-dark">
                <img src="./images/logo.png" className="star-ocean" alt="Star Ocean Logo" width="50" height="150"/>
                </Button>
                </OverlayTrigger>
                <h1><strong>Instructions!</strong><br />
        Click on a character to earn points, but don't select a character more than once!</h1>
        </div>
        <div className="col-lg-3"></div>
    </header>
)

export default Header;
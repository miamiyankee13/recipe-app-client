import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './nav';
import './styles/header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.scrollTop = this.scrollTop.bind(this);
    }

    scrollTop() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <header className="header">
                <div className="header__brand">
                    <Link to="/" onClick={this.scrollTop}>
                        <h1 className="header__brand--heading">D'Amico Recipes</h1>
                    </Link>
                </div>
                <i 
                    onClick={this.props.toggleMobileNav} 
                    className={this.props.visible ? "fas fa-bars fa-lg toggle-button rotated" : "fas fa-bars fa-lg toggle-button"}
                >
                </i>
                <Nav />
            </header>
        );
    }
}
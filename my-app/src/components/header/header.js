import React from 'react'
import "./header.css"

const Header = () => {
    return (
        <header className="header">
            <a href="#" className="logo">
                <img src="images/logo.png" alt="logo" />
            </a>
            <nav className="navbar">
                <a className="button" href="#">ABOUT </a>
                <a href="#">PRODUCTS</a>
                <a href="#">SALE</a>
                <a href="#">CONTACT</a>
                <a href="#">BLOG</a>

            </nav>
            <div className="buttons">
                <button>
                    <i className="fas fa-user"></i>
                </button>
                <button>
                    <i className="fas fa-cart-shopping"></i>
                </button>
                <button>
                    <i className="fas fa-bars"></i>
                </button>
            </div>

            <div className="search-site">
                <input type="text" className="search-input" id="seacrh-box" placeholder="Search..." />
                <i className="fas fa-search"></i>
            </div>
        </header>
    )
}

export default Header;
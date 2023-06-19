import React from 'react';
import { NavLink } from "react-router-dom";


import './NavLinks.css';
function NavLinks(props) {
    function scrollSmoothTo(elementId) {
        var element = document.getElementById(elementId);
        element.scrollIntoView({
            block: "start",
            behavior: 'smooth',
            inline: "nearest",

        });
    }

    return (
        <div className={`navbar ${props.className}`} style={props.style}>
            {props.children}
            <div className={props.sidebar_nav_item_wrapper} onClick={props.closeDrawer}>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "nav-item active-nav-item" : "nav-item"
                    }
                    to=""
                    onClick={() => scrollSmoothTo('home')}
                >
                    Home
                </NavLink>

            </div>
            <div className={props.sidebar_nav_item_wrapper} onClick={props.closeDrawer}>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "nav-item active-nav-item" : "nav-item"
                    }
                    to=""
                    onClick={() => scrollSmoothTo('aboutus')}
                >
                    About Us
                </NavLink>

            </div>
            <div className={props.sidebar_nav_item_wrapper} onClick={props.closeDrawer}>

                <NavLink
                    className={({ isActive }) =>
                        isActive ? "nav-item active-nav-item" : "nav-item"
                    }
                    to=""
                    onClick={() => scrollSmoothTo('features')}
                >
                    Features
                </NavLink>
            </div>
            <div className={props.sidebar_nav_item_wrapper} onClick={props.closeDrawer}>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "nav-item active-nav-item" : "nav-item"
                    }
                    to=""
                    onClick={() => scrollSmoothTo('products')}
                >
                    Products
                </NavLink>
            </div>
            <div className={props.sidebar_nav_item_wrapper} onClick={props.closeDrawer}>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "nav-item active-nav-item" : "nav-item"
                    }
                    to=""
                    onClick={() => scrollSmoothTo('contact')}
                >
                    Contact
                </NavLink>
            </div>


        </div>
    );
}

export default NavLinks;
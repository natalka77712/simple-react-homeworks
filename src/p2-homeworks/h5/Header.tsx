import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import style from "./Header.module.css";

function Header() {
    return (
        <nav>
            <div className={style.nav}>
                <span className={style.navItem}>
                    <NavLink to={PATH.PRE_JUNIOR} activeClassName={style.activeLink}>PreJunior</NavLink>
                </span>
                <span className={style.navItem}>
                    <NavLink to={PATH.JUNIOR} activeClassName={style.activeLink}>Junior</NavLink>
                </span>
                <span className={style.navItem}>
                    <NavLink to={PATH.JUNIOR_PLUS} activeClassName={style.activeLink}>JuniorPlus</NavLink>
                </span>
            </div>
        </nav>
    );
}

export default Header;

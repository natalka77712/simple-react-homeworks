import React from "react";
import Header from "./Header";
import Routes from "./Routes";
import { HashRouter } from "react-router-dom";

function HW5() {
    return (
        <div>
            <HashRouter>
                <div>
                    <Header/>

                    <Routes/>
                </div>
            </HashRouter>
        </div>
    );
}

export default HW5;

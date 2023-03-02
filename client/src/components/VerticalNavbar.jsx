import React from "react";
import "../App.css";
import { VerticalBarData } from "./VerticalBarData";

function VerticalNavbar() {
    return (
        <div className="VerticalBar" style={{height: "92.65vh"}}>
            <ul className="VerticalbarList">
                {VerticalBarData.map((val, key) => {
                    return (
                        <li
                            key={key}
                            className="row"
                            id={window.location.pathname === val.link ? "active" : ""}
                            onClick={() => {
                                window.location.pathname = val.link;
                            }}
                        >
                            <div id="icon"> {val.icon}</div> <div id="title">{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default VerticalNavbar;

// JavaScript source code
import React from "react";
import ourworks from "../pages/OurWorks";
import allproperties from "../pages/partnership";
import events from "../pages/Events";

const AboutMenu = () => (
    <div class="dropdown">
        <div class="dropdown-content">
            <ul>
                <li><a href="/ourworks">Ourworks</a></li>
                <li><a href="/partnership">Parnerships</a></li>
                <li><a href="/events">Events</a></li>
                <li><a href="/allproperties">Blog</a></li>
            </ul>
        </div>
    </div>
);

export default AboutMenu;

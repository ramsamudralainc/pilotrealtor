
import React from "react";


import allproperties from "../pages/partnership";
import events from "../pages/Events";
import blogpage from "../pages/blogpage";


const Aboutmenu = () => (
    <div class="dropdown">
        <div class="dropdown-content">

            <ul>
                <li><a href="/partnership">Ourworks</a></li>
                <li><a href="/partnership">Parnerships</a></li>
                <li><a href="/events">Events</a></li>
                <li><a href="/blogpage">Blogs</a></li>
            </ul>
        </div>
    </div>
);

export default Aboutmenu;

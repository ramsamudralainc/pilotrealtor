import React from "react";
import properties from "../pages/properties";
import allproperties from "../pages/allproperties";
import mainpagecontent from "../pages/mainpagecontent";



const CustomNav = () => (
    <div class="dropdown">
      <div class="dropdown-content">
                <ul>
                    <li class="nav-header">Properties</li>
                    <li><a href="/properties">Residential</a></li>               
                <li><a href="/mainpagecontent">Commercial</a></li>
                    <li class="divider"></li>
                    <li class="nav-header">Services</li>
                    <li><a href="/properties">Residential</a></li>
                    <li><a href="/mainpagecontent">Commercial</a></li>
                </ul>
                 </div>
                   </div>     
);


export default CustomNav;

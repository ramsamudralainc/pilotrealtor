import React from "react";
import properties from "../pages/properties";
import mainpagecontent from "../pages/mainpagecontent";


const BSMenu = () => (
    <div class="dropdown">
      <div class="dropdown-content">
                <ul>
                    <li class="nav-header">Buy</li>
                <li><a href="/properties">Buy</a></li>   
                <li class="nav-header">Sell</li>
                <li><a href="/mainpagecontent">Sell</a></li>   
                </ul>
                 </div>
                   </div>     
);

export default BSMenu;



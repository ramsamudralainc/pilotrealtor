import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import CustomNav from "./CustomNav";
import customcontainer from "../pages/customcontainer";

import BSMenu from "./BSMenu";
import OFMenu from "./OFMenu";
import AboutMenu from "./Aboutmenu";
import MainSearchBar from "../pages/mainSearchBarPage";
import mainpagecontent from "../pages/mainpagecontent";





import Customsearchbar from "../Pages/customsearchbar";
import contact from "../Pages/Contact";
import SignUp from "../pages/SignUp";
import signin from "../pages/SignIn";
import sliderpages from "../pages/sliderpages";
import properties from "../pages/properties";




const Navbar = () => {

  return (
     <header>
    
        <div>
         
          <div class="navbar navbar-fixed-top">
       
          <div>
                      <a href="./mainpagecontent">Home</a>
          </div>
        
          <div class="dropdown">
            <button class="dropbtn">Rentals & Services</button>
                <div class="dropdown-content">
                        <CustomNav/> 
                </div>
           </div> 
   
            <div class="dropdown">
                      <button class="dropbtn">About us</button>
                      <div class="dropdown-content">
                         <AboutMenu/>
                      </div>
                  </div> 

            <div class="dropdown">
                <button class="dropbtn">Property Managment</button>
                <div class="dropdown-content">
                    <BSMenu/>
                </div>
             </div> 

                  <div class="dropdown">
                      <button class="dropbtn">Client Testimonials</button>
                      <div class="dropdown-content">
                          <OFMenu/>
                      </div>
                  </div> 
                   
                  <div>
                        <Link href="/customcontainer?pageno=1&subpage=Contact" legacyBehavior>
                           <a>Contact us</a>
                       </Link>
                  </div>

                     <div>
                     <a href="./signup">Sign Up</a>
                     </div>
                     <div>
                      <a href="./signin">Sign In</a>
                     </div>

         </div>
        </div>
         
       
       
    </header>
  );
};

export default Navbar;

import React from "react";
import NavBar from "../components/Navbar";
import Footerbar from "../components/FooterBar";
import SectionOne from "./SectionOne";
import Contact from "./contact";



const mainpagecontent = (props) => (   
    <div>
        
        <NavBar />.
      
        <br />
        <br />
        <SectionOne name="Popular Properties"
            description="We have a number of Popular properties ready to be Rent Select an area to view the properties and their details"
            pageno={3} />
        <br />
        <br />
        <br />
        <br />
        <SectionOne name="Property Managment Services"
            description="We serve many areas in New England and have a number of properties ready to be Rent Select an area to view the properties and their details"
            pageno={4} />
        <br />
        <br />
        <br />
        <br />
        <SectionOne name="Latest Properties for Rent"
            description="We have a number of latest properties ready to be Rent Select an area to view the properties and their details"
            pageno={2} />
        <br />
        <br />
        <br />
        <br />
        <SectionOne name="Property Locations (State)"
            description="We have a number of properties in (States) ready to be Rent Select an area to view the properties and their details"
            pageno={1} />
            <br />
            <br />
            <br />
            <br />
        <br />
      <div class="lightbluebackgroundbody">
            <Contact />
           
        </div>
        <br />
        <br />
        <br />
        <br />
        <Footerbar/>
      </div>
);

export default mainpagecontent;

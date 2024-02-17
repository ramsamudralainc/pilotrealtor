import Nav from "./Nav";
import NavBar from "./Navbar";
import Footerbar from "./FooterBar";
import AllMyproperties from "../pages/allproperties";
import SectionOne from "../pages/SectionOne";
import contact from "../pages/contact";


const layoutcontainer = () => (
     <div>
        <NavBar />.
        <br />
        <br />        
        <SectionOne name="Popular Properties" pageno={3} />
        <br />
        <Footerbar/>
      </div>
);


export default layoutcontainer;

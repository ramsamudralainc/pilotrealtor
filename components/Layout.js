import Nav from "./Nav";
import NavBar from "./Navbar";
import Footerbar from "./FooterBar";
import AllMyproperties from "../pages/allproperties";
import SectionOne from "../pages/SectionOne";

const Layout = (props) => (
    <div class="lightbluebackgroundbody">
        <NavBar />.
             
        {props.children}
        <br />
        <br />
        <br />
        <br />
        <Footerbar/>
      </div>
);


export default Layout;

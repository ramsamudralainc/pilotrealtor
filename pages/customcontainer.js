import { useRouter } from 'next/router';
import NavBar from "../components/Navbar";
import Footerbar from "../components/FooterBar";
import AllMyproperties from "./allproperties";
import SectionOne from "./SectionOne";
import Contact from "./contact";


customcontainer.getInitialProps = ({ query }) => {
    return ({ pageno: query.pageno, subpage: query.subpage });
}

function customcontainer ({ pageno, subpage }) { 
    const router = useRouter();
    const { query } = router;
   
    
    return (
        <div class="lightbluebackgroundbody">
            
            <NavBar />
            <p>pageno from props: {pageno}</p>
            <p>subpage from props: {subpage}</p>

            
            <p>subpage from query string: {query.subpage}</p>
            <p>pageno from query string: {query.pageno}</p>

            
            <p>URL: {router.asPath}</p>
        <Contact />.
        <br />
        <Footerbar/>
      </div>
 );
}


export default customcontainer;

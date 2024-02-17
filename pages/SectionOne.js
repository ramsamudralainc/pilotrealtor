import Unknown from "./contacts";
import LocationContacts from "./LocationContacts";
import RecentContacts from "./RecentContacts";
import PopularContacts from "./PopularContacts";
import MaintenanceContacts from "./MaintenanceContacts";
import properties from "../pages/properties";


import HeroSliderComponent from "./HeroSliderComponent";

import customcontainer from "../pages/customcontainer";


function createCard(props) {

    return (
        props.pageno === 1 ?
            (
        <div class="whitebody">
        <div class="thumbnail">
            <h2>{props.name}</h2>
            <h2>{props.imgURL}</h2>
            <img src={props.imgURL} />;
            0
            <h2>{props.phone}</h2>
            <h2>{props.email}</h2>

            <div class="widget-footer">
                <p>
                    <a href="#" class="btn btn-primary">Buy now</a>
                    <a href="#" class="btn">Read more</a>
                </p>
            </div>
            </div>
        </div >
        )
            :
            (
                <div class="bluebody">
                    <div class="thumbnail">
                        <h2>{props.name}</h2>
                        <h2>{props.imgURL}</h2>
                        <img src={props.imgURL} />;

                        <h2>{props.phone}</h2>
                        <h2>{props.email}</h2>

                        <div class="widget-footer">
                            <p>
                                <a href="#" class="btn btn-primary">Buy now</a>
                                <a href="#" class="btn">Read more</a>
                            </p>
                        </div>
                    </div>
                </div >
            )

    );
}
  function handleClick (props){
     return (
      <div>
   {props.imgURL}
   Some Text
    <properties imgURL = {props.imgURL} />
     </div>
     );
  }

function DisplaySection(props) {

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 3;

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
   
    return (
        props.pageno === 1 ?
            (
                  <ul class="thumbnails">
                    {LocationContacts.map(contact => (
                            <li class="span333" key={contact.id}>
                                <div class="thumbnail">
                                <div class="lightbluebackgroundbody">
                                    <img src={contact.imgURL} alt={contact.name} />
                                    <div>
                                        <h2>{contact.name}</h2>
                                        <p>{contact.phone}</p>
                                        <p>{contact.email}</p>
                                        </div>
                                    </div>
                                <div class="widget-footer left-align">
                                    <p>
                                        <a href="/customcontainer" class="Roundbutton btn-large">Contact</a>

                                        <a href="/properties" class="Roundbutton btn-large">Read more</a>
                                    </p>
                                    </div>
                                </div>
                            </li>
                    ))}
                    </ul>
            )
            : 
            (props.pageno === 2 ?
            (
                
                    <ul class="thumbnails">
                    {RecentContacts.map(contact => (
                            <li class="span333" key={contact.id}>
                                <div class="thumbnail">
                                <div class="lightbluebackgroundbody">
                                    <img src={contact.imgURL} alt={contact.name} />
                                    <div>
                                        <h2>{contact.name}</h2>
                                        <p>{contact.phone}</p>
                                        <p>{contact.email}</p>
                                        </div>
                                    </div>
                                <div class="widget-footer left-align">
                                    <p>
                                        <a href="/customcontainer" class="Roundbutton btn-large">Contact</a>

                                        <a href="/properties" class="Roundbutton btn-large">Read more</a>
                                    </p>
                                </div>
                                </div>
                            </li>
                        ))}
                    </ul>
               
                ) 
                :
                ((props.pageno === 3 ?
                (
                    <ul class="thumbnails">
                        {PopularContacts.map(contact => (
                            <li class="span333" key={contact.id}>
                                <div class="thumbnail">
                                    <div class="lightbluebackgroundbody">
                                        <img src={contact.imgURL} alt={contact.name} />
                                        <div>
                                            <h2>{contact.name}</h2>
                                            <p>{contact.phone}</p>
                                            <p>{contact.email}</p>
                                        </div>
                                    </div>
                                    <div class="widget-footer left-align">
                                        <p>
                                            <a href="/customcontainer" class="Roundbutton btn-large">Contact</a>

                                            <a href="/properties" class="Roundbutton btn-large">Read more</a>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )
                :
                (
                    <ul class="thumbnails">
                        {MaintenanceContacts.map(contact => (
                            <li class="span333" key={contact.id}>
                                <div class="thumbnail">
                                    <div class="lightbluebackgroundbody">
                                        <img src={contact.imgURL} alt={contact.name} />
                                        <div>
                                            <h2>{contact.name}</h2>
                                            <p>{contact.phone}</p>
                                            <p>{contact.email}</p>
                                        </div>
                                    </div>
                                    <div class="widget-footer left-align">
                                        <p>
                                            <a href="/customcontainer" class="Roundbutton btn-large">Contact</a>

                                            <a href="/properties" class="Roundbutton btn-large">Read more</a>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )
                )
                ) 
                )
    );
}

const SectionOne = (props) => (
  <div>
        <div class= "lightbluebackgroundbody">  
        <div class="row-fluid">
            <div class="center-align">
                    <h1><strong>  {props.name}</strong></h1>
                    <br />
                    <h2><strong>  {props.description}</strong></h2>
                    <br />
            </div>
                <DisplaySection pageno={props.pageno} />
            </div>
            <div class="center-align">
                <input type="submit" value="Load more properties" class="CustomRoundbutton btn-large center-align" />
            </div >
        </div>
       
    </div>
     
);

export default SectionOne;
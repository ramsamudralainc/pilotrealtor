import contacts from "./contacts";
import HeroSliderComponent from "./HeroSliderComponent";

function createCard(props) {

            return (
                <div class="thumbnail">
                    <h2>{props.name}</h2>
                    <h2>{props.imgURL}</h2>
                    <img src={props.imgURL} />;
                   
                    <h2>{props.phone}</h2>
                    <h2>{props.email}</h2>

                    <div class="widget-footer">
                        <p>
                            <a href="#" class="btn btn-primary">Buy now</a>&nbsp;
                            <a href="product.html" class="btn">Read more</a>
                        </p>
                    </div>
                </div>

            );
}

function App() {
    return (
        <div>
            <div class="row-fluid">
                <ul class="thumbnails">

                 
                        {contacts.map(contact => (
                            <li class="span3" key={contact.id}>
                                <div class="thumbnail">
                                    <img src={contact.imgURL} alt={contact.name} />
                                    <div>
                                        <h2>{contact.name}</h2>
                                        <p>{contact.phone}</p>
                                        <p>{contact.email}</p>
                                    </div>
                                    <div class="widget-footer">
                                        <p>
                                            <a href="#" class="btn btn-primary">Buy now</a>&nbsp;
                                            <a href="product.html" class="btn">Read more</a>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
       
                    
              
            </div>
  
        </div>
    );
}

export default App;
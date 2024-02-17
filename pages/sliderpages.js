import React from "react";
import Layout from "../components/Layout";
import HeroCarousel from "./HeroCarousel";


 const sliderpages = () => (
        <Layout
         subpage="sliderpages"
            footer={`This is from Contact  Page`}
     >

         <div class="content">
             <div class="slider">
                 <div class="container-fluid">
                     <div id="heroSlider" class="carousel slide">
                        

                        Simple text to call   HeroCarousel

                         <a class="left carousel-control" href="#heroSlider" data-slide="prev">Prev</a>
                         <a class="right carousel-control" href="#heroSlider" data-slide="next">Next</a>
                 </div>
             </div>
             </div>
         </div>

  


     </Layout>
 );

export default sliderpages;

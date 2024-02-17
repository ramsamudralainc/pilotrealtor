import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Link from "next/link";

const properties = ({imgURL }) => (

       <Layout
        subpage="properties"
        footer={`Copyright ${new Date().getFullYear()}`}
    >
        
        <div>

        
        <div class="content">
        <div class="container">

          <div class="page-header">
            <h2>properties</h2>
          </div>

                    <ul class="thumbnails">
                        <li class="span333">
                            <div class="thumbnail">
                                <div class="defaultbackgroundbody">
                                    <img src="static/p5555.jpg" class="thumbnail bottom-space" />
                                    <div>
                                        <h2>San Diego</h2>
                                        <p>Apartment</p>
                                        <p>Side View</p>
                                    </div>
                                </div>

                            </div>
                        </li>

                        <li class="span333">
                            <div class="thumbnail">
                                <div class="defaultbackgroundbody">
                                    <img src="static/p5555.jpg" class="thumbnail bottom-space" />
                                    <div>
                                        <h2>San Diego</h2>
                                        <p>Apartment</p>
                                        <p>Rear View</p>
                                    </div>
                                </div>

                            </div>
                        </li>

                        <li class="span333">
                            <div class="thumbnail">
                                <div class="defaultbackgroundbody">
                                    <img src="static/p5555.jpg" class="thumbnail bottom-space" />
                                    <div>
                                        <h2>San Diego</h2>
                                        <p>Apartment</p>
                                        <p>Rear View</p>
                                    </div>
                                </div>

                            </div>
                        </li>

                    </ul>
       </div> 
        </div> 
        </div>

    </Layout>               
);

export default properties;

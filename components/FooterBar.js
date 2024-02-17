import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGoogle, FaGithub, FaEnvelope, FaCogs, FaRegThumbsUp,FaSearch } from 'react-icons/fa';
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiStar, CiBeaker1 } from "react-icons/ci";
import { GoLaw } from "react-icons/go";

const FooterBar = () => (
    <footer>
       
        <div class="container">
            <div class="row">
                <div class="span2">
                    <h4><i class="CiStar"><CiStar/></i>Properties</h4>
                    
                        <ul class="quick-links">
                            <li><a href="product.html">Residential</a></li>
                            <li><a href="product.html">Commercial</a></li>
                            <li><a href="all_products.html">All Properties</a></li>
                        </ul>
                 
                    <h4><i class="FaCogs"></i> <FaCogs /></h4>
                    
                        <ul class="quick-links">
                            <li><a href="service.html">Rental</a></li>
                            <li><a href="service.html">Lease</a></li>
                            <li><a href="all_services.html">All services</a></li>
                        </ul>
                   
                </div>
                <div class="span2">
                    <h4><i class="CiBeaker1"><CiBeaker1/></i> About</h4>
                 
                        <ul class="quick-links">
                            <li><a href="our_works.html">Our works</a></li>
                            <li><a href="patnerships.html">Patnerships</a></li>
                            <li><a href="leadership.html">Leadership</a></li>
                            <li><a href="news.html">News</a></li>
                            <li><a href="events.html">Events</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            </ul>
                         
                        </div>
                        <div class="span2">
                    <h4><i class="FaRegThumbsUp"><FaRegThumbsUp /></i> Support</h4>
                           
                                <ul class="quick-links">
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="contact_us.html">Contact us</a></li>
                                </ul>
                         
                    <h4><i class="GoLaw"><GoLaw /></i> Legal</h4>
                          
                                <ul class="quick-links">
                                    <li><a href="#">License</a></li>
                                    <li><a href="#">Terms of Use</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Security</a></li>
                                </ul>
                          
                        </div>
                        <div class="span3">
                            <h4>Get in touch</h4>
                    <div class="social-icons-row">
                        <a href="#"><i class="FaTwitter"> <FaTwitter /></i></a>
                        <a href="#"><i class="FaFacebook"></i><FaFacebook /></a>
                        <a href="#"><i class="FaLinkedin"></i><FaLinkedin /></a>
                            </div>
                            <div class="social-icons-row">
                        <a href="#"><i class="FaGoogle"><FaGoogle /></i></a>
                        <a href="#"><i class="FaGithub"><FaGithub /></i></a>
                        <a href="mailto:soundar.rathinasamy@gmail.com"><i class="FaEnvelope"><FaEnvelope /></i></a>
                            </div>
                            <div class="social-icons-row">
                        <i class="MdOutlineLocalPhone"><MdOutlineLocalPhone /></i> +919750227877
                            </div>
                        </div>
                        <div class="span3">
                            <h4>Get updated by email</h4>
                            <form>
                                <input type="text" name="email" placeholder="Email address"/>
                        <input type="submit" class="btn Roundbutton btn-large" value="Subscribe"/>
                            </form>
                        </div>
                        </div>
                </div>

                <hr class="footer-divider" />
                    <div class="container">
                        <p>
                             &copy;2012-3000 SmartRealtor, Inc. All Rights Reserved.
                        </p>
        </div>
        <script type="text/javascript" src="js/jquery.min.js"></script>
        <script type="text/javascript" src="js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/boot-business.js"></script>
                </footer>

              
);

export default FooterBar;
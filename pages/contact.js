import React from "react";
import Link from "next/link";

import {FaEnvelope} from 'react-icons/fa';
import { MdOutlineLocalPhone } from "react-icons/md";


const Contact = () => (
    
    <div class="content">
      <div class="container">
        <div class="page-header">
          <h1>Contact us</h1>
        </div>
        <div class="row-fluid">
          <div class="span4 offset1">
            <div class="page-header">
              <h2>Quick message</h2>
            </div>
            <form class="form-contact-us">
              <div class="control-group">
                <div class="controls">
                  <input type="text" id="inputName" placeholder="Name"/>
                </div>
              </div>
              <div class="control-group">
                <div class="controls">
                  <input type="text" id="inputEmail" placeholder="Email"/>
                </div>
              </div>
              <div class="control-group">
                <div class="controls">
                  <textarea id="inputMessage" placeholder="Message"></textarea>
                </div>
              </div>
              <div class="control-group">
                <div class="controls">
                                    <input type="submit" class="btn Roundbutton btn-large" value="Send"/>
                </div>
              </div>
           </form>

          </div>


           <div class="span5 offset1">
            <div class="page-header">
              <h2>Offices</h2>
            </div>
            <h3>North America</h3>
            <div>
              <address class="pull-left">
                <strong>SmartRealtor, Inc.</strong><br/>
                123 Folsom Ave, Suite 600<br/>
                USA<br/>
              </address>

               <div class="pull-right">
                <div>
                                    <i class="MdOutlineLocalPhone"><MdOutlineLocalPhone /></i> (123) 123-1234
                </div>
                <a href="mailto:contact@SmartRealtor.com" class="contact-mail">
                                    <i class="FaEnvelope"><FaEnvelope /></i>
                </a> contact@SmartRealtor.com
                            </div><br/>
       
            <h3>Europe</h3>
            <div>
              <address class="pull-left">
                <strong>SmartRealtor, Inc.</strong><br/>
                4328 Queens Ave, Suite 4368<br/>
                UK<br/>
                            </address>

            <div>
                <i class="MdOutlineLocalPhone"><MdOutlineLocalPhone /></i> (123) 123-1234
            </div>
            <a href="mailto:contact@SmartRealtor.com" class="contact-mail">
                <i class="FaEnvelope"><FaEnvelope /></i>
            </a> contact@SmartRealtor.com
                        
                            </div><br/>
                    
            <h3>Asia</h3>
            <div>
              <address class="pull-left">
                <strong>SmartRealtor, Inc.</strong><br/>
                473 Gandhi Road Ave, Building 8753<br/>India<br/>
              </address>
                        <div>
                            <i class="MdOutlineLocalPhone"><MdOutlineLocalPhone /></i> (123) 123-1234</div>
                        <a href="mailto:contact@SmartRealtor.com" class="contact-mail">
                            <i class="FaEnvelope"><FaEnvelope /></i>
                        </a>contact@SmartRealtor.com
                            </div>
                            <div />

                        </div>
                    </div>
             
          </div>
        </div>
      </div>
 );


export default Contact;


        
import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";


import SignUpIcons from "./SignUpIcons";

const SignUp = () => (
     <Layout
        subpage="SignUp"
        footer={`This is from Contact  Page`}
    >
   
    
 <div class="content">
      <div class="container">
        <div class="page-header">
          <h1>Signup to SmartRealtor</h1>
        </div>
        <div class="row">
          <div class="span6 offset3">
                        <h4 class="widget-header"><i class="icon-gift"></i> Be a part of SmartRealtor</h4>
            <div class="widget-body">
              <div class="center-align">
                <form class="form-horizontal form-signin-signup">
                  <input type="text" name="email" placeholder="Email"/>
                  <input type="password" name="password" placeholder="Password"/>
                  <input type="password" name="password_confirmation" placeholder="Password Confirmation"/>
                  <div>
                     <input type="submit" value="Signup" class="btn Roundbutton btn-large"/>
                  </div>
                                </form>
                                <SignUpIcons name="Sign Up" />  
               
                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
      


                                    
   </Layout>
 );


export default SignUp;


        
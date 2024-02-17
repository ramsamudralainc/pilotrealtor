import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import SignUpIcons from "./SignUpIcons";

const SignIn = () => (
     <Layout
        subpage="SignUp"
        footer={`This is from Contact  Page`}
    >
     <div class="content">
      <div class="container">
        <div class="page-header">
          <h1>Signin to SmartRealtor</h1>
        </div>
        <div class="row">
          <div class="span6 offset3">
            <h4 class="widget-header"><i class="icon-lock"></i> Signin to SmartRealtor</h4>
            <div class="widget-body">
              <div class="center-align">
                <form class="form-horizontal form-signin-signup">
                  <input type="text" name="email" placeholder="Email"/>
                                    <input type="password" name="password" placeholder="Password" />

                             
                                        <div class="remember-me">
                                         <div class="left-align"> 
                                                <label class="checkbox"> <input type="checkbox" />
                                                Remember me </label>
                                           
                                           
                                        </div> 
                                   
                                        <div class="left-align"> 
                                        <a text-align="left" href="#">Forgot password?</a>
                                        </div>
                                    </div> .
                     
                    <div class="clearfix"></div>
                  
                                    <input type="submit" value="Signin" class="btn Roundbutton btn-large"/>
                </form>
                
                                <SignUpIcons name="Sign In" />    
              
              </div>
            </div>
          </div>
        </div>
            </div>
        
    </div>
                               
   </Layout>
 );


export default SignIn;


        
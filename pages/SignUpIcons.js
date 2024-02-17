

import { FaFacebook, FaTwitter, FaLinkedin, FaGoogle, FaGithub } from 'react-icons/fa';


function SignUpIcons(props) {
     return (
         <div class="center-align">

             {(props.name === 'Sign Up') ?

                 <div>

                     <h4><i class="icon-question-sign"></i> Already have an account?</h4><br />
                     <a href="signin.html" class="btn Roundbutton btn-large">Signin</a><br /><br />
                     <h4><i class="icon-thumbs-up"></i> Sign in with third party account</h4><br />
                 </div>

                 : <div>
                     <h4><i class="icon-question-sign"></i> Don't have an account?</h4><br />
                     <a href="signup.html" class="btn Roundbutton btn-large">Signup</a><br /><br />
                     <h4><i class="icon-thumbs-up"></i> Sign in with third party account</h4><br />
                 </div>
             }
                
             <ul class="signin-with-list">
                  <li>
                  
                     <button className="btn-twitter">
                         <FaTwitter /> {/* Use FaFacebook component for the Facebook icon */}
                         {props.name} with Twitter
                     </button>
                 </li>

                 <li>   
                     <button className="btn-facebook">
                         <FaFacebook /> {/* Use FaFacebook component for the Facebook icon */}
                         {props.name} with Facebook
                     </button>
                 </li>
                  <li>
                   <button className="btn-linkedin">
                         <FaLinkedin /> {props.name} with LinkedIn
                    </button>
                  </li>
                  <li>
                    <button className="btn-github">
                         <FaGithub /> {props.name} with GitHub
                      </button>
                  </li>
             </ul>

             <script type="text/javascript" src="js/jquery.min.js"></script>
             <script type="text/javascript" src="js/bootstrap.min.js"></script>
             <script type="text/javascript" src="js/boot-business.js"></script>
            </div>
                
     );
}
export default SignUpIcons;

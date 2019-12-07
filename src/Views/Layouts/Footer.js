import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
const propTypes = {
  childrenname: PropTypes.node,
};

class Footer extends React.Component {
  constructor(props){
    super(props);//inside props of super used for 'this.props'
    this.props=props;
    const {footer}=this.props;
    console.log("childrenname--->>>",footer)
  }

  render()
  {
    console.log("---------->>",this.props)
  return (
     
    <div className="App">
    <React.Fragment>
        <footer class=" hidden-xs">
          <div class="container">
            <div class="row">
              <div class="col-md-3 col-sm-3 col-xs-12 footer-logo"><a href="index.html"><img src="images/footer-logo.png" class="img-responsive" alt="StayHook"/></a></div>
              <div class="col-md-7 col-sm-7 col-xs-12 text-center foot-link">
                <ul>
                  <li><NavLink href="/">Home</NavLink></li>
                  <li><NavLink href="/about-us">About us</NavLink> </li>
                  <li><NavLink href="/contact-us">Contact Us</NavLink></li>
                </ul>
              </div>
              <div class="col-md-2 col-sm-2 col-xs-12">
                <div class="follow-home"> <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a> <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a> <a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a> </div>
              </div>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="foot-stock"></div>
              </div>
              <div class="col-md-7 col-sm-6 col-xs-12 copy-txt"> StayHook<sup>&reg;</sup> is a registered Trademark of StayHook Pvt Ltd (ACN 698 425 354)<br/>
                Copyright &copy; 2016 StayHook.com (ACN 267 668 173) </div>
              <div class="col-md-5 col-sm-6 col-xs-12">
                <div class="foot-privacy text-uppercase"> <a href="privacy-policy.html">Privacy Policy</a> <a href="terms-conditions.html">Terms and Conditions</a> </div>
              </div>
            </div>
          </div>
        </footer>


     <div class="container text-center hidden-sm hidden-md hidden-lg">
        <div class="row">
          <div class="col-lg-12"> <a href="#top-scroll-head" class="scroll top-g" onClick="return false"><img src="images/top-go.png" alt=""/> BACK TO TOP</a>
            <div class="temss">
              <ul>
                <li><a href="#">FAQS</a></li>
                <li><a href="#">PRIVACY POLICY</a></li>
                <li><a href="#">TERMS & CONDITIONS</a></li>
              </ul>
              <p>© 2016 React Demo PVT LTD. ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </div>
        </div>
      
     </React.Fragment>
    </div>
  );
}
}




export default Footer;

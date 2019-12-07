import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const propTypes = {
  childrenname: PropTypes.node,
};

class Header extends React.Component {
  constructor(props){
    super(props);//inside props of super used for 'this.props'
    this.props=props;
    const {greeting}=this.props;
    console.log("childrenname--->>>",greeting)
  }

  render()
  {
    const isLogin=(sessionStorage.getItem('jwt'))?true:false;
  return (
  <div className="App">
  <header class="cp_header">
    <div id="cp-slide-menu" class="cp_side-navigation">
      <div class="inner-over-div">
        <ul class="sldi-lgoo">
          <li class="nav-bdr" id="close"><img src="images/close-mark.png" width="30" alt=""/></li>
          <li class="nav-logo">
            <center>
              <img src="images/nav-logo.png" class="img-responsive" alt="StayHook"/>
            </center>
          </li>
          <li class="search-product"><img src="images/search-icon.png" width="30" alt=""/></li>
        </ul>
        <ul class="navbar-nav">
          <li><a href="index.html" class="homebdr">Home</a></li>
          <li><a href="signup-host.html">Work With US</a></li>
          <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Explore StayHook <i class="fa fa-angle-down fa-lg" aria-hidden="true"></i></a>
            <ul class="dropdown-menu">
              <li><a href="blog.html">Blog</a></li>
              <li><a href="booking-gurantee.html">Booking Gurantee</a></li>
            </ul>
          </li>
          { (!isLogin)?
            <div><li><a href="#" onClick="return false" data-toggle="modal" data-target="#login">Sign In</a></li>
          <li><a href="#" onClick="return false" data-toggle="modal" data-target="#register">Sign Up</a></li>
          </div>: <li><a href="" class="">Logout</a></li>
          }
          <li><a href="help.html" class="helpbdr">Help</a></li>
        </ul>
        <div class="social-icons"> <a href="#"><img src="images/soicla-1.png" width="30" height="29" alt=""/></a> <a href="#"><img src="images/soicla-2.png" width="30" height="29" alt=""/></a> <a href="#"><img src="images/soicla-3.png" width="30" height="29" alt=""/></a> </div>
      </div>
    </div>
    <div class="cp-navigation-row">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2 col-sm-2 col-xs-2">
            <div class="cp-nav-holder">
              <div id="push" class="cp-sidemenu"><a onClick="return false" href="#"><i class="fa fa-fw" aria-hidden="true" title="Copy to use bars"></i></a></div>
            </div>
          </div>
          <div class="col-md-8 col-sm-6 col-xs-8 text-center">
            <div class="logo"><a href="index.html"></a></div>
          </div>
          {
            (!isLogin)?
          <div class="col-md-2 col-sm-4 col-xs-2 text-right loginwrap"> <a href="#" onClick="return false" data-toggle="modal" class="signin  hidden-xs" data-target="#login">Sign In</a> <a class="signup" href="#" onClick="return false" data-toggle="modal" data-target="#register">Sign Up</a> <em class="sarch-top-meu  hidden-lg  hidden-md  hidden-sm"></em> </div>
        :<div class="col-md-2 col-sm-4 col-xs-3 text-right loginwrap">
            <div class="after-login-user">
              <div class="user-da-down">
                <button class="" type="button" data-toggle="dropdown"> <em><img src="images/dashboard-user.jpg" width="35" class="img-circle" alt=""/></em> <i class="hidden-xs">Hi, Shinendra</i> <span class="down-aro"></span></button>
                <ul class="dropdown-menu">
                  <li><a href="#">Account Settings</a></li>
                  <li><a href="booking-history.html">Booking History</a></li>
                  <li><a href="#">Refer A Friend</a></li>
                  <li><a href="#">Log Out</a></li>
                </ul>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    </div>
    </header>

      
    </div>
  );
}
}

export default Header;

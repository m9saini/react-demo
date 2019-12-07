import React from 'react';

class Home extends React.Component {

  render(){ 
  return (
   
<div>
<section class="banner clearfix">
<div class="container hidden-xs">
  <h1>Search Through Best Hostels &amp; Hotels</h1>
  <ul>
    <li class="clearfix">
      <div class="form-control citybox clearfix">
        <select>
          <option value="1">Select City</option>
          <option value="2">Jaipur</option>
          <option value="3">Ajmer</option>
          <option value="4">Kota</option>
          <option value="5">Bikaner</option>
          <option value="6">Jodhpur</option>
        </select>
      </div>
      <div class="searchhome">
        <input class="form-control" placeholder="Search by locality, address..." type="text"/>
      </div>
      <div class="couple-box">
        <select>
          <option value="1">King / Queen / Family</option>
          <option class="sdfdsf" value="2">King </option>
          <option value="3">Queen </option>
          <option value="4">Family </option>
        </select>
      </div>
      <div class="duration-box">
        <select>
          <option value="1">Duration</option>
          <option value="2">Regular Booking</option>
          <option value="3">Internship (1-2 Months)</option>
          <option value="4">1 Semester (5 Months)</option>
          <option value="4">2 Semesters (10 Months)</option>
        </select>
      </div>
      <div class="search-box">
        <button class="search-btn" type="submit" onclick="window.location.href='search-listing.html'"><i class="fa fa-search hidden-sm hidden-xs" aria-hidden="true"></i> <span class="hidden-md hidden-lg">Search</span></button>
      </div>
    </li>
  </ul>
  <div class="text-center start-txt text-uppercase">Starting at Rs 399* only</div>
  <div class="down-aros text-center"> <a href="#a" onClick="return false" class="scroll"><i class="arrow-down"><img src="images/down-arrow.png" alt=""/></i></a> </div>
</div>
<div class="container hidden-lg hidden-md hidden-sm">
  <div class="mobile-searchin-sec text-center">
    <h5>Welcome
      To 
      Stayhook</h5>
    <button type="button" class="show-firm-se">Search <i class="fa fa-fw" aria-hidden="true" title="Copy to use search"></i></button>
    <div class="text-center start-txt text-uppercase">Hook Your Stays Br/
      Starting at? 
      Just Rs 399* only </div>
    <div class="down-aros text-center"> <a href="#a" onClick="return false" class="scroll"><i class="arrow-down"><img src="images/down-arrow.png" alt=""/></i></a> </div>
  </div>
</div>
</section>

<section class="clearfix wherewrap" id="a">
<div class="col-md-12 col-sm-12 col-xs-12 hidden-xs">
  <h2>Amazing Experience <i></i></h2>
</div>
<div class="container-fluid">
  <div class="row">
    <div class="col-md-6 col-sm-6 col-xs-12">
      <div class="row">
        <div class="ovver-images ofer-img-1">
          <div class="ove-text-in">
            <p>ROOMS  FOR 
              KINGS</p>
            <a href="#">LOOK</a> </div>
          <img src="images/roomforking-img.jpg" alt="ROOMS  FOR KINGS"/> </div>
      </div>
    </div>
    <div class="col-md-6 col-sm-6 col-xs-12">
      <div class="row">
        <div class="ovver-images ofer-img-1">
          <div class="ove-text-in">
            <p>ROOMS  FOR 
              QUEENS</p>
            <a href="#">LOOK</a> </div>
          <img src="images/roomforking-img1.jpg" alt="ROOMS  FOR KINGS"/> </div>
      </div>
    </div>
    <div class="col-md-6 col-sm-6 col-xs-12">
      <div class="row">
        <div class="ovver-images ofer-img-1">
          <div class="ove-text-in">
            <p>ROOMS 
              FOR  COUPLES</p>
            <a href="#">LOOK</a> </div>
          <img src="images/roomforking-img2.jpg" alt="ROOMS  FOR KINGS"/> </div>
      </div>
    </div>
    <div class="col-md-6 col-sm-6 col-xs-12">
      <div class="row">
        <div class="ovver-images ofer-img-1">
          <div class="ove-text-in">
            <p>ROOMS 
              FOR  FAMILIES</p>
            <a href="#">LOOK</a> </div>
          <img src="images/roomforking-img3.jpg" alt="ROOMS  FOR KINGS"/> </div>
      </div>
    </div>
  </div>
</div>
</section>

<section class="featurewrap clearfix hidden-xs">
<div class="container">
  <h2>Features</h2>
  <ul>
    <li class="botbdr">
      <center>
        <img src="images/spacemen-icon.png" alt="Spacemen" />
      </center>
      <h3>Spacemen</h3>
      <p>She gave my mother such a turn, that I have always been convinced I am indebted to Miss Betsey for having been born on a Friday.</p>
    </li>
    <li class="botbdr">
      <center>
        <img src="images/sun-icon.png" alt="Sun"/>
      </center>
      <h3>Sun</h3>
      <p>It was some time before he obtained any answer, and the reply, when made, was unpropitious.</p>
    </li>
    <li class="botbdr rightbdr">
      <center>
        <img src="images/time-icon.png" alt="Time"/>
      </center>
      <h3>Time</h3>
      <p>Thus much I thought proper to tell you in relation to yourself, and to the trust I reposed in you.</p>
    </li>
    <li>
      <center>
        <img src="images/moon-icon.png" alt="Moon"/>
      </center>
      <h3>Moon</h3>
      <p>This sounded a very good reason, and Alice was quite pleased to know it. 'I never thought of that before!' she said.</p>
    </li>
    <li>
      <center>
        <img src="images/wind-icon.png" alt="Wind"/>
      </center>
      <h3>wind</h3>
      <p>Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.</p>
    </li>
    <li class="rightbdr">
      <center>
        <img src="images/radio-icon.png" alt="Radio"/>
      </center>
      <h3>Radio</h3>
      <p>A hundred thousand grateful loves to your dear papa and mamma.</p>
    </li>
  </ul>
</div>
</section>

<section class="supportwrap clearfix">
<div class="container">
  <ul>
    <li>
      <h2>Customer support</h2>
      <p>If you need help while traveling or hosting, contact us at our toll free number: 00 08004405103</p>
    </li>
    <li>
      <h2>AMAZING EXPERIENCE</h2>
      <p>Now the races of these two have been for some ages utterly extinct, and besides to discourse any further of them would not be at all to my purpose.</p>
    </li>
    <li>
      <h2>vERIFID ID</h2>
      <p>We aim to build a trusted community by giving you more info when you're deciding who to host or stay with.</p>
    </li>
  </ul>
</div>
</section>
</div>


);}
}
export default Home;
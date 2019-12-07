import React from 'react';

class ContactUs extends React.Component{
	
render(){
	return(
		<div class="sibn-up-host">
	<div class="contact-us-secion">
<div class="container">
<div class="row">

<div class="col-sm-7 col-md-8">
<div class="login-secton">     
    <form>
    <div class="container-fluid">
    <div class="row">
    
    <h5 class="cont-tiel">Contact Us</h5>
    
    <div class="col-md-6">
    <div class="form-group">
    <label>Your name</label>
    <input class="form-control" type="text"/>
    </div>
    </div>
    <div class="col-md-6">
    <div class="form-group">
    <label>your mobile number</label>
    <input class="form-control" type="text"/>
    </div>
    </div>
        
    <div class="col-sm-12">
    <div class="form-group">
    <label>Your Message</label>
    <textarea class="form-control"></textarea>
    </div>
    </div>
    
    <div class="col-md-6">
    <div class="form-group">
    <label>Your E-mail</label>
    <input class="form-control" type="text"/>
    </div>
    </div>
    <div class="col-md-6">
    <div class="form-group">
    <label class="hidden-sm">&nbsp;</label>
    <button type="submit" class="submit-button">Send Your message</button>
    </div>
    </div>
    
    <div class="col-lg-12">
    <span class="attachment">
    <i><img src="images/attach.png"  alt=""/> ADD ATTACHMENTS</i>
    <input type="file"/>
    </span>
    </div>
      
    </div>
     
    </div>
    </form>
    </div>
</div>
		<div class="col-sm-5 col-md-4">
		<div class="side-assress">
		<ul>
		<li>
		<i>E-mail</i>
		<p>denis@getcraftwork.com</p>
		</li>
		<li>
		<i>Phone</i>
		<p>+30 356 3778 241</p>
		</li>
		<li>
		<i>Address</i>
		<p>San Francisco, CA 
		560 Bush St & 20th Ave, Apt 
		5 San Francisco, 230909</p>
		</li>
		</ul>
		</div>
		</div>

		</div>
		</div>
</div>
</div>
	);}
}

export default ContactUs
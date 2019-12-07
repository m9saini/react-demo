import React from 'react';
import swal from 'sweetalert';
import { Button,Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { AvForm,AvField } from 'availity-reactstrap-validation';
import { validation } from './../../Comman';
import config  from './../../config';
class Modals extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      refercode: '',
      devicetoken:'',
      devicetype:'',
      profilepic:'',
      redirect:false,
      isLoading :false
    }
 }

 onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }


 onSubmit = (e) => {
    var username = (this.state.username) ? this.state.username.toString() : "";
    var password = (this.state.password) ? this.state.password.toString() : "";

    let checktype = username.indexOf("@");

    var pattphone =validation.mobile10verify; ///[0-9]/g;
    var resultphone = (username.match(pattphone))?(username.match(pattphone)).length:0;

    var pattemail =validation.email; ///[0-9]/g;
    var resultemail = (username.match(pattemail))?(username.match(pattemail)).length:0;
    console.log(username,'dfgdfg',password);
    if(username!='' && password!='')
    {
      const dt=`${config.deviceType}`;
      const gg=`${config.version}`;
      const df=`${config.mobileappapi}`;
      console.log(dt,gg,df);
      var data={
          "username" :username,
          "password" :password,
          "devicetype" :'web',
          "devicetoken":"fsdfghjfsdfhjsfjsdfsdfsdgfjsdffff"
        };
      var getusersobj={ 
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }    
      var api_url=`${config.API_URL}`+'userlogin';
         
      fetch(api_url, getusersobj)
        .then(function(response){
          if(response.status!==200)
          {
            swal({
              title: "Wrong!",
              text: "Somthing went wrong.",
              icon: "error",
            });
          }
          
          response.json().then(json=>{
              if(json.error===false)
              {               
                sessionStorage.clear();
                sessionStorage.setItem("loginData",json.data);
                sessionStorage.setItem("jwt",json.data.token);
                window.location.href ="/";
              }
              else
              {
                  swal({
                    title: "Wrong!",
                    text: json.msg,
                    icon: "error",
                  });
              }
          })
            


        }).catch(error => {
          swal({
            title: "Wrong!",
            text: error.toString(),
            icon: "error",
          });          
        });
        
      }else
      {
        swal({
              title: "Required!",
              text: "Incorrect phone number or email id",
              icon: "warning",
            });
      }
   
  }
  render(){ 
    var username = (this.state.username) ? this.state.username.toString() : "";
    var pattphone =validation.mobile10verify; ///[0-9]/g;
    var resultphone = (username.match(pattphone))?(username.match(pattphone)).length:0;
    let isMobile=(resultphone===10)?10:40;
  return (
    <div className="">

<div class="modal fade login" id="login" role="dialog">
<div class="modal-dialog">
<div class="login-secton">
  <button type="button" class="close" data-dismiss="modal">&times;</button>
  <h5 class="box-titl">Sign In</h5>
  <AvForm onValidSubmit={this.onSubmit} name="login" class="">
    <div class="form-group">
      <label>Your MOBILE NUMBER/Email ID</label>
      <AvField type="text" name="username" value={this.state.username} onChange={this.onChange} class="form-control" placeholder="Email/Mobile No.*" 
               validate={{
                pattern: { value: validation.phneEmailid, errorMessage: 'Please enter valid emailid or mobile no' },
                required: { value: true, errorMessage: "Email or Mobile No. is required" },
                maxLength: { value: isMobile, errorMessage: 'Mobile No. must be maximum '+isMobile+' digits' }
              }} />
    </div>
    <div class="form-group">
      <label>Password</label>
      <AvField type="password" name="password" value={this.state.password} onChange={this.onChange} class="form-control" placeholder="Enter Your Password *" 
      validate={{
        required:{value:true,errorMessage : "Password is required."},
       }}/>      
    </div>
    <div class="form-group"> <span class="remb">
      <input type="checkbox"/>
      <b>Keep me signed in <a href="#" class="pull-right">Forgot Password</a></b> </span> </div>
    <div class="form-group">
      <button type="submit" class="submit-button">Sign IN</button>
    </div>
    {/*<div class="or-section"> <b>OR</b> </div>
    <a href="#" class="otp">Login with OTP</a>*/}
  </AvForm>
</div>
<div class="sibn-up"> Not Registered? <a href="#" onClick="return false" data-toggle="modal" data-target="#register" data-dismiss="modal">Sign Up</a> </div>
</div>
</div>



<div class="modal fade" id="register" role="dialog">
<div class="modal-dialog modal-lg">
<div class="login-secton">
  <button type="button" class="close" data-dismiss="modal">&times;</button>
  <h5 class="box-titl">Create Account</h5>
  <form>
    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <label>FULLname</label>
          <input type="text" class="form-control" placeholder="Shinendra Kumar"/>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label>Your E-mail</label>
          <input type="text" class="form-control" placeholder="name@mail.com"/>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label>MOBILE NUMBER</label>
          <input type="text" class="form-control" placeholder="9871234560"/>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label>Create Password</label>
          <input type="text" class="form-control"/>
        </div>
      </div>
    </div>
    <p class="terms-cond">By signing up you agree our <a href="#">Terms</a> and <a href="#">Privacy Policy</a></p>
    <div class="form-group fix-width-button">
      <button type="submit" class="submit-button">Sign up</button>
    </div>
    <div class="or-section"> <b>OR</b> </div>
    <div class="back-to-login"> <i>Already have a StayHook account?</i> <a href="#" onClick="return false" data-toggle="modal" data-target="#login" data-dismiss="modal" class="otp">Log In</a> </div>
  </form>
</div>
</div>
</div>
</div>

);}
}

export default Modals;
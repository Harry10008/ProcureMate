import './CPAdmin.css';
import { useState } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../APIurls';
import { useNavigate } from 'react-router-dom';

function CPAdmin() {

  const navigate = useNavigate();
  const [ opassword , setOldPassword ] = useState();
  const [ npassword , setNewPassword ] = useState();
  const [ cnpassword , setConfirmNewPassword ] = useState();
  const [ output , setOutput ] = useState();

  const [ err1 , setError1 ] = useState();
  const [ err2 , setError2 ] = useState();
  const [ err3 , setError3 ] = useState();

  const handleSubmit=()=>{
    var flag=true;

    if(opassword==undefined)
    {
      setError1("*Old password is required");
      flag=false;
    }
    else
      setError1("");

    if(npassword==undefined)
    {
      setError2("*New password is required");
      flag=false;
    }
    else
      setError2("");

    if(cnpassword==undefined)
    {
      setError3("*Confirm new password is required");
      flag=false;
    }
    else
      setError3("");



    if(flag==true)
    {
    axios.get(_userapiurl+"fetch?email="+localStorage.getItem("email")+"&password="+opassword).then((response)=>{
        if(npassword==cnpassword)
        { 
          var userDetails={"condition_obj":{"email":localStorage.getItem("email")} ,"content_obj":{"password":cnpassword}};
          axios.patch(_userapiurl+"update",userDetails).then((response)=>{
            alert("Password changes , please login again...");
            navigate("/logout");
          }).catch((error)=>{
            setOutput("Password Not Changed , Please try again....");
          });
        } 
        else
        {
          setOutput("New & confirm new  password mismatch....");
          setNewPassword("");
          setConfirmNewPassword("");  
        }  
      }).catch((err)=>{
        setOutput("Invalid old password , please try again....");
        setOldPassword("");
      });
    }  

    };

  return (
  <>
    {/* About Start */}
    <div class="container-fluid bg-secondary p-0">
        <div class="row g-0">
<div class="col-lg-12 py-6 px-5">
<h1 class="display-5 mb-4">Change Password <span class="text-primary">Here!!!</span></h1>

<font style={{"color":"blue"}} >{output}</font>
<form>
  <div class="form-group">
    <label for="opwd">Old Password:</label>
    <input type="password" class="form-control" value={opassword} onChange={e => setOldPassword(e.target.value)} />
    <font style={{"color":"red"}} >{err1}</font>
  </div>
  <br/>
  <div class="form-group">
    <label for="npwd">New Password:</label>
    <input type="password" class="form-control" value={npassword} onChange={e => setNewPassword(e.target.value)} />
    <font style={{"color":"red"}} >{err2}</font>
  </div>
  <br/>
  <div class="form-group">
    <label for="cnpwd">Confirm New Password:</label>
    <input type="password" class="form-control" value={cnpassword} onChange={e => setConfirmNewPassword(e.target.value)} />
  </div>
  <font style={{"color":"red"}} >{err3}</font>
  <br/><br/>
  <button onClick={handleSubmit} type="button" class="btn btn-danger">Submit</button>
</form>

</div>
        </div>
    </div>
    {/* About End */}
  </>
  );
}

export default CPAdmin;

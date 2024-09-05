import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../APIurls';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();
  const [ email , setEmail ] = useState();
  const [ password , setPassword ] = useState();
  const [ output , setOutput ] = useState();

  const handleSubmit=()=>{
    const userDetails={"email":email,"password":password};

    axios.post(_userapiurl+"login",userDetails).then((response)=>{
        const user = response.data.userDetails;
        
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("_id",user._id);
        localStorage.setItem("email",user.email);
        localStorage.setItem("role",user.role);
        
        (user.role=="admin")?navigate('/admin'):navigate("/user");
      }).catch((err)=>{
        setOutput("Invalid user or verify your account....");
        setEmail("");
        setPassword("");
      });
    };

  return (
  <>
    {/* About Start */}
    <div class="container-fluid bg-secondary p-0">
        <div class="row g-0">
            <div class="col-lg-12 py-6 px-5">
<h1 class="display-5 mb-4">Login <span class="text-primary">Here!!!</span></h1>
<font style={{"color":"blue"}} >{output}</font>
<form>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)} />
  </div>
  <br/>
  <button onClick={handleSubmit} type="button" class="btn btn-danger">Submit</button>
</form>              
            </div>
        </div>
    </div>
    {/* About End */}
  </>
  );
}

export default Login;

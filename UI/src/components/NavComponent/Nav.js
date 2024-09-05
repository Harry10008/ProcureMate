import './Nav.css';
import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react';

function Nav() {
  
    const [ NavContent , setNavContent ] = useState();

    useEffect(()=>{
        if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="admin")
        {
            setNavContent(  <>
                {/* Navbar Start */}
                <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
                <a href="index.html" class="navbar-brand p-0">
                    <h1 class="m-0 text-uppercase text-primary"><i class="far fa-smile text-primary me-2"></i>Tenders</h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0 me-n3">
                        <a class="nav-item nav-link active"><Link to="/admin">Admin Home</Link></a>
                        <a class="nav-item nav-link"><Link to="/manageusers">Manageusers</Link></a>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{"color":"#f35670"}}>Manage Category</a>
                            <div class="dropdown-menu m-0">
                                <a href="" class="dropdown-item"><Link to="/addcategory">Add Category</Link></a>
                                <a href="" class="dropdown-item"><Link to="/addsubcategory">Add SubCategory</Link></a>
                            </div>
                        </div>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{"color":"#f35670"}}>Settings</a>
                            <div class="dropdown-menu m-0">
                                <a href="" class="dropdown-item"><Link to="/epadmin">Edit Profile</Link></a>
                                <a href="" class="dropdown-item"><Link to="/cpadmin">Change Password</Link></a>
                            </div>
                        </div>
                        <a href="" class="nav-item nav-link"><Link to="/logout">Logout</Link></a>
                    </div>
                </div>
            </nav>
            {/* Navbar End */}
          </>);            

        }
        else if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="user")
        {
            setNavContent(  <>
                {/* Navbar Start */}
                <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
                <a href="index.html" class="navbar-brand p-0">
                    <h1 class="m-0 text-uppercase text-primary"><i class="far fa-smile text-primary me-2"></i>Tenders</h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0 me-n3">
                        <a class="nav-item nav-link active"><Link to="/user">User Home</Link></a>
                        <a class="nav-item nav-link"><Link to="/viewtenders">View Tenders</Link></a>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{"color":"#f35670"}}>Settings</a>
                            <div class="dropdown-menu m-0">
                                <a href="" class="dropdown-item"><Link to="/epadmin">Edit Profile</Link></a>
                                <a href="" class="dropdown-item"><Link to="/cpadmin">Change Password</Link></a>
                            </div>
                        </div>
                                                                
                        <a href="" class="nav-item nav-link"><Link to="/logout">Logout</Link></a>
                    </div>
                </div>
            </nav>
            {/* Navbar End */}
          </>);            
        }  
        else
        {
            setNavContent(  <>
                {/* Navbar Start */}
                <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
                <a href="index.html" class="navbar-brand p-0">
                    <h1 class="m-0 text-uppercase text-primary"><i class="far fa-smile text-primary me-2"></i>Tenders</h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0 me-n3">
                        <a class="nav-item nav-link active"><Link to="/">Home</Link></a>
                        <a href="" class="nav-item nav-link"><Link to="/about">About</Link></a>
                        <a href="" class="nav-item nav-link"><Link to="/contact">Contact</Link></a>
                        <a href="" class="nav-item nav-link"><Link to="/service">Service</Link></a>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{"color":"#f35670"}}>Pages</a>
                            <div class="dropdown-menu m-0">
                                <a href="" class="dropdown-item">Blog Grid</a>
                                <a href="" class="dropdown-item">Testimonial</a>
                            </div>
                        </div>
                        <a href="" class="nav-item nav-link"><Link to="/register">Register</Link></a>
                        <a href="" class="nav-item nav-link"><Link to="/login">Login</Link></a>
                    </div>
                </div>
            </nav>
            {/* Navbar End */}
          </>);            
        }
      }); 
  
 return (
    <>
    { NavContent }
    </>
  );
}

export default Nav;

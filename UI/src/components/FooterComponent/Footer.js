import './Footer.css';
import { useState , useEffect } from 'react';

function Footer() {

  const [ FooterContent , setFooterContent ] = useState();   
  
  useEffect(()=>{
    if(localStorage.getItem("token")!=undefined)
    {
        setFooterContent(<></>);
    }
    else
    {
        setFooterContent(<>    <div class="container-fluid bg-dark text-secondary p-5">
        <div class="row g-5">
            <div class="col-lg-3 col-md-6">
                <h3 class="text-white mb-4">Quick Links</h3>
                <div class="d-flex flex-column justify-content-start">
                    <a class="text-secondary mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Home</a>
                    <a class="text-secondary mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                    <a class="text-secondary mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                    <a class="text-secondary mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Latest Blog Post</a>
                    <a class="text-secondary" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <h3 class="text-white mb-4">Popular Links</h3>
                <div class="d-flex flex-column justify-content-start">
                    <a class="text-secondary mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Home</a>
                    <a class="text-secondary mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                    <a class="text-secondary mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                    <a class="text-secondary mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Latest Blog Post</a>
                    <a class="text-secondary" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <h3 class="text-white mb-4">Get In Touch</h3>
                <p class="mb-2"><i class="bi bi-geo-alt text-primary me-2"></i>X Street, Indore India</p>
                <p class="mb-2"><i class="bi bi-envelope-open text-primary me-2"></i>info@example.com</p>
                <p class="mb-0"><i class="bi bi-telephone text-primary me-2"></i>XXX XXX XXXX</p>
            </div>
            <div class="col-lg-3 col-md-6">
                <h3 class="text-white mb-4">Follow Us</h3>
                <div class="d-flex">
                    <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><i class="fab fa-twitter fw-normal"></i></a>
                    <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><i class="fab fa-facebook-f fw-normal"></i></a>
                    <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><i class="fab fa-linkedin-in fw-normal"></i></a>
                    <a class="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i class="fab fa-instagram fw-normal"></i></a>
                </div>
            </div>
        </div>
    </div></>);    
    }
  });

  return (
  <>
    {/* Footer Start */}
    
    { FooterContent }

    <div class="container-fluid bg-dark text-secondary text-center border-top py-4 px-5" style={{"border-color":"rgba(256, 256, 256, .1) !important;"}}>
        <p class="m-0">&copy; <a class="text-secondary border-bottom" href="#">Tenders</a>. All Rights Reserved. Designed by <a class="text-secondary border-bottom" href="">HM8</a></p>
    </div>
    {/* Footer End */}
  </>
  );
}

export default Footer;

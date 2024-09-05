import './Banner.css';
import { useState , useEffect } from 'react';

function Banner() {

  const [ BannerContent , setBannerContent ] = useState();  

  useEffect(()=>{
    if(localStorage.getItem("token")!=undefined)
    {
        setBannerContent(<></>);
    }
    else
    {
        setBannerContent(  <>
      {/* Carousel Start */}
      <div class="container-fluid p-0">
        <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="w-100" src="./assets/img/carousel-1.jpg"  alt="Image" />
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style={{"max-width":"900px"}}>
                            <h5 class="text-white text-uppercase">Online tender Site</h5>
                            <h1 class="display-1 text-white mb-md-4">We Provide Solution On Your tenders</h1>
                            <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 rounded-pill">Get Quote</a>
                            <a href="" class="btn btn-secondary py-md-3 px-md-5 rounded-pill">Contact Us</a>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="./assets/img/carousel-2.jpg"  alt="Image" />
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style={{"max-width":"900px"}}>
                            <h5 class="text-white text-uppercase">Online tender Site</h5>
                            <h1 class="display-1 text-white mb-md-4">We Provide Solution On Your tenders</h1>
                            <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 rounded-pill">Get Quote</a>
                            <a href="" class="btn btn-secondary py-md-3 px-md-5 rounded-pill">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    {/* Carousel End */}
  </>);
    }
  });

  return (
    <>
    { BannerContent }
    </>
  );
}

export default Banner;

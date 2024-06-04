import React, { useState } from 'react';
import './project.css';
import weatherAppImage from './img/weatherapp.jpg';
import calllogo from './img/calllogo.png';
import burger from './img/burger.png';
import flower from './img/flower.png';
import banner from './img/banner.png';
import moon from './img/moon.png';
import fly from './img/fly.png';
import book from './img/book.png';
import cat from './img/cat.png';
import bank from './img/bank.png';


const Project = () => {
    

    return (
        <div>
            <div class="wrap btn-group" role="group">
                                <div class="button">
                                    <div class="icon">
                                    <a href="/portfolio" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
                                    </svg>
                                    </a>
                                    </div>
                                    <a href="/portfolio" target="_blank">
                                    <p>About</p>
                                    </a>
                                </div>
                                <div class="button">
                                    <div class="icon">
                                    <a href="https://www.linkedin.com/in/jenniferhsw/" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                        </svg> 
                                        </a>   
                                    </div>
                                    <a href="https://www.linkedin.com/in/jenniferhsw/" target="_blank">
                                    <p>Linkedin</p>
                                   </a>
                                </div>
                                <div class="button">
                                    <div class="icon">
                                    <a href= "mailto: jenniferho8@icloud.com">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                                            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
                                            <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
                                        </svg>
                                        </a>
                                    </div>
                                    <a href= "mailto: jenniferho8@icloud.com">
                                    <p>Email</p>
                                    </a>
                                </div>
                            </div>
<div className='contect'>
  <div class="row ">
  <div class="col-sm-3 mb-3 mb-sm-0 weatherapp">
  <a href="https://jenniferhh.github.io/weather-app-hsw/" target="_blank" >
  <img src={weatherAppImage} class="card-img-top" alt="weather app"/>
  </a>
    <div class="text-center" style={{marginTop: "10px"}}>
    <h5 class="card-title">Weather App</h5>
     <p class="card-text">Created with API, Bootstrap and React app.</p>
     </div>
  </div>
  <div class="col-sm-3 mb-3 mb-sm-0 bank">
  <a href="https://jenniferhh.github.io/bank-app-design/?#/" target="_blank" >
  <img src={bank} class="card-img-top" alt="Bank app"/>
  </a>
    <div class="text-center" style={{marginTop: "10px"}}>
    <h5 class="card-title">Bank App</h5>
     <p class="card-text">Created with API, Bootstrap and React app.</p>
     </div>
  </div>

  <div class="col-sm-3 mb-3 mb-sm-0 calllogo">
  <a href="https://www.behance.net/gallery/174162053/Logo-Design-of-On-Call-Studio-On-Call-logo" target="_blank">
    <img src={calllogo} class="card-img-top" alt="Logo Design" />
    </a>
    <div class="text-center" style={{marginTop: "10px"}}>
        <h5 class="card-title">Logo Design</h5>
        <p class="card-text">Created with Adobe Illustrator.</p>
  </div>

    </div>

  <div class="col-sm-3 mb-3 mb-sm-0 burger">
  <a href="https://www.behance.net/gallery/158400765/Rest-in-burger-" target="_blank">
    <img src={burger} class="card-img-top" alt="Illustartion" />
    </a>
    <div class="text-center" style={{marginTop: "10px"}}>
        <h5 class="card-title">Illustartion</h5>
        <p class="card-text">Created with Procreate.</p>
  </div>
  </div>
</div>
</div>
<div className='contect'>
  <div class="row ">
  <div class="col-sm-3 mb-3 mb-sm-0 flower">
  <a href="https://www.behance.net/gallery/144679025/Logo-Design-of-cherry-blossom-logo" target="_blank">
    <img src={flower} class="card-img-top" alt="Illustartion" />
    </a>
    <div class="text-center" style={{marginTop: "10px"}}>
        <h5 class="card-title">Illustartion</h5>
        <p class="card-text">Created with Procreate and Adobe Illustrator.</p>
  </div>
  </div>
  <div class="col-sm-3 mb-3 mb-sm-0 banner">
  <a href="https://www.behance.net/gallery/142123409/Logotype-Design-of-Fantasy-Novel-" target="_blank" >
  <img src={banner} class="card-img-top" alt="Logotype Design"/>
  </a>
    <div class="text-center" style={{marginTop: "10px"}}>
    <h5 class="card-title">Logotype Design of Fantasy Novel</h5>
     <p class="card-text">Created with Adobe Illustrator.</p>
     </div>
  </div>

  <div class="col-sm-3 mb-3 mb-sm-0 moon">
  <a href="https://www.behance.net/gallery/141717465/Logo-Design-of-Prism-Accessory-Instagram-logo" target="_blank">
    <img src={moon} class="card-img-top" alt="Logo Design" />
    </a>
    <div class="text-center" style={{marginTop: "10px"}}>
        <h5>Logo Design</h5>
        <p>Created with Adobe Illustrator.</p>
  </div>

    </div>

  <div class="col-sm-3 mb-3 mb-sm-0 fly">
  <a href="https://www.behance.net/gallery/141300853/Logo-Design-of-Vol-De-Nuit-logo" target="_blank">
    <img src={fly} class="card-img-top" alt="Logo Design" />
    </a>
    <div class="text-center" style={{marginTop: "10px"}}>
        <h5>Logo Design</h5>
        <p>Created with Adobe Illustrator.</p>
  </div>
  </div>
</div>
</div>
<div className='contect' style={{marginBottom: "40px"}}>
  <div class="row ">
  <div class="col-sm-3 mb-3 mb-sm-0 book">
  <a href="https://www.behance.net/gallery/141153673/Book-cover-and-Banner-Design-Banner" target="_blank">
    <img src={book} class="card-img-top" alt="Book covers Design" />
    </a>
    <div class="text-center" style={{marginTop: "10px"}}>
        <h5 class="card-title">Book Covers Design</h5>
        <p class="card-text">Created with Adobe Photoshop and Adobe Illustrator.</p>
  </div>
  </div>
  <div class="col-sm-3 mb-3 mb-sm-0 cat">
  <a href="https://www.behance.net/gallery/114744207/Black-and-White-Illustration-" target="_blank" >
  <img src={cat} class="card-img-top" alt="Illustration"/>
  </a>
    <div class="text-center" style={{marginTop: "10px"}}>
    <h5 class="card-title">Illustartion</h5>
     <p class="card-text">Created with Procreate.</p>
     </div>
  </div>
  </div>
</div>
</div>

    );
};

export default Project;

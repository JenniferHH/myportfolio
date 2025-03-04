import React from 'react';
import './portfolio.css';

const Portfolio = () => {
    return (
        <div>
           
            <div className="container-fluid p-3 mb-2 vw-100">
                <div className="hard">
                <table class="table-borderless table-custom">
                <thead>
                    <tr>
                    <th >
                    <h1 className="display-1 name">Jennifer Ho</h1>
                    </th>
                    <th><h1 className='display-6'>(she/her)</h1></th>
                    <th>
                    <div class="wrapper btn-group" role="group">
                                <div class="button">
                                    <div class="icon">
                                    <a href="/" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-folder-fill" viewBox="0 0 16 16">
                                            <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3m-8.322.12q.322-.119.684-.12h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981z"/>
                                        </svg>
                                    </a>
                                    </div>
                                    <a href="/" target="_blank">
                                    <p>Projects</p>
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
                    </th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <th >
                        <h1 className="display-6">Working Experience</h1>
                    </th>
                    </tr>
                    <tr>
                    <td><p>Print Associate</p></td>
                    <td><p>2022</p></td>
                    <td><p>Vancouver</p></td>
                    </tr>
                    <tr>
                    <td><p>Graphic Designer and Admin Assistance</p></td>
                    <td><p>2022</p></td>
                    <td><p>Vancouver</p></td>
                    </tr>
                    <tr>
                    <td><p>Program Officer</p></td>
                    <td><p>2016-2021&ensp;&ensp;&ensp;&ensp;
                        </p></td>
                    <td><p>Hong Kong</p></td>
                    </tr>
                    <tr>
                    <td><p>Graphic Designer</p></td>
                    <td><p>2015-2016</p></td>
                    <td><p>Hong Kong</p></td>
                    </tr>
                    <tr>
                    <th >
                        <h1 className="display-6">Education</h1>
                    </th>
                    </tr>
                    <tr>
                    <td><p>Diploma in Computer Programming</p></td>
                    <td><p>2023-2024</p></td>
                    <td><p>Toronto</p></td>
                    </tr>
                    <tr>
                    <td><p>BA in Advertising (Honours)</p></td>
                    <td><p>2014-2016</p></td>
                    <td><p>Hong Kong</p></td>
                    </tr>
                </tbody>
                </table>
                                <div className="col-2">
                                    <div className="intro-banner-vdo-play-btn blue d-none d-lg-block" target="_blank">
                                        <i className="glyphicon glyphicon-play whiteText" aria-hidden="true"></i>
                                        <span className="ripple blue"></span>
                                    </div>
                                    <div className='text d-none d-lg-block'>
                                        <p className="h6">Toronto ( I am here. )</p>
                                        <div className='line'></div>
                                        <p>Vancouver</p>
                                        <div className='line'></div>
                                        <p>Hong Kong ( Hometown )</p>
                                    </div>
                                </div>
                                <div className='contact'>
                        <p>My skills are related to communication, marketing,
                         design, and computer programming.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;

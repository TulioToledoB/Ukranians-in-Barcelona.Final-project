import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-1 pb-1">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mt-2 mb-1">
            <h5 className="text-uppercase mb-2 font-weight-bold text-warning">ABOUT US</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean posuere dui sem. Aliquam posuere a massa sit amet dignissim. Mauris nisl turpis, malesuada ac odio vel, pharetra vulputate nibh. Mauris quis mattis nisi. Mauris urna nulla, eleifend a eros id, elementum posuere ante. Vestibulum vel eros eget elit hendrerit varius id eu risus. Vestibulum vestibulum.</p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-2 mb-1">
            <h5 className="text-uppercase mb-2 font-weight-bold text-warning">RESOURCES</h5>
            <p>
              <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Social Services</a>
            </p>
            <p>
              <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Legalization in Spain</a>
            </p>
            <p>
              <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Lawyers and Policy</a>
            </p>
            <p>
              <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Job Order</a>
            </p>
            <p>
              <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Others</a>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-2 mb-1">
            <h5 className="text-uppercase mb-2 font-weight-bold text-warning">CONTACTS</h5>
            <p>
              <i className="fas fa-house mr-3"></i> Barcelona, Spain
            </p>
            <p>
              <i className="fas fa-envelope mr-3"></i> ukrainianInBcn@gmail.com
            </p>
            <p>
              <i className="fas fa-phone mr-3"></i> +34 123456789
            </p>
          </div>
        </div>
        <hr className="mb-1 mt-1" />
        <div className="row d-flex justify-content-center">
          <div>
            <p>
              Copyright All Right Reserved By :
              <a href="#" style={{ textDecoration: 'none' }}>
                <strong className="text-warning">UKRAINIAN IN BARCELONA</strong>
              </a>
            </p>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="text-center">
              <ul className="list-unstyled list-inline pt-1 pb-1 mb-1">
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '12px' }}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a  className="btn-floating btn-sm text-white" style={{ fontSize: '12px' }}>
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '12px' }}>
                    <i className="fab fa-google-plus"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '15px' }}>
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
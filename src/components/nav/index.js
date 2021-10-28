import React from "react";
import MedtechLogo from "../../assets/images/MedTech_Logo.png";
import CareboxLogo from "../../assets/images/CareBox_logo.png";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const stickyNav = () => {
    let brandDiv = document.getElementById("brand-toggle-holder");
    let heightScrolled =
      document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(heightScrolled);
    if (heightScrolled > 50) {
      brandDiv.style.cssText = "display:none !important";
    } else {
      brandDiv.style.cssText = "display:flex !important";
    }
  };

  window.onscroll = () => stickyNav();

//   const navLinks = document.querySelectorAll(".nav-item");
//   const menuToggle = document.getElementById("navbarSupportedContent");
//   const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
//   navLinks.forEach((l) => {
//     l.addEventListener("click", () => {
//       bsCollapse.toggle();
//     });
//   });

  return (
    <nav className="navbar py-0 sticky-top navbar-expand-lg navbar-light shadow">
      <div className="d-block w-100">
        <div
          className="container d-flex justify-content-between py-2"
          id="brand-toggle-holder"
        >
          <Link className="navbar-brand" to="/">
            <img src={MedtechLogo} className="logo-img" alt="Medtech_logo" />
            {/* <i className="motto ms-2">...transforming your business</i>  */}
          </Link>
          <div className="stripe-container">
            <div className="stripe-1"></div>
            <div className="stripe-2"></div>
            <div className="stripe-3"></div>
          </div>
        </div>

        <div className="bg-grey w-100">
          <div className="container">
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="navbar-collapse collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav align-items-center me-auto pb-3 pb-lg-0 mb-0">
                <li className="nav-item">
                  <HashLink smooth to="/#about" className="nav-link">
                    About Us
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink smooth to="/#values" className="nav-link">
                    Our Values
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink smooth to="/#services" className="nav-link">
                    Our Services
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink smooth to="/#carebox" className="nav-link">
                    <img src={CareboxLogo} alt="carebox_logo" />
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink smooth to="/#trainings" className="nav-link">
                    Trainings
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink smooth to="/#articles" className="nav-link">
                    News Articles
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink smooth to="/#contact" className="nav-link">
                    Contact us
                  </HashLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

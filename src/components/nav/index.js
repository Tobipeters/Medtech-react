import React from "react";
import MedtechLogo from "../../assets/images/MedTech_Logo.png";
import CareboxLogo from "../../assets/images/CareBox_logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Navbar, Nav } from "react-bootstrap";

const AppNav = () => {
  const stickyNav = () => {
    let brandDiv = document.getElementById("brand-toggle-holder");
    let mainMenu = document.getElementById("main-menu");
    let stripes = document.getElementById("stripes");
    let heightScrolled =
      document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(heightScrolled);
    if (heightScrolled > 50) {
      brandDiv.classList.add("hide-logo-bar")
      // brandDiv.style.cssText = "transform: translate3d(0px, -118px, 0px) !important";
      // brandDiv.style.cssText = "display:none !important";
      mainMenu.classList.add("animate_nav");
      // brandDiv.style.cssText = "height:0px !important";
      // stripes.style.cssText = "height: 0px"
    } else {
      // brandDiv.style.cssText = "display:flex !important";
      brandDiv.classList.remove("hide-logo-bar")
      mainMenu.classList.remove("animate_nav");
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

  const closeNavAfterLink = () => {
    let nav_bar = document.getElementById("navbarSupportedContent");
    nav_bar.classList.remove("show");
  };

  return (
    <>
      <nav className="navbar py-0 sticky-top navbar-expand-lg navbar-light">
        <div className="d-block w-100">
          <div
            className="container d-flex justify-content-between py-2"
            id="brand-toggle-holder"
          >
            <Link className="navbar-brand" to="/">
              <img src={MedtechLogo} className="logo-img" alt="Medtech_logo" />
            </Link>
            <div className="stripe-container" id="stripes">
              <div className="stripe-1"></div>
              <div className="stripe-2"></div>
              <div className="stripe-3"></div>
            </div>
          </div>

          <div className="bg-grey w-100 shadow" id="main-menu">
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
                    <HashLink
                      smooth
                      to="/#"
                      className="nav-link"
                      onClick={closeNavAfterLink}
                    >
                      Home
                    </HashLink>
                  </li>
                  <li className="nav-item">
                    <HashLink
                      smooth
                      to="/#about"
                      className="nav-link"
                      onClick={closeNavAfterLink}
                    >
                      About Us
                    </HashLink>
                  </li>
                  <li className="nav-item">
                    <HashLink
                      smooth
                      to="/#values"
                      className="nav-link"
                      onClick={closeNavAfterLink}
                    >
                      Our Values
                    </HashLink>
                  </li>
                  <li className="nav-item">
                    <HashLink
                      smooth
                      to="/#services"
                      className="nav-link"
                      onClick={closeNavAfterLink}
                    >
                      Our Services
                    </HashLink>
                  </li>
                  <li className="nav-item">
                    <HashLink
                      smooth
                      to="/#carebox"
                      className="nav-link"
                      onClick={closeNavAfterLink}
                    >
                      <img src={CareboxLogo} alt="carebox_logo" />
                    </HashLink>
                  </li>
                  <li className="nav-item">
                    <HashLink
                      smooth
                      to="/#trainings"
                      className="nav-link"
                      onClick={closeNavAfterLink}
                    >
                      Trainings
                    </HashLink>
                  </li>
                  <li className="nav-item">
                    <HashLink
                      smooth
                      to="/#articles"
                      className="nav-link"
                      onClick={closeNavAfterLink}
                    >
                      News Articles
                    </HashLink>
                  </li>
                  <li className="nav-item">
                    <HashLink
                      smooth
                      to="/#contact"
                      className="nav-link"
                      onClick={closeNavAfterLink}
                    >
                      Contact us
                    </HashLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <div className="contaimer">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <ul className="navbar-nav align-items-center me-auto pb-3 pb-lg-0 mb-0">
                <li className="nav-item">
                  <HashLink smooth to="/#about" className="nav-link" onClick={closeNavAfterLink}>
                    About Us
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink smooth to="/#values" className="nav-link" onClick={closeNavAfterLink}>
                    Our Values
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink smooth to="/#services" className="nav-link" onClick={closeNavAfterLink}>
                    Our Services
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink smooth to="/#carebox" className="nav-link" onClick={closeNavAfterLink}>
                    <img src={CareboxLogo} alt="carebox_logo" />
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink smooth to="/#trainings" className="nav-link" onClick={closeNavAfterLink}>
                    Trainings
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink smooth to="/#articles" className="nav-link" onClick={closeNavAfterLink}>
                    News Articles
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink smooth to="/#contact" className="nav-link" onClick={closeNavAfterLink}>
                    Contact us
                  </HashLink>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar> */}
    </>
  );
};

export default AppNav;

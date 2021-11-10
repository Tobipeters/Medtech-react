import React from "react";

const Footer = () => {
  return (
    <section id="contact" className="bg-black-trans">
      <div className="container px-4  pt-5">
        <h3 className="section-title">
          Contact <span className="fw-700">Us</span>
        </h3>
        <div className="row">
          <div className="section-details col-md-6">
            <form className="contact-form">
              <div className="form-group mb-4">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="form-group mb-4">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group mb-4">
                <textarea
                  className="form-control"
                  placeholder="Message"
                  rows="4"
                ></textarea>
              </div>
              <button className="btn btn-blue d-block mx-auto">Send</button>
            </form>
          </div>
          <div className="col-md-6">
            <div className="row contact-details pt-5 pt-md-0">
              <div className="col-lg-6 mb-3 mb-md-4">
                <i className="fas fa-envelope me-3 text_blue"></i>
                <span className="text-light">info@medtechng.com</span>
              </div>
              <div className="col-lg-6 mb-3 mb-md-4">
                <i className="fas fa-phone me-3 text_blue"></i>
                <span className="text-light">+234 80 9362 5555</span>
              </div>
              <div className="col-lg-6 mb-3">
                <i class="fab fa-facebook-f me-3 text_blue"></i>
                <span className="text-light">Medtech</span>
              </div>
              <div className="col-lg-6 mb-3">
                <i class="fab fa-twitter me-3 text_blue"></i>
                <span className="text-light">Medtech</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-top text-center py-3 px-3 text-light mt-5 mx-n3 copy_right">
        <small>
          {" "}
          <i>
            © 2020 – 2022 MedTech Professional Services, carebox and affiliates{" "}
          </i>
        </small>
      </div>
    </section>
  );
};

export default Footer;

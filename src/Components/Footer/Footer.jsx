import React from "react";
import "./Footer.css";

const Footer = () => (
  <div>
    <footer className="footer">
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <div className="heading">
                <h3 class=" fw-bold mb-4">
                  <i class="fas fa-cannabis"></i>Cannaby
                </h3>
              </div>
              <div className="contact">
                <p>
                  1688 Meridian Ave, 7th Floor <br /> Miami Beach, FL 33139{" "}
                </p>
                <p>
                  <b /> 1.814.300.2891
                </p>

                <div class="social-footer-icons">
                  <p>
                    <a href="https://www.facebook.com/">
                      <i
                        className="fab fa-facebook-square fa-2x"
                        aria-hidden="true"
                      ></i>
                    </a>
                    {"    "}
                    <a href="https://www.linkedin.com/">
                      <i class="fab fa-linkedin fa-2x " aria-hidden="true"></i>
                    </a>{" "}
                    <a href="https://twitter.com/?lang=en">
                      <i
                        class="fab fa-twitter-square fa-2x"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h5 class=" fw-bold mb-4">Company</h5>
              <p>
                <a href="#!" class="text-reset">
                  About Cannaby
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Who we are
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  News & Blogs
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Contact Us
                </a>
              </p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h5 class="col-md-2 fw-bold mb-4">Supports</h5>

              <p>
                <a href="#!" class="text-reset">
                  Get Help
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  FAQs
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Find a Stor
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Chat with Us
                </a>
              </p>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h5 class=" fw-bold mb-4">Quick Links</h5>
              <p>
                <a href="#!" class="text-reset">
                  Brands
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Categories
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Deals
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Login / Sign Up
                </a>
              </p>
            </div>
            <div class="col-lg-2 col-xl-2 mx-auto mb-4">
              <h5 class="nap fw-bold mb-4"> </h5>
              <p>
                <a href="#!" class="text-reset">
                  Career
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Terms & Conditions
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div>
        <p className="Copywrite">&copy; Cannaby 2021. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
);

export default Footer;
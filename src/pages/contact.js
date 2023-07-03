const contact = () => {
  return (
    <div>
      {/* <!-- preloader --> */}
      {/* <div id="preloader">
        <div id="loading-center">
          <div id="loading-center-absolute">
            <img src="/preloader.svg" alt="" />
          </div>
        </div>
      </div> */}
      {/* <!-- preloader-end --> */}

      {/* <!-- Scroll-top --> */}
      <button class="scroll-top scroll-to-target" data-target="html">
        <i class="fas fa-angle-up"></i>
      </button>
      {/* <!-- Scroll-top-end--> */}

      {/* <!-- header-area --> */}
      <header>
        <div id="sticky-header" class="menu-area transparent-header">
          <div class="container custom-container">
            <div class="row">
              <div class="col-12">
                <div class="mobile-nav-toggler">
                  <i class="fas fa-bars"></i>
                </div>
                <div class="menu-wrap">
                  <nav class="menu-nav show">
                    <div class="logo">
                      <a href="/">
                        <img src="/logo.png" alt="Logo" />
                      </a>
                    </div>
                    <div class="navbar-wrap main-menu d-none d-lg-flex">
                      <ul class="navigation">
                        <li class="menu-item-has-children">
                          <a href="#">Home</a>
                          <ul class="submenu">
                            <li>
                              <a href="/">Home One</a>
                            </li>
                            <li>
                              <a href="index-2">Home Two</a>
                            </li>
                          </ul>
                        </li>
                        <li class="menu-item-has-children">
                          <a href="#">Movie</a>
                          <ul class="submenu">
                            <li>
                              <a href="movie">Movie</a>
                            </li>
                            <li>
                              <a href="movie-details">Movie Details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="tv-show">tv show</a>
                        </li>
                        <li>
                          <a href="pricing">Pricing</a>
                        </li>
                        <li class="menu-item-has-children">
                          <a href="#">blog</a>
                          <ul class="submenu">
                            <li>
                              <a href="blog">Our Blog</a>
                            </li>
                            <li>
                              <a href="blog-details">Blog Details</a>
                            </li>
                          </ul>
                        </li>
                        <li class="active">
                          <a href="contact">contacts</a>
                        </li>
                      </ul>
                    </div>
                    <div class="header-action d-none d-md-block">
                      <ul>
                        <li class="header-search">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#search-modal"
                          >
                            <i class="fas fa-search"></i>
                          </a>
                        </li>
                        <li class="header-lang">
                          <form action="#">
                            <div class="icon">
                              <i class="flaticon-globe"></i>
                            </div>
                            <select id="lang-dropdown">
                              <option value="">En</option>
                              <option value="">Au</option>
                              <option value="">AR</option>
                              <option value="">TU</option>
                            </select>
                          </form>
                        </li>
                        <li class="header-btn">
                          <a href="#" class="btn">
                            Sign In
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                {/* 
                        <!-- Mobile Menu  --> */}
                <div class="mobile-menu">
                  <div class="close-btn">
                    <i class="fas fa-times"></i>
                  </div>

                  <nav class="menu-box">
                    <div class="nav-logo">
                      <a href="/">
                        <img src="/logo.png" alt="" title="" />
                      </a>
                    </div>
                    <div class="menu-outer">
                      {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
                    </div>
                    <div class="social-links">
                      <ul class="clearfix">
                        <li>
                          <a href="#">
                            <span class="fab fa-twitter"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="fab fa-facebook-square"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="fab fa-pinterest-p"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="fab fa-instagram"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="fab fa-youtube"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div class="menu-backdrop"></div>
                {/* <!-- End Mobile Menu --> */}

                {/* <!-- Modal Search --> */}
                <div
                  class="modal fade"
                  id="search-modal"
                  tabindex="-1"
                  role="dialog"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <form>
                        <input type="text" placeholder="Search here..." />
                        <button>
                          <i class="fas fa-search"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                {/* <!-- Modal Search-end --> */}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- header-area-end --> */}

      {/* <!-- main-area --> */}
      <main>
        {/* <!-- breadcrumb-area --> */}
        <section
          class="breadcrumb-area breadcrumb-bg"
          data-background="/breadcrumb_bg.jpg"
        >
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="breadcrumb-content">
                  <h2 class="title">Contact Us</h2>
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li class="breadcrumb-item active" aria-current="page">
                        Contact
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- breadcrumb-area-end --> */}

        {/* <!-- contact-area --> */}
        <section
          class="contact-area contact-bg"
          data-background="/contact_bg.jpg"
        >
          <div class="container">
            <div class="row">
              <div class="col-xl-8 col-lg-7">
                <div class="contact-form-wrap">
                  <div class="widget-title mb-50">
                    <h5 class="title">Contact Form</h5>
                  </div>
                  <div class="contact-form">
                    <form action="#">
                      <div class="row">
                        <div class="col-md-6">
                          <input type="text" placeholder="You Name *" />
                        </div>
                        <div class="col-md-6">
                          <input type="email" placeholder="You  Email *" />
                        </div>
                      </div>
                      <input type="text" placeholder="Subject *" />
                      <textarea
                        name="message"
                        placeholder="Type Your Message..."
                      ></textarea>
                      <button class="btn">Send Message</button>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-5">
                <div class="widget-title mb-50">
                  <h5 class="title">Information</h5>
                </div>
                <div class="contact-info-wrap">
                  <p>
                    <span>Find solutions :</span> to common problems, or get
                    help from a support agent industry's standard .
                  </p>
                  <div class="contact-info-list">
                    <ul>
                      <li>
                        <div class="icon">
                          <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <p>
                          <span>Address :</span> W38 Park Road New York
                        </p>
                      </li>
                      <li>
                        <div class="icon">
                          <i class="fas fa-phone-alt"></i>
                        </div>
                        <p>
                          <span>Phone :</span> (09) 123 854 365
                        </p>
                      </li>
                      <li>
                        <div class="icon">
                          <i class="fas fa-envelope"></i>
                        </div>
                        <p>
                          <span>Email :</span> support@movflx.com
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- contact-area-end --> */}

        {/* <!-- map --> */}
        <div id="map" data-background="/map.jpg"></div>
        {/* <!-- map-end --> */}

        {/* <!-- newsletter-area --> */}
        <section
          class="newsletter-area newsletter-bg"
          data-background="/newsletter_bg.jpg"
        >
          <div class="container">
            <div class="newsletter-inner-wrap">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <div class="newsletter-content">
                    <h4>Trial Start First 30 Days.</h4>
                    <p>
                      Enter your email to create or restart your membership.
                    </p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <form action="#" class="newsletter-form">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                    />
                    <button class="btn">get started</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- newsletter-area-end --> */}
      </main>
      {/* <!-- main-area-end --> */}

      {/* <!-- footer-area --> */}
      <footer>
        <div class="footer-top-wrap">
          <div class="container">
            <div class="footer-menu-wrap">
              <div class="row align-items-center">
                <div class="col-lg-3">
                  <div class="footer-logo">
                    <a href="/">
                      <img src="/logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="col-lg-9">
                  <div class="footer-menu">
                    <nav>
                      <ul class="navigation">
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="/">Movie</a>
                        </li>
                        <li>
                          <a href="/">tv show</a>
                        </li>
                        <li>
                          <a href="/">pages</a>
                        </li>
                        <li>
                          <a href="pricing">Pricing</a>
                        </li>
                      </ul>
                      <div class="footer-search">
                        <form action="#">
                          <input
                            type="text"
                            placeholder="Find Favorite Movie"
                          />
                          <button>
                            <i class="fas fa-search"></i>
                          </button>
                        </form>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer-quick-link-wrap">
              <div class="row align-items-center">
                <div class="col-md-7">
                  <div class="quick-link-list">
                    <ul>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                      <li>
                        <a href="#">Help Center</a>
                      </li>
                      <li>
                        <a href="#">Terms of Use</a>
                      </li>
                      <li>
                        <a href="#">Privacy</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="footer-social">
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-pinterest-p"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-wrap">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="copyright-text">
                  <p>
                    Copyright &copy; 2021. All Rights Reserved By{" "}
                    <a href="/">Movflx</a>
                  </p>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="payment-method-img text-center text-md-right">
                  <img src="/card_img.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- footer-area-end --> */}

      {/* <!-- JS here --> */}
      <script src="js/vendor/jquery-3.6.0.min.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/isotope.pkgd.min.js"></script>
      <script src="js/imagesloaded.pkgd.min.js"></script>
      <script src="js/jquery.magnific-popup.min.js"></script>
      <script src="js/owl.carousel.min.js"></script>
      <script src="js/jquery.odometer.min.js"></script>
      <script src="js/jquery.appear.js"></script>
      <script src="js/slick.min.js"></script>
      <script src="js/ajax-form.js"></script>
      <script src="js/wow.min.js"></script>
      <script src="js/aos.js"></script>
      <script src="js/plugins.js"></script>
      <script src="js/main.js"></script>
    </div>
  );
};

export default contact;
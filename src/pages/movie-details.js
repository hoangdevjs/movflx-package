const movieDetail = () => {
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
                        <li class="active menu-item-has-children">
                          <a href="#">Movie</a>
                          <ul class="submenu">
                            <li>
                              <a href="movie">Movie</a>
                            </li>
                            <li class="active">
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
                        <li>
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
        {/* 
        <!-- movie-details-area --> */}
        <section
          class="movie-details-area"
          data-background="/movie_details_bg.jpg"
        >
          <div class="container">
            <div class="row align-items-center position-relative">
              <div class="col-xl-3 col-lg-4">
                <div class="movie-details-img">
                  <img src="/movie_details_img.jpg" alt="" />
                  <a
                    href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                    class="popup-video"
                  >
                    <img src="/play_icon.png" alt="" />
                  </a>
                </div>
              </div>
              <div class="col-xl-6 col-lg-8">
                <div class="movie-details-content">
                  <h5>New Episodes</h5>
                  <h2>
                    The Easy <span>Reach</span>
                  </h2>
                  <div class="banner-meta">
                    <ul>
                      <li class="quality">
                        <span>Pg 18</span>
                        <span>hd</span>
                      </li>
                      <li class="category">
                        <a href="#">Romance,</a>
                        <a href="#">Drama</a>
                      </li>
                      <li class="release-time">
                        <span>
                          <i class="far fa-calendar-alt"></i> 2021
                        </span>
                        <span>
                          <i class="far fa-clock"></i> 128 min
                        </span>
                      </li>
                    </ul>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consecetur adipiscing elseddo
                    eiusmod tempor.There are many variations of passages of
                    lorem Ipsum available, but the majority have suffered
                    alteration in some injected humour.
                  </p>
                  <div class="movie-details-prime">
                    <ul>
                      <li class="share">
                        <a href="#">
                          <i class="fas fa-share-alt"></i> Share
                        </a>
                      </li>
                      <li class="streaming">
                        <h6>Prime Video</h6>
                        <span>Streaming Channels</span>
                      </li>
                      <li class="watch">
                        <a
                          href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                          class="btn popup-video"
                        >
                          <i class="fas fa-play"></i> Watch Now
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="movie-details-btn">
                <a
                  href="/movie_details_img.jpg"
                  class="download-btn"
                  download=""
                >
                  Download <img src="/download.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- movie-details-area-end --> */}

        {/* <!-- episode-area --> */}
        <section
          class="episode-area episode-bg"
          data-background="/episode_bg.jpg"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <div class="movie-episode-wrap">
                  <div class="episode-top-wrap">
                    <div class="section-title">
                      <span class="sub-title">ONLINE STREAMING</span>
                      <h2 class="title">Watch Full Episode</h2>
                    </div>
                    <div class="total-views-count">
                      <p>
                        2.7 million <i class="far fa-eye"></i>
                      </p>
                    </div>
                  </div>
                  <div class="episode-watch-wrap">
                    <div class="accordion" id="accordionExample">
                      <div class="card">
                        <div class="card-header" id="headingOne">
                          <button
                            class="btn-block text-left"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <span class="season">Season 2</span>
                            <span class="video-count">5 Full Episodes</span>
                          </button>
                        </div>
                        <div
                          id="collapseOne"
                          class="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordionExample"
                        >
                          <div class="card-body">
                            <ul>
                              <li>
                                <a
                                  href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                                  class="popup-video"
                                >
                                  <i class="fas fa-play"></i> Episode 1 - The
                                  World Is Purple
                                </a>{" "}
                                <span class="duration">
                                  <i class="far fa-clock"></i> 28 Min
                                </span>
                              </li>
                              <li>
                                <a
                                  href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                                  class="popup-video"
                                >
                                  <i class="fas fa-play"></i> Episode 2 - Meaner
                                  Than Evil
                                </a>{" "}
                                <span class="duration">
                                  <i class="far fa-clock"></i> 28 Min
                                </span>
                              </li>
                              <li>
                                <a
                                  href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                                  class="popup-video"
                                >
                                  <i class="fas fa-play"></i> Episode 3 - I
                                  Killed a Man Today
                                </a>{" "}
                                <span class="duration">
                                  <i class="far fa-clock"></i> 28 Min
                                </span>
                              </li>
                              <li>
                                <a
                                  href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                                  class="popup-video"
                                >
                                  <i class="fas fa-play"></i> Episode 4 -
                                  Cowboys and Dreamers
                                </a>{" "}
                                <span class="duration">
                                  <i class="far fa-clock"></i> 28 Min
                                </span>
                              </li>
                              <li>
                                <a
                                  href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                                  class="popup-video"
                                >
                                  <i class="fas fa-play"></i> Episode 5 -
                                  Freight Trains and Monsters
                                </a>{" "}
                                <span class="duration">
                                  <i class="far fa-clock"></i> 28 Min
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header" id="headingTwo">
                          <button
                            class="btn-block text-left collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <span class="season">Season 1</span>
                            <span class="video-count">5 Full Episodes</span>
                          </button>
                        </div>
                        <div
                          id="collapseTwo"
                          class="collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#accordionExample"
                        >
                          <div class="card-body">
                            <ul>
                              <li>
                                <a
                                  href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                                  class="popup-video"
                                >
                                  <i class="fas fa-play"></i> Episode 1 - The
                                  World Is Purple
                                </a>{" "}
                                <span class="duration">
                                  <i class="far fa-clock"></i> 28 Min
                                </span>
                              </li>
                              <li>
                                <a
                                  href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                                  class="popup-video"
                                >
                                  <i class="fas fa-play"></i> Episode 2 - Meaner
                                  Than Evil
                                </a>{" "}
                                <span class="duration">
                                  <i class="far fa-clock"></i> 28 Min
                                </span>
                              </li>
                              <li>
                                <a
                                  href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                                  class="popup-video"
                                >
                                  <i class="fas fa-play"></i> Episode 3 - I
                                  Killed a Man Today
                                </a>{" "}
                                <span class="duration">
                                  <i class="far fa-clock"></i> 28 Min
                                </span>
                              </li>
                              <li>
                                <a
                                  href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                                  class="popup-video"
                                >
                                  <i class="fas fa-play"></i> Episode 4 -
                                  Cowboys and Dreamers
                                </a>{" "}
                                <span class="duration">
                                  <i class="far fa-clock"></i> 28 Min
                                </span>
                              </li>
                              <li>
                                <a
                                  href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                                  class="popup-video"
                                >
                                  <i class="fas fa-play"></i> Episode 5 -
                                  Freight Trains and Monsters
                                </a>{" "}
                                <span class="duration">
                                  <i class="far fa-clock"></i> 28 Min
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="episode-img">
                  <img src="/episode_img.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="movie-history-wrap">
                  <h3 class="title">
                    About <span>History</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consecetur adipiscing elseddo
                    eiusmod tempor.There are many variations of passages of
                    lorem Ipsum available, but the majority have suffered
                    alteration in some injected humour.There are many variations
                    of passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injected humour, or
                    randomised words which don't look even slightly believable.
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything errassing hidden in the
                    middle of text. All the Lorem Ipsum generators on the
                    Internet tend to repeat predefined chunks as necessary,
                    making this the first true generator on the Internet. It
                    uses a dictionary of over 200 Latin words, combined with a
                    handful
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- episode-area-end --> */}

        {/* <!-- tv-series-area --> */}
        <section
          class="tv-series-area tv-series-bg"
          data-background="/tv_series_bg02.jpg"
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="section-title text-center mb-50">
                  <span class="sub-title">Best TV Series</span>
                  <h2 class="title">World Best TV Series</h2>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="movie-item mb-50">
                  <div class="movie-poster">
                    <a href="movie-details">
                      <img src="/ucm_poster09.jpg" alt="" />
                    </a>
                  </div>
                  <div class="movie-content">
                    <div class="top">
                      <h5 class="title">
                        <a href="movie-details">Women's Day</a>
                      </h5>
                      <span class="date">2021</span>
                    </div>
                    <div class="bottom">
                      <ul>
                        <li>
                          <span class="quality">hd</span>
                        </li>
                        <li>
                          <span class="duration">
                            <i class="far fa-clock"></i> 128 min
                          </span>
                          <span class="rating">
                            <i class="fas fa-thumbs-up"></i> 3.5
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="movie-item mb-50">
                  <div class="movie-poster">
                    <a href="movie-details">
                      <img src="/ucm_poster10.jpg" alt="" />
                    </a>
                  </div>
                  <div class="movie-content">
                    <div class="top">
                      <h5 class="title">
                        <a href="movie-details">The Perfect Match</a>
                      </h5>
                      <span class="date">2021</span>
                    </div>
                    <div class="bottom">
                      <ul>
                        <li>
                          <span class="quality">4k</span>
                        </li>
                        <li>
                          <span class="duration">
                            <i class="far fa-clock"></i> 128 min
                          </span>
                          <span class="rating">
                            <i class="fas fa-thumbs-up"></i> 3.5
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="movie-item mb-50">
                  <div class="movie-poster">
                    <a href="movie-details">
                      <img src="/ucm_poster03.jpg" alt="" />
                    </a>
                  </div>
                  <div class="movie-content">
                    <div class="top">
                      <h5 class="title">
                        <a href="movie-details">The Dog Woof</a>
                      </h5>
                      <span class="date">2021</span>
                    </div>
                    <div class="bottom">
                      <ul>
                        <li>
                          <span class="quality">hd</span>
                        </li>
                        <li>
                          <span class="duration">
                            <i class="far fa-clock"></i> 128 min
                          </span>
                          <span class="rating">
                            <i class="fas fa-thumbs-up"></i> 3.5
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="movie-item mb-50">
                  <div class="movie-poster">
                    <a href="movie-details">
                      <img src="/ucm_poster04.jpg" alt="" />
                    </a>
                  </div>
                  <div class="movie-content">
                    <div class="top">
                      <h5 class="title">
                        <a href="movie-details">The Easy Reach</a>
                      </h5>
                      <span class="date">2021</span>
                    </div>
                    <div class="bottom">
                      <ul>
                        <li>
                          <span class="quality">hd</span>
                        </li>
                        <li>
                          <span class="duration">
                            <i class="far fa-clock"></i> 128 min
                          </span>
                          <span class="rating">
                            <i class="fas fa-thumbs-up"></i> 3.5
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- tv-series-area-end --> */}

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
    </div>
  );
};

export default movieDetail;

const index2 = () => {
  return (
    <div>
      {/* <!-- preloader --> */}
      <div id="preloader">
        <div id="loading-center">
          <div id="loading-center-absolute">
            <img src="/preloader.svg" alt="" />
          </div>
        </div>
      </div>
      {/* <!-- preloader-end --> */}

      {/* <!-- Scroll-top --> */}
      <button class="scroll-top scroll-to-target" data-target="html">
        <i class="fas fa-angle-up"></i>
      </button>
      {/* <!-- Scroll-top-end--> */}

      {/* <!-- header-area --> */}
      <header class="header-style-two">
        <div class="header-top-wrap">
          <div class="container custom-container">
            <div class="row align-items-center">
              <div class="col-md-6 d-none d-md-block">
                <div class="header-top-subs">
                  <p>
                    Movflx One Month Free <span>Subscription !</span>
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="header-top-link">
                  <ul class="quick-link">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">FAQS</a>
                    </li>
                  </ul>
                  <ul class="header-social">
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
                        <i class="fab fa-vimeo-v"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="sticky-header" class="menu-area">
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
                        <li class="active menu-item-has-children">
                          <a href="#">Home</a>
                          <ul class="submenu">
                            <li>
                              <a href="/">Home One</a>
                            </li>
                            <li class="active">
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
                        <li>
                          <a href="contact">contacts</a>
                        </li>
                      </ul>
                    </div>
                    <div class="header-action d-none d-md-block">
                      <ul>
                        <li class="d-none d-xl-block">
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

                {/* <!-- Mobile Menu  --> */}
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
              </div>
              1
            </div>
          </div>
        </div>
      </header>
      {/* <!-- header-area-end --> */}

      {/* <!-- main-area --> */}
      <main>
        {/* <!-- slider-area --> */}
        <section
          class="slider-area slider-bg"
          data-background="/s_slider_bg.jpg"
        >
          <div class="slider-active">
            <div class="slider-item">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-lg-6 order-0 order-lg-2">
                    <div
                      class="slider-img text-center text-lg-right"
                      data-animation="fadeInRight"
                      data-delay="1s"
                    >
                      <img src="/slider_img01.jpg" alt="" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="banner-content">
                      <h6
                        class="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".2s"
                      >
                        Movflx
                      </h6>
                      <h2
                        class="title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Unlimited <span>Movie</span>, TV Shows, & More.
                      </h2>
                      <div
                        class="banner-meta"
                        data-animation="fadeInUp"
                        data-delay=".6s"
                      >
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
                      <a
                        href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                        class="banner-btn btn popup-video"
                        data-animation="fadeInUp"
                        data-delay=".8s"
                      >
                        <i class="fas fa-play"></i> Watch Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slider-item">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-lg-6 order-0 order-lg-2">
                    <div
                      class="slider-img text-center text-lg-right"
                      data-animation="fadeInRight"
                      data-delay="1s"
                    >
                      <img src="/slider_img02.jpg" alt="" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="banner-content">
                      <h6
                        class="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".2s"
                      >
                        Movflx
                      </h6>
                      <h2
                        class="title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Unlimited <span>Movie</span>, TV Shows, & More.
                      </h2>
                      <div
                        class="banner-meta"
                        data-animation="fadeInUp"
                        data-delay=".6s"
                      >
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
                              <i class="far fa-clock"></i> 120 min
                            </span>
                          </li>
                        </ul>
                      </div>
                      <a
                        href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                        class="banner-btn btn popup-video"
                        data-animation="fadeInUp"
                        data-delay=".8s"
                      >
                        <i class="fas fa-play"></i> Watch Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slider-item">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-lg-6 order-0 order-lg-2">
                    <div
                      class="slider-img text-center text-lg-right"
                      data-animation="fadeInRight"
                      data-delay="1s"
                    >
                      <img src="/slider_img03.jpg" alt="" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="banner-content">
                      <h6
                        class="sub-title"
                        data-animation="fadeInUp"
                        data-delay=".2s"
                      >
                        Movflx
                      </h6>
                      <h2
                        class="title"
                        data-animation="fadeInUp"
                        data-delay=".4s"
                      >
                        Unlimited <span>Movie</span>, TV Shows, & More.
                      </h2>
                      <div
                        class="banner-meta"
                        data-animation="fadeInUp"
                        data-delay=".6s"
                      >
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
                              <i class="far fa-clock"></i> 120 min
                            </span>
                          </li>
                        </ul>
                      </div>
                      <a
                        href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                        class="banner-btn btn popup-video"
                        data-animation="fadeInUp"
                        data-delay=".8s"
                      >
                        <i class="fas fa-play"></i> Watch Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- slider-area-end --> */}

        {/* <!-- up-coming-movie-area --> */}
        <section class="ucm-area ucm-bg2" data-background="/ucm_bg02.jpg">
          <div class="container">
            <div class="row align-items-end mb-55">
              <div class="col-lg-6">
                <div class="section-title title-style-three text-center text-lg-left">
                  <span class="sub-title">ONLINE STREAMING</span>
                  <h2 class="title">New Release Movies</h2>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="ucm-nav-wrap">
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link active"
                        id="tvShow-tab"
                        data-toggle="tab"
                        href="#tvShow"
                        role="tab"
                        aria-controls="tvShow"
                        aria-selected="true"
                      >
                        TV Shows
                      </a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link"
                        id="movies-tab"
                        data-toggle="tab"
                        href="#movies"
                        role="tab"
                        aria-controls="movies"
                        aria-selected="false"
                      >
                        Movies
                      </a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link"
                        id="anime-tab"
                        data-toggle="tab"
                        href="#anime"
                        role="tab"
                        aria-controls="anime"
                        aria-selected="false"
                      >
                        Anime
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="tvShow"
                role="tabpanel"
                aria-labelledby="tvShow-tab"
              >
                <div class="ucm-active-two owl-carousel">
                  <div class="movie-item movie-item-two mb-30">
                    <div class="movie-poster">
                      <a href="movie-details">
                        <img src="/s_ucm_poster01.jpg" alt="" />
                      </a>
                    </div>
                    <div class="movie-content">
                      <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <h5 class="title">
                        <a href="movie-details">Message in a Bottle</a>
                      </h5>
                      <span class="rel">Adventure</span>
                      <div class="movie-content-bottom">
                        <ul>
                          <li class="tag">
                            <a href="#">HD</a>
                            <a href="#">English</a>
                          </li>
                          <li>
                            <span class="like">
                              <i class="fas fa-thumbs-up"></i> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="movie-item movie-item-two mb-30">
                    <div class="movie-poster">
                      <a href="movie-details">
                        <img src="/s_ucm_poster02.jpg" alt="" />
                      </a>
                    </div>
                    <div class="movie-content">
                      <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <h5 class="title">
                        <a href="movie-details">The Parkar Legend</a>
                      </h5>
                      <span class="rel">Adventure</span>
                      <div class="movie-content-bottom">
                        <ul>
                          <li class="tag">
                            <a href="#">HD</a>
                            <a href="#">English</a>
                          </li>
                          <li>
                            <span class="like">
                              <i class="fas fa-thumbs-up"></i> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="movie-item movie-item-two mb-30">
                    <div class="movie-poster">
                      <a href="movie-details">
                        <img src="/s_ucm_poster03.jpg" alt="" />
                      </a>
                    </div>
                    <div class="movie-content">
                      <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <h5 class="title">
                        <a href="movie-details">The Tonoy 88 Bottle</a>
                      </h5>
                      <span class="rel">Adventure</span>
                      <div class="movie-content-bottom">
                        <ul>
                          <li class="tag">
                            <a href="#">HD</a>
                            <a href="#">English</a>
                          </li>
                          <li>
                            <span class="like">
                              <i class="fas fa-thumbs-up"></i> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="movie-item movie-item-two mb-30">
                    <div class="movie-poster">
                      <a href="movie-details">
                        <img src="/s_ucm_poster04.jpg" alt="" />
                      </a>
                    </div>
                    <div class="movie-content">
                      <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <h5 class="title">
                        <a href="movie-details">The Ackle Bottle</a>
                      </h5>
                      <span class="rel">Adventure</span>
                      <div class="movie-content-bottom">
                        <ul>
                          <li class="tag">
                            <a href="#">HD</a>
                            <a href="#">English</a>
                          </li>
                          <li>
                            <span class="like">
                              <i class="fas fa-thumbs-up"></i> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="movie-item movie-item-two mb-30">
                    <div class="movie-poster">
                      <a href="movie-details">
                        <img src="/s_ucm_poster05.jpg" alt="" />
                      </a>
                    </div>
                    <div class="movie-content">
                      <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <h5 class="title">
                        <a href="movie-details">Message in a Bottle</a>
                      </h5>
                      <span class="rel">Adventure</span>
                      <div class="movie-content-bottom">
                        <ul>
                          <li class="tag">
                            <a href="#">HD</a>
                            <a href="#">English</a>
                          </li>
                          <li>
                            <span class="like">
                              <i class="fas fa-thumbs-up"></i> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="movie-item movie-item-two mb-30">
                    <div class="movie-poster">
                      <a href="movie-details">
                        <img src="/s_ucm_poster06.jpg" alt="" />
                      </a>
                    </div>
                    <div class="movie-content">
                      <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <h5 class="title">
                        <a href="movie-details">The Dog Woof</a>
                      </h5>
                      <span class="rel">Adventure</span>
                      <div class="movie-content-bottom">
                        <ul>
                          <li class="tag">
                            <a href="#">HD</a>
                            <a href="#">English</a>
                          </li>
                          <li>
                            <span class="like">
                              <i class="fas fa-thumbs-up"></i> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="movies"
                role="tabpanel"
                aria-labelledby="movies-tab"
              >
                <div class="ucm-active-two owl-carousel">
                  <div class="movie-item movie-item-two mb-30">
                    <div class="movie-poster">
                      <a href="movie-details">
                        <img src="/s_ucm_poster06.jpg" alt="" />
                      </a>
                    </div>
                    <div class="movie-content">
                      <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <h5 class="title">
                        <a href="movie-details">Message in a Bottle</a>
                      </h5>
                      <span class="rel">Adventure</span>
                      <div class="movie-content-bottom">
                        <ul>
                          <li class="tag">
                            <a href="#">HD</a>
                            <a href="#">English</a>
                          </li>
                          <li>
                            <span class="like">
                              <i class="fas fa-thumbs-up"></i> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="movie-item movie-item-two mb-30">
                    <div class="movie-poster">
                      <a href="movie-details">
                        <img src="/s_ucm_poster07.jpg" alt="" />
                      </a>
                    </div>
                    <div class="movie-content">
                      <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <h5 class="title">
                        <a href="movie-details">The Parkar Legend</a>
                      </h5>
                      <span class="rel">Adventure</span>
                      <div class="movie-content-bottom">
                        <ul>
                          <li class="tag">
                            <a href="#">HD</a>
                            <a href="#">English</a>
                          </li>
                          <li>
                            <span class="like">
                              <i class="fas fa-thumbs-up"></i> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="movie-item movie-item-two mb-30">
                    <div class="movie-poster">
                      <a href="movie-details">
                        <img src="/s_ucm_poster08.jpg" alt="" />
                      </a>
                    </div>
                    <div class="movie-content">
                      <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <h5 class="title">
                        <a href="movie-details">The Tonoy 88 Bottle</a>
                      </h5>
                      <span class="rel">Adventure</span>
                      <div class="movie-content-bottom">
                        <ul>
                          <li class="tag">
                            <a href="#">HD</a>
                            <a href="#">English</a>
                          </li>
                          <li>
                            <span class="like">
                              <i class="fas fa-thumbs-up"></i> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="movie-item movie-item-two mb-30">
                    <div class="movie-poster">
                      <a href="movie-details">
                        <img src="/s_ucm_poster09.jpg" alt="" />
                      </a>
                    </div>
                    <div class="movie-content">
                      <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <h5 class="title">
                        <a href="movie-details">The Ackle Bottle</a>
                      </h5>
                      <span class="rel">Adventure</span>
                      <div class="movie-content-bottom">
                        <ul>
                          <li class="tag">
                            <a href="#">HD</a>
                            <a href="#">English</a>
                          </li>
                          <li>
                            <span class="like">
                              <i class="fas fa-thumbs-up"></i> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="movie-item movie-item-two mb-30">
                    <div class="movie-poster">
                      <a href="movie-details">
                        <img src="/s_ucm_poster02.jpg" alt="" />
                      </a>
                    </div>
                    <div class="movie-content">
                      <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <h5 class="title">
                        <a href="movie-details">Message in a Bottle</a>
                      </h5>
                      <span class="rel">Adventure</span>
                      <div class="movie-content-bottom">
                        <ul>
                          <li class="tag">
                            <a href="#">HD</a>
                            <a href="#">English</a>
                          </li>
                          <li>
                            <span class="like">
                              <i class="fas fa-thumbs-up"></i> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="movie-item movie-item-two mb-30">
                    <div class="movie-poster">
                      <a href="movie-details">
                        <img src="/s_ucm_poster01.jpg" alt="" />
                      </a>
                    </div>
                    <div class="movie-content">
                      <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <h5 class="title">
                        <a href="movie-details">The Dog Woof</a>
                      </h5>
                      <span class="rel">Adventure</span>
                      <div class="movie-content-bottom">
                        <ul>
                          <li class="tag">
                            <a href="#">HD</a>
                            <a href="#">English</a>
                          </li>
                          <li>
                            <span class="like">
                              <i class="fas fa-thumbs-up"></i> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="anime"
                role="tabpanel"
                aria-labelledby="anime-tab"
              >
                <div class="ucm-active-two owl-carousel">
                  <div class="movie-item movie-item-two mb-30">
                    <div class="movie-poster">
                      <a href="movie-details">
                        <img src="/s_ucm_poster01.jpg" alt="" />
                      </a>
                    </div>
                    <div class="movie-content">
                      <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <h5 class="title">
                        <a href="movie-details">Message in a Bottle</a>
                      </h5>
                      <span class="rel">Adventure</span>
                      <div class="movie-content-bottom">
                        <ul>
                          <li class="tag">
                            <a href="#">HD</a>
                            <a href="#">English</a>
                          </li>
                          <li>
                            <span class="like">
                              <i class="fas fa-thumbs-up"></i> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="movie-item movie-item-two mb-30">
                    <div class="movie-poster">
                      <a href="movie-details">
                        <img src="/s_ucm_poster02.jpg" alt="" />
                      </a>
                    </div>
                    <div class="movie-content">
                      <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <h5 class="title">
                        <a href="movie-details">The Parkar Legend</a>
                      </h5>
                      <span class="rel">Adventure</span>
                      <div class="movie-content-bottom">
                        <ul>
                          <li class="tag">
                            <a href="#">HD</a>
                            <a href="#">English</a>
                          </li>
                          <li>
                            <span class="like">
                              <i class="fas fa-thumbs-up"></i> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="movie-item movie-item-two mb-30">
                    <div class="movie-poster">
                      <a href="movie-details">
                        <img src="/s_ucm_poster03.jpg" alt="" />
                      </a>
                    </div>
                    <div class="movie-content">
                      <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <h5 class="title">
                        <a href="movie-details">The Tonoy 88 Bottle</a>
                      </h5>
                      <span class="rel">Adventure</span>
                      <div class="movie-content-bottom">
                        <ul>
                          <li class="tag">
                            <a href="#">HD</a>
                            <a href="#">English</a>
                          </li>
                          <li>
                            <span class="like">
                              <i class="fas fa-thumbs-up"></i> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="movie-item movie-item-two mb-30">
                    <div class="movie-poster">
                      <a href="movie-details">
                        <img src="/s_ucm_poster04.jpg" alt="" />
                      </a>
                    </div>
                    <div class="movie-content">
                      <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <h5 class="title">
                        <a href="movie-details">The Ackle Bottle</a>
                      </h5>
                      <span class="rel">Adventure</span>
                      <div class="movie-content-bottom">
                        <ul>
                          <li class="tag">
                            <a href="#">HD</a>
                            <a href="#">English</a>
                          </li>
                          <li>
                            <span class="like">
                              <i class="fas fa-thumbs-up"></i> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="movie-item movie-item-two mb-30">
                    <div class="movie-poster">
                      <a href="movie-details">
                        <img src="/s_ucm_poster05.jpg" alt="" />
                      </a>
                    </div>
                    <div class="movie-content">
                      <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <h5 class="title">
                        <a href="movie-details">Message in a Bottle</a>
                      </h5>
                      <span class="rel">Adventure</span>
                      <div class="movie-content-bottom">
                        <ul>
                          <li class="tag">
                            <a href="#">HD</a>
                            <a href="#">English</a>
                          </li>
                          <li>
                            <span class="like">
                              <i class="fas fa-thumbs-up"></i> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="movie-item movie-item-two mb-30">
                    <div class="movie-poster">
                      <a href="movie-details">
                        <img src="/s_ucm_poster06.jpg" alt="" />
                      </a>
                    </div>
                    <div class="movie-content">
                      <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <h5 class="title">
                        <a href="movie-details">The Dog Woof</a>
                      </h5>
                      <span class="rel">Adventure</span>
                      <div class="movie-content-bottom">
                        <ul>
                          <li class="tag">
                            <a href="#">HD</a>
                            <a href="#">English</a>
                          </li>
                          <li>
                            <span class="like">
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
          </div>
        </section>
        {/* <!-- up-coming-movie-area-end --> */}

        {/* <!-- gallery-area --> */}
        <div class="gallery-area position-relative">
          <div class="gallery-bg"></div>
          <div class="container-fluid p-0 fix">
            <div class="row gallery-active">
              <div class="col-12">
                <div class="gallery-item">
                  <img src="/gallery_01.jpg" alt="" />
                </div>
              </div>
              <div class="col-12">
                <div class="gallery-item">
                  <img src="/gallery_02.jpg" alt="" />
                </div>
              </div>
              <div class="col-12">
                <div class="gallery-item">
                  <img src="/gallery_03.jpg" alt="" />
                </div>
              </div>
              <div class="col-12">
                <div class="gallery-item">
                  <img src="/gallery_04.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="slider-nav"></div>
        </div>
        {/* <!-- gallery-area-end --> */}

        {/* <!-- services-area --> */}
        <section
          class="services-area services-bg-two"
          data-background="/services_bg02.jpg"
        >
          <div class="container">
            <div class="row justify-content-between align-items-center">
              <div class="col-lg-6 order-0 order-lg-2">
                <div class="services-img-wrap">
                  <img src="/services_img02.jpg" alt="" />
                  <a href="/services_img02.jpg" class="download-btn" download>
                    Download <img src="/download.svg" alt="" />
                  </a>
                </div>
              </div>
              <div class="col-xl-5 col-lg-6">
                <div class="services-content-wrap">
                  <div class="section-title mb-40">
                    <span class="sub-title">ONLINE STREAMING</span>
                    <h2 class="title">Download Your Shows Watch Offline.</h2>
                  </div>
                  <div class="services-list">
                    <ul>
                      <li>
                        <div class="icon">
                          <i class="flaticon-television"></i>
                        </div>
                        <div class="content">
                          <h5>Enjoy on Your TV.</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consecetur adipiscing
                            elit, sed do eiusmod tempor.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div class="icon">
                          <i class="flaticon-video-camera"></i>
                        </div>
                        <div class="content">
                          <h5>Watch Everywhere.</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consecetur adipiscing
                            elit, sed do eiusmod tempor.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- services-area-end --> */}

        {/* <!-- top-rated-movie --> */}
        <section
          class="top-rated-movie tr-movie-bg2"
          data-background="/tr_movies_bg.jpg"
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="section-title title-style-three text-center mb-70">
                  <span class="sub-title">top rated movies</span>
                  <h2 class="title">Top Online Shows Watch</h2>
                </div>
              </div>
            </div>
            <div class="row movie-item-row">
              <div class="custom-col-">
                <div class="movie-item movie-item-two">
                  <div class="movie-poster">
                    <img src="/s_ucm_poster01.jpg" alt="" />
                    <ul class="overlay-btn">
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                          class="popup-video btn"
                        >
                          Watch Now
                        </a>
                      </li>
                      <li>
                        <a href="movie-details" class="btn">
                          Details
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="movie-content">
                    <div class="rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <h5 class="title">
                      <a href="movie-details">Message in a Bottle</a>
                    </h5>
                    <span class="rel">Adventure</span>
                    <div class="movie-content-bottom">
                      <ul>
                        <li class="tag">
                          <a href="#">HD</a>
                          <a href="#">English</a>
                        </li>
                        <li>
                          <span class="like">
                            <i class="fas fa-thumbs-up"></i> 3.5
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="custom-col-">
                <div class="movie-item movie-item-two">
                  <div class="movie-poster">
                    <img src="/s_ucm_poster02.jpg" alt="" />
                    <ul class="overlay-btn">
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                          class="popup-video btn"
                        >
                          Watch Now
                        </a>
                      </li>
                      <li>
                        <a href="movie-details" class="btn">
                          Details
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="movie-content">
                    <div class="rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <h5 class="title">
                      <a href="movie-details">The Parkar Legend</a>
                    </h5>
                    <span class="rel">Adventure</span>
                    <div class="movie-content-bottom">
                      <ul>
                        <li class="tag">
                          <a href="#">HD</a>
                          <a href="#">English</a>
                        </li>
                        <li>
                          <span class="like">
                            <i class="fas fa-thumbs-up"></i> 3.5
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="custom-col-">
                <div class="movie-item movie-item-two">
                  <div class="movie-poster">
                    <img src="/s_ucm_poster03.jpg" alt="" />
                    <ul class="overlay-btn">
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                          class="popup-video btn"
                        >
                          Watch Now
                        </a>
                      </li>
                      <li>
                        <a href="movie-details" class="btn">
                          Details
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="movie-content">
                    <div class="rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <h5 class="title">
                      <a href="movie-details">The Ackle Bottle</a>
                    </h5>
                    <span class="rel">Adventure</span>
                    <div class="movie-content-bottom">
                      <ul>
                        <li class="tag">
                          <a href="#">HD</a>
                          <a href="#">English</a>
                        </li>
                        <li>
                          <span class="like">
                            <i class="fas fa-thumbs-up"></i> 3.5
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="custom-col-">
                <div class="movie-item movie-item-two">
                  <div class="movie-poster">
                    <img src="/s_ucm_poster04.jpg" alt="" />
                    <ul class="overlay-btn">
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                          class="popup-video btn"
                        >
                          Watch Now
                        </a>
                      </li>
                      <li>
                        <a href="movie-details" class="btn">
                          Details
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="movie-content">
                    <div class="rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <h5 class="title">
                      <a href="movie-details">The Speed 2</a>
                    </h5>
                    <span class="rel">Adventure</span>
                    <div class="movie-content-bottom">
                      <ul>
                        <li class="tag">
                          <a href="#">HD</a>
                          <a href="#">English</a>
                        </li>
                        <li>
                          <span class="like">
                            <i class="fas fa-thumbs-up"></i> 3.5
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="custom-col-">
                <div class="movie-item movie-item-two">
                  <div class="movie-poster">
                    <img src="/s_ucm_poster05.jpg" alt="" />
                    <ul class="overlay-btn">
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                          class="popup-video btn"
                        >
                          Watch Now
                        </a>
                      </li>
                      <li>
                        <a href="movie-details" class="btn">
                          Details
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="movie-content">
                    <div class="rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <h5 class="title">
                      <a href="movie-details">The Legend Emo</a>
                    </h5>
                    <span class="rel">Adventure</span>
                    <div class="movie-content-bottom">
                      <ul>
                        <li class="tag">
                          <a href="#">HD</a>
                          <a href="#">English</a>
                        </li>
                        <li>
                          <span class="like">
                            <i class="fas fa-thumbs-up"></i> 3.5
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="custom-col-">
                <div class="movie-item movie-item-two">
                  <div class="movie-poster">
                    <img src="/s_ucm_poster06.jpg" alt="" />
                    <ul class="overlay-btn">
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                          class="popup-video btn"
                        >
                          Watch Now
                        </a>
                      </li>
                      <li>
                        <a href="movie-details" class="btn">
                          Details
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="movie-content">
                    <div class="rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <h5 class="title">
                      <a href="movie-details">Envato Bottle 88</a>
                    </h5>
                    <span class="rel">Adventure</span>
                    <div class="movie-content-bottom">
                      <ul>
                        <li class="tag">
                          <a href="#">HD</a>
                          <a href="#">English</a>
                        </li>
                        <li>
                          <span class="like">
                            <i class="fas fa-thumbs-up"></i> 3.5
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="custom-col-">
                <div class="movie-item movie-item-two">
                  <div class="movie-poster">
                    <img src="/s_ucm_poster07.jpg" alt="" />
                    <ul class="overlay-btn">
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                          class="popup-video btn"
                        >
                          Watch Now
                        </a>
                      </li>
                      <li>
                        <a href="movie-details" class="btn">
                          Details
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="movie-content">
                    <div class="rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <h5 class="title">
                      <a href="movie-details">Message Bottle II</a>
                    </h5>
                    <span class="rel">Adventure</span>
                    <div class="movie-content-bottom">
                      <ul>
                        <li class="tag">
                          <a href="#">HD</a>
                          <a href="#">English</a>
                        </li>
                        <li>
                          <span class="like">
                            <i class="fas fa-thumbs-up"></i> 3.5
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="custom-col-">
                <div class="movie-item movie-item-two">
                  <div class="movie-poster">
                    <img src="/s_ucm_poster08.jpg" alt="" />
                    <ul class="overlay-btn">
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                          class="popup-video btn"
                        >
                          Watch Now
                        </a>
                      </li>
                      <li>
                        <a href="movie-details" class="btn">
                          Details
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="movie-content">
                    <div class="rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <h5 class="title">
                      <a href="movie-details">The Message B.</a>
                    </h5>
                    <span class="rel">Adventure</span>
                    <div class="movie-content-bottom">
                      <ul>
                        <li class="tag">
                          <a href="#">HD</a>
                          <a href="#">English</a>
                        </li>
                        <li>
                          <span class="like">
                            <i class="fas fa-thumbs-up"></i> 3.5
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="custom-col-">
                <div class="movie-item movie-item-two">
                  <div class="movie-poster">
                    <img src="/s_ucm_poster09.jpg" alt="" />
                    <ul class="overlay-btn">
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                          class="popup-video btn"
                        >
                          Watch Now
                        </a>
                      </li>
                      <li>
                        <a href="movie-details" class="btn">
                          Details
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="movie-content">
                    <div class="rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <h5 class="title">
                      <a href="movie-details">Tiger World Q.</a>
                    </h5>
                    <span class="rel">Adventure</span>
                    <div class="movie-content-bottom">
                      <ul>
                        <li class="tag">
                          <a href="#">HD</a>
                          <a href="#">Bluray</a>
                        </li>
                        <li>
                          <span class="like">
                            <i class="fas fa-thumbs-up"></i> 3.5
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="custom-col-">
                <div class="movie-item movie-item-two">
                  <div class="movie-poster">
                    <img src="/s_ucm_poster10.jpg" alt="" />
                    <ul class="overlay-btn">
                      <li>
                        <a
                          href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                          class="popup-video btn"
                        >
                          Watch Now
                        </a>
                      </li>
                      <li>
                        <a href="movie-details" class="btn">
                          Details
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="movie-content">
                    <div class="rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <h5 class="title">
                      <a href="movie-details">Avenger World IV</a>
                    </h5>
                    <span class="rel">Adventure</span>
                    <div class="movie-content-bottom">
                      <ul>
                        <li class="tag">
                          <a href="#">HD</a>
                          <a href="#">English</a>
                        </li>
                        <li>
                          <span class="like">
                            <i class="fas fa-thumbs-up"></i> 3.5
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tr-movie-btn text-center mt-25">
              <a href="#" class="btn">
                BROWSE ALL MOVIES
              </a>
            </div>
          </div>
        </section>
        {/* <!-- top-rated-movie-end --> */}

        {/* <!-- pricing-area --> */}
        <section
          class="pricing-area pricing-bg"
          data-background="/pricing_bg.jpg"
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="section-title title-style-three text-center mb-70">
                  <span class="sub-title">our pricing plans</span>
                  <h2 class="title">Our Pricing Strategy</h2>
                </div>
              </div>
            </div>
            <div class="pricing-box-wrap">
              <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-8">
                  <div class="pricing-box-item mb-30">
                    <div class="pricing-top">
                      <h6>premium</h6>
                      <div class="price">
                        <h3>$7.99</h3>
                        <span>Monthly</span>
                      </div>
                    </div>
                    <div class="pricing-list">
                      <ul>
                        <li class="quality">
                          <i class="fas fa-check"></i> Video quality{" "}
                          <span>Good</span>
                        </li>
                        <li>
                          <i class="fas fa-check"></i> Resolution{" "}
                          <span>480p</span>
                        </li>
                        <li>
                          <i class="fas fa-check"></i> Screens you can watch{" "}
                          <span>1</span>
                        </li>
                        <li>
                          <i class="fas fa-check"></i> Cancel anytime
                        </li>
                      </ul>
                    </div>
                    <div class="pricing-btn">
                      <a href="#" class="btn">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-8">
                  <div class="pricing-box-item active mb-30">
                    <div class="pricing-top">
                      <h6>standard</h6>
                      <div class="price">
                        <h3>$9.99</h3>
                        <span>Monthly</span>
                      </div>
                    </div>
                    <div class="pricing-list">
                      <ul>
                        <li class="quality">
                          <i class="fas fa-check"></i> Video quality{" "}
                          <span>Better</span>
                        </li>
                        <li>
                          <i class="fas fa-check"></i> Resolution{" "}
                          <span>1080p</span>
                        </li>
                        <li>
                          <i class="fas fa-check"></i> Screens you can watch{" "}
                          <span>2</span>
                        </li>
                        <li>
                          <i class="fas fa-check"></i> Cancel anytime
                        </li>
                      </ul>
                    </div>
                    <div class="pricing-btn">
                      <a href="#" class="btn">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-8">
                  <div class="pricing-box-item mb-30">
                    <div class="pricing-top">
                      <h6>premium</h6>
                      <div class="price">
                        <h3>$11.99</h3>
                        <span>Monthly</span>
                      </div>
                    </div>
                    <div class="pricing-list">
                      <ul>
                        <li class="quality">
                          <i class="fas fa-check"></i> Video quality{" "}
                          <span>Best</span>
                        </li>
                        <li>
                          <i class="fas fa-check"></i> Resolution{" "}
                          <span>4K+HDR</span>
                        </li>
                        <li>
                          <i class="fas fa-check"></i> Screens you can watch{" "}
                          <span>4</span>
                        </li>
                        <li>
                          <i class="fas fa-check"></i> Cancel anytime
                        </li>
                      </ul>
                    </div>
                    <div class="pricing-btn">
                      <a href="#" class="btn">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- pricing-area-end --> */}
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

export default index2;

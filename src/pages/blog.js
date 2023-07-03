const blog = () => {
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
                        <li class="active menu-item-has-children">
                          <a href="#">blog</a>
                          <ul class="submenu">
                            <li class="active">
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
          data-background="/bg/breadcrumb_bg.jpg"
        >
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="breadcrumb-content">
                  <h2 class="title">News Update</h2>
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li class="breadcrumb-item active" aria-current="page">
                        Blog Page
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- breadcrumb-area-end --> */}

        {/* <!-- blog-area --> */}
        <section class="blog-area blog-bg" data-background="/blog_bg.jpg">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <div class="blog-post-item">
                  <div class="blog-post-thumb">
                    <a href="blog-details">
                      <img src="/blog_thumb01.jpg" alt="" />
                    </a>
                  </div>
                  <div class="blog-post-content">
                    <span class="date">
                      <i class="far fa-clock"></i> 10 Mar 2021
                    </span>
                    <h2 class="title">
                      <a href="blog-details">
                        Your Free Movie Streaming Purposes
                      </a>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididun labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip exesa commodo consequat.
                      Duis aute irure dolor in reprehend .
                    </p>
                    <div class="blog-post-meta">
                      <ul>
                        <li>
                          <i class="far fa-user"></i> by <a href="#">Admin</a>
                        </li>
                        <li>
                          <i class="far fa-thumbs-up"></i> 63
                        </li>
                        <li>
                          <i class="far fa-comments"></i>
                          <a href="#">12 Comments</a>
                        </li>
                      </ul>
                      <div class="read-more">
                        <a href="blog-details">
                          Read More <i class="fas fa-angle-double-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="blog-post-item">
                  <div class="blog-post-thumb">
                    <a href="blog-details">
                      <img src="/blog_thumb02.jpg" alt="" />
                    </a>
                  </div>
                  <div class="blog-post-content">
                    <span class="date">
                      <i class="far fa-clock"></i> 10 Mar 2021
                    </span>
                    <h2 class="title">
                      <a href="blog-details">
                        Where watch English movies free?
                      </a>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididun labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip exesa commodo consequat.
                      Duis aute irure dolor in reprehend .
                    </p>
                    <div class="blog-post-meta">
                      <ul>
                        <li>
                          <i class="far fa-user"></i> by <a href="#">Admin</a>
                        </li>
                        <li>
                          <i class="far fa-thumbs-up"></i> 63
                        </li>
                        <li>
                          <i class="far fa-comments"></i>
                          <a href="#">12 Comments</a>
                        </li>
                      </ul>
                      <div class="read-more">
                        <a href="blog-details">
                          Read More <i class="fas fa-angle-double-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="blog-post-item">
                  <div class="blog-post-thumb">
                    <a href="blog-details">
                      <img src="/blog_thumb03.jpg" alt="" />
                    </a>
                  </div>
                  <div class="blog-post-content">
                    <span class="date">
                      <i class="far fa-clock"></i> 10 Mar 2021
                    </span>
                    <h2 class="title">
                      <a href="blog-details">
                        House movie to is streaming website?
                      </a>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididun labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip exesa commodo consequat.
                      Duis aute irure dolor in reprehend .
                    </p>
                    <div class="blog-post-meta">
                      <ul>
                        <li>
                          <i class="far fa-user"></i> by <a href="#">Admin</a>
                        </li>
                        <li>
                          <i class="far fa-thumbs-up"></i> 63
                        </li>
                        <li>
                          <i class="far fa-comments"></i>
                          <a href="#">12 Comments</a>
                        </li>
                      </ul>
                      <div class="read-more">
                        <a href="blog-details">
                          Read More <i class="fas fa-angle-double-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pagination-wrap mt-60">
                  <nav>
                    <ul>
                      <li class="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">Next</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class="col-lg-4">
                <aside class="blog-sidebar">
                  <div class="widget blog-widget">
                    <div class="widget-title mb-30">
                      <h5 class="title">Search Objects</h5>
                    </div>
                    <form action="#" class="sidebar-search">
                      <input type="text" placeholder="Search..." />
                      <button>
                        <i class="fas fa-search"></i>
                      </button>
                    </form>
                  </div>
                  <div class="widget blog-widget">
                    <div class="widget-title mb-30">
                      <h5 class="title">Categories</h5>
                    </div>
                    <div class="sidebar-cat">
                      <ul>
                        <li>
                          <a href="#">Movies</a> <span>12</span>
                        </li>
                        <li>
                          <a href="#">Action Movies</a> <span>10</span>
                        </li>
                        <li>
                          <a href="#">Streaming</a> <span>9</span>
                        </li>
                        <li>
                          <a href="#">Download</a> <span>16</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="widget blog-widget">
                    <div class="widget-title mb-30">
                      <h5 class="title">Recent Posts</h5>
                    </div>
                    <div class="rc-post">
                      <ul>
                        <li class="rc-post-item">
                          <div class="thumb">
                            <a href="blog-details">
                              <img src="/rc_post_thumb01.jpg" alt="" />
                            </a>
                          </div>
                          <div class="content">
                            <h5 class="title">
                              <a href="blog-details">
                                Express Management Effective
                              </a>
                            </h5>
                            <span class="date">
                              <i class="far fa-clock"></i> 10 Mar 2021
                            </span>
                          </div>
                        </li>
                        <li class="rc-post-item">
                          <div class="thumb">
                            <a href="blog-details">
                              <img src="/rc_post_thumb02.jpg" alt="" />
                            </a>
                          </div>
                          <div class="content">
                            <h5 class="title">
                              <a href="blog-details">
                                Where watch English movies free?
                              </a>
                            </h5>
                            <span class="date">
                              <i class="far fa-clock"></i> 10 Mar 2021
                            </span>
                          </div>
                        </li>
                        <li class="rc-post-item">
                          <div class="thumb">
                            <a href="blog-details">
                              <img src="/rc_post_thumb03.jpg" alt="" />
                            </a>
                          </div>
                          <div class="content">
                            <h5 class="title">
                              <a href="blog-details">
                                House movie streaming website
                              </a>
                            </h5>
                            <span class="date">
                              <i class="far fa-clock"></i> 10 Mar 2021
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="widget blog-widget">
                    <div class="widget-title mb-30">
                      <h5 class="title">Tag Post</h5>
                    </div>
                    <div class="tag-list">
                      <ul>
                        <li>
                          <a href="#">Movies</a>
                        </li>
                        <li>
                          <a href="#">Creative</a>
                        </li>
                        <li>
                          <a href="#">News</a>
                        </li>
                        <li>
                          <a href="#">Romantic</a>
                        </li>
                        <li>
                          <a href="#">Who</a>
                        </li>
                        <li>
                          <a href="#">English</a>
                        </li>
                        <li>
                          <a href="#">Blending</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- blog-area-end --> */}

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

export default blog;

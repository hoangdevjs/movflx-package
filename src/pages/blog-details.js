const blogDetails = () => {
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
      {/* 
    <!-- Scroll-top --> */}
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
                            <li>
                              <a href="blog">Our Blog</a>
                            </li>
                            <li class="active">
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
          data-background="/breadcrumb_bg.jpg"
        >
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="breadcrumb-content">
                  <h2 class="title">News Details</h2>
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li class="breadcrumb-item active" aria-current="page">
                        Blog Details
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- breadcrumb-area-end --> */}

        {/* <!-- blog-details-area --> */}
        <section
          class="blog-details-area blog-bg"
          data-background="/blog_bg.jpg"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <div class="blog-post-item blog-details-wrap">
                  <div class="blog-post-thumb">
                    <a href="blog-details">
                      <img src="/blog_thumb01.jpg" alt="" />
                    </a>
                  </div>
                  <div class="blog-post-content">
                    <div class="blog-details-top-meta">
                      <span class="user">
                        <i class="far fa-user"></i> by <a href="#">Admin</a>
                      </span>
                      <span class="date">
                        <i class="far fa-clock"></i> 10 Mar 2021
                      </span>
                    </div>
                    <h2 class="title">Your Free Movie Streaming Purposes</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuies, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was populrised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently .
                    </p>
                    <p>
                      Printing and typetting industry. Lorem Ipsum has been the
                      industry's standrd dummy text ever since the, when an
                      unknown printer took a galley of type and scrambled it to
                      make a type specimen book. It has survived not only five
                      centuies, but also the leap into electronic typesetting,
                      remaining essentially unched. It was populrised in the
                      1960s with the release of Letraset sheets containing .
                    </p>
                    <blockquote>
                      <i class="fas fa-quote-right"></i>
                      <p>
                        Watch Mobflx movies & TV shows online or stream rights
                        to your smart TV, game console, PC, mobile more.
                      </p>
                      <figure>
                        <span>Frenk Smith</span> Founder ceo
                      </figure>
                    </blockquote>
                    <div class="blog-img-wrap">
                      <div class="row">
                        <div class="col-sm-6">
                          <img src="/blog_details_img01.jpg" alt="" />
                        </div>
                        <div class="col-sm-6">
                          <img src="/blog_details_img02.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuies.
                    </p>
                    <p>
                      Printing and typetting industry. Lorem Ipsum has been the
                      industry's standrd dummy text ever since the, when an
                      unknown printer took a galley of type and scrambled it to
                      make a type specimen book. It has survived not only five
                      centuies, but also the leap into electronic typesetting,
                      remaining essentially unched. It was populrised in the
                      1960s with the release of Letraset sheets containing .
                    </p>
                    <div class="blog-post-meta">
                      <div class="blog-details-tags">
                        <ul>
                          <li>
                            <i class="fas fa-tags"></i> <span>Tags :</span>
                          </li>
                          <li>
                            <a href="#">Movies ,</a> <a href="#">Creative ,</a>{" "}
                            <a href="#">News ,</a> <a href="#">English</a>
                          </li>
                        </ul>
                      </div>
                      <div class="blog-post-share">
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i class="fab fa-pinterest-p"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="avatar-post mt-40 mb-80">
                  <div class="post-avatar-img">
                    <img src="/post_avatar_img.png" alt="img" />
                  </div>
                  <div class="post-avatar-content">
                    <h5>Thomas Herlihy</h5>
                    <p>
                      Printing and typetting industry. Lorem Ipsum has been the
                      instry standrd the dummy text ever since the, when an
                      unknown printer took a galley .
                    </p>
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
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="blog-comment mb-80">
                  <div class="widget-title mb-45">
                    <h5 class="title">Comment's (02)</h5>
                  </div>
                  <ul>
                    <li>
                      <div class="single-comment">
                        <div class="comment-avatar-img">
                          <img src="/comment_avatar01.jpg" alt="img" />
                        </div>
                        <div class="comment-text">
                          <div class="comment-avatar-info">
                            <h5>
                              Daisy Waterstone{" "}
                              <span class="comment-date">
                                November 13, 2021
                              </span>
                            </h5>
                            <a href="#" class="comment-reply-link">
                              Reply <i class="fas fa-reply-all"></i>
                            </a>
                          </div>
                          <p>
                            Printing and typetting industry. Lorem Ipsum has
                            been the instry standrd the dummy text ever since
                            the, when an unknown printer took a galley .
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="comment-reply">
                      <div class="single-comment">
                        <div class="comment-avatar-img">
                          <img src="/comment_avatar02.jpg" alt="img" />
                        </div>
                        <div class="comment-text">
                          <div class="comment-avatar-info">
                            <h5>
                              Jon Deo{" "}
                              <span class="comment-date">
                                November 13, 2021
                              </span>
                            </h5>
                            <a href="#" class="comment-reply-link">
                              Reply <i class="fas fa-reply-all"></i>
                            </a>
                          </div>
                          <p>
                            Printing and typetting industry. Lorem Ipsum has
                            been the instry standrd the dummy text ever since
                            the, when an unknown printer took a galley .
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="contact-form-wrap">
                  <div class="widget-title mb-50">
                    <h5 class="title">Post a Comment</h5>
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

export default blogDetails;

import { useState, useEffect } from "react";

const srcs = [
  "js/vendor/jquery-3.6.0.min.js",
  "js/popper.min.js",
  "js/bootstrap.min.js",
  "js/isotope.pkgd.min.js",
  "js/imagesloaded.pkgd.min.js",
  "js/jquery.magnific-popup.min.js",
  "js/owl.carousel.min.js",
  "js/jquery.odometer.min.js",
  "js/jquery.appear.js",
  "js/slick.min.js",
  "js/ajax-form.js",
  "js/wow.min.js",
  "js/aos.js",
  "js/plugins.js",
  "js/main.js",
];

const useMounted = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && typeof window !== "undefined") {
      srcs.map((src) => {
        const scriptTag = document.createElement("script");
        scriptTag.src = src;
        document.head.appendChild(scriptTag);
      });
    }
  }, [mounted]);

  return mounted;
};

export default useMounted;

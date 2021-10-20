function load(img) {
  const url = img.getAttribute("lazy-src");

  img.classList.add("visible");

  img.setAttribute("src", url);
  img.removeAttribute("lazy-src");
}

function ready() {
  if ("IntersectionObserver" in window) {
    let lazyImgs = document.querySelectorAll("[lazy-src]");
    // console.log({ lazyImgs });
    let observer = new IntersectionObserver((entries) => {
      // console.log(entries);
      entries.forEach((entry) => {
        // console.log(entry.isIntersecting);
        // console.log(entry.target);
        if (entry.isIntersecting) {
          load(entry.target);
        }
      });
    });

    lazyImgs.forEach((img) => {
      // console.log(img);
      observer.observe(img);
    });
  } else {
  }
}

document.addEventListener("DOMContentLoaded", ready);

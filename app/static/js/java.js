const container = document.querySelector(".container");
const primaryNav = document.querySelector(".nav__list");
const toggleButton = document.querySelector(".nav-toggle");

toggleButton.addEventListener("click", () => {
    const isExpanded = primaryNav.getAttribute("aria-expanded");
    primaryNav.setAttribute(
        "aria-expanded",
        isExpanded === "false" ? "true" : "false"
    );
});

container.addEventListener("click", (e) => {
    if (!primaryNav.contains(e.target) && !toggleButton.contains(e.target)) {
        primaryNav.setAttribute("aria-expanded", "false");
    }
});

const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
    Dots: false,
  });
  
  const navCarousel = new Carousel(document.querySelector("#navCarousel"), {
    Sync: {
      target: mainCarousel,
    },
    Dots: false,
    Navigation: false,
  
    infinite: false,
    center: true,
    slidesPerPage: 1,
  });
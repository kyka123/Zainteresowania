const pageHeight = window.innerHeight;
const scrollMaxY =
  window.scrollMaxY ||
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

const limit = scrollMaxY / 4;

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({ ease: "expo.inOut", duration: 0.7 });

const generateSTProperties = (start) => {
  if (typeof start == "number") {
    start = `${start * limit}px`;
  }

  return {
    start,
    trigger: "body",
    toggleActions: "play none none reverse",
  };
};

gsap.to(".main__background", {
  scrollTrigger: generateSTProperties("top"),
  width: "100%",
});

gsap.to(".main", {
  scrollTrigger: generateSTProperties("top"),
  y: -pageHeight,
});

gsap.to("#section-1", {
  scrollTrigger: generateSTProperties(1),
  autoAlpha: 0,
});

gsap.from("#section-2", {
  scrollTrigger: generateSTProperties(1),
  yPercent: 100,
});

gsap.to("#section-2", {
  scrollTrigger: generateSTProperties(2),
  autoAlpha: 0,
});

gsap.from("#section-3", {
  scrollTrigger: generateSTProperties(2),
  yPercent: 100,
});

const footer = document.querySelector("footer");

let isFooterOpen = false;

document.addEventListener("mousedown", ({ target }) => {
  if (target === footer || footer.contains(target)) return;
  closeFooter();
});

const openFooter = () => {
  if (isFooterOpen) return;

  gsap.to(".footer", {
    y: -190,
  });

  isFooterOpen = true;
};

const closeFooter = () => {
  if (!isFooterOpen) return;
  gsap.to(".footer", {
    y: 0,
  });
  isFooterOpen = false;
};

footer.addEventListener("click", openFooter);

ScrollTrigger.create({
  ...generateSTProperties(3),
  onEnter: openFooter,
  onLeaveBack: closeFooter,
});

const navLinks = [...document.querySelectorAll(".nav__list__item__link")];

navLinks.forEach((element, index) => {
  element.addEventListener("click", () => {
    gsap.to(window, { duration: 0, scrollTo: index * limit });
  });
});

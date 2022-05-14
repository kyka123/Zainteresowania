const pageHeight = window.innerHeight;
const scrollMaxY =
  window.scrollMaxY ||
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

const limit = scrollMaxY / 4;

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({ ease: "expo.inOut" });

gsap.to(".main__background", {
  scrollTrigger: {
    start: "top",
    trigger: "body",
    toggleActions: "play none none reverse",
  },
  width: "100%",
  duration: 0.7,
});

gsap.to(".main", {
  scrollTrigger: {
    start: "top",
    trigger: "body",
    toggleActions: "play none none reverse",
  },
  y: -pageHeight,

  duration: 0.7,
});

gsap.to("#section-1", {
  scrollTrigger: {
    trigger: "body",

    start: `${limit}px`,
    end: `+=${2 * limit}px`,
    toggleActions: "play none none reverse",
    // scrub: 0.6,
    markers: true,
  },
  // ease: "none",
  duration: 0.7,
  autoAlpha: 0,
});

gsap.from("#section-2", {
  scrollTrigger: {
    trigger: "body",

    start: `${limit}px`,
    end: `+=${2 * limit}px`,
    toggleActions: "play none none reverse",
    // scrub: 0.6,
    markers: true,
  },
  // ease: "none",

  duration: 0.7,

  yPercent: 100,
});

gsap.to("#section-2", {
  scrollTrigger: {
    trigger: "body",

    start: `${2 * limit}px`,
    end: `+=${3 * limit}px`,
    toggleActions: "play none none reverse",
    // scrub: 0.6,
    markers: true,
  },
  // ease: "none",
  duration: 0.7,

  autoAlpha: 0,
});

gsap.from("#section-3", {
  scrollTrigger: {
    trigger: "body",

    start: `${2 * limit}px`,
    end: `+=${3 * limit}px`,
    toggleActions: "play none none reverse",
    // scrub: 0.6,
    markers: true,
  },
  // ease: "none",
  duration: 0.7,

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
    duration: 0.7,
    y: -190,
  });

  isFooterOpen = true;
};

const closeFooter = () => {
  if (!isFooterOpen) return;
  gsap.to(".footer", {
    duration: 0.7,

    y: 0,
  });
  isFooterOpen = false;
};

footer.addEventListener("click", openFooter);

ScrollTrigger.create({
  trigger: "body",

  start: `${3 * limit}px`,
  end: `+=${4 * limit}px`,
  toggleActions: "play none none reverse",
  markers: true,

  onEnter: openFooter,
  onLeaveBack: closeFooter,
});

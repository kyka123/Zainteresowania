const pageHeight = window.innerHeight;
const scrollMaxY =
  window.scrollMaxY ||
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

const limit = scrollMaxY / 8;

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({ ease: "expo.inOut" });

console.log(scrollMaxY);

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

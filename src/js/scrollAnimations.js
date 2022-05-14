const pageHeight = window.innerHeight;

gsap.defaults({ ease: "expo.inOut" });

gsap.to(".main__background", {
  scrollTrigger: {
    start: "top",
    trigger: "body",
    toggleActions: "play none none reverse",
  },
  width: "100%",
  ease: "expo.inOut",
  duration: 0.7,
});

gsap.to(".main", {
  scrollTrigger: {
    start: "top",
    trigger: "body",
    toggleActions: "play none none reverse",
  },
  ease: "expo.inOut",
  y: -pageHeight,

  duration: 0.7,
});

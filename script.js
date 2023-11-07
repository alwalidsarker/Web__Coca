function call(){
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

};
call();
const menu = document.querySelector("#main #page_one #page_one_header #menu");
const nav = document.querySelector("#main #page_one #page_one_header nav");
const p = document.querySelector("#main #page_one #page_one_main p");
menu.addEventListener("click", () => {
  gsap.to(nav,{
    duration : 1,
    left : "50%",
    ease : Expo.easeInOut,
  });
  gsap.to(p,{
    duration : 1,
    zIndex : "-1",
    ease : Expo.easeInOut,
    opacity : 0,
  });
});
nav.addEventListener("click", () => {
  gsap.to(nav,{
    duration : 1,
    left : "150%",
    ease : Expo.easeInOut,
  });
  gsap.to(p,{
    duration : 1,
    zIndex : "0",
    opacity : 1,
    ease : Expo.easeInOut,
  });
});
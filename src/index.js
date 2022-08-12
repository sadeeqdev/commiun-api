import { gsap } from "gsap";
// import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import LocomotiveScroll from 'locomotive-scroll';

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth:true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});

let tl = gsap.timeline({defaults:{ease:"none"}})
.to(".console-img", {scaleX:1.2, scaleY:1.2,  duration:0.5})

let tl2 = gsap.timeline({defaults:{ease:"none"}})
.to(".console-img-2", {scaleX:1.2, scaleY:-1.2,  duration:0.5})

let tl3 = gsap.timeline({defaults:{ease:"none"}})
.to(".features-bar", {x:-400, duration:0.5})

ScrollTrigger.create({
    trigger:".console-div",
    start:"50% 50%",
    end:"+=300",
    scroller: ".smooth-scroll",
    animation:tl,
    scrub:true,
    pin:true,
})

ScrollTrigger.create({
    trigger:".console-div-2",
    start:"50% 50%",
    end:"+=300",
    scroller: ".smooth-scroll",
    animation:tl2,
    scrub:true,
    pin:true,
})

ScrollTrigger.create({
    trigger:".features-bar",
    start:"50% 70%",
    end:"+=300",
    scroller: ".smooth-scroll",
    animation:tl3,
    scrub:true,
})




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
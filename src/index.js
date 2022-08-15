import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';


if (process.env.NODE_ENV !== 'production') {
console.log('Looks like we are in development mode!');
}


gsap.registerPlugin(ScrollTrigger);


if(document.querySelector(".smooth-scroll")){
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".smooth-scroll"),
        smooth: true,
        lerp: 0.03, // Linear Interpolation, 0 > 1 // Try 0.01
        multiplier: 1.4, // Effect Multiplier
        reloadOnContextChange: true,
        touchMultiplier: 2,
        smoothMobile: 0,
        smartphone: {
            smooth: !0,
            breakpoint: 767
        },
        tablet: {
            smooth: !1,
            breakpoint: 1024
        },
    });

    // setTimeout(() => {  
    //     locoScroll.destroy();
    // }, 0);
    // setTimeout(() => {  
    //     locoScroll.init();
    // }, 50);
    // setTimeout(() => {  
    //     locoScroll.update();
    // }, 1000);

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

    let tl = gsap.timeline({defaults:{}})
    .from(".console-img", {scaleX:0.8, scaleY:0.8,  duration:0.5})

    let tl2 = gsap.timeline({defaults:{}})
    .from(".console-img-2", {scaleX:0.8, scaleY:-0.8,  duration:0.5})

    let tl3 = gsap.timeline({defaults:{}})
    .to(".features-bar", {x:-400, duration:0.5})

    let tl4 = gsap.timeline({defaults:{}})
    .to('.rotator', {rotation:360, repeat:5, ease:'none', duration:3})

    gsap.to('.rotator', {rotation:1440, repeat:-1, ease:'none', duration:60})

    gsap.to('.loading-rotor', {rotation:2880, repeat:-1, ease:'none', duration:2})


    const loadRotor = document.querySelector('.page-loader')


    setTimeout(() => {
        gsap.to(".page-loader", {opacity: 0, display:"none", duration:2})
    },4000)


    setTimeout(() => {
        gsap.to(".loading-rotor", {opacity: 0, display:"none", duration:1})
    },3000)


    ScrollTrigger.create({
        trigger:".console-div",
        start:"50% 50%",
        end:"+=300",
        scroller: ".smooth-scroll",
        animation:tl,
        pin:true,
    })

    ScrollTrigger.create({
        trigger:".console-div-2",
        start:"50% 50%",
        end:"+=300",
        scroller: ".smooth-scroll",
        animation:tl2,
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

    //  ScrollTrigger.create({
    //     trigger:".rotator",
    //     start:"50% 80%",
    //     scroller: ".smooth-scroll",
    //     animation:tl4,
    //     scrub:true,
    // })




    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();


}


///////////////////// ////////////Smooth and Effects//////////////////////////////////////////////////////////my demo

if(document.querySelector(".bar-b")){
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".smooth-scroll-2"),
        smooth:true
    });

    locoScroll.on("scroll", ScrollTrigger.update);



    ScrollTrigger.scrollerProxy(".smooth-scroll-2", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".smooth-scroll-2").style.transform ? "transform" : "fixed"
    });

    let tl = gsap.timeline({defaults:{}})
    .from(".bar-c", {scale:0.2, autoAlpha:0,  duration:0.5})


    ScrollTrigger.create({
        trigger:".bar-c",
        start:"0 70%",
        pin: true,
        scrub: true,
        snap: 0.5,
        scroller: ".smooth-scroll-2",
        animation:tl,
    })




    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

////////////////////////////////////Horizontal scroll//////////////////////////////////////////////////////////////////////

if(document.querySelector(".container")){

    let sections = gsap.utils.toArray(".panel");
    
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".smooth-scroll-2"),
        smooth:true
    });

    locoScroll.on("scroll", ScrollTrigger.update);
    

        ScrollTrigger.scrollerProxy(".smooth-scroll-2", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".smooth-scroll-2").style.transform ? "transform" : "fixed"
    });

    let tl = gsap.timeline({defaults:{}})
    .to(sections, { xPercent: -100 * (sections.length -1), ease: 'none',})


    ScrollTrigger.create({
        trigger:".container",
        animation:tl,
        scroller: ".smooth-scroll-2",
        pin:true,
        scrub: true,
        // snap: 1 / (sections.length - 1),
        end:() => "+=" + document.querySelector(".container").offsetWidth,
    })

        let tl2 = gsap.timeline({defaults:{}})
    .from(".bar-c", {scale:0.8, autoAlpha:0, duration:0.5})


    ScrollTrigger.create({
        trigger:".bar-c",
        start:"0% 80%",
        pin:true,
        pinSpacing:false,
        scrub: true,
        snap:1,
        end: "+=200" ,
        scroller: ".smooth-scroll-2",
        animation:tl2,
    })

    // gsap.to(sections, {
    //     xPercent: -100 * (sections.length -1),
    //     ease: 'none',
    //     scrollTrigger: {
    //         trigger:".container",
    //         pin:true,
    //         scrub: 1,
    //         snap: 1 / (sections.length - 1),
    //         end:() => "+=" + document.querySelector(".container").offsetWidth
    //     }
    // })
     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
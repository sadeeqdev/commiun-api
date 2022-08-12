import { gsap } from "gsap";
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll();

gsap.to("h1", {stagger:1, rotation:360, fill:"yellow", duration:3})
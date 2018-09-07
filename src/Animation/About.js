import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back, Power4, Power3, TimelineMax} from "gsap/TweenMax";




export const aboutEnter = (aboutHome) => {

  	var about = new TimelineMax();

    about.addLabel("start")
    .to(aboutHome, 3, {
        opacity: 1,
        ease: Power4.easeInOut,
        x:"100%"
    }, "start") 

   
    
}




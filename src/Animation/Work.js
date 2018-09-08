import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back, Power4, Power3, TimelineMax} from "gsap/TweenMax";




export const workEnter = (workHome) => {

  	var work = new TimelineMax();

    work.addLabel("start")
    .from(workHome, 3, {
        opacity: 1,
        ease: Power4.easeInOut,
        x:"-100%"
    }, "start") 

   
    
}




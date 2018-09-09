import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back, Power4, Power3, TimelineMax} from "gsap/TweenMax";




export const contactEnter = (contactHome) => {

  	var contact = new TimelineMax();

    contact.addLabel("start")
    .from(contactHome, 3, {
        opacity: 1,
        ease: Power4.easeInOut,
        x:"-100%"
    }, "start") 

   
    
}




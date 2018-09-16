import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back, Power4, Power3, TimelineMax} from "gsap/TweenMax";




export const aboutEnter = (aboutHome) => {

  	var about = new TimelineMax();

    about.addLabel("start", 2.2)
    .from(aboutHome, 1, {
        opacity: 1,
        ease: Power3.easeInOut,
        x:"-100%"
    }, "start")    


}

export const aboutLeftCol = (aboutLeftCol, aboutRightColContent) => {

  	var tl = new TimelineMax();

    tl.addLabel("start", 2.5)
    .from(aboutLeftCol, 3, {
        opacity: 0,
        ease: Power3.easeOut,
        x:"-100%"
    }, "start")    
    .from(aboutRightColContent, 3, {
        opacity: 0,
        ease: Power4.easeOut,
        y:"30%"
    }, "start+=.5") 
}


import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back,Power1, Power4, Power3, TimelineMax} from "gsap/TweenMax";




export const aboutEnter = (aboutHome) => {

  	var about = new TimelineMax();

    about.addLabel("start", 2.185)
    .from(aboutHome, 1, {
        opacity: 1,
        ease: Power1.easeInOut,
        x:"-100%"
    }, "start")    


}

export const aboutColumns = (aboutLeftCol,aboutRightColContent,width,aboutStill,aboutLinkhome,aboutLink,aboutLinkWork,aboutLinkContact) => {	

  	var tl = new TimelineMax();

    tl.addLabel("start", 2.5)
    .from(aboutLeftCol, 2, {
        opacity: 0,
        ease: Power3.easeInOut,
        x:"-100%"
    }, "start")    
    .from(aboutRightColContent, 2.5, {
        opacity: 0,
        ease: Power4.easeOut,		
        y:"30%"
    }, "start+=.58") 

    .from(aboutStill, 2.3, {
    	x: width/2, 
    	opacity: 0,   	
    	ease: Power3.easeOut
    }, "start+=.5")

    .staggerFrom([aboutLinkhome,aboutLink,aboutLinkWork,aboutLinkContact], 2.5, {
    	y:50, opacity:0, ease: Elastic.easeOut.config(1.2, 1)
    }, 0.3, "start+=.7")
}


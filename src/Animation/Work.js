import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back,Power1, Power4, Power3, TimelineMax} from "gsap/TweenMax";




export const workEnter = (workHome) => {

  	var work = new TimelineMax();

    work.addLabel("start", 2.2)
    .from(workHome, 1, {
        opacity: 1,
        ease: Power1.easeInOut,
        x:"-100%"
    }, "start")    


}

export const workColumns = (workLeftCol,workRightColContent,width,workStill,workLinkhome,workLink,workLinkWork,workLinkContact) => {
	
	console.log(workLeftCol)

  	var tl = new TimelineMax();

    tl.addLabel("start", 2.5)
    .from(workLeftCol, 2, {
        opacity: 0,
        ease: Power3.easeInOut,
        x:"-100%"
    }, "start")    
    .from(workRightColContent, 2.5, {
        opacity: 0,
        ease: Power4.easeOut,		
        y:"30%"
    }, "start+=.58") 

    .from(workStill, 2, {
    	x: width/2, 
    	opacity: 0,   	
    	ease: Power3.easeOut
    }, "start+=.5")

    .staggerFrom([workLinkhome,workLink,workLinkWork,workLinkContact], 2.5, {
    	y:50, opacity:0, ease:  Elastic.easeOut.config(1.2, 1)
    }, 0.3, "start+=.7")
}


import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back,Power1, Power4, Power3, TimelineMax} from "gsap/TweenMax";




export const workEnter = (workHome) => {

  	var work = new TimelineMax();

    work.addLabel("start", 1.5)
    .from(workHome, 1.4, {
        opacity: 1,
        ease: Power1.easeInOut,
        x:"-100%"
    }, "start")    


}

export const workColumns = (workLeftCol,workRightColContent,width,workStill,workLinkhome,workLinkAbout,workLink,workLinkContact) => {
	

  	var tl = new TimelineMax();

    tl.addLabel("start", 2)
    .from(workLeftCol, 2, {
        opacity: 0,
        ease: Power4.easeInOut,
        x:"-100%"
    }, "start")    
    .from(workRightColContent, 2.5, {
        opacity: 0,
        ease: Power4.easeOut,		
        y:"30%",
        
    }, "start+=1") 

    .from(workStill, 2, {
    	x: width/2, 
    	opacity: 0,   	
    	ease: Power3.easeOut
    }, "start+=.5")

    .staggerFrom([workLinkhome,workLinkAbout,workLink,workLinkContact], 2.5, {
    	y:50, opacity:0, ease:  Elastic.easeOut.config(1.2, 1)
    }, 0.3, "start+=.7")
}


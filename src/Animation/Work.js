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

export const workColumns = (workLeftCol,workRightColContent,width,workStill,workLinkhome,workLinkAbout,workLink,workLinkContact, madMobile,parkupp,moneyCalls,galxyBit) => {
	
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
    	x: -width/2, 
    	opacity: 0,   	
    	ease: Power2.easeOut
    }, "start+=.5")

    .staggerFrom([workLinkhome,workLinkAbout,workLink,workLinkContact], 2.5, {
    	y:50, opacity:0, ease:  Elastic.easeOut.config(1.2, 1)
    }, 0.3, "start+=.7")
    
    .staggerFrom([madMobile,parkupp,moneyCalls,galxyBit], 2, {
        x:-50,y:10, opacity:0, ease: Elastic.easeOut.config(1.2, 1)
    }, .5, "start+=.7")
    
}


export const switchTo = (workRightColContent) => {

    var col = new TimelineMax();

    col.addLabel("start")      
    
    .to(workRightColContent, .5, {
        opacity: 0,
        y:"10%",
        ease: Power3.easeIn,
    }, "start")
    /*.to(workRightColContent, .05, {         
        y:"-10%",        
    })*/
    .to(workRightColContent, .1, {         
        y:"0%",        
    })
    .to(workRightColContent, .25, {
        opacity: 1,        
    }, "start+=.6")
}


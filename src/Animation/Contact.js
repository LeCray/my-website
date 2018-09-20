import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back,Power1, Power4, Power3, TimelineMax} from "gsap/TweenMax";




export const contactEnter = (contactHome) => {

  	var contact = new TimelineMax();

    contact.addLabel("start", 1.5)
    .from(contactHome, 1.4, {
        opacity: 1,
        ease: Power1.easeInOut,
        x:"-100%"
    }, "start")    


}

export const contactColumns = (contactLeftCol,contactRightColContent,width,contactStill,contactLinkhome,contactLinkAbout,contactLinkWork,contactLink) => {
	

  	var tl = new TimelineMax();

    tl.addLabel("start", 2)
    .from(contactLeftCol, 2, {
        opacity: 0,
        ease: Power4.easeInOut,
        x:"-100%"
    }, "start")    
    .from(contactRightColContent, 2.5, {
        opacity: 0,
        ease: Power4.easeOut,		
        y:"30%",        
    }, "start+=1") 

    .from(contactStill, 2, {
    	x: width/2, 
    	opacity: 0,   	
    	ease: Power3.easeOut
    }, "start+=.5")

    .staggerFrom([contactLinkhome,contactLinkAbout,contactLinkWork,contactLink], 2.5, {
    	y:50, opacity:0, ease:  Elastic.easeOut.config(1.2, 1)
    }, 0.3, "start+=.7")
}


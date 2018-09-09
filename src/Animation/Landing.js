import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back, Power4, Power3, TimelineMax} from "gsap/TweenMax";



export const loading = (activity) => {
	var tl = new TimelineMax();
		
	tl.addLabel("start")	
    .to(activity, 4, {
        opacity: 0
    }, "start");

}

export const topSection = (landingHome,rocket,Fname,Lname, whiteBox, me, hr, summary, links) => {

  	var intro = new TimelineMax();

    intro.addLabel("start")
    .from(landingHome, 3, {
        opacity: 1,
        ease: Power4.easeInOut,
        x:"-100%"
    }, "start")         
    .from(rocket, 5, {
        opacity: 0,
        rotation:30, 
        x:300, 
        y:-200,
        ease: Elastic.easeOut.config(1, 0.4), 
        delay: .5
    }, "start")
    .from(Fname, 4, {
        opacity: 0, 
        x:-100, 
        ease: Back.easeInOut.config(2),
        delay: -.5
    }, "start")
    .from(Lname, 5, {
        opacity: -1, 
        x:-200, 
        ease: Back.easeInOut.config(2),
        delay: -.5
    }, "start")
    .addLabel("firstPartIsDone") //FIRST PART DONE
    .from(whiteBox, 3, {
    	opacity: 1,
    	//rotation:30, 
        ease: Power4.easeInOut,
        x:"-100%"
    }, "firstPartIsDone-=2.8")  
    .from(me, 2, {
    	opacity: 0,
    	rotation:0, 
    	ease: Power4.easeInOut,
    	x:"-100%"
    }, "firstPartIsDone-=1.7")
    .to(rocket, 2, {  
    	opacity: 0,             
        x:"200%",         
        ease: Back.easeInOut.config(2),
        delay: 0
    }, "firstPartIsDone-=1.9")
    .addLabel("rocketInPlace")
    .to(Fname, 2, {      	
        x:"175%", 
        ease: Power2.easeInOut,
        delay: 0
    }, "firstPartIsDone-=2")
    .to(Lname, 2.5, {            	
        x:"200%", 
        ease: Power2.easeOut,
        delay: 0
    }, "firstPartIsDone-=2") 
    .to(Fname, 2, {      	
        y:"-200%", 
        ease: Power2.easeOut,
        delay: 0
    }, "firstPartIsDone-=.5")
    .to(Lname, 2, {            	
        y:"-200%", 
        ease: Power2.easeOut,
        delay: .5
    }, "firstPartIsDone-=1")  
    .from(hr,1, {
        opacity: 0,
        ease: Back.easeInOut.config(2),
        x:-40
    }, "firstPartIsDone-=0")    
    .from(summary,3, {
    	opacity: 0,
    	ease: Power2.easeOut,
    	y:-40
    }, "firstPartIsDone-=0")      
    .from(links,2, {
    	opacity: 0,
    	ease: Power2.easeOut,
    	x:100
    }, "firstPartIsDone+=1")
    
}




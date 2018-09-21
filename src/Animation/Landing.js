import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back, Power4, Power3, TimelineMax} from "gsap/TweenMax";



export const loading = (activity) => {
	var tl = new TimelineMax();
		
	tl.addLabel("start")	
    .to(activity, 4, {
        opacity: 0
    }, "start");

}

export const topSection = (landingHome,rocket,Fname,Lname, whiteBox, me, hr, summary, aboutLink, workLink, contactLink) => {

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
        x:215, 
        ease: Power2.easeInOut,
        delay: 0
    }, "firstPartIsDone-=2")
    .to(Lname, 2.5, {            	
        x:225, 
        ease: Power2.easeOut,
        delay: 0
    }, "firstPartIsDone-=2") 
    .to(Fname, 2, {      	
        y:-100, 
        ease: Power2.easeOut,
        delay: 0
    }, "firstPartIsDone-=.5")
    .to(Lname, 2, {            	
        y:-100, 
        ease: Power2.easeOut,
        delay: .5
    }, "firstPartIsDone-=1")  
    .to(hr, 2, {
        opacity: 1,
        ease: Power2.easeOut,
        
    }, "firstPartIsDone-=0")
    .to(summary,1, {
        opacity: 0,     
        x:5
    }, "firstPartIsDone-=2")     
    .from(summary,2, {
    	opacity: 0,    	
    	y:-20
    }, "firstPartIsDone-=0")      
    .from(aboutLink,2, {
        opacity: 0,
        ease: Power2.easeOut,
        x:100
    }, "firstPartIsDone+=1")
    .from(workLink,2, {
        opacity: 0,
        ease: Power2.easeOut,
        x:100
    }, "firstPartIsDone+=1.4")
    .from(contactLink,2.5, {
        opacity: 0,
        ease: Power2.easeOut,
        x:100
    }, "firstPartIsDone+=1.8")
    
}




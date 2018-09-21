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
    .from(landingHome, 2, {
        opacity: 1,
        ease: Power4.easeInOut,
        x:"-100%"
    }, "start")         
    .from(rocket, 3.5, {
        opacity: 0,                
        x:-200,  
        y: 10,       
        ease: Elastic.easeOut.config(.9, .8),
    }, "start+=1.2")
    .from(Fname, 4, {
        opacity: 0, 
        x:-100, 
        y:5,
        ease: Back.easeInOut.config(2),
        delay: -.5
    }, "start+=.25")
    .from(Lname, 3.8, {
        opacity: 0, 
        x:-200, 
        y:5,
        ease: Back.easeInOut.config(1),
        delay: -.5
    }, "start+=.25")

    .addLabel("firstPartIsDone") //FIRST PART DONE

    .from(whiteBox, 3, {
    	opacity: 1,
    	//rotation:30, 
        ease: Power4.easeInOut,
        x:"-100%"
    }, "firstPartIsDone-=2.3")  
    .from(me, 2, {
    	opacity: 0,
    	rotation:0, 
    	ease: Power4.easeInOut,
    	x:"-100%"
    }, "firstPartIsDone-=1.2")

    .to(rocket, 2.3, {  
    	opacity: 0,             
        x:300,         
        ease: Back.easeInOut.config(2),
        delay: 0
    }, "firstPartIsDone-=1.9")

    .addLabel("rocketInPlace")
    .to(Fname, 1, {      	
        x:150, 
        ease: Power4.easeInOut,        
    }, "firstPartIsDone-=1")
    .to(Lname, 1, {            	
        x:155, 
        ease: Power4.easeInOut,        
    }, "firstPartIsDone-=1.08") 
    .to(Fname, 2, {      	
        y:-100, 
        ease: Power2.easeOut,
        opacity: 1
    }, "firstPartIsDone-=.5")
    .to(Lname, 2, {            	
        y:-100, 
        ease: Power2.easeOut,
        delay: .5,
        opacity: 1
    }, "firstPartIsDone-=1") 
    .to(hr, 2, {
        opacity: 1,
        ease: Power2.easeOut,
        
    }, "firstPartIsDone-=0")

    
    .from(summary,2, {
    	opacity: 0,    	    	
    }, "firstPartIsDone-=0") 


    .from(aboutLink,1.5, {
        opacity: 0,
        ease: Power2.easeOut,
        x:100
    }, "firstPartIsDone+=.5")
    .from(workLink,1.5, {
        opacity: 0,
        ease: Power2.easeOut,
        x:100
    }, "firstPartIsDone+=.9")
    .from(contactLink,2, {
        opacity: 0,
        ease: Power2.easeOut,
        x:100
    }, "firstPartIsDone+=1.3")
    
}




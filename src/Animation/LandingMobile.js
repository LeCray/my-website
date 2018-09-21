import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back, Power4, Power3, TimelineMax} from "gsap/TweenMax";



export const loading = (activity) => {
	var tl = new TimelineMax();
		
	tl.addLabel("start")	
    .to(activity, 4, {
        opacity: 0
    }, "start");

}

export const topSectionMobile = (landingHome,rocket,Fname,Lname, whiteBox, me, hr, summary, aboutLink, workLink, contactLink) => {

  	var intro = new TimelineMax();

    intro.addLabel("start")
    .from(landingHome, 2, {
        opacity: 1,
        ease: Power4.easeInOut,
        x:"-100%",        
    }, "start+=.5")         
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
    .from(whiteBox, 2, {
        opacity: 1,        
        ease: Power4.easeInOut,
        x:"-100%"
    }, "firstPartIsDone")
    .from(me, 2, {
        opacity: 0,
        rotation:0, 
        ease: Power4.easeInOut,
        x:"-100%"
    }, "firstPartIsDone+=.3")
    .to(rocket, 2, {  
    	opacity: 0,             
        x:"200%",         
        ease: Back.easeInOut.config(2),
        delay: 0
    }, "firstPartIsDone-=1.9")
    .addLabel("rocketInPlace")    
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
    .from(hr, 3, {
        opacity: 0,
        ease: Back.easeInOut.config(2),        
    }, "firstPartIsDone-=1")    
    .from(summary,2, {
    	opacity: 0,    	
    	y:-20
    }, "firstPartIsDone-=0")

    /*.from(aboutLink,2, {
    	opacity: 0,
    	ease: Power2.easeOut,
    	x:100
    }, "firstPartIsDone+=1.5")
    .from(workLink,2, {
        opacity: 0,
        ease: Power2.easeOut,
        x:100
    }, "firstPartIsDone+=1.9")
    .from(contactLink,2.5, {
        opacity: 0,
        ease: Power2.easeOut,
        x:100
    }, "firstPartIsDone+=2.2")*/

    .staggerFrom([aboutLink,workLink,contactLink], 2, {
        x:50,y:10, opacity:0, ease: Elastic.easeOut.config(1.2, .9)
    }, .2, "firstPartIsDone+=1.5")
    
}

export const menu = (hamburger) => {
    var tl = new TimelineMax();
        
    tl.addLabel("start")    
    .from(hamburger, 3, {        
        opacity:0,            
    }, "start+=5.5")

}

export const menuOpen = (hamburger, hexagon, menuScreen, aboutLinkMenu, workLinkMenu, contactLinkMenu) => {
    var tl = new TimelineMax();
        
    tl.addLabel("start")      
    .to(hamburger, 1.3, {        
        x: "-83%",
        ease: Power4.easeOut,        
    }, "start")
    .to(hexagon, 1.5, {
        rotation: -180,
        ease: Back.easeOut.config(2),
    }, "start")


    
    .from(menuScreen, 1, {
        x: "85%",
        opacity: 0,
        ease: Power4.easeOut
    }, "start+=.2")
    .from(aboutLinkMenu,1, {
        opacity: 0,
        ease: Power2.easeOut,
        x:100
    }, "start+=.2")
    .from(workLinkMenu,1, {
        opacity: 0,
        ease: Power2.easeOut,
        x:100
    }, "start+=.4")
    .from(contactLinkMenu,1, {
        opacity: 0,
        ease: Power2.easeOut,
        x:100
    }, "start+=.6")


}

export const menuClose = (hamburger, hexagon, menuScreen, aboutLinkMenu, workLinkMenu, contactLinkMenu) => {
    var tl = new TimelineMax();
        
    tl.addLabel("start")    
    .to(hamburger, 1.5, {        
        x: "0%",
        ease: Power4.easeOut,        
    }, "start")
    .to(hexagon, 1.8, {
        rotation: 180,
        ease: Back.easeInOut.config(2),
    }, "start")
    .to(menuScreen, 1, {
        opacity: 0,        
        ease: Power4.easeInOut,                
    }, "start+=.1")
    .to(aboutLinkMenu,1, {
        opacity: 0,
        ease: Power2.easeOut,
        x:200
    }, "start+=.2")
    .to(workLinkMenu,1, {
        opacity: 0,
        ease: Power2.easeOut,
        x:200
    }, "start+=.4")
    .to(contactLinkMenu,1, {
        opacity: 0,
        ease: Power2.easeOut,
        x:200
    }, "start+=.6")
    .to(menuScreen, 1, { 
        opacity: 0.9,      
        clearProps: "x",        
    }, "start+=1.7")
    .to([aboutLinkMenu,workLinkMenu,contactLinkMenu], 1, { 
        opacity: 1,      
        clearProps: "x",        
    }, "start+=.7")

    

}




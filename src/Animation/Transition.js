import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back,Power1, Power4, Power3, TimelineMax} from "gsap/TweenMax";




export const Transition = (transitionFirst, transitionMain, transitionSecond, FnameTx, LnameTx, width) => {	

  	var transition = new TimelineMax();

    transition.addLabel("start")
    .from(transitionMain, 1.3, {        
        ease: Power3.easeInOut,
        x:"-100%"
    }, "start") 
    .to(transitionFirst, 1.3, {  
    	x:width,
    	ease: Power3.easeInOut,
    }, "start")
    .to(transitionFirst, 1, {      	
    	ease: Power2.easeInOut,
    	scaleX: 60,    	    	
    }, "start") 
    .to(transitionFirst, 1, {  
    	ease: Power3.easeOut,
    	scaleX: 0,    	    	
    }, "start+=.7") 

    .addLabel("hanger", .2)	
    .from([FnameTx,LnameTx], 2, {    	
    	opacity: 0,    	
    }, "hanger+=.5")
    .to([FnameTx,LnameTx], 2, {    	
    	opacity: 0,
    }, "hanger+=2")

    .from(FnameTx, 1.3, {     	
        x:width,        
        ease: Power3.easeInOut,
    }, "hanger-=.2")
    .from(LnameTx, 1.3, {            	    	
        x:width,        
        ease: Power3.easeInOut,        
    }, "hanger-=.2")

    .to(FnameTx, 1.3, { 
    	x:-width,        	
        ease: Power3.easeInOut,        
    }, "hanger+=1.8")
    .to(LnameTx, 1.3, {        
    	x:-width,    	
        ease: Power3.easeInOut,        
    }, "hanger+=1.8")

    .addLabel("second", 2)	
	.to(transitionMain, 1.3, {        
        ease: Power3.easeInOut,
        x:"100%"
    }, "second") 
    .to(transitionSecond, 1.3, {  
    	x:width,
    	ease: Power3.easeInOut,
    }, "second")
    .to(transitionSecond, 1, {      	
    	ease: Power2.easeInOut,
    	scaleX: 60,    	    	
    }, "second-=.0") 
    .to(transitionSecond, 1, {  
    	ease: Power3.easeOut,
    	scaleX: 0,    	    	
    }, "second+=.7")
    

   
    
}




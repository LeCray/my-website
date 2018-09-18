

import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back,Power1, Power4, Power3, TimelineMax} from "gsap/TweenMax";




export const Transition = (transitionFirst, transitionMain, transitionSecond, FnameTx, LnameTx, width, learnTx) => {	

  	var transition = new TimelineMax();
	
	//First Runner
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
	
	//Hanger
    .addLabel("hanger", .2)	
    .staggerFrom([FnameTx,LnameTx], 1, {
    	y:20, opacity:0, ease: Power1.easeOut
    }, 0.3, "hanger+=.5")    
    .from(learnTx, 1.8, { 
    	y: -20,   	
    	opacity: 0, 
    	ease: Back.easeOut.config(3)   	
    }, "hanger+=1")

	//Horizontal Displacement
    .from([FnameTx,LnameTx,learnTx], 1.3, {     	
        x:width,        
        ease: Power3.easeInOut,
    }, "hanger-=.2")    
    .to([FnameTx,LnameTx,learnTx], 1.3, { 
    	x:-width,        	
        ease: Power3.easeInOut,        
    }, "hanger+=1.8")    

	//Second Runner
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




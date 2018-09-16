import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back,Power1, Power4, Power3, TimelineMax} from "gsap/TweenMax";




export const Transition = (transitionFirst, transitionMain, transitionSecond, width) => {	

  	var transition = new TimelineMax();

    transition.addLabel("start", 1)
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
    }, "start-=.0") 
    .to(transitionFirst, 1, {  
    	ease: Power3.easeOut,
    	scaleX: 0,    	    	
    }, "start+=.7") 

    .addLabel("second", 2.5)
	
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




import {TweenMax, Power2, TimelineLite, Elastic, Circ, Back, Power4, TimelineMax} from "gsap/TweenMax";



export const loading = (flamingo, activity) => {
	var tl = new TimelineMax();
		
	tl.addLabel("start")
	.to(flamingo, 1, {
        scale: .7, opacity: 0, delay: 1
    }, "start")     
    .to(activity, 4, {
        opacity: 0,rotation:90, delay: 1
    }, "start");

}

export const topSection = (landingHome,rocket,Fname,Lname) => {

  	var tl = new TimelineMax();

    tl.addLabel("start")
    .from(landingHome, 3, {
        opacity: 1,
        ease: Power4.easeInOut,
        x:"-100%"
    }, "start")         
    .from(rocket, 5, {
        opacity: 1,
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
    }, "start");
    
}




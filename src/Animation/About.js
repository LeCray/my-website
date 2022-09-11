import { Elastic, Power1, Power2, Power4, TimelineMax } from "gsap/TweenMax";




export const aboutEnter = (aboutHome) => {

    var about = new TimelineMax();

    about.addLabel("start", 1.5)
        .from(aboutHome, 1.4, {
            opacity: 1,
            ease: Power1.easeInOut,
            x: "-100%"
        }, "start")


}

export const aboutColumns = (aboutLeftCol, aboutRightColContent, width, aboutStill, aboutStill2, aboutLinkhome, aboutLink, aboutLinkWork, aboutLinkContact) => {

    var tl = new TimelineMax();

    tl.addLabel("start", 2)
        .from(aboutLeftCol, 2, {
            opacity: 0,
            ease: Power4.easeInOut,
            x: "-100%"
        }, "start")
        .from(aboutRightColContent, 2.5, {
            opacity: 0,
            ease: Power4.easeOut,
            y: "30%",
        }, "start+=1")

        .from(aboutStill, 2.1, {
            x: -width / 2,
            opacity: 0,
            ease: Power2.easeOut
        }, "start+=.5")
        .from(aboutStill2, 2.1, {
            x: -width / 2,
            opacity: 0,
            ease: Power2.easeOut
        }, "start+=.7")

        .staggerFrom([aboutLinkhome, aboutLink, aboutLinkWork, aboutLinkContact], 2.5, {
            y: 50, opacity: 0, ease: Elastic.easeOut.config(1.2, 1)
        }, 0.3, "start+=.7")
}


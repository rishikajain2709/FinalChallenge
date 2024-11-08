function firstpage()
{
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            scrub: 1,
            pin: true,
            // markers: true,
        }
    })
    
    tl.to("#circle #bottom img", {
        rotate: "-180deg",
        scale: .6,
        stagger: .1,
        ease: Power1
    }, "same")
    tl.to("#circle #top img", {
        scale: .6,
        ease: Power1
    }, "same")
    tl.to("#home #gallery", {
         bottom:"-100%",
          ease: Power1
    },"same")
    
    tl.to("#cimage img", {
        scale:0,
         ease: Power1
    },"same")
    tl.to("#centerimg h5", {
        opacity:0,
         ease: Power1
    },"same")
    tl.to("#centerimg h5", {
        opacity:0,
         ease: Power1
    },"same")
    tl.to("#circ",{
        top:"50%",
         ease: Power1
    },"same")
    tl.to("#circle",{
        scale:.5,
         ease: Power1
    },"same")
    tl.to("#smcircle",{
        scale:.6,
         ease: Power1
    },"same")
    tl.to("#pink",{
        bottom:"0%",
        rotate:"0",
         ease: Power1
    },"same2")
    tl.to("#circle",{
        scale:0,
         ease: Power1
    },"same2")
    tl.to("#smcircle",{
        scale:0,
         ease: Power1
    },"same2")
    tl.to("#circ",{
        opacity:0,
         ease: Power1
    },"same2")
    tl.to("#circpurple",{
        duration:2,
        top:"20%",
         ease: Power1
    },"same3")
    tl.to("#circpurple",{
        top:"-100%",
        duration:2,
        delay:1,
         ease: Power1
    },"same4")
    
    
}
firstpage();
function secondpage()
{
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#second",
            start: "top top",
            scrub: 1,
            pin: true,
            // markers: true,
        }
    })  

    tl2.to("#stop #pi", {
       top:"50%",
       left:"50%",
       duration:2,
        stagger:.2,
        ease: Power1
    }, "a")
    tl2.to("#stop #pu", {
        top:"50%",
        left:"50%",
        duration:2,
         stagger: .9,
         ease: Power1
     }, "a")
     tl2.to("#stop #pu", {
        scale:10,
        background:`linear-gradient(to right,#D5A7B4,#B4AAD5)`,
        duration:4,
        delay:1,
         stagger:1,
         ease: Power1
     }, "a1")
     tl2.to("#stop>h1", {
        left:"-200%",
        duration:10,
         stagger: .2,
         ease: Power1
     }, "a2")
     tl2.to("#para1", {
        opacity:0,
        duration:2,
         stagger: .2,
         ease: Power1
     }, "a3")
     tl2.to("#para2", {
        opacity:1,
        duration:2,
        delay:2,
        stagger: .2,
         ease: Power1
     }, "a3")

tl2.to(["#a","#b","#c","#d","#e"],{

    bottom:100,
    duration:6,
    delay:3,
    stagger: .2,
     ease: Power1
 }, "a4")
 tl2.to(["#pqr","#pqr1"],{

   
    opacity:1,
    
 }, "a5")
 
 tl2.to(["#pqr","#pqr1"],{

    left:"10%",
    opacity:1,
    duration:6,
    delay:4,
    stagger: .2,
     ease: Power1
 }, "a6")
 tl2.to("#pqr1",{

     left:"1%",
       opacity:1,
  duration:6,
     delay:4,
     stagger: .2,
      ease: Power1
  }, "a7")
  
  
}
secondpage();


function abc()
{
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#third",
            start: "top top",
            scrub: 1,
            pin: true,
            // markers: true,
        }
    }) 
   
     
    tl3.to("#btnave>img",{

        pin:"true",
        opacity:1,
       duration:1,
      delay:0,
      stagger: .2,
       ease: Power1
   },"f")
}
abc();
function abcd()
{
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#fourth",
            start: "top top",
            scrub: 1,
            pin: true,
            // markers: true,
        }
    }) 
   
     
    tl3.to("#cen>img",{

        rotate:"360deg",
       duration:10,
      delay:0,
      stagger: .2,
       ease: Power1
   },"g")
}
abcd();
function abcde()
{
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#fifth",
            start: "top top",
            scrub: 1,
            pin: true,
            // markers: true,
        }
    }) 
   
     
    tl4.to("#border>h3",{

        left:"-100%",
       duration:15,
      delay:0,
      stagger: .2,
       ease: Power1
   },"h")
   tl4.to("#fifth>h1",{

    left:"-100%",
   duration:15,
  delay:0,
  stagger: .2,
   ease: Power1
},"h")
tl4.to("#seventh",{
    scale:4,
    top:"-150%",
   duration:14,
  delay:0,
  stagger: .2,
   ease: Power1
},"m")
}
abcde();
// function abcdef()
// {
//     var tl5= gsap.timeline({
//         scrollTrigger: {
//             trigger: "#seventh",
//             start: "top top",
//             scrub: 1,
//             pin: true,
//             markers: true,
//         }
//     }) 
//     tl5.to("#seventh",{
//         scale:3,
//         top:"-100%",
//        duration:14,
//       delay:0,
//       stagger: .2,
//        ease: Power1
//     },"m")
// }
// abcdef();

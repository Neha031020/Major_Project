function init() {
  document.fonts.ready.then(function () {
    document.querySelector("#loader").style.display = "none"
  })
  document.querySelector("#menubtn").addEventListener("click", function () {
    document.querySelector("#fullscreennav").style.left = "0"
  })
  document.querySelector("#closebtn").addEventListener("click", function () {
    document.querySelector("#fullscreennav").style.left = "-100%"
  })
}
init()

function show() {
  document.querySelectorAll("#text h1").forEach(function (h1) {
    var clutter = "";
    h1.textContent.split("").forEach(function (charc) {
      clutter += `<span>${charc}</span>`;
    });
    h1.innerHTML = clutter;
  });
}

function gsapInitfirstpage() {
  var t1 = gsap.timeline();

  t1.from(
    ".navpart a",
    {
      stagger: 0.1,
      duration: 2,
      y: 20,
      opacity: 0,
      ease: Expo,
    },
    "golu"
  )
    .from(
      "#text h1 span",
      {
        stagger: 0.1,
        duration: 2,
        y: 20,
        opacity: 0,
        filter: "blur(1px)",
        ease: Expo,
        color: "red",
        scale: 1.3,
      },
      "golu"
    )
    .from(
      "#nav .an",
      {
        duration: 2,
        y: 20,
        stagger: 3,
        opacity: 0,
        ease: Expo,
      },
      "golu"
    )

    .from("#circleline", {
      duration: 1,
      scale: 1.6,
      opacity: 0,
      ease: Expo,
    })
    .from(".hbtmpart", {
      duration: 2,
      // stagger:1,
      // scale:1.6,
      ease: Expo,
      y: 50,
      opacity: 0,
    });
}
function gsapSecondPage() {
  var t12 = gsap.timeline({
    scrollTrigger: {
      // markers: true,
      start: "top 60%",
      trigger: "#second",
      scrub: 4,
    },
  });

  t12
    .from(
      "#photoseries",
      {
        x: "80%",
        ease: Circ,
        duration: 100,
      },
      "golu"
    )

    .to(
      "#second h1",
      {
        x: "100%",
        ease: Circ,
        duration: 800,
      },
      "golu"
    );
}
function thirdPage() {
  document.querySelector("#third").addEventListener("click", function (data) {
    if (isNaN(Number(data.target.id))) {

      var elem = ".strcnt" + data.target.id.split("-")[0]
      gsap.to(elem, {
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 1.5,
        // delay:1
      })
      gsap.to(".cors", {
        opacity: 0
      })
      gsap.to(data.target.offsetParent, {
        width: 4 + "%",
        ease: Expo.easeInOut,
        duration: 1.5,
        delay: .5
      })
    }
    else {
      var dec = 100 - (4 - data.target.id) * 4;
      var elem = document.querySelector(".strcnt" + data.target.id)
      var cross = "#" + data.target.id + '-close'
      gsap.to(data.target, {
        width: dec + "%",
        ease: Expo.easeInOut,
        duration: 1.5
      })
      gsap.to(cross, {
        opacity: 0
      })
      gsap.to(".cors", {
        opacity: 1,
      })
      gsap.to(elem, {
        opacity: 1,
        ease: Expo.easeInOut,
        delay: 1,
        duration: 1.5
      })
      console.log(dec)
    }
    if (window.screen.availWidth < 500) {
      document.querySelector("#third").addEventListener("click", function (data) {
        if (isNaN(Number(data.target.id))) {

          var elem = ".strcnt" + data.target.id.split("-")[0]
          gsap.to(elem, {
            opacity: 0,
            ease: Expo.easeInOut,
            duration: 1.5,
            // delay:1
          })
          gsap.to(".cors", {
            opacity: 0
          })
          gsap.to(data.target.offsetParent, {
            height: 4 + "%",
            ease: Expo.easeInOut,
            duration: 1.5,
            delay: .5
          })
        }
        else {
          var dec = 100 - (4 - data.target.id) * 4;
          var elem = document.querySelector(".strcnt" + data.target.id)
          gsap.to(data.target, {
            height: dec + "%",
            ease: Expo.easeInOut,
            duration: 1.5
          })
          gsap.to(".cors", {
            opacity: 1,
          })
          gsap.to(elem, {
            opacity: 1,
            ease: Expo.easeInOut,
            delay: 1,
            duration: 1.5
          })
          console.log(dec)
        }
      })
    }


  })
}
function fourthPage() {
  document.querySelectorAll(".elem").forEach(function (havan) {
    havan.addEventListener("mousemove", function (dets) {
      // console.log(dets.screenX,dets.screenY)
      dets.target.nextElementSibling.style.opacity = "1"
    })

    havan.addEventListener("mouseout", function (dets) {
      // console.log(dets.screenX,dets.screenY)
      dets.target.nextElementSibling.style.opacity = "0"
    })
  })
}



show();
gsapInitfirstpage();
gsapSecondPage();
thirdPage()
fourthPage()




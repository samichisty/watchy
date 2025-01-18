let marqueeInners = document.querySelectorAll(".marquee-inner");

let currentScroll = 0;
let isScrollingDown = false;

let tl = gsap.timeline();

let tween = gsap.to(marqueeInners, {
    duration: 8,
    xPercent: -100,
    ease: "linear",
    repeat: -1,
}).totalProgress(0.5)

window.addEventListener("wheel", function (e) {
    if (e.deltaY < 0) {
        isScrollingDown = true;
    } else {
        isScrollingDown = false;

    }
    gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1
    })

    currentScroll = window.pageYOffset;
})


tl.from(".center", {
    top: 800,
    duration: 1.2,
    scale: 0.5,
    ease: "power4.inOut"
})


tl.from(marqueeInners, {
    opacity: 0,
    duration: 1,
    ease: "power4.inOut"
})

let animatedTexts = document.querySelectorAll(".animated-text");

animatedTexts.forEach(text => {
    let splitedText = text.innerText;
    text.innerHTML = splitedText.split(" ").map((letter) => `<span>${letter}</span>`).join(" ")
})

let spans = document.querySelectorAll(".animated-text span")

console.log(spans)

gsap.from(".animated-text span", {
    y: 150,
    stagger: 0.15,
    ease: "power4.inOut",
    duration: 1,
})
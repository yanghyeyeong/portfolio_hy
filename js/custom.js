$(function () {
    //ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger: {
            trigger: ".visual",
            start: "top top",
            end: "20% 100%",
            scrub: 2,
            // markers: true,
        },
    }).to(".mainlogo", {
        scale: "0.5",
        duration: "10",
        opacity: "0.3",
    });

    gsap.timeline({
        scrollTrigger: {
            trigger: ".page1",
            start: "top 30%",
            end: "20% 100%",
            scrub: 2,
            // markers: true,
        },
    })
        .to(".page1 h2", { x: "50%", duration: 1 }, 0.2)
        .to(".photo", { y: "60px", duration: 1, ease: "elastic" }, 0.4)
        .to(".self", { y: "60px", duration: 3, ease: "elastic" }, 0.6)
        .to(".lisence", { y: "60px", duratuin: 5, ease: "elastic" }, 0.8)
        .to(".st0", { opacity: 0.3, strokeDashoffset: 0, duration: 1.5 }, 2.5);

    gsap.timeline({
        scrollTrigger: {
            trigger: ".page1",
            start: "bottom",
            end: "20% 100%",
            scrub: 2,
            // markers: true,
        },
    })
        .to(".st1", { opacity: 0.2, strokeDashoffset: 0, duration: 0.7 }, 3.5)
        .to(".logo_txt", { x: "-50px", duration: 2 }, 0.2)
        .to(".logo", { x: "-50px", duration: 2 }, 0.2)

        .to(".bg1", { width: "100%", duration: 2 }, 0.2)

        .to(".bg2", { width: "100%", duration: 2 }, 0.5)
        .to(".bg3", { width: "100%", duration: 2 }, 0.8)
        .to(".bg4", { width: "100%", duration: 2 }, 1.1);

    gsap.utils.toArray(".site2").forEach(function (site2) {
        gsap.timeline({
            scrollTrigger: {
                trigger: site2,
                start: "50% 100%",
                end: "bottom top",
                toggleClass: { targets: site2, className: "active" },
                scrub: 1,
                // markers: true,
            },
        });
    });

    gsap.utils.toArray(".site1").forEach(function (site1) {
        gsap.timeline({
            scrollTrigger: {
                trigger: site1,
                start: "50% 100%",
                end: "bottom top",
                toggleClass: { targets: site1, className: "active" },
                scrub: 1,
                // markers: true,
            },
        });
    });

    gsap.utils.toArray(".work1").forEach(function (work1) {
        gsap.timeline({
            scrollTrigger: {
                trigger: work1,
                start: "50% 100%",
                end: "bottom top",
                toggleClass: { targets: work1, className: "active" },
                scrub: 1,
                // markers: true,
            },
        });
    });

    setInterval(function () {
        $(".Design1 li:first-child()")
            .stop()
            .animate({ "margin-left": "-80%x" }, 700, function () {
                $(".Design1 li:first-child()").appendTo(".Design1");
                $(".Design1 li").css({ "margin-left": "0px" });
            });
    }, 2000);

    gsap.timeline({
        scrollTrigger: {
            trigger: ".page6",
            start: "top 25%",
            end: "20% 100%",
            scrub: 2,
            // markers: true,
        },
    }).to(".st2", { opacity: 0.3, strokeDashoffset: 0, duration: 1.5 }, 2.5);
});

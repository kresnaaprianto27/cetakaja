
// NAVBAR SCRIPT
document.addEventListener("DOMContentLoaded", () => {

    const hamburger =
        document.querySelector(".hamburger");

    const navMenu =
        document.querySelector(".nav-menu");

    const navLinks =
        document.querySelectorAll(".nav-menu a");

    hamburger.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        hamburger.classList.toggle("open");

    });

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            hamburger.classList.remove("open");

        });

    });

});

// TRUSH SECTION SCRIPT
/* ====================================
   TRUST COUNTER
==================================== */

const counters =
    document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target =
            +counter.getAttribute("data-target");

        let count = 0;

        const speed = target / 100;

        const updateCounter = () => {

            count += speed;

            if (count < target) {

                counter.innerText =
                    Math.floor(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText =
                    target.toLocaleString() + "+";

            }

        };

        updateCounter();

    });

};

const observer =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounter();

                observer.disconnect();

            }

        });

    });

observer.observe(
    document.querySelector(".trust-section")
);



/* ====================================
CATEGORY TABS
==================================== */

const tabs =
    document.querySelectorAll(".tab-btn");

const grids =
    document.querySelectorAll(".category-grid");

tabs.forEach(tab => {


    tab.addEventListener("click", () => {

        tabs.forEach(btn =>
            btn.classList.remove("active")
        );

        grids.forEach(grid =>
            grid.classList.remove("active")
        );

        tab.classList.add("active");

        document
            .getElementById(
                tab.dataset.tab
            )
            .classList.add("active");

    });


});


/* ====================================
   POPULAR PRODUCT ANIMATION
==================================== */

const popularCards =
    document.querySelectorAll(".popular-card");

const popularObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: .2
    });

popularCards.forEach(card => {

    popularObserver.observe(card);

});


/* ====================================
   PORTFOLIO REVEAL
==================================== */

const portfolioItems =
    document.querySelectorAll(".portfolio-item");

const portfolioObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: .2
    });

portfolioItems.forEach(item => {

    portfolioObserver.observe(item);

});

/* ====================================
   LIGHTBOX PORFOLIO
==================================== */

const lightbox =
    document.querySelector(".lightbox");

const lightboxImg =
    document.querySelector(".lightbox img");

document
    .querySelectorAll(".portfolio-item img")
    .forEach(img => {

        img.addEventListener("click", () => {

            lightbox.classList.add("active");

            lightboxImg.src =
                img.src;

        });

    });

document
    .querySelector(".close-lightbox")
    .addEventListener("click", () => {

        lightbox.classList.remove("active");

    });

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.classList.remove("active");

    }

});

/* ====================================
   TIMELINE ANIMATION
==================================== */

const timelineItems =
    document.querySelectorAll(".timeline-item");

const timelineObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.2
    });

timelineItems.forEach(item => {

    timelineObserver.observe(item);

});


/* ====================================
   ADVANTAGE ANIMATION
==================================== */

const advCards =
    document.querySelectorAll(".adv-card");

const advObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.2
    });

advCards.forEach(card => {

    advObserver.observe(card);

});

/* ====================================
   TESTIMONIAL REVEAL
==================================== */

const testimonialCards =
    document.querySelectorAll(".testi-card");

const testimonialObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.2
    });

testimonialCards.forEach(card => {

    testimonialObserver.observe(card);

});

/* ====================================
   FAQ ACCORDION
==================================== */

const faqItems =
    document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question =
        item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if (faq !== item) {

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});


// SECTION TENTANG KAMI SCRIPT
/* ====================================
   COUNTER ANIMATION
==================================== */

const counterObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter =
                    entry.target;

                const target =
                    +counter.dataset.target;

                let count = 0;

                const speed =
                    target / 100;

                const update = () => {

                    count += speed;

                    if (count < target) {

                        counter.innerText =
                            Math.floor(count);

                        requestAnimationFrame(update);

                    } else {

                        counter.innerText =
                            target.toLocaleString() + "+";
                    }

                }

                update();

                counterObserver.unobserve(counter);

            }

        });

    });

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* ====================================
   FOOTER REVEAL
==================================== */

const footer =
    document.querySelector(".footer");

const footerObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                footer.style.opacity = "1";

                footer.style.transform =
                    "translateY(0)";
            }

        });

    });

footer.style.opacity = "0";
footer.style.transform =
    "translateY(80px)";
footer.style.transition =
    "1s ease";

footerObserver.observe(footer);



// SMOOT SCROLL SECTION
// link akan active saat di klik
const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* ====================================
   FLOATING WA SHOW ON SCROLL
==================================== */

const waButton =
    document.querySelector(".floating-wa");

waButton.style.opacity = "0";
waButton.style.visibility = "hidden";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        waButton.style.opacity = "1";

        waButton.style.visibility = "visible";

    } else {

        waButton.style.opacity = "0";

        waButton.style.visibility = "hidden";

    }

});


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".side-nav a");
    const moreAboutMeButton = document.querySelectorAll("#more-about-me");

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                const activeNavLink = document.querySelector(".side-nav a.active");
                if (activeNavLink) {
                    const activeIconSrc = activeNavLink.querySelector("img").src;
                    activeNavLink.querySelector("img").src = activeIconSrc.replace("-white", "-black");
                    activeNavLink.classList.remove("active");
                }
                const newActiveNavLink = document.querySelector(`.side-nav a[href="#${sectionId}"]`);
                const newActiveIconSrc = newActiveNavLink.querySelector("img").src;
                newActiveNavLink.querySelector("img").src = newActiveIconSrc.replace("-black", "-white");
                newActiveNavLink.classList.add("active");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    moreAboutMeButton.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
});
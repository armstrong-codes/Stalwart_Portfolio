document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNavLink() {
        const scrollY = window.pageYOffset;
        
        let currentSectionId = null;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.id;
            }
        });
        
        navLinks.forEach(link => {
            const target = link.getAttribute('data-section');
            const navLinksSpan = document.querySelector('.nav-link span');
            if (target === currentSectionId) {
                link.classList.add('active');
                navLinksSpan.classList.add('active_span')
            } else {
                link.classList.remove('active');
                navLinksSpan.classList.remove('active_span')
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);
    window.addEventListener('load', updateActiveNavLink);
});

document.addEventListener("DOMContentLoaded", function () {
    const closeNav = document.querySelector('.close_nav');
    const navBar = document.querySelector('nav ul');
    const burger = document.querySelector('.burger');

    closeNav.addEventListener("click", function () {
        navBar.style.left = "-55%";
    });

    window.addEventListener("click", function (e) {
        if (
            !navBar.contains(e.target) &&
            e.target !== closeNav &&
            e.target !== burger
        ) {
            navBar.style.left = "-55%";
        }
    });

    burger.addEventListener("click", function (e) {
        e.stopPropagation();
        navBar.style.left = "0%";
    });
});

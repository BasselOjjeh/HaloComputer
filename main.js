// change navbar styles on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});

// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
});

// close nav menu
closeBtn.addEventListener('click', () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
});

// Carousel JavaScript code, adjusted for educational content
let slideIndex = 0;
const slides = document.querySelectorAll(".carousel__item");

function moveSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlides();
}

function showSlides() {
    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex].style.display = "block";
}

// Initial call to showSlides to display the first item
showSlides();

// Event listeners for the sidebar navigation links
const sidebarLinks = document.querySelectorAll('.course-list li');
const contentArea = document.querySelector('.course-content');

sidebarLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        loadCourseContent(index);
    });
});

function loadCourseContent(index) {
    const content = [
        { type: 'video', src: 'https://www.youtube.com/embed/9JiOOda0n3w?si=P12MSX9_LFNuuQy2' },
        { type: 'article', src: 'https://www.wikihow.com/Use-Gmail' }
    ];

    contentArea.innerHTML = '';

    // Load new content based on type
    if (content[index].type === 'video') {
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', content[index].src);
        iframe.setAttribute('title', 'YouTube video player');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.setAttribute('allowfullscreen', '');
        iframe.style.width = '100%';
        iframe.style.height = '600px'; 
        contentArea.appendChild(iframe);
    } else if (content[index].type === 'article') {
        const article = document.createElement('article');
        contentArea.appendChild(article);
    }
}

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
    // Sample array of YouTube video URLs and articles as placeholders
    const content = [
        { type: 'video', src: 'https://www.youtube.com/embed/ZpbVPanEmok' },
        { type: 'video', src: 'https://www.youtube.com/embed/tLgyVfDlP5o' },
        { type: 'video', src: 'https://www.youtube.com/embed/kvi5lGwpbgE' },
        // Add more content as needed
        { type: 'article', src: 'your-article-url-here' }
        // Articles can be loaded via AJAX or other methods
    ];

    // Clear current content
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
        iframe.style.height = '500px'; // or your desired height
        contentArea.appendChild(iframe);
    } else if (content[index].type === 'article') {
        // If it's an article, you could load the content via AJAX, for example
        // Here's just a placeholder for the article content
        const article = document.createElement('article');
        article.textContent = 'Article content goes here...';
        contentArea.appendChild(article);
    }
}

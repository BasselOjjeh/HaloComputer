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

// Function to toggle the FAQ display
function toggleFAQ(event) {
    const faq = event.currentTarget;
    const faqIcon = faq.querySelector('.faq__icon i');
    faq.classList.toggle('open');
    if (faq.classList.contains('open')) {
        faqIcon.classList.remove('uil-plus');
        faqIcon.classList.add('uil-minus');
    } else {
        faqIcon.classList.remove('uil-minus');
        faqIcon.classList.add('uil-plus');
    }
}

const faqElements = document.querySelectorAll('.faq');
faqElements.forEach(faq => {
    faq.addEventListener('click', toggleFAQ);
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

function getPageType() {
    if (document.title.includes('Gmail')) {
        return 'gmail';
    } else if (document.title.includes('Docs')) {
        return 'docs';
    } else if (document.title.includes('Sheets')) {
        return 'sheets';
    } else if (document.title.includes('Drive')) {
        return 'drive';
    }
}

function loadCourseContent(index) {
    const pageType = getPageType();
    const contentArrays = {
        'gmail': [
            { type: 'video', src: 'https://www.youtube.com/embed/9JiOOda0n3w?si=P12MSX9_LFNuuQy2' },
            { type: 'video', src: 'https://www.youtube.com/embed/xVfOeDZ7N4k?si=P12MSX9_LFNuuQy2' },
            { type: 'article', src: 'https://blog.logrocket.com/the-ultimate-guide-to-iframes/' }
        ],
        'docs': [
            { type: 'video', src: 'https://www.youtube.com/embed/z9i_h-WMQ68?si=VT8QKnW1_6X7dS1X' },
            { type: 'video', src: 'https://www.youtube.com/embed/z9i_h-WMQ68?si=VT8QKnW1_6X7dS1X' }
        ],
        'sheets': [
            { type: 'video', src: 'https://www.youtube.com/embed/xv8RXzUMTng?si=KDp56WUXO5ft6JOY' },
            { type: 'video', src: 'https://www.youtube.com/embed/xv8RXzUMTng?si=KDp56WUXO5ft6JOY' }
        ],
        'drive': [
            { type: 'video', src: 'https://www.youtube.com/embed/gdrxAoqfvbA?si=eb1Ek3ieh_5CuVR1' },
            { type: 'article', src: 'https://blog.hubspot.com/marketing/how-to-add-html-embed-codes-ht' }
        ]
    };

    const content = contentArrays[pageType][index];

    contentArea.innerHTML = '';

    if (content.type === 'video') {
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', content.src);
        iframe.setAttribute('title', 'YouTube video player');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.setAttribute('allowfullscreen', '');
        iframe.style.width = '100%';
        iframe.style.height = '600px';
        contentArea.appendChild(iframe);
    } else if (content.type === 'article') {
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', content.src);
        iframe.setAttribute('allow-same-origin', '');
        iframe.style.width = '100%';
        iframe.style.height = '600px';
        contentArea.appendChild(iframe);
    }
}

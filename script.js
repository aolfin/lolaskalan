// ==================== HAMBURGER MENU ==================== 
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navigation = document.querySelector('.navigation');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle hamburger menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navigation.classList.toggle('active');
        });
    }

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navigation.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navigation && navigation.contains(event.target);
        const isClickInsideHamburger = hamburger && hamburger.contains(event.target);

        if (!isClickInsideNav && !isClickInsideHamburger && hamburger && hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navigation.classList.remove('active');
        }
    });
});

// ==================== CONTACT FORM ==================== 
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all required fields.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Show success message
            alert(`Salamat sa iyong mensahe, ${name}!\n\nWe will get back to you shortly at ${email}.`);

            // Reset form
            contactForm.reset();
        });
    }
});

// ==================== RESERVATION FORM ==================== 
document.addEventListener('DOMContentLoaded', function() {
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('res-name').value;
            const email = document.getElementById('res-email').value;
            const phone = document.getElementById('res-phone').value;
            const guests = document.getElementById('res-guests').value;
            const date = document.getElementById('res-date').value;
            const time = document.getElementById('res-time').value;

            // Basic validation
            if (!name || !email || !phone || !guests || !date || !time) {
                alert('Please fill in all required fields.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Phone validation (basic)
            const phoneRegex = /^[0-9\-\(\)\+\s]+$/;
            if (!phoneRegex.test(phone)) {
                alert('Please enter a valid phone number.');
                return;
            }

            // Date validation - ensure it's not in the past
            const selectedDate = new Date(date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (selectedDate < today) {
                alert('Please select a future date for your reservation.');
                return;
            }

            // Format the reservation details
            const formattedDate = selectedDate.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            const formattedTime = time.replace(':', '.');

            // Show success message
            alert(`Reservation Confirmed!\n\nName: ${name}\nDate: ${formattedDate}\nTime: ${time}\nParty Size: ${guests} guests\n\nA confirmation email will be sent to ${email}.`);

            // Reset form
            reservationForm.reset();
        });
    }
});

// ==================== SMOOTH SCROLLING ==================== 
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ==================== ACTIVE NAVIGATION LINK ==================== 
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage || 
            (currentPage === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', setActiveNavLink);

// ==================== SCROLL ANIMATIONS ==================== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.dish-card, .specialty-card, .team-member');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ==================== GALLERY MODAL ==================== 
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-grid img');

    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            showImageModal(this.src);
        });
    });
});

function showImageModal(imageSrc) {
    // Create modal HTML
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        cursor: pointer;
    `;

    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 8px;
        box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
    `;

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 40px;
        font-size: 40px;
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        transition: transform 0.3s ease;
    `;

    closeBtn.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.2)';
    });

    closeBtn.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });

    modal.appendChild(img);
    modal.appendChild(closeBtn);

    // Close modal
    function closeModal() {
        document.body.removeChild(modal);
    }

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    closeBtn.addEventListener('click', closeModal);

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.parentElement) {
            closeModal();
        }
    });

    document.body.appendChild(modal);
}

// ==================== LAZY LOADING IMAGES ==================== 
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src && !img.src) {
                    img.src = img.dataset.src;
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==================== SLIDER GALLERY FUNCTIONALITY ====================
function initSlider() {
    const slides = document.querySelectorAll('.home-gallery-slider .slide');
    const prevBtn = document.querySelector('.home-gallery-slider .prev');
    const nextBtn = document.querySelector('.home-gallery-slider .next');
    let currentIndex = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        currentIndex = index;
    }

    function nextSlide() {
        const newIndex = (currentIndex + 1) % slides.length;
        showSlide(newIndex);
    }

    function prevSlide() {
        const newIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(newIndex);
    }

    if (nextBtn) nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });
    if (prevBtn) prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    function startInterval() {
        slideInterval = setInterval(nextSlide, 5000);
    }
    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    if (slides.length > 0) {
        showSlide(0);
        startInterval();
    }
}

document.addEventListener('DOMContentLoaded', initSlider);

// ==================== FORM VALIDATION HELPERS ==================== 
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[0-9\-\(\)\+\s]+$/;
    return phoneRegex.test(phone);
}

// ==================== MOBILE MENU CLOSE ON SCROLL & ADD LOADING STATE ==================== 
document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const hamburger = document.querySelector('.hamburger');
    const navigation = document.querySelector('.navigation');

    window.addEventListener('scroll', function() {
        if (hamburger && hamburger.classList.contains('active')) {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop + 50) {
                hamburger.classList.remove('active');
                navigation.classList.remove('active');
            }

            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        }
    });

    // ==================== ADD LOADING STATE TO BUTTONS ==================== 
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            const submitBtn = this.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.style.opacity = '0.6';
                submitBtn.style.cursor = 'not-allowed';

                // Re-enable button after submission (simulate)
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                    submitBtn.style.cursor = 'pointer';
                }, 1000);
            }
        });
    });
});

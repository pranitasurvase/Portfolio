// Initialize Particles.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#4e54c8'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#4e54c8',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Initialize AOS
AOS.init({
    duration: 1000,
    easing: 'ease-out',
    once: true,
    offset: 100
});

// Typed.js initialization
const typed = new Typed('.typed-text', {
    strings: [
        'Full Stack Developer',
        'Web Developer',
        'Software Engineer',
        'Java Developer '
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
    showCursor: true,
    cursorChar: '|'
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Navbar color change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const submitBtn = contactForm.querySelector('.submit-btn');
const successModal = new bootstrap.Modal(document.getElementById('successModal'));

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show loading state
    submitBtn.classList.add('loading');
    
    // Simulate form submission (replace with actual form submission)
    setTimeout(() => {
        submitBtn.classList.remove('loading');
        successModal.show();
        this.reset();
        
        // Reset floating labels
        document.querySelectorAll('.form-control').forEach(input => {
            input.classList.remove('filled');
        });
    }, 2000);
});

// Handle floating labels
document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('focus', () => {
        input.classList.add('filled');
    });
    
    input.addEventListener('blur', () => {
        if (!input.value) {
            input.classList.remove('filled');
        }
    });
});

// Add hover animation for contact items
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add ripple effect to submit button
document.querySelector('.submit-btn').addEventListener('click', function(e) {
    let ripple = document.createElement('span');
    ripple.classList.add('ripple');
    this.appendChild(ripple);
    
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    setTimeout(() => {
        ripple.remove();
    }, 1000);
});

// Add social links hover animation
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) rotate(360deg)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add hover effect to skill cards
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero-section');
    const scrolled = window.pageYOffset;
    heroSection.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Add active class to current section in navbar
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const id = section.getAttribute('id');
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Initialize custom cursor
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', function(e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Certificate preview functionality
const certificateModal = new bootstrap.Modal(document.getElementById('certificateModal'));
const certificateFrame = document.getElementById('certificateFrame');

document.querySelectorAll('.btn-preview').forEach(button => {
    button.addEventListener('click', function() {
        const certificatePath = 'assets/certificates/' + this.dataset.certificate;
        certificateFrame.src = certificatePath;
        certificateModal.show();
    });
});

// Add hover effect to certificate cards
document.querySelectorAll('.certificate-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        const icon = this.querySelector('.certificate-icon');
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(-5deg)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        const icon = this.querySelector('.certificate-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0)';
        }
    });
});

// Add loading animation for certificate previews
certificateFrame.addEventListener('load', function() {
    this.style.opacity = '1';
});

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        easing: 'ease-out',
        once: true,
        offset: 100
    });
    
    // Initialize other animations and features
    // ... rest of the initialization code ...
});

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-grid [data-category]');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        projectItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                item.style.animation = 'projectFadeIn 0.5s ease forwards';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Project Card Hover Effect
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const techStack = card.querySelector('.project-tech-stack');
        const tags = techStack.querySelectorAll('.tech-tag');
        
        tags.forEach((tag, index) => {
            tag.style.transitionDelay = `${index * 0.1}s`;
        });
    });

    card.addEventListener('mouseleave', () => {
        const tags = card.querySelectorAll('.tech-tag');
        tags.forEach(tag => {
            tag.style.transitionDelay = '0s';
        });
    });
});

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes projectFadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Certificate Section Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Initialize certificate cards with staggered animation
    const certificateCards = document.querySelectorAll('.certificate-card');
    certificateCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Handle certificate card flipping
    const flipButtons = document.querySelectorAll('.flip-btn');
    flipButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = btn.closest('.certificate-card');
            const inner = card.querySelector('.certificate-inner');
            inner.style.transform = inner.style.transform === 'rotateY(180deg)' 
                ? 'rotateY(0deg)' 
                : 'rotateY(180deg)';
        });
    });

    // Handle verification modal
    const verifyButtons = document.querySelectorAll('.btn-verify');
    const verificationModal = new bootstrap.Modal(document.getElementById('verificationModal'));
    
    verifyButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const card = btn.closest('.certificate-card');
            const certTitle = card.querySelector('.certificate-content h3').textContent;
            const certDate = card.dataset.issueDate;
            const certId = card.dataset.certId;
            const certAuthority = card.dataset.authority;

            // Update modal content
            const modal = document.getElementById('verificationModal');
            modal.querySelector('.cert-title').textContent = certTitle;
            modal.querySelector('.cert-date').textContent = certDate;
            modal.querySelector('.cert-id').textContent = certId;
            modal.querySelector('.cert-authority').textContent = certAuthority;

            // Show loading state
            const verificationDetails = modal.querySelector('.verification-details');
            verificationDetails.classList.add('certificate-loading');

            // Simulate verification process
            setTimeout(() => {
                verificationDetails.classList.remove('certificate-loading');
                // Add verified status
                const verificationIcon = modal.querySelector('.verification-icon i');
                verificationIcon.className = 'fas fa-check-circle';
                modal.querySelector('.verification-status').textContent = 'Certificate Verified';
                modal.querySelector('.verification-status').style.color = '#28a745';
            }, 1500);

            verificationModal.show();
        });
    });

    // Reset modal state when hidden
    document.getElementById('verificationModal').addEventListener('hidden.bs.modal', () => {
        const modal = document.getElementById('verificationModal');
        const verificationIcon = modal.querySelector('.verification-icon i');
        verificationIcon.className = 'fas fa-spinner fa-spin';
        modal.querySelector('.verification-status').textContent = 'Verifying Certificate...';
        modal.querySelector('.verification-status').style.color = '#666';
    });

    // Handle certificate preview
    const previewButtons = document.querySelectorAll('.btn-preview');
    previewButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const certUrl = btn.getAttribute('href');
            window.open(certUrl, '_blank');
        });
    });

    // Add hover animation for learning points
    const learningPoints = document.querySelectorAll('.learning-points li');
    learningPoints.forEach((point, index) => {
        point.style.opacity = '0';
        point.style.transform = 'translateX(-20px)';
        point.style.transition = 'all 0.3s ease';
    });

    // Show learning points with staggered animation when card is flipped
    document.querySelectorAll('.certificate-card').forEach(card => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const points = card.querySelectorAll('.learning-points li');
                    points.forEach((point, index) => {
                        setTimeout(() => {
                            point.style.opacity = '1';
                            point.style.transform = 'translateX(0)';
                        }, index * 100);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(card);
    });
});

// Footer Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const input = this.querySelector('input[type="email"]');
        const button = this.querySelector('.btn-subscribe');
        
        if (input.value) {
            // Add loading state
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            button.disabled = true;
            
            // Simulate subscription process
            setTimeout(() => {
                button.innerHTML = '<i class="fas fa-check"></i>';
                input.value = '';
                
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'newsletter-success';
                successMessage.innerHTML = 'Thank you for subscribing!';
                this.appendChild(successMessage);
                
                // Remove success message after 3 seconds
                setTimeout(() => {
                    successMessage.remove();
                    button.innerHTML = '<i class="fas fa-paper-plane"></i>';
                    button.disabled = false;
                }, 3000);
            }, 1500);
        }
    });
}

// Update current year in footer
const currentYearSpan = document.querySelector('.current-year');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// Add hover effect to footer contact items
document.querySelectorAll('.footer-contact .contact-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const icon = this.querySelector('i');
        icon.style.transform = 'scale(1.2) rotate(5deg)';
    });
    
    item.addEventListener('mouseleave', function() {
        const icon = this.querySelector('i');
        icon.style.transform = 'scale(1) rotate(0)';
    });
});

// Add staggered animation to footer links
document.querySelectorAll('.footer-links ul li').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        item.style.transition = 'all 0.3s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
    }, index * 100);
});

// Add ripple effect to social links
document.querySelectorAll('.footer-social .social-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        this.appendChild(ripple);
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = e.clientX - rect.left - size/2 + 'px';
        ripple.style.top = e.clientY - rect.top - size/2 + 'px';
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add scroll to top functionality
const createScrollTopButton = () => {
    const button = document.createElement('button');
    button.className = 'scroll-top-btn';
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.classList.add('show');
        } else {
            button.classList.remove('show');
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

createScrollTopButton();

// Header Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    const navProgress = document.querySelector('.progress-bar');
    
    window.addEventListener('scroll', () => {
        // Add scrolled class to navbar
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update progress bar
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        navProgress.style.width = scrolled + '%';
    });
    
    // Active Link Update
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveLink() {
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    
    // Smooth Scroll
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    document.querySelector('.navbar-toggler').click();
                }
            }
        });
    });
    
    // Mobile Menu Animation
    const menuIcon = document.querySelector('.menu-icon');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    navbarToggler.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
    });
}); 
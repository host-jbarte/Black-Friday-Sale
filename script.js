// Product Button Hover Effects
document.querySelectorAll('[data-product-button]').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#e6c400';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#FFDB00';
    });
});

// Product Card Hover Effects
document.querySelectorAll('[data-product-card]').forEach(card => {
    const image = card.querySelector('[data-product-image]');
    
    card.addEventListener('mouseenter', () => {
        if (image) {
            image.style.transform = 'scale(1.05)';
            image.style.transitionProperty = 'transform';
            image.style.transitionDuration = '0.3s';
            image.style.transitionTimingFunction = 'ease';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        if (image) {
            image.style.transform = 'scale(1)';
        }
    });
});

// Testimonial Card Hover Effects
document.querySelectorAll('[data-testimonial-card]').forEach(card => {
    const image = card.querySelector('[data-testimonial-image]');
    
    card.addEventListener('mouseenter', () => {
        if (image) {
            image.style.transform = 'scale(1.03)';
            image.style.transitionProperty = 'transform';
            image.style.transitionDuration = '0.3s';
            image.style.transitionTimingFunction = 'ease';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        if (image) {
            image.style.transform = 'scale(1)';
        }
    });
});

// Logo Link Hover Effect
document.querySelectorAll('[data-logo-link]').forEach(link => {
    const logo = link.querySelector('[data-logo]');
    
    link.addEventListener('mouseenter', () => {
        if (logo) {
            logo.style.transform = 'scale(1.1)';
            logo.style.transitionProperty = 'transform';
            logo.style.transitionDuration = '0.3s';
            logo.style.transitionTimingFunction = 'ease';
        }
    });
    
    link.addEventListener('mouseleave', () => {
        if (logo) {
            logo.style.transform = 'scale(1)';
        }
    });
});

// Social Icon Hover Effects
document.querySelectorAll('[data-social-icon]').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.opacity = '0.7';
        icon.style.transitionProperty = 'opacity';
        icon.style.transitionDuration = '0.3s';
        icon.style.transitionTimingFunction = 'ease';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.opacity = '1';
    });
});

// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Initialize any dynamic content on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded successfully');
    
    // Add loaded class for potential CSS animations
    document.body.classList.add('loaded');
});

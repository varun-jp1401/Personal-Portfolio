// Smooth scrolling
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Tab functionality
function showTab(tabId) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Show selected tab content
    document.getElementById(tabId).classList.add('active');
    
    // Add active class to clicked tab
    event.target.classList.add('active');
}

// Scroll animations
function handleScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });

    // Update scroll indicator
    const scrollIndicator = document.getElementById('scrollIndicator');
    const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    scrollIndicator.style.width = scrolled + '%';
}

// ✅ Updated form submission for Web3Forms
document.querySelector('.contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const form = this;
    const formData = new FormData(form);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        if (response.ok) {
            alert("✅ Thank you! Your message has been sent.");
            form.reset();
        } else {
            alert("❌ Oops! Something went wrong. Please try again.");
        }
    } catch (error) {
        alert("⚠️ Network error. Please check your connection.");
    }
});

// Event listeners
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// Add hover effects to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(0, 0, 0, 0.95)';
        nav.style.padding = '15px 50px';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.9)';
        nav.style.padding = '20px 50px';
    }
});

// Add typing effect to hero text
function typeWriter(element, text, speed = 100, callback) {
    let i = 0;
    element.textContent = '';
    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else if (callback) {
            callback();
        }
    }
    typing();
}

window.addEventListener('load', function() {
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-title');
        heroTitle.innerHTML = `Hi, I'm <span class="hero-name"></span>`;
        const heroName = heroTitle.querySelector('.hero-name');
        
        // Type inside the span
        typeWriter(heroName, "Varun John Paul", 50);
    }, 2000);
});

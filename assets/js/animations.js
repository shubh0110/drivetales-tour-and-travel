/**
 * ===========================================
 * animations.js — Premium Animation Engine
 * Handles scroll-triggered animations, parallax, and interactive effects
 * Inspired by Lusion.co and premium interactive sites
 * ===========================================
 */

'use strict';

// ==========================================
// SCROLL-TRIGGERED ANIMATION HANDLER
// ==========================================

class ScrollAnimationEngine {
  constructor() {
    this.observerOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px', // trigger 100px before element enters viewport
      threshold: 0.1
    };
    
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      this.observerOptions
    );
    
    this.init();
  }

  init() {
    // Find all scroll-animate elements
    const scrollElements = document.querySelectorAll('.scroll-animate');
    scrollElements.forEach(el => {
      this.observer.observe(el);
    });
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        // Optional: unobserve after animation
        // this.observer.unobserve(entry.target);
      } else {
        // Uncomment to re-trigger animation on scroll up
        // entry.target.classList.remove('in-view');
      }
    });
  }

  // Public API to observe additional elements dynamically
  observe(element) {
    if (element) {
      this.observer.observe(element);
    }
  }

  observeAll(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => this.observer.observe(el));
  }
}

// ==========================================
// PARALLAX EFFECT HANDLER
// ==========================================

class ParallaxEngine {
  constructor() {
    this.parallaxElements = document.querySelectorAll('[data-parallax]');
    this.speed = 0;
    
    if (this.parallaxElements.length > 0) {
      window.addEventListener('scroll', this.handleScroll.bind(this), { passive: true });
    }
  }

  handleScroll() {
    const scrollY = window.scrollY;
    
    this.parallaxElements.forEach(element => {
      const speed = element.getAttribute('data-parallax') || 0.5;
      const yPos = scrollY * speed;
      element.style.transform = `translateY(${yPos}px)`;
    });
  }

  // Dynamic parallax for images
  initImageParallax() {
    const parallaxImages = document.querySelectorAll('[data-parallax-image]');
    parallaxImages.forEach(img => {
      let ticking = false;
      
      window.addEventListener('scroll', () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            const speed = img.getAttribute('data-parallax-image') || 0.5;
            img.style.transform = `translateY(${scrollY * speed}px)`;
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });
    });
  }
}

// ==========================================
// STAGGERED ANIMATION HANDLER
// ==========================================

class StaggeredAnimationEngine {
  constructor() {
    this.staggerContainers = document.querySelectorAll('.stagger-container');
    this.init();
  }

  init() {
    this.staggerContainers.forEach(container => {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const items = entry.target.querySelectorAll('.stagger-item');
              items.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add('animate');
                }, index * 100);
              });
              // Stop observing after animation
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
      );
      
      observer.observe(container);
    });
  }

  // Manual trigger for staggered animations
  triggerStagger(selector, delayBetween = 100) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate');
      }, index * delayBetween);
    });
  }
}

// ==========================================
// SMOOTH SCROLL HANDLER
// ==========================================

class SmoothScrollEngine {
  constructor() {
    this.setupSmoothAnchors();
  }

  setupSmoothAnchors() {
    // Find all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        
        // Skip if it's just '#'
        if (href === '#') return;
        
        const target = document.querySelector(href);
        
        if (target) {
          e.preventDefault();
          
          // Calculate offset (accounting for fixed header)
          const headerHeight = document.querySelector('[data-header]')?.offsetHeight || 0;
          const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }
}

// ==========================================
// CURSOR INTERACTION ENGINE
// ==========================================

class CursorInteractionEngine {
  constructor() {
    this.mouse = { x: 0, y: 0 };
    this.interactiveElements = document.querySelectorAll('[data-interactive]');
    this.init();
  }

  init() {
    if (this.interactiveElements.length === 0) return;
    
    document.addEventListener('mousemove', this.handleMouseMove.bind(this));
  }

  handleMouseMove(e) {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
    
    this.interactiveElements.forEach(element => {
      const intensity = element.getAttribute('data-interactive') || 0.1;
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distX = (this.mouse.x - centerX) * intensity;
      const distY = (this.mouse.y - centerY) * intensity;
      
      element.style.transform = `translate(${distX}px, ${distY}px)`;
    });
  }
}

// ==========================================
// TEXT REVEAL ANIMATION HANDLER
// ==========================================

class TextRevealEngine {
  constructor() {
    this.textElements = document.querySelectorAll('[data-text-reveal]');
    this.init();
  }

  init() {
    this.textElements.forEach(element => {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.revealText(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5, rootMargin: '0px 0px -100px 0px' }
      );
      
      observer.observe(element);
    });
  }

  revealText(element) {
    const type = element.getAttribute('data-text-reveal') || 'word';
    const text = element.textContent;
    
    if (type === 'word') {
      this.revealByWord(element, text);
    } else if (type === 'char') {
      this.revealByChar(element, text);
    } else if (type === 'line') {
      this.revealByLine(element, text);
    }
  }

  revealByWord(element, text) {
    const words = text.split(' ');
    let html = '';
    
    words.forEach((word, index) => {
      html += `<span style="animation: textReveal 0.4s ease-out forwards; animation-delay: ${index * 0.08}s; display: inline-block; margin-right: 0.3em;">${word}</span> `;
    });
    
    element.innerHTML = html.trim();
  }

  revealByChar(element, text) {
    let html = '';
    
    text.split('').forEach((char, index) => {
      html += `<span style="animation: textReveal 0.3s ease-out forwards; animation-delay: ${index * 0.02}s; display: inline-block;">${char === ' ' ? '&nbsp;' : char}</span>`;
    });
    
    element.innerHTML = html;
  }

  revealByLine(element, text) {
    const lines = text.split('\n');
    let html = '';
    
    lines.forEach((line, index) => {
      html += `<div style="animation: textReveal 0.4s ease-out forwards; animation-delay: ${index * 0.1}s;">${line}</div>`;
    });
    
    element.innerHTML = html;
  }
}

// ==========================================
// COUNTER ANIMATION ENGINE
// ==========================================

class CounterEngine {
  constructor() {
    this.counterElements = document.querySelectorAll('[data-counter]');
    this.init();
  }

  init() {
    this.counterElements.forEach(element => {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.animateCounter(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      
      observer.observe(element);
    });
  }

  animateCounter(element) {
    const target = parseInt(element.getAttribute('data-counter'), 10);
    const duration = parseInt(element.getAttribute('data-duration')) || 2000;
    const increment = target / (duration / 16); // 16ms per frame
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current);
      }
    }, 16);
  }
}

// ==========================================
// HOVER EFFECT HANDLER
// ==========================================

class HoverEffectEngine {
  constructor() {
    this.hoverElements = document.querySelectorAll('[data-hover-effect]');
    this.init();
  }

  init() {
    this.hoverElements.forEach(element => {
      const effect = element.getAttribute('data-hover-effect');
      
      element.addEventListener('mouseenter', () => {
        element.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
        
        switch(effect) {
          case 'scale':
            element.style.transform = 'scale(1.05)';
            break;
          case 'lift':
            element.style.transform = 'translateY(-8px)';
            element.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            break;
          case 'glow':
            element.style.boxShadow = '0 0 30px rgba(52, 152, 219, 0.4)';
            break;
          case 'rotate':
            element.style.transform = 'rotate(2deg) scale(1.05)';
            break;
        }
      });
      
      element.addEventListener('mouseleave', () => {
        element.style.transform = '';
        element.style.boxShadow = '';
      });
    });
  }
}

// ==========================================
// SCROLL PROGRESS INDICATOR
// ==========================================

class ScrollProgressEngine {
  constructor() {
    this.progressBar = document.querySelector('[data-scroll-progress]');
    
    if (this.progressBar) {
      window.addEventListener('scroll', this.updateProgress.bind(this));
    }
  }

  updateProgress() {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    
    this.progressBar.style.width = scrolled + '%';
  }
}

// ==========================================
// CUSTOM CURSOR HANDLER
// ==========================================

class CustomCursor {
  constructor() {
    this.cursorCar = null;
    this.hoverTargets = [];
    this.init();
  }

  init() {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    this.cursorCar = document.createElement('div');
    this.cursorCar.className = 'cursor-car';
    this.cursorCar.style.backgroundImage = "url('./logo.svg')";
    this.cursorCar.style.backgroundRepeat = 'no-repeat';
    this.cursorCar.style.backgroundSize = 'contain';
    this.cursorCar.style.backgroundPosition = 'center';
    document.body.appendChild(this.cursorCar);

    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener('pointermove', (event) => {
      const { clientX: x, clientY: y } = event;

      this.cursorCar.style.left = `${x}px`;
      this.cursorCar.style.top = `${y}px`;
    });

    const interactiveSelectors = [
      'a',
      'button',
      '.btn',
      '.nav-item',
      '.cars-card',
      '.bus-card',
      '.feature-item',
      '.stat-item',
      '.testimonial-card',
      '.footer-link',
      '.gallery-item'
    ];

    interactiveSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(element => {
        element.addEventListener('mouseenter', () => {
          document.body.classList.add('cursor-hover');
        });

        element.addEventListener('mouseleave', () => {
          document.body.classList.remove('cursor-hover');
        });
      });
    });
  }
}

const initCustomCursor = () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      new CustomCursor();
    });
  } else {
    new CustomCursor();
  }
};

// ==========================================
// INITIALIZATION
// ==========================================

// Initialize all animation engines when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Scroll animations
  new ScrollAnimationEngine();
  
  // Parallax effects
  new ParallaxEngine();
  
  // Staggered animations
  new StaggeredAnimationEngine();
  
  // Smooth scrolling
  new SmoothScrollEngine();
  
  // Cursor interactions
  new CursorInteractionEngine();
  
  // Text reveal
  new TextRevealEngine();
  
  // Counter animations
  new CounterEngine();
  
  // Hover effects
  new HoverEffectEngine();
  
  // Scroll progress
  new ScrollProgressEngine();
  
  // Custom cursor
  new CustomCursor();
  
  // Console feedback
  console.log('✨ Animation Engine Initialized - Premium Effects Active');
});

// Expose engines to global scope for manual control if needed
window.AnimationEngine = {
  ScrollAnimationEngine,
  ParallaxEngine,
  StaggeredAnimationEngine,
  SmoothScrollEngine,
  CursorInteractionEngine,
  TextRevealEngine,
  CounterEngine,
  HoverEffectEngine,
  ScrollProgressEngine
};

initCustomCursor();

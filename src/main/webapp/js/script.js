// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    loadTrainingInfo();
    loadCourseContent();
    initializeAnimations();
    setupNavigation();
    setupIntersectionObserver();
}

// Load Training Information
async function loadTrainingInfo() {
    try {
        const response = await fetch('/devops-training-portal/api/training-info');
        const data = await response.json();
        
        // Update training info dynamically if needed
        console.log('Training Info Loaded:', data);
    } catch (error) {
        console.error('Error loading training info:', error);
    }
}

// Load Course Content
async function loadCourseContent() {
    try {
        const response = await fetch('/devops-training-portal/api/course-content');
        const data = await response.json();
        
        renderCourseCards(data);
    } catch (error) {
        console.error('Error loading course content:', error);
        // Fallback to static content
        renderFallbackCourseCards();
    }
}

// Render Course Cards
function renderCourseCards(courseData) {
    const coursesGrid = document.getElementById('coursesGrid');
    
    if (!coursesGrid) return;
    
    const courses = ['jenkins', 'docker', 'kubernetes', 'terraform'];
    
    courses.forEach((courseKey, index) => {
        const course = courseData[courseKey];
        if (!course) return;
        
        const courseCard = createCourseCard(course, index);
        coursesGrid.appendChild(courseCard);
    });
}

// Create Course Card Element
function createCourseCard(course, index) {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.style.animationDelay = `${index * 0.2}s`;
    
    const conceptsList = course.concepts.map(concept => 
        `<li class="concept-item">${concept}</li>`
    ).join('');
    
    card.innerHTML = `
        <div class="course-header">
            <div class="course-icon">${course.icon}</div>
            <h3 class="course-title">${course.title}</h3>
        </div>
        <ul class="concepts-list">
            ${conceptsList}
        </ul>
    `;
    
    return card;
}

// Fallback Course Cards (in case API fails)
function renderFallbackCourseCards() {
    const fallbackData = {
        jenkins: {
            title: "Jenkins - CI/CD Automation",
            icon: "🚀",
            concepts: [
                "Pipeline as Code (Jenkinsfile)",
                "Blue Ocean Plugin",
                "Multi-branch Pipelines",
                "Webhook Integration",
                "Build Triggers & Scheduling",
                "Plugin Management",
                "Distributed Builds (Master-Slave)",
                "Security & RBAC",
                "Pipeline Debugging",
                "Integration with Git/SCM"
            ]
        },
        docker: {
            title: "Docker - Containerization",
            icon: "🐳",
            concepts: [
                "Container Lifecycle Management",
                "Dockerfile Best Practices",
                "Multi-stage Builds",
                "Docker Compose",
                "Volume Management",
                "Network Configuration",
                "Registry Operations (DockerHub, ECR)",
                "Container Security",
                "Resource Optimization",
                "Monitoring & Logging"
            ]
        },
        kubernetes: {
            title: "Kubernetes - Container Orchestration",
            icon: "☸️",
            concepts: [
                "Pod, Service, Deployment",
                "ConfigMaps & Secrets",
                "Persistent Volumes",
                "Ingress Controllers",
                "RBAC & Security Policies",
                "Helm Charts",
                "Cluster Autoscaling",
                "Service Mesh (Istio)",
                "Monitoring with Prometheus",
                "GitOps with ArgoCD"
            ]
        },
        terraform: {
            title: "Terraform - Infrastructure as Code",
            icon: "🏗️",
            concepts: [
                "HCL Configuration Language",
                "State Management",
                "Modules & Workspaces",
                "Provider Configuration",
                "Remote State (S3, DynamoDB)",
                "Plan, Apply, Destroy Workflow",
                "Resource Dependencies",
                "Variable Management",
                "Output Values",
                "Cloud Provider Integration (AWS, Azure, GCP)"
            ]
        }
    };
    
    renderCourseCards(fallbackData);
}

// Initialize Animations
function initializeAnimations() {
    // Add stagger animation to course cards
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Add floating animation to hero icons
    const floatingIcons = document.querySelectorAll('.floating-icon');
    floatingIcons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 1}s`;
    });
}

// Setup Navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
    
    // Update navbar on scroll
    window.addEventListener('scroll', updateNavbar);
}

// Scroll to Section
function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Update Navbar on Scroll
function updateNavbar() {
    const navbar = document.querySelector('.navbar');
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {
        navbar.style.background = 'rgba(15, 20, 25, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(15, 20, 25, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    }
}

// Setup Intersection Observer for Animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Special handling for course cards
                if (entry.target.classList.contains('course-card')) {
                    const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animatedElements = document.querySelectorAll(
        '.course-card, .highlight-card, .instructor-profile, .hero-stats'
    );
    
    animatedElements.forEach(el => observer.observe(el));
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add smooth scrolling to CTA button
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            scrollToSection('courses');
        });
    }
});

// Performance optimizations
window.addEventListener('scroll', debounce(updateNavbar, 10));

// Add loading states and error handling
function showLoading(element) {
    element.innerHTML = '<div class="loading-spinner"></div>';
}

function showError(element, message) {
    element.innerHTML = `<div class="error-message">${message}</div>`;
}

// Export functions for global access
window.scrollToSection = scrollToSection;
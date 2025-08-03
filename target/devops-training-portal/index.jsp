<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DevOps Training Portal - Batch 06</title>
    <link rel="stylesheet" href="css/styles.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-brand">
                <i class="fas fa-graduation-cap"></i>
                <span>JDK Batch 06</span>
            </div>
            <div class="nav-menu">
                <a href="#home" class="nav-link">Home</a>
                <a href="#courses" class="nav-link">Courses</a>
                <a href="#instructor" class="nav-link">Instructor</a>
                <a href="#contact" class="nav-link">Contact</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-background">
            <div class="floating-icons">
                <i class="fab fa-jenkins floating-icon" style="--delay: 0s;"></i>
                <i class="fab fa-docker floating-icon" style="--delay: 1s;"></i>
                <i class="fas fa-dharmachakra floating-icon" style="--delay: 2s;"></i>
                <i class="fas fa-cubes floating-icon" style="--delay: 3s;"></i>
            </div>
        </div>
        <div class="hero-content">
            <div class="hero-text">
                <h1 class="hero-title">
                    Welcome to 
                    <span class="gradient-text">JDKT Training</span>
                    <div class="batch-badge">Batch 06</div>
                </h1>
                <div class="instructor-info">
                    <div class="instructor-avatar">
                        <i class="fas fa-user-tie"></i>
                    </div>
                    <div class="instructor-details">
                        <h2>I'm Kastro Kiran V</h2>
                        <p>AWS and DevOps Trainer</p>
                    </div>
                </div>
                <div class="hero-stats">
                    <div class="stat-item">
                        <span class="stat-number">800+</span>
                        <span class="stat-label">Students Trained</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">8</span>
                        <span class="stat-label">Weeks Program</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">100%</span>
                        <span class="stat-label">Hands-on Labs</span>
                    </div>
                </div>
                <button class="cta-button" onclick="scrollToSection('courses')">
                    <i class="fas fa-rocket"></i>
                    Start Your Journey
                </button>
            </div>
        </div>
    </section>

    <!-- Course Cards Section -->
    <section id="courses" class="courses-section">
        <div class="section-header">
            <h2>Master the DevOps Stack</h2>
            <p>Comprehensive training on industry-leading DevOps tools and practices</p>
        </div>
        
        <div class="courses-grid" id="coursesGrid">
            <!-- Course cards will be dynamically loaded here -->
        </div>
    </section>

    <!-- Instructor Section -->
    <section id="instructor" class="instructor-section">
        <div class="instructor-container">
            <div class="instructor-profile">
                <div class="profile-image">
                    <i class="fas fa-user-graduate"></i>
                </div>
                <div class="profile-content">
                    <h3>Kastro Kiran V</h3>
                    <div class="profile-badges">
                        <span class="badge">AWS Certified</span>
                        <span class="badge">Kubernetes Expert</span>
                        <span class="badge">Docker Captain</span>
                        <span class="badge">Jenkins Specialist</span>
                    </div>
                    <p>With over 6 years of experience in DevOps and Cloud Engineering, I've helped numerous organizations transform their development and deployment processes. My hands-on approach ensures students gain practical skills that are immediately applicable in real-world scenarios.</p>
                    
                    <div class="expertise-areas">
                        <h4>Areas of Expertise</h4>
                        <ul>
                            <li><i class="fas fa-check-circle"></i> CI/CD Pipeline Architecture</li>
                            <li><i class="fas fa-check-circle"></i> Cloud Native Applications</li>
                            <li><i class="fas fa-check-circle"></i> Infrastructure Automation</li>
                            <li><i class="fas fa-check-circle"></i> Container Security</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Training Highlights -->
    <section class="highlights-section">
        <div class="highlights-container">
            <h3>Why Choose Our Training?</h3>
            <div class="highlights-grid">
                <div class="highlight-card">
                    <i class="fas fa-laptop-code"></i>
                    <h4>Hands-on Labs</h4>
                    <p>Real-world projects and scenarios</p>
                </div>
                <div class="highlight-card">
                    <i class="fas fa-certificate"></i>
                    <h4>Industry Level Training</h4>
                    <p>Learn what industry expects from you</p>
                </div>
                <div class="highlight-card">
                    <i class="fas fa-users"></i>
                    <h4>Mock Interviews</h4>
                    <p>Personal attention and mentoring</p>
                </div>
                <div class="highlight-card">
                    <i class="fas fa-headset"></i>
                    <h4>24/7 Support</h4>
                    <p>Continuous learning assistance</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h4>Learn With KASTRO</h4>
                <p>Empowering the next generation of DevOps professionals</p>
            </div>
            <div class="footer-section">
                <h4>Contact</h4>
                <p><i class="fas fa-envelope"></i> learnwithkastro@gmail.com</p>
                <p><i class="fas fa-phone"></i> +1 (555) 123-4567</p>
            </div>
            <div class="footer-section">
                <h4>Follow Us</h4>
                <div class="social-links">
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-github"></i></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 | YouTube/LearnWithKASTRO | All rights reserved.</p>
        </div>
    </footer>

    <script src="js/script.js"></script>
</body>
</html>
// Portfolio Website - Consolidated JavaScript
// Author: Priyanshu Ranka

// ==============================================
// COMMON FUNCTIONALITY (All Pages)
// ==============================================

// Mobile Navigation Toggle
function initMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
}

// Header Background Change on Scroll
function initHeaderScrollEffect() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(10, 10, 10, 0.98)';
                header.style.borderBottomColor = 'rgba(0, 212, 255, 0.3)';
            } else {
                header.style.background = 'rgba(10, 10, 10, 0.95)';
                header.style.borderBottomColor = 'rgba(0, 212, 255, 0.1)';
            }
        }
    });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
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
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            if (navLinks) {
                navLinks.classList.remove('active');
            }
        });
    });
}

// ==============================================
// HOME PAGE SPECIFIC
// ==============================================

function initHomePage() {
    // Scroll indicator click
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const quickStats = document.querySelector('.quick-stats');
    
    if (scrollIndicator && quickStats) {
        scrollIndicator.addEventListener('click', () => {
            quickStats.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
}

// ==============================================
// ABOUT PAGE SPECIFIC
// ==============================================

function initAboutPage() {
    // Smooth scrolling for scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const mainContent = document.querySelector('.main-content');
    
    if (scrollIndicator && mainContent) {
        scrollIndicator.addEventListener('click', () => {
            mainContent.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Timeline animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate timeline items
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });

    // Animate story cards
    document.querySelectorAll('.story-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `all 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });

    // Animate skill categories
    document.querySelectorAll('.skill-category').forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(50px)';
        category.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(category);
    });

    // Skill tag hover effect
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.boxShadow = '0 5px 15px rgba(0, 212, 255, 0.4)';
        });

        tag.addEventListener('mouseleave', () => {
            tag.style.boxShadow = 'none';
        });
    });
}

// ==============================================
// PROJECTS PAGE SPECIFIC
// ==============================================

function initProjectsPage() {
    // Project data for modal
    const projectData = {
        'video-special-effects': {
            title: 'Real-Time Video Special Effects',
            subtitle: 'Computer Vision • OpenCV • C++',
            description: 'This comprehensive video special effects project implements real-time image and video processing applications using OpenCV and C++. The system features dual functionality for both static image processing and live video stream filtering with an extensive collection of visual effects including grayscale conversion, blur filters, edge detection, face recognition, and depth-based background manipulation.',
            tech: ['C++', 'OpenCV', 'ONNX Runtime', 'Computer Vision', 'Image Processing', 'Face Detection', 'Depth Estimation'],
            features: [
                'Comprehensive filter library with 15+ visual effects including custom greyscale, sepia, blur variants, and Sobel edge detection',
                'Optimized blur implementation with three algorithms showing performance improvements from 0.1229s to 0.0026s',
                'Advanced face processing with Cascade Classifier for detection and privacy-focused redaction using Gaussian blur',
                'Depth-based background blur using Depth Anything V2 ONNX model for monocular depth estimation',
                'Real-time video recording with simultaneous filter application and OpenCV VideoWriter integration',
                'Interactive file management with intuitive load/save operations supporting multiple formats (JPG, PNG, AVI)'
            ],
            challenges: 'The primary challenge was achieving real-time performance while maintaining filter quality across different processing approaches. This was solved by implementing separable kernel techniques that reduced computational complexity from O(n²) to O(2n) for blur operations. Memory management issues with different data types were addressed through careful 16-bit intermediate calculations.',
            links: [
                { text: 'GitHub Repository', url: 'https://github.com/AwesomeYash/Project-1--Video-special-effects', icon: 'fab fa-github', primary: true },
                { text: 'Project Report', url: 'https://github.com/AwesomeYash/Project-1--Video-special-effects/blob/main/Project%20Report.pdf', icon: 'fas fa-file-alt', primary: false },
                { text: 'Demo Videos', url: 'https://github.com/AwesomeYash/Project-1--Video-special-effects/blob/main/Filesystem_P1.mov', icon: 'fas fa-play', primary: false }
            ]
        },

        'neural-style-transfer': {
            title: 'Neural Style Transfer - Implementation and Analysis',
            subtitle: 'Deep Learning • PyTorch • Computer Vision',
            description: 'This project implements a comprehensive PyTorch-based Neural Style Transfer algorithm following the seminal work by Gatys et al. The system enables artistic style transfer by combining content and style representations from different images using pre-trained VGG19 features. The implementation features systematic hyperparameter experimentation capabilities, allowing analysis of how different noise ratios, learning rates, and loss weights affect stylization quality.',
            tech: ['PyTorch', 'Computer Vision', 'Deep Learning', 'VGG19', 'L-BFGS', 'Image Processing', 'Feature Extraction'],
            features: [
                'Multi-layer style representation extracting features from multiple VGG19 layers using Gram matrices to capture texture patterns',
                'Flexible loss function architecture implementing weighted combination of content, style, and total variation losses',
                'Automated parameter experimentation with systematic hyperparameter exploration across noise ratios and learning rates',
                'Real-time progress monitoring saving intermediate results with loss history tracking and convergence visualization',
                'Configurable initialization strategy supporting variable noise ratios balancing creativity and structure preservation',
                'Comprehensive output management with parameter-tagged outputs, loss histories, and experiment reports'
            ],
            challenges: 'The primary challenge was balancing content preservation with effective style transfer across different parameter combinations. This was solved by implementing systematic experimentation with noise ratios and learning rates, discovering that medium values (0.4-0.6) provide optimal balance. Total variation regularization was added to prevent spatial artifacts.',
            links: [
                { text: 'GitHub Repository', url: 'https://github.com/AwesomeYash/Neural-Style-Transfer--Implementation-and-Analysis', icon: 'fab fa-github', primary: true },
                { text: 'Code Files', url: 'https://northeastern-my.sharepoint.com/:f:/g/personal/ranka_pr_northeastern_edu/EqywOadPP4RFkvkPk7wLTk4BHRzkHYn6GTZ4oKn82abkbA?e=QHnx0a', icon: 'fas fa-code', primary: false },
                { text: 'Output Examples', url: 'https://northeastern-my.sharepoint.com/:f:/g/personal/ranka_pr_northeastern_edu/EumQEPT9f7xOpbYX0k0eJ9IByUB7AwPh6fbNLuK1IGAHzA?e=Fz2EFj', icon: 'fas fa-images', primary: false }
            ]
        },

        'deep-networks-recognition': {
            title: 'Recognition using Deep Networks',
            subtitle: 'Deep Learning • PyTorch • Transfer Learning',
            description: 'This comprehensive deep learning project explores image classification through convolutional neural networks, covering digit recognition on MNIST and transfer learning for Greek character classification. The implementation demonstrates end-to-end deep learning workflow including CNN architecture design, model training with PyTorch, filter visualization for interpretability, and transfer learning adaptation.',
            tech: ['PyTorch', 'Deep Learning', 'CNN', 'Transfer Learning', 'Computer Vision', 'Data Analysis', 'Model Visualization'],
            features: [
                'Modular CNN architecture implementing convolutional neural network from scratch with customizable layers and operations',
                'Filter visualization and interpretability extracting learned filters from convolutional layers to understand feature detection',
                'Multi-dataset transfer learning adapting pre-trained MNIST model for Greek character recognition with fine-tuning',
                'Automated hyperparameter optimization with systematic experimentation framework and CSV logging',
                'Cross-domain evaluation testing model robustness on Fashion-MNIST, handwritten digits, and painted numbers',
                'Performance analysis pipeline generating accuracy plots, confusion matrices, and statistical summaries'
            ],
            challenges: 'The main challenge was achieving effective transfer learning from MNIST digits to Greek characters with different visual characteristics. This was addressed by strategically freezing early convolutional layers while fine-tuning classifier layers. Hyperparameter optimization was automated through systematic grid search with CSV tracking.',
            links: [
                { text: 'GitHub Repository', url: 'https://github.com/AwesomeYash/Project-5--Recognition-using-Deep-Networks', icon: 'fab fa-github', primary: true },
                { text: 'Project Report', url: 'https://github.com/AwesomeYash/Project-5--Recognition-using-Deep-Networks/blob/main/PRCV_Project_5_Report.pdf', icon: 'fas fa-file-alt', primary: false },
                { text: 'Code Files', url: 'https://github.com/AwesomeYash/Project-5--Recognition-using-Deep-Networks/tree/main/Code%20Files', icon: 'fas fa-code', primary: false }
            ]
        },

        'calibration-augmented-reality': {
            title: 'Calibration and Augmented Reality',
            subtitle: 'Computer Vision • C++ • 3D Graphics',
            description: 'This computer vision project implements a comprehensive camera calibration and augmented reality system using C++ and OpenCV. The system performs intrinsic and extrinsic camera parameter estimation through multiple calibration images, enabling accurate 3D-to-2D projection for augmented reality applications. The implementation includes advanced feature detection algorithms for keypoint extraction and visualization.',
            tech: ['C++', 'OpenCV', 'Computer Vision', 'SIFT', 'ORB', 'SURF', '3D Graphics', 'Camera Calibration'],
            features: [
                'Comprehensive camera calibration estimating intrinsic camera matrix and distortion coefficients using chessboard pattern detection',
                'Real-time 3D object projection transforming 3D coordinate points onto 2D image plane using computed calibration parameters',
                'Multi-algorithm feature detection implementing SIFT, ORB, and SURF with keypoint visualization for robust feature extraction',
                'Distortion correction pipeline applying computed coefficients to correct lens aberrations for accurate transformations',
                'Modular C++ architecture separating calibration, projection, and feature detection into distinct maintainable modules',
                'Persistent parameter storage saving calibration results to CSV format for reuse across sessions'
            ],
            challenges: 'The primary challenge was achieving accurate 3D-to-2D projection while handling lens distortion and varying lighting conditions. This was solved by implementing robust calibration using multiple chessboard images and applying distortion correction before projection. Feature detection stability was enhanced by providing multiple algorithm options.',
            links: [
                { text: 'GitHub Repository', url: 'https://github.com/AwesomeYash/Project-4--Calibration-and-Augmented-Reality', icon: 'fab fa-github', primary: true },
                { text: 'Project Report', url: 'https://github.com/AwesomeYash/Project-4--Calibration-and-Augmented-Reality/blob/main/Project%204%20Report.pdf', icon: 'fas fa-file-alt', primary: false },
                { text: 'Example Video', url: 'https://github.com/AwesomeYash/Project-4--Calibration-and-Augmented-Reality/blob/main/Task6.mp4', icon: 'fas fa-images', primary: false }
            ]
        },

        'content-based-image-retrieval': {
            title: 'Content-Based Image Retrieval System',
            subtitle: 'Computer Vision • Machine Learning • Feature Extraction',
            description: 'This comprehensive Content-Based Image Retrieval (CBIR) system implements multiple approaches for visual similarity search, combining classical feature extraction techniques with modern deep learning embeddings. The project systematically explores various retrieval methodologies including baseline SSD matching, histogram-based color analysis, multi-regional histogram comparison, texture-color fusion, and ResNet18 deep feature embeddings.',
            tech: ['C++', 'OpenCV', 'ResNet18', 'Computer Vision', 'Feature Engineering', 'Deep Learning', 'Image Processing'],
            features: [
                'Multi-modal feature extraction implementing diverse approaches including central patch baseline and rg-chromaticity histograms',
                'Regional multi-histogram analysis extracting histograms from different image regions using weighted distance metrics',
                'Deep learning integration utilizing pre-computed 512-dimensional ResNet18 feature vectors from ImageNet',
                'Hybrid color-texture fusion combining whole-image color histograms with Sobel-based texture descriptors',
                'Domain-specific customization implementing specialized feature vectors for category-specific retrieval (shoes)',
                'Comparative performance analysis systematically evaluating classical vs. deep learning approaches with quantitative metrics'
            ],
            challenges: 'The main challenge was balancing retrieval accuracy across different image types while maintaining computational efficiency. This was addressed by implementing multiple complementary approaches and comparing their performance systematically. The integration of classical features with deep embeddings provided robust performance.',
            links: [
                { text: 'GitHub Repository', url: 'https://github.com/AwesomeYash/Project-2--Content-based-Image-Retrieval', icon: 'fab fa-github', primary: true },
                { text: 'Project Report', url: 'https://github.com/AwesomeYash/Project-2--Content-based-Image-Retrieval/blob/main/PRCV_Project_2_Report.pdf', icon: 'fas fa-file-alt', primary: false },
                { text: 'Dataset Results', url: 'https://github.com/AwesomeYash/Project-2--Content-based-Image-Retrieval/tree/main/Outputs', icon: 'fas fa-images', primary: false }
            ]
        },

        'electrohub-docking-system': {
            title: 'Electrohub - Autonomous EV Docking System',
            subtitle: 'Machine Learning • Computer Vision • Autonomous Systems',
            description: 'This major project develops an autonomous docking system for electric vehicles using advanced computer vision and machine learning techniques. The system automates the EV charging process by implementing high-precision computer vision applications for detecting and localizing EV charging ports with 92% accuracy. The project combines deep learning object detection with real-time classification systems.',
            tech: ['Python', 'TensorFlow', 'Computer Vision', 'SSD-MobileNet-V2', 'LabelImg', 'Object Detection', 'Autonomous Systems'],
            features: [
                'High-precision object detection implementing SSD-MobileNet-V2 achieving 92% precision in detecting EV charging ports',
                'Comprehensive dataset creation with over 1,000 annotated images using LabelImg covering various charging port configurations',
                'Multi-modal segmentation pipeline combining object detection, instance segmentation, and semantic segmentation techniques',
                'Real-time classification system enabling automated charging port recognition with minimal latency',
                'Autonomous docking integration providing accurate positioning data for automated charging connector alignment',
                'Robust environmental adaptation handling varying lighting conditions and different EV models through comprehensive training'
            ],
            challenges: 'The primary challenge was achieving high accuracy across diverse EV models and environmental conditions while maintaining real-time performance. This was solved through extensive dataset annotation with 1,000+ images and implementing lightweight SSD-MobileNet-V2 architecture. Multi-modal segmentation techniques ensured reliable detection.',
            links: [
                { text: 'GitHub Repository', url: 'https://github.com/AwesomeYash/Electrohub-Docking-System-for-EVs', icon: 'fab fa-github', primary: true },
                { text: 'Research Documentation', url: 'https://github.com/AwesomeYash/Electrohub-Docking-System-for-EVs/tree/main/Reference%20Research%20papers', icon: 'fas fa-file-alt', primary: false },
                { text: 'Report', url: 'https://github.com/AwesomeYash/Electrohub-Docking-System-for-EVs/blob/main/Report/Final%20Report.pdf', icon: 'fas fa-university', primary: false }
            ]
        }
    };

    // Modal functionality
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close');
    const projectCards = document.querySelectorAll('.project-card');

    if (modal && closeBtn && projectCards.length > 0) {
        // Open modal when project card is clicked
        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                const projectId = card.getAttribute('data-project');
                const project = projectData[projectId];

                if (project) {
                    // Populate modal content
                    document.getElementById('modalTitle').textContent = project.title;
                    document.getElementById('modalSubtitle').textContent = project.subtitle;
                    document.getElementById('modalDescription').textContent = project.description;
                    document.getElementById('modalChallenges').textContent = project.challenges;

                    // Populate tech tags
                    const techContainer = document.getElementById('modalTech');
                    techContainer.innerHTML = project.tech.map(tech =>
                        `<span class="tech-tag">${tech}</span>`
                    ).join('');

                    // Populate features
                    const featuresContainer = document.getElementById('modalFeatures');
                    featuresContainer.innerHTML = project.features.map(feature =>
                        `<li style="color: var(--text-secondary); margin-bottom: 0.5rem;">${feature}</li>`
                    ).join('');

                    // Populate links
                    const linksContainer = document.getElementById('modalLinks');
                    linksContainer.innerHTML = project.links.map(link =>
                        `<a href="${link.url}" class="modal-btn${link.primary ? '' : ' secondary'}" target="_blank">
                            <i class="${link.icon}"></i> ${link.text}
                        </a>`
                    ).join('');

                    // Show modal
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        // Close modal
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
}

// ==============================================
// CONTACT PAGE SPECIFIC
// ==============================================

function initContactPage() {
    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm && formMessage) {
        const submitBtn = contactForm.querySelector('.submit-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnIcon = submitBtn.querySelector('.btn-icon');
        const spinner = submitBtn.querySelector('.loading-spinner');

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Show loading state
            submitBtn.disabled = true;
            btnText.textContent = 'Sending...';
            btnIcon.style.display = 'none';
            spinner.style.display = 'block';
            formMessage.style.display = 'none';

            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            try {
                // Simulate API call (replace with actual email service)
                await simulateEmailSend(data);

                // Show success message
                showMessage('success', 'Message sent successfully! I\'ll get back to you within 24 hours.');
                contactForm.reset();

            } catch (error) {
                // Show error message
                showMessage('error', 'Failed to send message. Please try again or contact me directly via email.');
            } finally {
                // Reset button state
                submitBtn.disabled = false;
                btnText.textContent = 'Send Message';
                btnIcon.style.display = 'block';
                spinner.style.display = 'none';
            }
        });

        // Form validation
        const inputs = contactForm.querySelectorAll('input[required], textarea[required]');

        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearValidation);
        });

        // Auto-resize textarea
        const textarea = document.getElementById('message');
        if (textarea) {
            textarea.addEventListener('input', function () {
                this.style.height = 'auto';
                this.style.height = Math.min(this.scrollHeight, 300) + 'px';
            });
        }
    }

    // Helper functions for contact form
    function simulateEmailSend(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate 90% success rate
                if (Math.random() > 0.1) {
                    resolve(data);
                } else {
                    reject(new Error('Network error'));
                }
            }, 2000);
        });
    }

    function showMessage(type, message) {
        const formMessage = document.getElementById('formMessage');
        if (formMessage) {
            formMessage.className = `form-message ${type}`;
            formMessage.textContent = message;
            formMessage.style.display = 'block';

            // Auto-hide after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }

    function validateField(e) {
        const field = e.target;
        const value = field.value.trim();

        if (!value) {
            field.style.borderColor = 'var(--error-color)';
            return false;
        }

        if (field.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                field.style.borderColor = 'var(--error-color)';
                return false;
            }
        }

        field.style.borderColor = 'var(--success-color)';
        return true;
    }

    function clearValidation(e) {
        e.target.style.borderColor = 'transparent';
    }
}

// ==============================================
// RESUME PAGE SPECIFIC
// ==============================================

function initResumePage() {
    // PDF Download Functionality
    window.downloadPDF = function() {
        fetch("https://github.com/AwesomeYash/Portfolio-Site/blob/main/Assests/Priyanshu_Ranka_Resume.pdf")
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = "Priyanshu_Ranka_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            })
            .catch(error => {
                console.error('Download failed:', error);
                // Fallback: open in new tab
                window.open("https://github.com/AwesomeYash/Portfolio-Site/blob/main/Assests/Priyanshu_Ranka_Resume.pdf", '_blank');
            });
    };

    // Print optimization
    window.addEventListener('beforeprint', () => {
        document.body.classList.add('printing');
    });

    window.addEventListener('afterprint', () => {
        document.body.classList.remove('printing');
    });
}

// ==============================================
// INITIALIZATION
// ==============================================

// Initialize appropriate functions based on current page
function initializePage() {
    // Common functionality for all pages
    initMobileNavigation();
    initHeaderScrollEffect();
    initSmoothScrolling();

    // Page-specific functionality
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    
    switch(currentPage) {
        case 'index':
        case '':
            initHomePage();
            break;
        case 'about':
            initAboutPage();
            break;
        case 'projects':
            initProjectsPage();
            break;
        case 'contact':
            initContactPage();
            break;
        case 'resume':
            initResumePage();
            break;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);

// Also initialize if script is loaded after DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    initializePage();
}
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
        },

        'imu-allan-variance': {
            title: 'IMU Noise Characterization with Allan Variance',
            subtitle: 'Sensor Analysis • Signal Processing • ROS',
            description: 'This comprehensive sensor characterization project implements Allan Variance analysis to identify and quantify noise sources in Inertial Measurement Units (IMUs), specifically the VectorNav VN-100. The system develops a complete device driver for IMU data acquisition and performs extensive stationary noise analysis over extended periods (5+ hours) to characterize stochastic error sources. Allan Variance methodology enables precise identification of key noise parameters including Angle Random Walk (ARW), Bias Instability, and Rate Random Walk through log-log plot analysis with characteristic slope identification. The project establishes mathematical relationships between physical noise characteristics and sensor specifications, providing crucial parameters for Kalman filter tuning and navigation system optimization.',
            tech: ['Python', 'ROS', 'Allan Variance', 'Signal Processing', 'NumPy', 'Matplotlib', 'VectorNav VN-100', 'Statistical Analysis'],
            features: [
                'Comprehensive Device Driver Development implementing complete ROS-compatible driver for VectorNav VN-100 with optimized USB latency (1ms) and udev rules',
                'Extended Stationary Data Collection performing rigorous 5+ hour data capture under controlled conditions for reliable variance estimation',
                'Multi-Parameter Noise Identification extracting Angle Random Walk, Bias Instability, and Rate Random Walk from characteristic slope analysis',
                'Automated Analysis Pipeline with Python framework implementing Allan Variance algorithms with clustering and confidence bounds',
                'Visual Noise Characterization generating log-log Allan Deviation plots with annotated parameters and datasheet validation',
                'Kalman Filter Integration providing extracted noise parameters directly applicable to process noise covariance matrix configuration'
            ],
            challenges: 'Primary challenges included ensuring sufficient data duration for accurate variance estimation at large τ values and minimizing USB latency for high-rate sensor capture. Solutions involved implementing custom udev rules reducing latency from 16ms to 1ms and collecting 5+ hours of stationary data. Computational efficiency was addressed through optimized cluster formation algorithms.',
            links: [
                { text: 'GitHub Repository', url: 'https://github.com/AwesomeYash/IMU-Noise-Characterization-with-Allan-Variance-', icon: 'fab fa-github', primary: true },
                { text: 'Analysis Code', url: 'https://github.com/AwesomeYash/IMU-Noise-Characterization-with-Allan-Variance-/tree/main/analysis', icon: 'fas fa-code', primary: false },
                { text: 'Source Files', url: 'https://github.com/AwesomeYash/IMU-Noise-Characterization-with-Allan-Variance-/tree/main/src', icon: 'fas fa-folder', primary: false }
            ]
        },

        'panorama-stitching': {
            title: 'Panoramic Image Stitching with Harris Corner Detection',
            subtitle: 'Computer Vision • Feature Matching • Image Processing',
            description: 'This comprehensive computer vision project implements an iterative panoramic image stitching pipeline combining Harris Corner Detection with SIFT descriptors for robust feature-based image alignment. The system progresses through six development iterations, systematically refining corner detection parameters, feature matching strategies, and homography estimation techniques to achieve seamless panorama generation. The implementation employs Harris Corner Detector for identifying stable interest points characterized by significant intensity gradients in multiple directions, paired with SIFT descriptors for rotation and scale-invariant feature representation. RANSAC algorithm robustly estimates homography transformation matrices enabling accurate geometric alignment of overlapping image regions.',
            tech: ['Python', 'OpenCV', 'Harris Corner Detection', 'SIFT', 'RANSAC', 'NumPy', 'Jupyter Notebook', 'Homography Estimation'],
            features: [
                'Iterative Harris Corner Detection Implementation with systematic parameter optimization (sigma=2, threshold=0.05, radius=2) using eigenvalue analysis for robust corner identification',
                'Multi-Scale SIFT Descriptor Integration implementing 128-dimensional feature vectors with configurable neighborhood parameters ensuring rotation and scale invariance',
                'Robust Feature Matching Pipeline employing Euclidean distance comparison with Lowe\'s ratio test (0.8 threshold) for filtering unreliable correspondences',
                'RANSAC-Based Homography Estimation with 5000 iterations processing 200 matches to fit transformation matrices while rejecting geometric outliers',
                'Comprehensive Iterative Development across six documented stages validating detection algorithms and refining stitching quality with visual feedback',
                'Canvas-Based Panorama Composition generating seamless wide-field outputs using perspective warping and blending for professional-quality results'
            ],
            challenges: 'Primary challenges included distinguishing reliable corner features in regions with repetitive patterns and achieving accurate homography with limited overlapping regions. Solutions involved implementing Lowe\'s ratio test for filtering ambiguous matches, systematic parameter optimization across six iterations, and RANSAC\'s robust outlier rejection. Multi-scale SIFT descriptors provided scale invariance improving matching reliability.',
            links: [
                { text: 'GitHub Repository', url: 'https://github.com/AwesomeYash/Panorama', icon: 'fab fa-github', primary: true },
                { text: 'Project Report', url: 'https://github.com/AwesomeYash/Panorama/blob/main/main.pdf', icon: 'fas fa-file-pdf', primary: false },
                { text: 'Jupyter Notebooks', url: 'https://github.com/AwesomeYash/Panorama/blob/main/main.ipynb', icon: 'fas fa-code', primary: false },
                { text: 'Harris Implementation', url: 'https://github.com/AwesomeYash/Panorama/blob/main/harris.py', icon: 'fab fa-python', primary: false }
            ]
        },

        'robot-motion-planning': {
            title: 'Autonomous Manipulation: Motion Planning and Obstacle Avoidance',
            subtitle: 'Robotics • Motion Planning • Computer Vision',
            description: 'This comprehensive robotic manipulation project implements autonomous motion planning and collision-free trajectory generation for the PincherX100 robotic arm using vision-based localization and advanced path optimization algorithms. The system integrates overhead camera-based AprilTag detection for real-time object pose estimation in workspace coordinates, enabling precise pick-and-place operations with payload handling. Cubic spline interpolation generates smooth, collision-free trajectories between waypoints while maintaining movement threshold constraints and enforcing joint limits for safe autonomous operation. Advanced collision detection algorithms dynamically modify planned paths around obstacles.',
            tech: ['MATLAB', 'Motion Planning', 'AprilTag Detection', 'Trajectory Optimization', 'Collision Avoidance', 'Inverse Kinematics', 'Dynamixel Servos', 'Computer Vision'],
            features: [
                'Vision-Based Object Localization with overhead AprilTag detection for 6-DOF pose estimation transforming detections to robot workspace coordinates',
                'Smooth Trajectory Generation using cubic spline interpolation with C² continuity and 0.1m movement constraints for jerk-minimized motion',
                'Dynamic Collision Avoidance integrating real-time obstacle detection with path modification algorithms maintaining minimum clearance distances',
                'Multi-Mode Manipulation Tasks including pick-and-place, precision writing, and adaptive gripper control for varying payload geometries',
                'Hardware Safety Framework enforcing joint limits, z-threshold validation (0.02m minimum), and real-time error handling',
                'Real-Time Execution Pipeline from perception through actuation with closed-loop monitoring for robust autonomous manipulation'
            ],
            challenges: 'Primary challenges included ensuring smooth trajectory transitions during gripper operations and reliable collision avoidance with complex geometries. Solutions employed cubic spline interpolation for C² continuity, conservative virtual obstacle representations with safety margins, and efficient AprilTag detection with optimized trajectory computation for real-time performance.',
            links: [
                { text: 'GitHub Repository', url: 'https://github.com/AwesomeYash/Robot-Motion-Planning-and-Obstacle-Avoidance', icon: 'fab fa-github', primary: true },
                { text: 'Technical Report', url: 'https://github.com/AwesomeYash/Robot-Motion-Planning-and-Obstacle-Avoidance/blob/main/Report.pdf', icon: 'fas fa-file-pdf', primary: false },
                { text: 'Pick-Place Demo', url: 'https://github.com/AwesomeYash/Robot-Motion-Planning-and-Obstacle-Avoidance/blob/main/Pick_place.mp4', icon: 'fas fa-video', primary: false },
                { text: 'Obstacle Demo', url: 'https://github.com/AwesomeYash/Robot-Motion-Planning-and-Obstacle-Avoidance/blob/main/Obstacle%20Avoidance.mp4', icon: 'fas fa-video', primary: false }
            ]
        },

        'gnss-imu-fusion': {
            title: 'Multi-Sensor Fusion: GNSS and IMU Dead Reckoning',
            subtitle: 'Sensor Fusion • Autonomous Navigation • Localization',
            description: 'This advanced sensor fusion project implements robust dead reckoning algorithms for autonomous vehicle localization by integrating GNSS measurements with VectorNav VN-100 IMU data through complementary filtering and error compensation techniques. The system addresses fundamental challenges in autonomous navigation including GNSS signal degradation in GPS-denied environments and IMU drift accumulation through multi-sensor integration. Implementation includes magnetometer calibration, accelerometer bias compensation, and gyroscope-magnetometer fusion using complementary filters for reliable heading computation. The dead reckoning pipeline processes high-frequency IMU measurements with lower-frequency GNSS updates through synchronized ROS2 drivers.',
            tech: ['Sensor Fusion', 'VN-100 IMU', 'GNSS', 'Dead Reckoning', 'ROS2', 'Python', 'Complementary Filter', 'Allan Variance'],
            features: [
                'Magnetometer Calibration Pipeline implementing hard and soft iron distortion correction through ellipsoid fitting for accurate heading computation',
                'IMU Noise Characterization performing Allan Variance analysis identifying angle random walk, bias instability, and rate random walk parameters',
                'Accelerometer Bias Compensation developing forward velocity estimation through integration with systematic offset error removal',
                'Complementary Filter Fusion integrating gyroscope angular rate with magnetometer absolute heading for drift-free estimation',
                'Multi-Rate Sensor Synchronization creating unified ROS2 messages combining 40Hz IMU with 1Hz GNSS using timestamp alignment',
                'Dead Reckoning Implementation synthesizing calibrated measurements into navigation solution with periodic GNSS drift correction'
            ],
            challenges: 'Primary challenges included managing different sensor update rates (40Hz IMU vs 1Hz GNSS), compensating magnetometer distortions from vehicle ferromagnetic materials, and preventing IMU drift accumulation. Solutions employed timestamp-synchronized ROS2 drivers, ellipsoid-fitting calibration, and complementary filtering. Allan Variance characterized noise parameters for optimal filter design.',
            links: [
                { text: 'GitHub Repository', url: 'https://github.com/AwesomeYash/GNSS-and-VN100-Sensor-Fusion-for-Dead-Reckoning', icon: 'fab fa-github', primary: true },
                { text: 'Technical Report', url: 'https://github.com/AwesomeYash/GNSS-and-VN100-Sensor-Fusion-for-Dead-Reckoning/blob/main/Lab4-Report.pdf', icon: 'fas fa-file-pdf', primary: false },
                { text: 'Python Code', url: 'https://github.com/AwesomeYash/GNSS-and-VN100-Sensor-Fusion-for-Dead-Reckoning/tree/main/Code%20Files', icon: 'fab fa-python', primary: false },
                { text: 'Results', url: 'https://github.com/AwesomeYash/GNSS-and-VN100-Sensor-Fusion-for-Dead-Reckoning/tree/main/Results', icon: 'fas fa-chart-line', primary: false }
            ]
        },

        'ddqn-race-car': {
            title: 'Deep Reinforcement Learning for Autonomous Racing',
            subtitle: 'Reinforcement Learning • Deep Q-Network • Autonomous Control',
            description: 'This advanced reinforcement learning project implements Double Deep Q-Network (DDQN) architecture for training autonomous racing agents to navigate complex track environments through trial-and-error learning. The system develops optimal control policies for steering and throttle commands by maximizing cumulative reward signals incorporating track progress, velocity maintenance, and collision avoidance. Neural network agents learn racing strategies through experience replay buffers storing state-action-reward transitions, while epsilon-greedy exploration balances exploitation of learned behaviors with discovery of novel trajectories. Custom racing environments feature multiple track geometries including square circuits and curved racing tracks with configurable obstacle layouts and goal positions.',
            tech: ['Deep Reinforcement Learning', 'DDQN', 'PyTorch', 'Neural Networks', 'Experience Replay', 'Python', 'Autonomous Control', 'Policy Learning'],
            features: [
                'Double Deep Q-Network Architecture implementing separate target and policy networks reducing overestimation bias in Q-value approximation for stable learning convergence',
                'Custom Racing Environment Design featuring configurable track geometries, collision detection, goal checkpoints, and observation spaces providing vehicle state and sensor readings',
                'Experience Replay Buffer implementing prioritized sampling of state transitions enabling efficient training through decorrelated sample batches and improved data efficiency',
                'Reward Shaping Strategy incorporating multi-objective reward signals balancing track progress, velocity optimization, collision penalties, and goal achievement for learned racing behaviors',
                'Epsilon-Greedy Exploration Policy managing exploration-exploitation tradeoff through decaying randomness schedule enabling initial discovery followed by exploitation refinement',
                'Multi-Track Training Pipeline training agents on diverse track geometries including square circuits and curved racing tracks demonstrating policy generalization capabilities'
            ],
            challenges: 'Primary challenges included designing effective reward functions balancing multiple racing objectives, preventing neural network divergence during training, and achieving policy generalization across track geometries. Solutions employed reward shaping with weighted multi-objective signals, target network stabilization with periodic updates, and experience replay with prioritized sampling for stable convergence.',
            links: [
                { text: 'GitHub Repository', url: 'https://github.com/AwesomeYash/DDQN-for-Race-Car', icon: 'fab fa-github', primary: true },
                { text: 'Technical Report', url: 'https://github.com/AwesomeYash/DDQN-for-Race-Car/blob/main/Report%20-%20DDQN%20for%20Car%20Racing.pdf', icon: 'fas fa-file-pdf', primary: false },
                { text: 'Trained Models', url: 'https://github.com/AwesomeYash/DDQN-for-Race-Car/tree/main/Trained%20Models', icon: 'fas fa-brain', primary: false },
                { text: 'Video Results', url: 'https://github.com/AwesomeYash/DDQN-for-Race-Car/tree/main/Video%20Results', icon: 'fas fa-video', primary: false }
            ]
        },

        'realtime-object-recognition': {
            title: 'Real-Time 2D Object Recognition System',
            subtitle: 'Computer Vision • Object Recognition • Machine Learning',
            description: 'This real-time computer vision system implements classical object recognition pipeline for live video stream classification using moment-based feature extraction and K-nearest neighbor classification. The system performs real-time segmentation separating foreground objects from background through thresholding and morphological operations, extracting discriminative geometric features including Hu moments, oriented bounding boxes, and axis ratios. K-NN classifier with Euclidean distance metric enables multi-class object recognition trained on labeled feature database. Implementation includes confusion matrix evaluation quantifying classification accuracy across object categories and demonstrating robustness to rotation, scale, and translation variations.',
            tech: ['C++', 'OpenCV', 'Object Recognition', 'Feature Extraction', 'K-NN Classification', 'Image Segmentation', 'Moment Analysis', 'Real-Time Processing'],
            features: [
                'Real-Time Segmentation Pipeline implementing adaptive thresholding and morphological operations for foreground-background separation with connected component analysis',
                'Moment-Based Feature Extraction computing Hu moment invariants, central moments, and geometric descriptors providing rotation, scale, and translation invariant representations',
                'K-Nearest Neighbor Classification implementing distance-based voting with Euclidean metric for multi-class object recognition from labeled training database',
                'Oriented Bounding Box Computation calculating minimum area rectangles and principal axis orientations for object pose estimation and geometric feature derivation',
                'Confusion Matrix Evaluation quantifying classification performance across object categories with precision, recall, and accuracy metrics for model validation',
                'Interactive Training Mode enabling live capture and labeling of object instances for dynamic database expansion and classifier adaptation to novel categories'
            ],
            challenges: 'Primary challenges included achieving real-time performance during feature computation, handling lighting variations affecting segmentation quality, and preventing misclassification of similar object shapes. Solutions employed optimized moment calculation algorithms, adaptive thresholding with local processing, and multi-scale feature extraction combining geometric and moment-based descriptors for improved discrimination.',
            links: [
                { text: 'GitHub Repository', url: 'https://github.com/AwesomeYash/Project-3-Real-time-2-D-Object-Recognition', icon: 'fab fa-github', primary: true },
                { text: 'Technical Report', url: 'https://github.com/AwesomeYash/Project-3-Real-time-2-D-Object-Recognition/blob/main/PRCV_Project_3_Report.pdf', icon: 'fas fa-file-pdf', primary: false },
                { text: 'Demo Videos', url: 'https://github.com/AwesomeYash/Project-3-Real-time-2-D-Object-Recognition/tree/main/Working%20Videos', icon: 'fas fa-video', primary: false },
                { text: 'Results', url: 'https://github.com/AwesomeYash/Project-3-Real-time-2-D-Object-Recognition/tree/main/Result_Images', icon: 'fas fa-images', primary: false }
            ]
        },

        'rtk-gps-kinematics': {
            title: 'RTK-GPS Kinematics and Precision Analysis',
            subtitle: 'GNSS • Localization • Autonomous Navigation',
            description: 'This Real-Time Kinematic GPS analysis system implements differential GNSS positioning techniques achieving centimeter-level localization accuracy through carrier-phase measurements and base station corrections. The system performs comprehensive coordinate transformations between geodetic latitude-longitude-altitude and local East-North-Up reference frames enabling trajectory analysis in intuitive Cartesian coordinates. Velocity estimation derives vehicle kinematics through numerical differentiation of position measurements with configurable filtering for noise reduction. Statistical error characterization quantifies positioning accuracy through standard deviation analysis and comparison against ground truth trajectories validating RTK performance for autonomous vehicle navigation.',
            tech: ['RTK-GPS', 'GNSS', 'Python', 'ROS2', 'Coordinate Transforms', 'Differential Positioning', 'Velocity Estimation', 'Error Analysis'],
            features: [
                'Real-Time Kinematic Positioning implementing carrier-phase differential corrections from base station achieving centimeter-level accuracy through ambiguity resolution',
                'Coordinate Transformation Pipeline converting geodetic WGS84 coordinates to local East-North-Up frames using reference point transformations for trajectory visualization',
                'Velocity Computation from Position deriving vehicle kinematics through numerical differentiation with configurable time windows and filtering strategies',
                'Statistical Error Characterization quantifying positioning precision through standard deviation analysis, error distributions, and accuracy metrics validation',
                'ROS2 Driver Integration publishing RTK-GPS measurements with standard sensor_msgs/NavSatFix messages enabling integration with autonomous navigation stacks',
                'Trajectory Visualization generating position plots, velocity profiles, and error analysis graphs for RTK performance evaluation and validation'
            ],
            challenges: 'Primary challenges included handling RTK fix loss during satellite occlusions, managing coordinate transformation singularities near poles, and filtering velocity noise from numerical differentiation. Solutions employed fix quality monitoring with fallback modes, singularity-free transformation implementations, and Savitzky-Golay filtering for smooth velocity estimates while preserving kinematic features.',
            links: [
                { text: 'GitHub Repository', url: 'https://github.com/AwesomeYash/Kinematics-of-RTK-GPS', icon: 'fab fa-github', primary: true },
                { text: 'Python Source', url: 'https://github.com/AwesomeYash/Kinematics-of-RTK-GPS/tree/main/src', icon: 'fab fa-python', primary: false }
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
    window.downloadPDF = function () {
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

    switch (currentPage) {
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
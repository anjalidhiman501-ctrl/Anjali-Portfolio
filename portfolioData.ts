import { Project, SkillCategory, TimelineItem, Service } from '../types';
import profilePhoto from '../assets/images/anjali.png';

export const PERSONAL_INFO = {
  name: "Anjali Rani",
  title: "AI Developer & ML Engineer",
  tagline: "Architecting high-accuracy Neural Networks, LLM.",
  bio: "Passionate AI Developer and Researcher with specialized expertise in Artificial Intelligence, Machine Learning, Deep Learning (CNN/ANN), Natural Language Processing, and LLMs. Dedicated to engineering end-to-end intelligent systems, fine-tuning neural architectures, and deploying RESTful AI microservices with FastAPI and Docker.",
  location: "Yamunanagar, Haryana, India",
  email: "anjalidhiman501@gmail.com",
  github: "https://github.com/anjalidhiman501-ctrl",
  huggingface: "https://huggingface.co/anjalidhiman",
  linkedin: "https://linkedin.com/in/anjali-rani-ai",
  profileImage: profilePhoto,
  profileImageAlt: "Anjali Rani - AI Developer and Machine Learning Engineer professional headshot portrait",
  statusBadge: "Available for AI Engineering & Developer Roles",
  stats: [
    { label: "Deployed AI Systems", value: "5+" },
    { label: "Model Precision Rate", value: "90.4%" },
    { label: "Core AI Frameworks", value: "TF" },
    { label: "Base Location", value: "Yamunanagar, HR" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "potato-disease-classifier",
    title: "Potato Leaf Disease Classifier",
    category: "Computer Vision",
    subcategory: "Deep Learning (CNN)",
    shortDescription: "A Convolutional Neural Network (CNN) deep learning model that diagnoses potato crop pathologies (Early Blight, Late Blight, Healthy) with high precision.",
    fullDescription: "Engineered an end-to-end Computer Vision system trained on agricultural plant disease datasets using custom Convolutional Neural Networks (CNNs). Features real-time image processing, data augmentation, batch normalization, and instant diagnostic confidence scoring.",
    techStack: ["CNN", "TensorFlow", "Python", "Hugging Face Spaces", "OpenCV", "Streamlit"],
    githubUrl: "https://github.com/anjalidhiman501-ctrl",
    liveDemoUrl: "https://huggingface.co/spaces/anjalidhiman/Potato-Leaf-Disease-Classifier",
    imageUrl: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19655?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Potato Leaf Disease Classifier interface powered by CNN Computer Vision identifying leaf blight pathologies",
    metrics: [
      { label: "Validation Accuracy", value: "98.2%" },
      { label: "Inference Latency", value: "< 120ms" },
      { label: "Model Architecture", value: "Custom CNN" }
    ],
    architecture: "Input Image (256x256x3) -> Conv2D (32, 3x3) -> BatchNorm -> ReLU -> MaxPool2D -> Conv2D (64) -> Conv2D (128) -> Dense (512) -> Softmax (3 Classes)",
    keyFeatures: [
      "Convolutional Neural Network (CNN) with transfer learning and residual feature extraction",
      "Real-time image pre-processing with spatial transformations and contrast normalization",
      "Live interactive web interface hosted on Hugging Face Spaces",
      "Actionable treatment recommendations for Early Blight and Late Blight diagnosis"
    ],
    modelType: "Convolutional Neural Network (CNN)"
  },
  {
    id: "fashion-mnist-classifier",
    title: "Fashion MNIST Apparel Classifier",
    category: "Deep Learning",
    subcategory: "CNN",
    shortDescription: "Deep Convolutional Neural Network (CNN) web app for 10-class clothing item recognition and automated fashion categorization.",
    fullDescription: "Engineered a robust Deep Learning classification pipeline trained on the Fashion MNIST dataset. Utilizes custom spatial convolutional layers, dropout regularization to prevent overfitting, and softmax multi-class classification for 10 apparel categories.",
    techStack: ["CNN", "TensorFlow", "Python", "streamlit", "Render", "Scikit-Learn"],
    githubUrl: "https://github.com/anjalidhiman501-ctrl",
    liveDemoUrl: "https://fashion-mnist-project-qcmd.onrender.com",
    imageUrl: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Fashion MNIST apparel classification system interface showcasing multi-class deep learning clothing identification",
    metrics: [
      { label: "Test Accuracy", value: "89.8%" },
      { label: "Classes Identified", value: "10 Apparel Types" },
      { label: "Deployment Platform", value: "Render Cloud" }
    ],
    architecture: "28x28 Grayscale Input -> Conv2D (3x3) -> MaxPool -> Dropout(0.25) -> Conv2D (64) -> Dense(128) -> Softmax",
    keyFeatures: [
      "Custom CNN layer configuration with spatial dropout for variance mitigation",
      "Flask web application interface with drag-and-drop test image drawer",
      "Confusion matrix visualizer and per-class precision evaluation",
      "Continuous automated deployment on Render cloud"
    ],
    modelType: "CNN Deep Learning"
  },
  {
    id: "churn-prediction-app",
    title: "Customer Churn Prediction Engine",
    category: "Deep Learning",
    subcategory: "Artificial Neural Networks (ANN)",
    shortDescription: "Artificial Neural Network (ANN) predictive model estimating customer attrition risks based on behavioral and transactional telemetry.",
    fullDescription: "Designed and trained a Multi-Layer Perceptron (ANN) deep learning architecture to analyze customer demographics, account activity, and engagement scores. Enables SaaS and financial businesses to proactively identify high-risk customer segments.",
    techStack: ["ANN", "TensorFlow", "Scikit-Learn", "Python", "Hugging Face Spaces", "Pandas"],
    githubUrl: "https://github.com/anjalidhiman501-ctrl",
    liveDemoUrl: "https://huggingface.co/spaces/anjalidhiman/churn_prediction_app",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Customer Churn Prediction dashboard displaying Artificial Neural Network predictive risk probability metrics",
    metrics: [
      { label: "ROC-AUC Score", value: "0.91" },
      { label: "Inference Speed", value: "Instant" },
      { label: "Engineered Features", value: "18 Parameters" }
    ],
    architecture: "Scaled Feature Vector (18) -> Dense(64, ReLU) -> BatchNormalization -> Dropout(0.3) -> Dense(32, ReLU) -> Dense(1, Sigmoid)",
    keyFeatures: [
      "Multi-layer Artificial Neural Network (ANN) with binary Sigmoid output",
      "Automated feature scaling (StandardScaler) and categorical one-hot encoding",
      "Interactive sliders and input forms for dynamic scenario simulation",
      "Risk factor importance ranking highlighting key customer churn drivers"
    ],
    modelType: "Artificial Neural Network (ANN)"
  },
  {
    id: "house-price-prediction",
    title: "House Price Valuation Engine",
    category: "Machine Learning",
    subcategory: "Predictive Regressors",
    shortDescription: "Supervised Machine Learning regression pipeline evaluating multi-dimensional real estate features to forecast property valuations.",
    fullDescription: "Developed an advanced Machine Learning pipeline evaluating Random Forest, XGBoost, and Ridge Regression models for property price forecasting. Incorporates geographical attributes, structural metrics, and economic indicators with automated hyperparameter tuning.",
    techStack: ["Scikit-Learn", "Python", "streamlit", "Render", "NumPy"],
    githubUrl: "https://github.com/anjalidhiman501-ctrl",
    liveDemoUrl: "https://house-price-predition.onrender.com",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "House Price Valuation Machine Learning application interface with real estate parameter input controls",
    metrics: [
      { label: "R² Regression Score", value: "0.89" },
      { label: "RMSE Error Reduction", value: "24%" },
      
    ],
    architecture: "Multi-variate Input -> Outlier Removal -> MinMax Scaling -> Feature Selection -> Ensemble Regressor -> Valuation Output",
    keyFeatures: [
      "Exploratory Data Analysis (EDA) & feature correlation heatmaps",
      "Hyperparameter optimization using GridSearchCV to minimize Root Mean Squared Error",
      "Interactive Flask application deployed on Render with instant valuation updates",
      "Clean input controls with real-time error margin visualizer"
    ],
    modelType: "Ensemble Machine Learning"
  },
  {
    id: "book-recommendation-system",
    title: "Personalized Book Recommendation System",
    category: "NLP & Recommenders",
    subcategory: "Recommendation Engine",
    shortDescription: "Hybrid recommendation algorithm combining Collaborative Filtering and NLP Cosine Similarity for personalized literary discovery.",
    fullDescription: "Built a sophisticated recommendation algorithm combining matrix factorization (SVD) and text vector similarity (TF-IDF + Cosine Similarity) over thousands of book titles and user rating matrices. Delivers hyper-relevant literary suggestions in real time.",
    techStack: ["Collaborative Filtering", "Cosine Similarity", "Python", "Render"],
    githubUrl: "https://github.com/anjalidhiman501-ctrl",
    liveDemoUrl: "https://book-recommendation-system-2ak6.onrender.com",
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Personalized Book Recommendation System interface leveraging NLP TF-IDF vector similarity embeddings",
    metrics: [
      { label: "Catalog Index", value: "10,000+ Books" },
      { label: "Cosine Precision", value: "0.94" },
      { label: "Response Time", value: "< 80ms" }
    ],
    architecture: "Text Corpus -> TF-IDF Vectorization / SVD Matrix -> Cosine Similarity Matrix -> Top-K Nearest Neighbors Filter",
    keyFeatures: [
      "Hybrid Collaborative & Content-Based recommendation methodology",
      "Vector space similarity computations for semantic genre & author matching",
      "Search-as-you-type book title lookup with metadata rendering",
      "Deployed on Render with responsive grid UI and recommendation rationale"
    ],
    modelType: "Hybrid Recommender System"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "ml-dl",
    name: "Machine Learning & Deep Learning",
    iconName: "Cpu",
    skills: [
      { name: "Python", level: 96, experience: "1 Year", badge: "Expert", description: "Primary language for data structures, PyTorch, TensorFlow, NumPy, Pandas, and API development." },
      { name: "TensorFlow & Keras", level: 92, experience: "1 Years", badge: "Advanced", description: "Designing CNNs, ANNs, sequential models, custom loss functions, and callbacks." },
      { name: "Scikit-learn", level: 95, experience: "1 Years", badge: "Expert", description: "Supervised ML, regression, classification, clustering, ensemble methods, and feature engineering." },
      { name: "Deep Learning (CNN / ANN)", level: 94, experience: "1vYears", badge: "Expert", description: "Convolutional architectures for vision and Artificial Neural Networks for predictive tabular tasks." },
     
    ]
  },
  {
    id: "nlp-llm",
    name: "NLP & Generative AI",
    iconName: "BrainCircuit",
    skills: [
      { name: "NLP & Text Processing", level: 92, experience: "1 Years", badge: "Intermediate", description: "TF-IDF, word embeddings, sentiment analysis, text classification, and Cosine similarity." },
      { name: "LLMs & Transformers", level: 88, experience: "1 Years", badge: "Intermediate", description: "Hugging Face Transformers, RAG architectures, prompt engineering, and LLM fine-tuning." },
      { name: "Hugging Face Spaces", level: 95, experience: "1 Years", badge: "Intermediate", description: "Deploying interactive AI/ML spaces, Gradio, Streamlit, and model repository management." },
      { name: "Vector Search & Embeddings", level: 85, experience: "1 Year", badge: "Intermediate", description: "Semantic text search, nearest neighbors indexing, and vector similarity metrics." }
    ]
  },
  {
    id: "tools-devops",
    name: "Tools & Web APIs",
    iconName: "Server",
    skills: [
      { name: "FastAPI", level: 92, experience: "1 Years", badge: "Basic", description: "Building asynchronous RESTful APIs for wrapping ML/DL models into cloud microservices." },
      { name: "Docker", level: 85, experience: "0 Years", badge: "Basic", description: "Containerizing machine learning models, lightweight Linux bases, and environment reproduction." },
      { name: "Git & GitHub", level: 94, experience: "1 Years", badge: "Intermediate", description: "Version control, branching workflows, CI/CD pipeline triggers, and GitHub management." },
      { name: "Render Cloud Deployment", level: 95, experience: "1 Years", badge: "Intermediate", description: "Automated continuous deployment for Flask/FastAPI web applications." }
    ]
  }
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: "edu-bsc",
    year: "2022 - 2025",
    title: "Bachelor of Science in Computer Science (B.Sc C.S.)",
    organization: "Kurukshetra University, Haryana",
    type: "education",
    description: "Completed comprehensive undergraduate degree focusing on Computer Science fundamentals, Software Engineering principles, Data Structures & Algorithms, Mathematics, and Object-Oriented Programming.",
    highlights: [
      "Graduated with distinction honors in Computer Science subjects",
      "Strong foundation in Linear Algebra, Calculus, and Statistical Probability for AI",
      "Completed practical capstone software development projects"
    ],
    badge: "B.Sc C.S. Degree"
  },
  {
    id: "edu-diploma-ai",
    year: "2025 - 2026",
    title: "Diploma in AI Applications & Applied Machine Learning",
    organization: "HASC",
    type: "certification",
    description: "Specialized diploma program focused on practical Artificial Intelligence applications, Deep Learning architectures (CNN/ANN), Natural Language Processing, LLMs.",
    highlights: [
      "Hands-on training in PyTorch, TensorFlow, Scikit-learn",
      
      "Engineered and deployed 5+ full-stack AI/ML projects to production cloud platforms",
      "GitHub portfolio: https://github.com/anjalidhiman501-ctrl",
    ],
    badge: "Diploma in AI"
  },

  
];

export const SERVICES: Service[] = [
  {
    id: "ai-solutions",
    title: "AI Solutions & Custom Architecture",
    iconName: "Sparkles",
    shortDesc: "End-to-end design and implementation of intelligent AI systems tailored to specific domain challenges.",
    longDesc: "From problem formulation and data pipeline setup to custom neural network design and RESTful deployment, I build robust, scalable AI architectures.",
    deliverables: ["AI Architecture Blueprint", "Custom Neural Model Design", "Performance Evaluation Reports"],
    techTags: ["Python", "TensorFlow", "FastAPI", "Docker"]
  },
  {
    id: "ml-models",
    title: "Machine Learning Models & Analytics",
    iconName: "TrendingUp",
    shortDesc: "Supervised and unsupervised ML models for churn prediction, sales valuation forecasting, and risk classification.",
    longDesc: "Leveraging ensemble algorithms (XGBoost, Random Forest, Ridge Regression) and statistical rigor to convert raw data into high-precision predictive tools.",
    deliverables: ["Trained Model Artifacts", "Feature Engineering Pipeline", "ROC/AUC & R² Evaluation Reports", "Interactive Prediction App"],
    techTags: ["Scikit-Learn", "XGBoost", "Pandas", "NumPy"]
  },
  
  {
    id: "nlp-apps",
    title: "NLP Applications & Text Intelligence",
    iconName: "MessageSquareText",
    shortDesc: "Sentiment analysis, text vectorization, TF-IDF semantic search, document extraction, and recommendation engines.",
    longDesc: "Transforming unstructured text into actionable intelligence using TF-IDF, Word Embeddings, and Cosine Similarity vector space matching.",
    deliverables: ["Text Classification Engine", "Semantic Embedding Search", "Cosine Similarity Matrix", "RESTful Endpoints"],
    techTags: ["NLP", "TF-IDF", "Hugging Face", "Python"]
  },
  {
    id: "llm-dev",
    title: "LLM Development & Prompt Engineering",
    iconName: "Bot",
    shortDesc: "Building LLM integrations, Retrieval-Augmented Generation (RAG) pipelines, and intelligent conversational assistants.",
    longDesc: "Integrating state-of-the-art LLMs, vector database embeddings, and structured prompt workflows into interactive applications.",
    deliverables: ["LLM Integration Workflow", "Vector Embedding Index", "Custom Prompt Chains", "Hugging Face Deployment"],
    techTags: ["LLMs", "Transformers", "Hugging Face", "FastAPI"]
  },
  {
    id: "data-analysis",
    title: "Data Analysis & Feature Engineering",
    iconName: "BarChart3",
    shortDesc: "Exploratory Data Analysis (EDA), anomaly cleaning, feature extraction, scaling, and correlation visualizations.",
    longDesc: "Uncovering hidden trends, handling missing values, and engineering high-impact feature matrices to maximize downstream model performance.",
    deliverables: ["Comprehensive EDA Notebooks", "Clean Data Pipeline", "Correlation Matrix Heatmaps", "Feature Importance Charts"],
    techTags: ["Pandas", "NumPy", "Scikit-Learn", "Python"]
  },
  {
    id: "ai-consulting",
    title: "AI Consulting & Model Audits",
    iconName: "ShieldCheck",
    shortDesc: "Code reviews, model accuracy debugging, latency optimization, and AI technology roadmap guidance.",
    longDesc: "Helping teams evaluate existing ML pipelines, fix overfitting or underfitting, and upgrade legacy models to modern deep learning standards.",
    deliverables: ["Model Audit Report", "Hyperparameter Tuning Strategy", "Latency Reduction Plan", "Best Practices Guide"],
    techTags: ["MLOps", "Model Profiling", "TensorFlow", "Scikit-Learn"]
  },
  {
    id: "model-deployment",
    title: "Model Deployment",
    iconName: "CloudUpload",
    shortDesc: "Containerizing models with Docker, wrapping with FastAPI/Flask, and deploying to Hugging Face Spaces or Render.",
    longDesc: "Bridging the gap between Jupyter notebooks and production web endpoints with automated Git deployments and REST API interfaces.",
    deliverables: ["Docker Containers", "FastAPI Microservice", "Render Deployment Pipelines", "Hugging Face Spaces Config"],
    techTags: ["Docker", "FastAPI", "Render", "Git", "Hugging Face"]
  }
];


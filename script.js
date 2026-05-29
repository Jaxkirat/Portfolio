let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

const aboutSwiper = new Swiper('.about-swiper', {
    effect: 'fade',
    fadeEffect: { crossFade: true },
    autoplay: { delay: 3000, disableOnInteraction: false },
    loop: true,
    speed: 800,
    grabCursor: true,
});

const typed = new Typed('.multiple-text' ,{
    strings: ['Machine Learning Engineer' , 'Web Developer' , 'Data Analyst' , 'Software Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
        }
    )


const projects = [
    {
        id: 'ai-video-intelligence',
        title: 'AI Video Intelligence Platform',
        categories: ['featured'],
        media: { type: 'video', src: 'Projects/videos/ai-video-intelligence.mp4', poster: 'Projects/images/ai-video-intelligence-poster.jpg' },
        description: 'Multimodal AI-powered video editing platform that automatically analyzes video, audio, and transcripts to identify high-engagement moments, generate short-form clips, remove retakes, and create contextually relevant B-roll footage.',
        tech: ['Python', 'FFmpeg', 'OpenCV', 'Transformers', 'Speech Processing'],
        diagram: ['Long Video', 'Multimodal Analysis', 'Highlight Detection', 'B-Roll Generation', 'Short Clips']
    },
    {
        id: 'ai-text-humanizer',
        title: 'AI Text Humanizer',
        categories: ['featured'],
        media: { type: 'video', src: 'Projects/videos/ai-text-humanizer.mp4', poster: 'Projects/images/ai-text-humanizer-poster.jpg' },
        description: 'Advanced AI writing system that transforms machine-generated text into natural human writing using fine-tuned LLMs and preference optimization techniques.',
        tech: ['Mistral', 'Qwen', 'LoRA', 'QLoRA', 'DPO', 'PyTorch'],
        diagram: ['AI Text', 'Fine-Tuned Model', 'Humanized Text']
    },
    {
        id: 'secvector',
        title: 'SECVector',
        categories: ['featured', 'enterprise'],
        media: { type: 'diagram' },
        description: 'Financial intelligence RAG platform built for SEC filings, enabling semantic retrieval and cited question-answering over corporate disclosures.',
        tech: ['AWS Bedrock', 'Claude', 'Titan Embeddings', 'Vector Search'],
        diagram: ['SEC Filing', 'Knowledge Base', 'Semantic Retrieval', 'Claude', 'Answer']
    },
    {
        id: 'kyb-platform',
        title: 'KYB Platform',
        categories: ['featured', 'enterprise'],
        media: { type: 'diagram' },
        description: 'AI-powered business verification and risk assessment platform that automates due diligence, compliance checks, sanctions screening, and corporate intelligence gathering.',
        tech: ['Node.js', 'Python', 'AML Screening', 'OpenCorporates'],
        diagram: ['Business Website', 'Risk Analysis', 'Compliance Checks', 'Risk Report']
    },
    {
        id: 'nutrigen-ai',
        title: 'NutriGen AI',
        categories: ['featured'],
        media: { type: 'video', src: 'Projects/videos/nutrigen-ai.mp4', poster: 'Projects/images/nutrigen-ai-poster.jpg' },
        description: 'Personalized recipe recommendation platform that combines live web search, RAG, and large language models to generate healthy recipes based on user goals and available ingredients.',
        tech: ['LLMs', 'RAG', 'Web Search', 'Full Stack'],
        diagram: ['Ingredients', 'Health Goal', 'Recipe Generation', 'Video Recommendations']
    },
    {
        id: 'adverse-media',
        title: 'Adverse Media Pipeline',
        categories: ['enterprise'],
        media: { type: 'diagram' },
        description: 'Compliance-focused NLP pipeline that processes global news sources to identify risk events, sanctions exposure, politically exposed persons, and criminal activity.',
        tech: ['spaCy', 'Transformers', 'NER', 'Coreference Resolution'],
        diagram: ['News Sources', 'NLP Extraction', 'Risk Detection', 'Compliance Report']
    },
    {
        id: 'youtube-shorts',
        title: 'YouTube Shorts Automation Engine',
        categories: ['agents'],
        media: { type: 'diagram' },
        description: 'Automatically transforms long-form videos into short-form content by extracting highlights, generating captions, assembling clips, and preparing content for publishing.',
        tech: ['n8n', 'GPT Models', 'FFmpeg', 'YouTube API'],
        diagram: ['Long Video', 'Highlight Extraction', 'Caption Generation', 'Auto-Publish']
    },
    {
        id: 'social-content-factory',
        title: 'Social Media Content Factory',
        categories: ['agents'],
        media: { type: 'diagram' },
        description: 'Creates platform-specific content, captions, and assets using AI workflows and automated publishing pipelines.',
        tech: ['n8n', 'GPT Models', 'Image Generation', 'Platform APIs'],
        diagram: ['Topic Input', 'Multi-Platform Generation', 'Visual Assets', 'Auto-Publish']
    },
    {
        id: 'lead-gen-agent',
        title: 'Lead Generation Agent',
        categories: ['agents'],
        media: { type: 'diagram' },
        description: 'Scrapes, enriches, qualifies, and organizes sales prospects using autonomous workflows and AI-based qualification.',
        tech: ['n8n', 'Web Scraping', 'AI Qualification', 'CRM Integration'],
        diagram: ['Source Targets', 'Scraping', 'AI Qualification', 'CRM Routing']
    },
    {
        id: 'document-processing-agent',
        title: 'Document Processing Agent',
        categories: ['agents'],
        media: { type: 'diagram' },
        description: 'Processes documents, extracts structured information, validates data, and routes results through business workflows.',
        tech: ['n8n', 'Document Parsing', 'OCR', 'LLMs'],
        diagram: ['Documents', 'Extraction', 'Validation', 'Workflow Routing']
    },
    {
        id: 'askweb-ai',
        title: 'AskWeb AI',
        categories: ['personal'],
        media: { type: 'video', src: 'Projects/videos/askweb-ai.mp4', poster: 'Projects/images/askweb-ai-poster.jpg' },
        description: 'Ask questions about any website by providing a URL. Uses web scraping, semantic retrieval, and LLMs to generate context-aware answers.',
        tech: ['Web Scraping', 'RAG', 'LLMs', 'Embeddings']
    },
    {
        id: 'tryonline',
        title: 'TRYONline',
        categories: ['personal'],
        media: { type: 'video', src: 'Projects/videos/tryonline.mp4', poster: 'Projects/images/tryonline-poster.jpg' },
        description: 'Virtual try-on platform using computer vision and deep learning to visualize garments on user-uploaded photos.',
        tech: ['Diffusion Models', 'Computer Vision', 'Python', 'PyTorch']
    },
    {
        id: 'talk2pdf',
        title: 'Talk2PDF',
        categories: ['personal'],
        media: { type: 'video', src: 'Projects/videos/talk2pdf.mp4', poster: 'Projects/images/talk2pdf-poster.jpg' },
        description: 'Conversational document intelligence platform enabling users to upload PDFs and interact with them through natural language.',
        tech: ['LangChain', 'OpenAI', 'RAG', 'Streamlit']
    },
    {
        id: 'flight-fare',
        title: 'Flight Fare Prediction',
        categories: ['ml'],
        media: { type: 'image', src: 'Projects/images/flight-fare-result.png' },
        description: 'Machine learning system that predicts airline ticket prices using historical route and pricing data.',
        tech: ['Python', 'Scikit-learn', 'Flask', 'Pandas']
    },
    {
        id: 'natural-gas',
        title: 'Natural Gas Price Prediction',
        categories: ['ml'],
        media: { type: 'image', src: 'project2.jpg' },
        description: 'Commodity forecasting platform that predicts natural gas prices using historical market data and gradient boosting models. Built during internship at ONGC.',
        tech: ['Python', 'Gradient Boosting', 'Flask', 'Time Series']
    }
];

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function renderTechTags(tech) {
    if (!tech || !tech.length) return '';
    return `<div class="tech-tags">${tech.map(t => `<span>${escapeHtml(t)}</span>`).join('')}</div>`;
}

function renderMedia(media) {
    if (!media) return '';
    if (media.type === 'video') {
        return `<div class="card-media">
            <video poster="${escapeHtml(media.poster || '')}" muted loop playsinline preload="metadata">
                <source src="${escapeHtml(media.src)}" type="video/mp4">
            </video>
        </div>`;
    }
    if (media.type === 'image') {
        return `<div class="card-media"><img src="${escapeHtml(media.src)}" alt=""></div>`;
    }
    return '';
}

function renderProjects() {
    const grid = document.querySelector('.projects-grid');
    if (!grid) return;
    grid.innerHTML = projects.map(p => {
        const cats = p.categories.join(' ');
        const hasMedia = p.media && (p.media.type === 'video' || p.media.type === 'image');
        const variant = hasMedia ? 'media-card' : 'text-card';
        return `<article class="project-card ${variant}" data-categories="${cats}">
            ${renderMedia(p.media)}
            <h3>${escapeHtml(p.title)}</h3>
            <p>${escapeHtml(p.description)}</p>
            ${renderTechTags(p.tech)}
        </article>`;
    }).join('');

    applyTabFilter('featured');
    attachVideoHoverHandlers();
}

function applyTabFilter(activeTab) {
    const grid = document.querySelector('.projects-grid');
    if (!grid) return;
    grid.dataset.activeTab = activeTab;
    document.querySelectorAll('.project-card').forEach(card => {
        const cats = (card.dataset.categories || '').split(' ');
        const visible = cats.includes(activeTab);
        card.classList.toggle('is-hidden', !visible);
        if (!visible) {
            const v = card.querySelector('video');
            if (v) { v.pause(); v.currentTime = 0; }
        }
    });
}

function attachVideoHoverHandlers() {
    document.querySelectorAll('.project-card video').forEach(video => {
        const card = video.closest('.project-card');
        if (!card) return;
        card.addEventListener('mouseenter', () => {
            const playPromise = video.play();
            if (playPromise && typeof playPromise.catch === 'function') {
                playPromise.catch(() => { /* autoplay blocked; ignore */ });
            }
        });
        card.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    });
}

function initProjectTabs() {
    const tabs = document.querySelectorAll('.project-tabs .tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.toggle('active', t === tab));
            applyTabFilter(tab.dataset.tab);
        });
    });
}

renderProjects();
initProjectTabs();


// Initialize EmailJS with your user ID
emailjs.init('lo7tTq9O8gG4PrOKO');

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Send the form data using EmailJS
    emailjs.sendForm('service_o4mv5vl', 'template_ms5l8w8', this)
        .then(function() {
            alert('Your message has been sent!');
        }, function(error) {
            alert('Oops... Something went wrong! Please try again later.');
        });
});

// 1. Alternar Tema (Claro Rosa / Escuro)
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// 2. Menu Mobile
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// 3. Alternar Idioma (PT / EN)
const translations = {
  pt: {
    'nav-projects': 'projetos',
    'nav-about': 'sobre',
    'nav-contact': 'contato',
    'hero-eyebrow': 'Caroline Monteiro · ADS',
    'hero-title': 'desenvolvimento<br /><strong>Web & Dados.</strong>',
    'hero-intro': 'Estudante de Análise e Desenvolvimento de Sistemas, construindo soluções práticas com HTML, CSS, JavaScript, Python e análise de dados.',
    'hero-cta': 'conheça meus projetos',
    'projects-eyebrow': 'Projetos em destaque',
    'projects-note': 'Interfaces web, lógica de programação e projetos práticos.',
    'gta-copy': 'Tela inicial interativa inspirada em GTA para seleção de personagens, com troca dinâmica de visual, informações e responsividade.',
    'project-link': 'ver projeto ↗',
    'code-link': 'ver código ↗',
    'soon-title': 'Próximo Projeto',
    'soon-copy': 'Espaço reservado para meus próximos projetos em Python, SQL e desenvolvimento web. Em breve disponível aqui.',
    'about-eyebrow': 'SOBRE',
    'about-title': 'Oi, eu sou<br /><em>a Carol.</em>',
    'about-copy-1': 'Curso Análise e Desenvolvimento de Sistemas na Universidade Veiga de Almeida (UVA) e tenho experiência prática com operações digitais, validação de dados e metodologias ágeis (Scrum/Kanban).',
    'about-copy-2': 'Gosto de transformar problemas do dia a dia em interfaces limpas e automações úteis, unindo organização, lógica e foco na experiência de quem usa.',
    'about-cta': 'ver projetos',
    'contact-eyebrow': '03 · contato',
    'contact-title': 'aberta a novas<br /><strong>conexões e projetos.</strong>',
    'contact-note': 'Quer conversar sobre tecnologia ou oportunidades? Me mande um e-mail.',
    'back-top': 'voltar ao topo ↑'
  },
  en: {
    'nav-projects': 'projects',
    'nav-about': 'about',
    'nav-contact': 'contact',
    'hero-eyebrow': 'Caroline Monteiro · Systems Analysis',
    'hero-title': 'Web & Data<br /><strong>Development.</strong>',
    'hero-intro': 'Systems Analysis and Development student building practical solutions with HTML, CSS, JavaScript, Python, and data analysis.',
    'hero-cta': 'explore my projects',
    'projects-eyebrow': 'Featured Projects',
    'projects-note': 'Web interfaces, programming logic, and hands-on builds.',
    'gta-copy': 'Interactive GTA-inspired character selection screen featuring dynamic visual switching, character details, and responsive layout.',
    'project-link': 'live demo ↗',
    'code-link': 'view code ↗',
    'soon-title': 'Next Project',
    'soon-copy': 'Reserved slot for upcoming Python, SQL, and web development projects. Coming soon.',
    'about-eyebrow': 'ABOUT',
    'about-title': 'Hi, I am<br /><em>Carol.</em>',
    'about-copy-1': 'Studying Systems Analysis and Development at UVA with hands-on experience in digital operations, data validation, and agile workflows (Scrum/Kanban).',
    'about-copy-2': 'I enjoy turning everyday bottlenecks into clean interfaces and useful automations, combining organization, logic, and user focus.',
    'about-cta': 'see projects',
    'contact-eyebrow': '03 · contact',
    'contact-title': 'open to new<br /><strong>connections & projects.</strong>',
    'contact-note': 'Want to chat about tech or opportunities? Send me an email.',
    'back-top': 'back to top ↑'
  }
};

let currentLang = 'pt';
const langToggle = document.querySelector('.language-toggle');

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  langToggle.textContent = currentLang === 'pt' ? 'EN' : 'PT';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[currentLang][key]) {
      el.innerHTML = translations[currentLang][key];
    }
  });
});

// ========== ELEMENTS ==========
const body = document.body;
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const backToTopButton = document.getElementById("backToTop");
const themeToggle = document.getElementById("themeToggle");
const languageToggle = document.getElementById("languageToggle");
const languageIcon = document.getElementById("languageIcon");
const helloWorld = document.getElementById("helloWorld");

// ========== HAMBURGER ==========
hamburger.addEventListener("click", () =>
  navbar.querySelector("ul").classList.toggle("active")
);

// ========== TYPING EFFECT ==========
const helloText = "Hello, World!";
let idx = 0,
  del = false;
(function typeLoop() {
  helloWorld.textContent = helloText.substring(0, idx);
  idx += del ? -1 : 1;
  if (idx === helloText.length + 1) {
    del = true;
    setTimeout(typeLoop, 800);
  } else if (idx === 0) {
    del = false;
    setTimeout(typeLoop, 400);
  } else setTimeout(typeLoop, del ? 60 : 110);
})();

// ========== BACK TO TOP ==========
window.addEventListener("scroll", () =>
  backToTopButton.classList.toggle("show", window.scrollY > 300)
);
backToTopButton.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

// ========== THEME TOGGLE ==========
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  themeToggle.innerHTML = body.classList.contains("dark-theme")
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon moon-icon"></i>';
});

// ========== TRANSLATIONS ==========
// Perfil profissional orientado a recrutadores
const translations = {
  pt: {
    pageTitle: "Portfólio — Marco Prado",
    logoText: "Marco",
    menuHome: "Início",
    menuAbout: "Sobre",
    menuTechs: "Tecnologias",
    menuProjects: "Projetos",
    menuContact: "Contato",
    heroSubtitle:
      "Desenvolvimento Full Stack com foco em soluções robustas e inovação tecnológica.",
    heroBtn: "Ver mais",
    aboutTitle: "Sobre Mim",
    aboutText:
      "Sou Marco Prado, Desenvolvedor Full Stack com 25 anos, especializado em criação de sistemas web e desktop, automação de processos e análise de negócios. Com sólida experiência em tecnologias como Java, React, Python e PostgreSQL, entrego soluções eficientes, escaláveis e alinhadas às necessidades reais dos negócios.",
    skillsTitle: "Habilidades Técnicas",
    specialtiesTitle: "Áreas de Atuação",
    techsTitle: "Tecnologias Utilizadas",
    projectsTitle: "Projetos em Destaque",
    project1desc:
      "Ho Hub — Plataforma integrada para automatizar e centralizar processos de negócio e comunicação entre aplicações distintas.",
    project2desc:
      "ONG Amicats — Plataforma web para gestão completa de dados médicos e administrativos de animais resgatados, promovendo agilidade operacional e segurança de dados.",
    project3desc:
      "HoStore — Sistema ERP especializado em lojas de Trading Card Games, com gestão integrada de estoque, vendas, emissão fiscal e análise financeira detalhada.",
    contactTitle: "Entre em Contato",
  },

  en: {
    pageTitle: "Marco Prado — Portfolio",
    logoText: "Marco",
    menuHome: "Home",
    menuAbout: "About",
    menuTechs: "Technologies",
    menuProjects: "Projects",
    menuContact: "Contact",
    heroSubtitle:
      "Full Stack Development focused on robust solutions and technological innovation.",
    heroBtn: "Learn more",
    aboutTitle: "About Me",
    aboutText:
      "I'm Marco Prado, a 25-year-old Full Stack Developer specialized in web and desktop applications, process automation, and business analysis. With extensive experience in Java, React, Python, and PostgreSQL, I deliver efficient, scalable solutions aligned with real business needs.",
    skillsTitle: "Technical Skills",
    specialtiesTitle: "Expertise Areas",
    techsTitle: "Technologies Used",
    projectsTitle: "Featured Projects",
    project1desc:
      "Ho Hub — Integrated platform for automating and centralizing business processes and facilitating communication between distinct applications.",
    project2desc:
      "Amicats NGO — Web platform managing comprehensive medical and administrative records for rescued animals, promoting operational agility and data security.",
    project3desc:
      "HoStore — Specialized ERP system tailored for Trading Card Game stores, featuring integrated inventory management, sales tracking, invoice issuance, and detailed financial analysis.",
    contactTitle: "Get in Touch",
  },

  es: {
    pageTitle: "Portafolio — Marco Prado",
    logoText: "Marco",
    menuHome: "Inicio",
    menuAbout: "Acerca de",
    menuTechs: "Tecnologías",
    menuProjects: "Proyectos",
    menuContact: "Contacto",
    heroSubtitle:
      "Desarrollo Full Stack enfocado en soluciones robustas e innovación tecnológica.",
    heroBtn: "Ver más",
    aboutTitle: "Acerca de Mí",
    aboutText:
      "Soy Marco Prado, Desarrollador Full Stack de 25 años, especializado en sistemas web y de escritorio, automatización de procesos y análisis de negocio. Con sólida experiencia en Java, React, Python y PostgreSQL, entrego soluciones eficientes, escalables y alineadas con las necesidades reales de los negocios.",
    skillsTitle: "Habilidades Técnicas",
    specialtiesTitle: "Áreas de Experiencia",
    techsTitle: "Tecnologías Utilizadas",
    projectsTitle: "Proyectos Destacados",
    project1desc:
      "Ho Hub — Plataforma integrada que automatiza y centraliza procesos empresariales y facilita la comunicación entre aplicaciones diversas.",
    project2desc:
      "ONG Amicats — Plataforma web para gestión integral de datos médicos y administrativos de animales rescatados, impulsando agilidad operativa y seguridad de la información.",
    project3desc:
      "HoStore — Sistema ERP especializado para tiendas de juegos de cartas coleccionables (TCG), con gestión integrada de inventario, ventas, emisión fiscal y análisis financiero detallado.",
    contactTitle: "Contacto",
  },
};

// Util: atualiza elementos com data-translate-key
function updateLanguage(lang) {
  document.documentElement.lang = lang;
  Object.keys(translations[lang]).forEach((key) => {
    const el = document.querySelector(`[data-translate-key="${key}"]`);
    if (el) el.textContent = translations[lang][key];
  });
  document.title = translations[lang].pageTitle;
}

// ========== LANGUAGE TOGGLE ==========
const langOrder = ["pt", "en", "es"];
let currentLangIndex = 0;
languageToggle.addEventListener("click", () => {
  currentLangIndex = (currentLangIndex + 1) % langOrder.length;
  const lang = langOrder[currentLangIndex];
  languageIcon.textContent = lang.toUpperCase();
  updateLanguage(lang);
});

// Inicializa
updateLanguage("pt");

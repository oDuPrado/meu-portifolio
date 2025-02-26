// ===================
// Seleciona elementos
// ===================
const body = document.body;
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const backToTopButton = document.getElementById("backToTop");
const themeToggle = document.getElementById("themeToggle");
const languageToggle = document.getElementById("languageToggle");
const languageIcon = document.getElementById("languageIcon");

// ===================
// MENU HAMBÚRGUER
// ===================
hamburger.addEventListener("click", () => {
  navbar.querySelector("ul").classList.toggle("active");
});


// ===================
// EFEITO DE DIGITAÇÃO EM LOOP
// ===================
const helloWorldElement = document.getElementById("helloWorld");
const text = "Hello, World!";
let index = 0;
let isDeleting = false;

function typeEffect() {
  if (!isDeleting) {
    helloWorldElement.textContent = text.substring(0, index++);
  } else {
    helloWorldElement.textContent = text.substring(0, index--);
  }

  if (index > text.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); // Aguarda antes de apagar
  } else if (index < 0) {
    isDeleting = false;
    setTimeout(typeEffect, 500); // Aguarda antes de começar de novo
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100); // Velocidade de digitação e apagamento
  }
}

// Inicia a animação
typeEffect();


// ===================
// BOTÃO VOLTAR AO TOPO
// ===================

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


// ===================
// TEMA CLARO/ESCURO
// ===================
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  // Alterna ícones: se estiver no dark-theme, mostramos sol (preto). 
  if (body.classList.contains("dark-theme")) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon moon-icon"></i>';
  }
});

// ===================
// TRADUÇÕES
// ===================
const translations = {
    pt: {
      pageTitle: "Portfólio - Marco",
      logoText: "Marco",
      menuHome: "Início",
      menuAbout: "Sobre Mim",
      menuTechs: "Tecnologias",
      menuProjects: "Projetos",
      menuContact: "Contato",
      heroTitle: "Hello, World!",
      heroSubtitle: "Bem-vindo ao meu portfólio!",
      heroBtn: "Saiba Mais",
      aboutTitle: "Sobre Mim",
      aboutText: `Sou Marco, um profissional de 24 anos, focado em análise estratégica e liderança de operações. Adoro resolver problemas, otimizar processos e estou sempre buscando aprimorar minhas habilidades em análise de dados e gerenciamento de processos. Pronto para encarar desafios e contribuir para o sucesso da equipe.`,
      skillsTitle: "Habilidades",
      specialtiesTitle: "Especialidades",
      techsTitle: "Tecnologias",
      projectsTitle: "Projetos",
      project1desc: "Aplicativo para gerenciar e organizar tarefas. Clique para ver o repositório.",
      project2desc: "Aplicativo web para gerenciar doações e adoções de gatos. Clique para ver o repositório.",
      project3desc: "Aplicação web para busca eficiente de informações. Clique para ver o repositório.",
      contactTitle: "Contato",
      aboutTitle: "Sobre Mim",
        aboutText: "Sou Marco, um profissional de 24 anos apaixonado por tecnologia e inovação. Com experiência em análise estratégica, desenvolvimento Full Stack e automação de processos, estou sempre explorando novas soluções para desafios do mundo digital. Busco aprimorar minhas habilidades e contribuir para projetos impactantes.",
    aboutProjectsBtn: "Ver Projetos",
    aboutContactBtn: "Entre em Contato",
    },
    en: {
        aboutTitle: "About Me",
        aboutText: "I'm Marco, a 24-year-old professional passionate about technology and innovation. With experience in strategic analysis, Full Stack development, and process automation, I am always exploring new solutions for digital challenges. I strive to improve my skills and contribute to impactful projects.",
        aboutProjectsBtn: "View Projects",
        aboutContactBtn: "Get in Touch",
      pageTitle: "Portfolio - Marco",
      logoText: "Marco",
      menuHome: "Home",
      menuAbout: "About Me",
      menuTechs: "Techs",
      menuProjects: "Projects",
      menuContact: "Contact",
      heroTitle: "Hello, World!",
      heroSubtitle: "Welcome to my portfolio",
      heroBtn: "Learn More",
      aboutTitle: "About Me",
      aboutText: `I'm Marco, a 24-year-old professional focused on strategic analysis and operations leadership. I love problem-solving, process optimization, and I'm always aiming to improve my data analysis and process management skills. Ready to tackle challenges and contribute to the team's success.`,
      skillsTitle: "Skills",
      specialtiesTitle: "Specialties",
      techsTitle: "Techs",
      projectsTitle: "Projects",
      project1desc: "App to manage and organize tasks. Click to view the repository.",
      project2desc: "Web app to manage donations and cat adoptions. Click to view the repository.",
      project3desc: "Web application for efficient information searching. Click to view the repository.",
      contactTitle: "Contact",
    },
  };
  

// Função para atualizar todos os elementos traduzidos
function updateLanguage(lang) {
  document.documentElement.lang = lang;

  for (let key in translations[lang]) {
    const element = document.querySelector(`[data-translate-key="${key}"]`);
    if (element) {
      element.textContent = translations[lang][key];
    }
  }
  // Atualiza título da página
  document.title = translations[lang].pageTitle;
}

// Define idioma atual
let currentLanguage = "pt";

// ===================
// BOTÃO DE IDIOMA
// ===================
languageToggle.addEventListener("click", () => {
  if (currentLanguage === "pt") {
    currentLanguage = "en";
    languageIcon.textContent = "PT";
  } else {
    currentLanguage = "pt";
    languageIcon.textContent = "EN";
  }
  updateLanguage(currentLanguage);
});

// ===================
// INICIALIZA TRADUÇÃO
// ===================
updateLanguage(currentLanguage);

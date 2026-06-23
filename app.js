/* ============================================================
   Robert Maina – JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ===== NAVBAR =====
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const navLinkItems = document.querySelectorAll('.nav-link');
  const langSwitcher = document.getElementById('lang-switcher');
  const langToggle = document.getElementById('lang-toggle');
  const langMenu = document.getElementById('lang-menu');
  const langCurrent = document.getElementById('lang-current');
  const langOptions = document.querySelectorAll('.lang-option');

  const translations = {
    de: {
      title: 'Robert Maina | Data Analyst Portfolio',
      description: 'Robert Maina - Data Analyst & Economics Graduate. Portfolio showcasing data analysis expertise, Power BI dashboards, and business intelligence skills for German employers.',
      ogDescription: 'Economics & Statistics Graduate | Power BI | SQL | SPSS | Stuttgart, Germany',
      menuLabel: 'Menu öffnen',
      nav: ['Start', 'Über mich', 'Erfahrung', 'Fähigkeiten', 'Dashboards', 'Bildung', 'Kontakt'],
      heroBadge: 'Verfügbar für neue Möglichkeiten • Deutschlandweit',
      heroStatus: 'Offen für neue Chancen',
      heroSubtitle: 'Data Analyst & Economics Graduate',
      heroTagline: 'B.Sc. Economics & Statistics · Power BI · SQL · SPSS · Excel',
      heroLocation: 'Stuttgart, Deutschland (Deutschlandweit einsatzbereit)',
      contactBtn: 'Kontakt aufnehmen',
      dashboardBtn: 'Dashboards ansehen',
      stats: ['Jahre Erfahrung', 'Tools beherrscht', 'Sprachen'],
      sectionHeaders: [
        ['Profil', 'Über mich', 'Analytisch denken. Daten verstehen. Entscheidungen ermöglichen.'],
        ['Karriere', 'Berufliche Erfahrung', 'Ein vielseitiger Werdegang mit Fokus auf Datenanalyse und Unternehmertum'],
        ['Kompetenzen', 'Fähigkeiten & Kenntnisse', 'Technische Kompetenz trifft auf analytisches Denkvermögen'],
        ['Portfolio', 'Datenanalyse-Portfolio', 'Interaktive Visualisierungen, die meine analytischen Fähigkeiten demonstrieren'],
        ['Bildung', 'Akademische Laufbahn', 'Solide akademische Grundlage in Wirtschaft und Statistik'],
        ['Unternehmergeist', 'Business Mindset', 'Mehr als Datenanalyse – ich denke unternehmerisch'],
        ['Kontakt', 'Lassen Sie uns sprechen', 'Ich freue mich auf Ihre Nachricht – auf Deutsch oder Englisch']
      ],
      aboutCards: [
        ['Persönliches Profil', 'Analytisch denkender Wirtschafts- und Statistikabsolvent mit nachgewiesener Erfahrung in Datenerhebung, -analyse und Berichterstellung. Ich bringe Leidenschaft für datengetriebene Entscheidungsfindung mit und bin motiviert, meine Fähigkeiten in einem deutschen Unternehmen einzusetzen.'],
        ['Meine Stärken', ['Datenanalyse', 'Visualisierung', 'Datenqualität', 'Datenbankarbeit', 'Berichterstellung', 'Eigeninitiative']],
        ['Warum ich?', 'Als Gründer eines Logistikunternehmens und erfahrener Datenanalyst verbinde ich unternehmerisches Denken mit technischer Kompetenz. Ich bin selbstmotiviert, detailorientiert und lerne schnell – Eigenschaften, die ich durch die eigenständige Finanzierung eines intensiven Sprachkurses unter Beweis gestellt habe.', 'ZAB-anerkannter Abschluss (gleichwertig mit deutschem Hochschulabschluss)']
      ],
      heroCta: ['Kontakt aufnehmen', 'Dashboards ansehen'],
      contact: ['Kontaktdaten', 'Verfügbar für:', 'Vollzeit, Teilzeit, Praktikum', 'Branchen: Beratung, Controlling, Business Intelligence, NGO', 'Nachricht senden', 'Name *', 'E-Mail *', 'Unternehmen', 'Nachricht *', 'Ihr vollständiger Name', 'ihre@email.de', 'Ihr Unternehmen (optional)', 'Wie kann ich Ihnen helfen? Ich freue mich auf Ihre Anfrage...', 'Nachricht senden'],
      footerTitle: 'Data Analyst | Stuttgart, Deutschland',
      footerLinks: ['Start', 'Erfahrung', 'Fähigkeiten', 'Dashboards', 'Kontakt'],
      footerCopy: '© 2026 Robert Maina. Alle Rechte vorbehalten.'
    },
    en: {
      title: 'Robert Maina | Data Analyst Portfolio',
      description: 'Robert Maina - Data Analyst & Economics Graduate. Portfolio showcasing data analysis expertise, Power BI dashboards, and business intelligence skills for employers.',
      ogDescription: 'Economics & Statistics Graduate | Power BI | SQL | SPSS | Stuttgart, Germany',
      menuLabel: 'Open menu',
      nav: ['Home', 'About', 'Experience', 'Skills', 'Dashboards', 'Education', 'Contact'],
      heroBadge: 'Available for new opportunities • Across Germany',
      heroStatus: 'Open to new opportunities',
      heroSubtitle: 'Data Analyst & Economics Graduate',
      heroTagline: 'B.Sc. Economics & Statistics · Power BI · SQL · SPSS · Excel',
      heroLocation: 'Stuttgart, Germany (available nationwide)',
      contactBtn: 'Get in touch',
      dashboardBtn: 'View dashboards',
      stats: ['Years of experience', 'Tools mastered', 'Languages'],
      sectionHeaders: [
        ['Profile', 'About Me', 'Think analytically. Understand data. Enable decisions.'],
        ['Career', 'Professional Experience', 'A versatile background focused on data analysis and entrepreneurship'],
        ['Skills', 'Skills & Knowledge', 'Technical competence meets analytical thinking'],
        ['Portfolio', 'Data Analysis Portfolio', 'Interactive visualizations that demonstrate my analytical skills'],
        ['Education', 'Academic Background', 'A solid academic foundation in economics and statistics'],
        ['Entrepreneurship', 'Business Mindset', 'More than data analysis - I think entrepreneurially'],
        ['Contact', 'Let’s talk', 'I look forward to your message - in English or German']
      ],
      aboutCards: [
        ['Personal Profile', 'An analytically minded economics and statistics graduate with proven experience in data collection, analysis, and reporting. I bring a passion for data-driven decision-making and am motivated to apply my skills in a German company.'],
        ['My Strengths', ['Data analysis', 'Visualization', 'Data quality', 'Database work', 'Reporting', 'Initiative']],
        ['Why me?', 'As the founder of a logistics company and an experienced data analyst, I combine entrepreneurial thinking with technical competence. I am self-motivated, detail-oriented, and a fast learner - qualities I demonstrated by self-funding an intensive language course.', 'ZAB-recognized qualification (equivalent to a German university degree)']
      ],
      heroCta: ['Get in touch', 'View dashboards'],
      contact: ['Contact details', 'Available for:', 'Full-time, part-time, internship', 'Industries: consulting, controlling, business intelligence, NGO', 'Send message', 'Name *', 'Email *', 'Company', 'Message *', 'Your full name', 'your@email.com', 'Your company (optional)', 'How can I help you? I look forward to your inquiry...', 'Send message'],
      footerTitle: 'Data Analyst | Stuttgart, Germany',
      footerLinks: ['Home', 'Experience', 'Skills', 'Dashboards', 'Contact'],
      footerCopy: '© 2026 Robert Maina. All rights reserved.'
    }
  };

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  function setButtonContent(button, text) {
    if (!button) return;
    const icon = button.querySelector('svg');
    button.innerHTML = `${icon ? icon.outerHTML : ''}${text ? `<span>${text}</span>` : ''}`;
  }

  function setMetaContent(selector, value) {
    const meta = document.querySelector(selector);
    if (meta) meta.content = value;
  }

  function getStoredLanguage() {
    try {
      return localStorage.getItem('portfolio-lang');
    } catch (error) {
      return null;
    }
  }

  function setStoredLanguage(lang) {
    try {
      localStorage.setItem('portfolio-lang', lang);
    } catch (error) {
      // Ignore storage failures in constrained preview environments.
    }
  }

  function applyLanguage(lang) {
    const t = translations[lang] || translations.de;
    const doc = document.documentElement;
    doc.lang = lang;
    document.title = t.title;
    setMetaContent('meta[name="description"]', t.description);
    setMetaContent('meta[property="og:description"]', t.ogDescription);
    if (hamburger) hamburger.setAttribute('aria-label', t.menuLabel);
    if (langToggle) langToggle.setAttribute('aria-label', t.menuLabel);
    if (langCurrent) langCurrent.textContent = lang.toUpperCase();

    navLinkItems.forEach((link, index) => {
      if (t.nav[index]) link.textContent = t.nav[index];
    });

    const heroBadge = document.querySelector('.hero-badge');
    if (heroBadge) heroBadge.innerHTML = '<span class="badge-dot"></span>' + t.heroBadge;

    const heroStatus = document.querySelector('.hero-status');
    if (heroStatus) heroStatus.innerHTML = '<span class="status-dot"></span>' + t.heroStatus;

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;

    const heroTagline = document.querySelector('.hero-tagline');
    if (heroTagline) heroTagline.textContent = t.heroTagline;

    const heroLocation = document.querySelector('.hero-location');
    if (heroLocation) {
      const icon = heroLocation.querySelector('svg');
      heroLocation.innerHTML = `${icon ? icon.outerHTML : ''}<span>${t.heroLocation}</span>`;
    }

    const heroScroll = document.querySelector('.hero-scroll-indicator span');
    if (heroScroll) heroScroll.textContent = lang === 'en' ? 'Scroll' : 'Scrollen';

    const profileImg = document.getElementById('profile-img');
    if (profileImg) {
      profileImg.alt = lang === 'en' ? 'Robert Maina - Data Analyst' : 'Robert Maina – Data Analyst';
    }

    setButtonContent(document.getElementById('contact-btn'), t.heroCta[0]);
    setButtonContent(document.getElementById('dashboard-btn'), t.heroCta[1]);

    document.querySelectorAll('.hero-stats .stat-label').forEach((el, index) => {
      if (t.stats[index]) el.textContent = t.stats[index];
    });

    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach((header, index) => {
      const parts = t.sectionHeaders[index];
      if (!parts) return;
      const tag = header.querySelector('.section-tag');
      const title = header.querySelector('.section-title');
      const subtitle = header.querySelector('.section-subtitle');
      if (tag) tag.textContent = parts[0];
      if (title) title.textContent = parts[1];
      if (subtitle) subtitle.textContent = parts[2];
    });

    const aboutCards = document.querySelectorAll('#about .about-card');
    if (aboutCards[0]) {
      const title = aboutCards[0].querySelector('h3');
      const text = aboutCards[0].querySelector('p');
      const details = aboutCards[0].querySelectorAll('.profile-details li');
      if (title) title.textContent = t.aboutCards[0][0];
      if (text) text.textContent = t.aboutCards[0][1];
      const deLabels = [
        ['Geburtsdatum:', 'Date of birth:'],
        ['Standort:', 'Location:'],
        ['Familienstand:', 'Marital status:'],
        ['Staatsangehörigkeit:', 'Nationality:']
      ];
      details.forEach((item, index) => {
        const value = item.textContent.split(':').slice(1).join(':').trim();
        const label = lang === 'de' ? deLabels[index][0] : deLabels[index][1];
        if (value) item.innerHTML = `<strong>${label}</strong> ${value}`;
      });
    }
    if (aboutCards[1]) {
      const title = aboutCards[1].querySelector('h3');
      const items = aboutCards[1].querySelectorAll('.strength-item span');
      if (title) title.textContent = t.aboutCards[1][0];
      items.forEach((item, index) => {
        if (t.aboutCards[1][1][index]) item.textContent = t.aboutCards[1][1][index];
      });
    }
    if (aboutCards[2]) {
      const title = aboutCards[2].querySelector('h3');
      const text = aboutCards[2].querySelector('p');
      const badge = aboutCards[2].querySelector('.highlight-badge');
      if (title) title.textContent = t.aboutCards[2][0];
      if (text) text.textContent = t.aboutCards[2][1];
      if (badge) {
        const icon = badge.querySelector('svg');
        badge.innerHTML = `${icon ? icon.outerHTML : ''}${t.aboutCards[2][2]}`;
      }
    }

    const contactHeader = document.querySelector('#contact .section-header');
    if (contactHeader) {
      const infoTitle = document.querySelector('.contact-info h3');
      const formTitle = document.querySelector('.contact-form h3');
      const labels = document.querySelectorAll('.contact-form label');
      const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
      const emailCardLabel = document.querySelector('#email-link .contact-label');
      const emailCardValue = document.querySelector('#email-link .contact-value');
      const availabilityStrong = document.querySelector('.availability-badge strong');
      const availabilitySmall = document.querySelector('.availability-badge small');
      const sendBtn = document.getElementById('send-btn');
      if (infoTitle) infoTitle.textContent = t.contact[0];
      if (formTitle) formTitle.textContent = t.contact[4];
      if (emailCardLabel) emailCardLabel.textContent = 'E-Mail';
      if (emailCardValue) emailCardValue.textContent = 'kimanirobert00@gmail.com';
      if (availabilityStrong) availabilityStrong.textContent = t.contact[1];
      if (availabilitySmall) availabilitySmall.textContent = t.contact[3];
      if (labels[0]) labels[0].textContent = t.contact[5];
      if (labels[1]) labels[1].textContent = t.contact[6];
      if (labels[2]) labels[2].textContent = t.contact[7];
      if (labels[3]) labels[3].textContent = t.contact[8];
      if (inputs[0]) inputs[0].placeholder = t.contact[9];
      if (inputs[1]) inputs[1].placeholder = t.contact[10];
      if (inputs[2]) inputs[2].placeholder = t.contact[11];
      if (inputs[3]) inputs[3].placeholder = t.contact[12];
      setButtonContent(sendBtn, t.contact[13]);
      const sub = contactHeader.querySelector('.section-subtitle');
      if (sub) sub.textContent = t.sectionHeaders[6][2];
    }

    const footerTitle = document.querySelector('.footer-title');
    const footerLinks = document.querySelectorAll('.footer-links a');
    const footerCopy = document.querySelector('.footer-copy');
    if (footerTitle) footerTitle.textContent = t.footerTitle;
    footerLinks.forEach((link, index) => {
      if (t.footerLinks[index]) link.textContent = t.footerLinks[index];
    });
    if (footerCopy) footerCopy.textContent = t.footerCopy;

    langOptions.forEach(option => {
      option.classList.toggle('active', option.dataset.lang === lang);
    });

    setStoredLanguage(lang);
  }

  if (langToggle && langMenu) {
    langToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      langSwitcher.classList.toggle('open');
      langToggle.setAttribute('aria-expanded', langSwitcher.classList.contains('open') ? 'true' : 'false');
    });

    langOptions.forEach(option => {
      option.addEventListener('click', () => {
        applyLanguage(option.dataset.lang || 'de');
        langSwitcher.classList.remove('open');
        langToggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (event) => {
      if (!langSwitcher.contains(event.target)) {
        langSwitcher.classList.remove('open');
        langToggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        langSwitcher.classList.remove('open');
        langToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  applyLanguage(getStoredLanguage() || 'de');

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinkItems.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.35 });
  sections.forEach(s => observer.observe(s));

  // ===== HERO PARTICLES =====
  function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 50; i++) {
      const p = document.createElement('div');
      p.classList.add('particle');
      const size = Math.random() * 3 + 1;
      p.style.cssText = `
        left: ${Math.random() * 100}%;
        width: ${size}px;
        height: ${size}px;
        animation-duration: ${Math.random() * 15 + 8}s;
        animation-delay: ${Math.random() * -15}s;
        opacity: ${Math.random() * 0.6 + 0.1};
      `;
      // Random colors
      const colors = ['#4f8ef7','#22d3ee','#a78bfa','#34d399'];
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      container.appendChild(p);
    }
  }
  createParticles();

  // ===== COUNTER ANIMATION =====
  function animateCounter(el, target, suffix = '') {
    let start = 0;
    const duration = 2000;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  // Hero stats counter
  const heroStats = document.querySelectorAll('.hero .stat-number[data-target]');
  const heroStatsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = '1';
        animateCounter(entry.target, parseInt(entry.target.dataset.target));
      }
    });
  }, { threshold: 0.5 });
  heroStats.forEach(el => heroStatsObserver.observe(el));

  // KPI counters in dashboards
  function triggerKpiCounters() {
    const kpiCounters = document.querySelectorAll('.kpi-value.counter');
    kpiCounters.forEach(el => {
      if (!el.dataset.animated) {
        el.dataset.animated = '1';
        animateCounter(el, parseInt(el.dataset.target), '+');
      }
    });
  }

  // ===== SKILL BARS =====
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('animated'), 200);
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  skillBars.forEach(bar => skillObserver.observe(bar));

  // ===== TIMELINE ANIMATION =====
  const timelineItems = document.querySelectorAll('.timeline-item');
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });
  timelineItems.forEach(item => timelineObserver.observe(item));

  // ===== DASHBOARD TABS =====
  const tabs = document.querySelectorAll('.dash-tab');
  const panels = document.querySelectorAll('.dash-panel');
  let chartsInitialized = {};

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panelId = 'panel-' + tab.dataset.tab;
      const panel = document.getElementById(panelId);
      if (panel) {
        panel.classList.add('active');
        initCharts(tab.dataset.tab);
      }
    });
  });

  // Initialize overview chart on load
  initCharts('overview');
  triggerKpiCounters();

  function initCharts(tabName) {
    if (chartsInitialized[tabName]) return;
    chartsInitialized[tabName] = true;

    const chartDefaults = {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          labels: {
            color: '#94a3b8',
            font: { family: 'Inter', size: 12 }
          }
        }
      }
    };

    if (tabName === 'overview') {
      const ctx = document.getElementById('overviewChart');
      if (!ctx) return;
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Datenanalyse & Reporting', 'Business & Logistik', 'Ehrenamt & NGO', 'Forschung & Beratung'],
          datasets: [{
            data: [40, 25, 15, 20],
            backgroundColor: ['rgba(79,142,247,0.85)', 'rgba(167,139,250,0.85)', 'rgba(251,146,60,0.85)', 'rgba(34,211,238,0.85)'],
            borderColor: ['#0f1629'],
            borderWidth: 3,
            hoverOffset: 8
          }]
        },
        options: {
          ...chartDefaults,
          cutout: '60%',
          plugins: {
            ...chartDefaults.plugins,
            legend: {
              ...chartDefaults.plugins.legend,
              position: 'right'
            }
          }
        }
      });
    }

    if (tabName === 'skills-chart') {
      const radarCtx = document.getElementById('radarChart');
      if (radarCtx) {
        new Chart(radarCtx, {
          type: 'radar',
          data: {
            labels: ['Excel', 'Power BI', 'SPSS', 'SQL', 'PowerPoint', 'Datenqualität', 'Berichterstellung'],
            datasets: [{
              label: 'Kompetenzlevel',
              data: [88, 82, 80, 65, 78, 85, 87],
              backgroundColor: 'rgba(79, 142, 247, 0.15)',
              borderColor: '#4f8ef7',
              pointBackgroundColor: '#4f8ef7',
              pointBorderColor: '#0f1629',
              pointHoverBackgroundColor: '#22d3ee',
              borderWidth: 2,
              pointRadius: 4
            }]
          },
          options: {
            ...chartDefaults,
            scales: {
              r: {
                min: 0, max: 100,
                ticks: { color: '#64748b', backdropColor: 'transparent', stepSize: 20 },
                grid: { color: 'rgba(255,255,255,0.07)' },
                angleLines: { color: 'rgba(255,255,255,0.07)' },
                pointLabels: { color: '#94a3b8', font: { size: 12, family: 'Inter' } }
              }
            }
          }
        });
      }

      const toolCtx = document.getElementById('toolChart');
      if (toolCtx) {
        new Chart(toolCtx, {
          type: 'bar',
          data: {
            labels: ['Excel', 'Power BI', 'SPSS', 'SQL', 'PowerPoint'],
            datasets: [{
              label: 'Nutzungshäufigkeit (%)',
              data: [95, 75, 70, 60, 80],
              backgroundColor: [
                'rgba(79, 142, 247, 0.8)',
                'rgba(34, 211, 238, 0.8)',
                'rgba(167, 139, 250, 0.8)',
                'rgba(251, 146, 60, 0.8)',
                'rgba(52, 211, 153, 0.8)'
              ],
              borderRadius: 8,
              borderSkipped: false
            }]
          },
          options: {
            ...chartDefaults,
            scales: {
              x: {
                ticks: { color: '#94a3b8' },
                grid: { color: 'rgba(255,255,255,0.05)' }
              },
              y: {
                min: 0, max: 100,
                ticks: { color: '#94a3b8' },
                grid: { color: 'rgba(255,255,255,0.05)' }
              }
            }
          }
        });
      }
    }

    if (tabName === 'timeline-chart') {
      const ctx = document.getElementById('timelineChart');
      if (!ctx) return;
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['RIDA\n2022–2023', 'Instream\n2023–2024', 'Mwealuxe\n2024–2025', 'KE-371\n2025', 'Knitz\n2025–Heute'],
          datasets: [
            {
              label: 'Datenanalyse',
              data: [60, 90, 30, 95, 10],
              backgroundColor: 'rgba(79, 142, 247, 0.8)',
              borderRadius: 6,
              borderSkipped: false
            },
            {
              label: 'Management',
              data: [20, 40, 95, 40, 30],
              backgroundColor: 'rgba(167, 139, 250, 0.8)',
              borderRadius: 6,
              borderSkipped: false
            },
            {
              label: 'Kommunikation',
              data: [40, 60, 70, 80, 50],
              backgroundColor: 'rgba(34, 211, 238, 0.8)',
              borderRadius: 6,
              borderSkipped: false
            }
          ]
        },
        options: {
          ...chartDefaults,
          scales: {
            x: {
              ticks: { color: '#94a3b8' },
              grid: { color: 'rgba(255,255,255,0.05)' }
            },
            y: {
              min: 0, max: 100,
              ticks: { color: '#94a3b8', callback: v => v + '%' },
              grid: { color: 'rgba(255,255,255,0.05)' }
            }
          }
        }
      });
    }

    if (tabName === 'language-chart') {
      const ctx = document.getElementById('langChart');
      if (!ctx) return;
      new Chart(ctx, {
        type: 'polarArea',
        data: {
          labels: ['Englisch (C1–C2)', 'Swahili (Muttersprache)', 'Deutsch (A2 → B2)'],
          datasets: [{
            data: [95, 100, 42],
            backgroundColor: [
              'rgba(79, 142, 247, 0.75)',
              'rgba(52, 211, 153, 0.75)',
              'rgba(251, 191, 36, 0.75)'
            ],
            borderColor: ['#0f1629'],
            borderWidth: 2
          }]
        },
        options: {
          ...chartDefaults,
          scales: {
            r: {
              ticks: { color: '#64748b', backdropColor: 'transparent' },
              grid: { color: 'rgba(255,255,255,0.07)' }
            }
          }
        }
      });
    }
  }

  // ===== CONTACT FORM =====
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = document.getElementById('send-btn');
      const activeLang = document.documentElement.lang === 'en' ? 'en' : 'de';
      const copy = translations[activeLang];
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const company = document.getElementById('contact-company').value;
      const message = document.getElementById('contact-message').value;

      if (!name || !email || !message) {
        setButtonContent(btn, activeLang === 'en' ? '⚠ Please fill out all required fields' : '⚠ Bitte alle Pflichtfelder ausfüllen');
        btn.style.background = 'rgba(248, 113, 113, 0.3)';
        setTimeout(() => {
          setButtonContent(btn, copy.contact[13]);
          btn.style.background = '';
        }, 2000);
        return;
      }

      // Open email client
      const subject = encodeURIComponent(activeLang === 'en'
        ? `Inquiry from ${company || name} – Portfolio`
        : `Anfrage von ${company || name} – Portfolio`);
      const body = encodeURIComponent(activeLang === 'en'
        ? `Dear Mr. Maina,\n\n${message}\n\nKind regards,\n${name}\n${company ? company + '\n' : ''}${email}`
        : `Sehr geehrter Herr Maina,\n\n${message}\n\nMit freundlichen Grüßen,\n${name}\n${company ? company + '\n' : ''}${email}`);
      window.location.href = `mailto:kimanirobert00@gmail.com?subject=${subject}&body=${body}`;

      setButtonContent(btn, activeLang === 'en' ? '✓ Thank you!' : '✓ Vielen Dank!');
      btn.style.background = 'rgba(52, 211, 153, 0.3)';
      form.reset();
      setTimeout(() => {
        setButtonContent(btn, copy.contact[13]);
        btn.style.background = '';
      }, 3000);
    });
  }

  // ===== SMOOTH SCROLL OFFSET =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - offset,
          behavior: 'smooth'
        });
      }
    });
  });

  // ===== GENERIC INTERSECTION OBSERVER FOR FADE-IN =====
  const fadeEls = document.querySelectorAll('.glass-card, .edu-card, .business-card');
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 60);
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease, border-color 0.3s ease, box-shadow 0.3s ease';
    fadeObserver.observe(el);
  });

});

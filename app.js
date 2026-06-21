/* ============================================================
   Robert Maina – JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ===== NAVBAR =====
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const navLinkItems = document.querySelectorAll('.nav-link');

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
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const company = document.getElementById('contact-company').value;
      const message = document.getElementById('contact-message').value;

      if (!name || !email || !message) {
        btn.textContent = '⚠ Bitte alle Pflichtfelder ausfüllen';
        btn.style.background = 'rgba(248, 113, 113, 0.3)';
        setTimeout(() => {
          btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Nachricht senden';
          btn.style.background = '';
        }, 2000);
        return;
      }

      // Open email client
      const subject = encodeURIComponent(`Anfrage von ${company || name} – Portfolio`);
      const body = encodeURIComponent(`Sehr geehrter Herr Maina,\n\n${message}\n\nMit freundlichen Grüßen,\n${name}\n${company ? company + '\n' : ''}${email}`);
      window.location.href = `mailto:kimanirobert00@gmail.com?subject=${subject}&body=${body}`;

      btn.innerHTML = '✓ Vielen Dank!';
      btn.style.background = 'rgba(52, 211, 153, 0.3)';
      form.reset();
      setTimeout(() => {
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Nachricht senden';
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

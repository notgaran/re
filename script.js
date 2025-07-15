// --- Sample Data ---
const techStack = [
  { icon: '💻', name: 'JavaScript', tags: ['#Web', '#Frontend'] },
  { icon: '🐍', name: 'Python', tags: ['#ML', '#Data'] },
  { icon: '☕', name: 'Java', tags: ['#Android', '#OOP'] },
  { icon: '🌐', name: 'HTML', tags: ['#Markup'] },
  { icon: '🎨', name: 'CSS', tags: ['#Style'] },
  { icon: '🕹️', name: 'Lua', tags: ['#GameDev'] },
];

const projects = [
  {
    title: '급식 잔반 확인',
    period: '2023.07',
    stack: ['Python', 'OpenCV'],
    role: 'AI 모델 개발',
    desc: '이미지 인식으로 잔반량 자동 측정',
    github: 'https://github.com/notgaran/food-waste',
    image: '',
  },
  {
    title: '알츠키퍼',
    period: '2023.12',
    stack: ['Java', 'Android'],
    role: '앱 개발',
    desc: '치매 예방 게임 및 알림 앱',
    github: 'https://github.com/notgaran/alzkeeper',
    image: '',
  },
  {
    title: '전자석 번호판',
    period: '2024.06',
    stack: ['Arduino', 'C++'],
    role: '임베디드 개발',
    desc: '전자석을 이용한 차량 번호판 자동 전환',
    github: '',
    image: '',
  },
  {
    title: '젤리 분류',
    period: '2024.07',
    stack: ['Python', 'TensorFlow'],
    role: 'AI 모델 개발',
    desc: '젤리 이미지 분류 딥러닝 모델',
    github: '',
    image: '',
  },
];

const awards = [
  { year: '2024', desc: '개근상, 교과우수상, 봉사상 수상' },
  { year: '2023', desc: 'K TECH 개근상, 예절상 수상' },
];

// const activities = [
//   { year: '2023', desc: '교내 SW 동아리 회장' },
//   { year: '2022', desc: '외부 오픈소스 프로젝트 기여' },
//   { year: '2021', desc: '교내 알고리즘 스터디' },
// ];

// --- Render Functions ---
function renderTechStack() {
  const list = document.getElementById('tech-list');
  list.innerHTML = techStack.map(t => `
    <div class="tech-card glass">
      <span class="tech-icon">${t.icon}</span>
      <span class="tech-name">${t.name}</span>
      <span class="tech-tags">${t.tags.join(' ')}</span>
    </div>
  `).join('');
}

function renderProjects() {
  const list = document.getElementById('project-list');
  list.innerHTML = projects.map(p => `
    <div class="project-card glass">
      <div class="project-title">${p.title}</div>
      <div class="project-period">${p.period}</div>
      <div class="project-desc">${p.desc}</div>
      <div class="project-tags">${p.stack.map(s => `#${s}`).join(' ')}</div>
      <div class="project-role">역할: ${p.role}</div>
      <div class="project-links">
        ${p.github ? `<a href="${p.github}" target="_blank">GitHub</a>` : ''}
      </div>
    </div>
  `).join('');
}

function renderAwards() {
  const list = document.getElementById('awards');
  list.innerHTML = '<h3>수상</h3>' + awards.map(a => `
    <div class="award-item glass"><b>${a.year}</b> - ${a.desc}</div>
  `).join('');
}

// function renderActivities() {
//   const list = document.getElementById('activities');
//   list.innerHTML = '<h3>활동</h3>' + activities.map(a => `
//     <div class="activity-item glass"><b>${a.year}</b> - ${a.desc}</div>
//   `).join('');
// }

// --- Animations on Scroll ---
function animateOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.section, .tech-card, .project-card, .award-item, .activity-item, .contact-card').forEach(el => {
    observer.observe(el);
  });
}

// --- Navbar Scroll & Highlight ---
function navScrollHighlight() {
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = Array.from(document.querySelectorAll('main > section'));

  function onScroll() {
    const scrollPos = window.scrollY + 80;
    let current = sections[0].id;
    for (const sec of sections) {
      if (scrollPos >= sec.offsetTop) current = sec.id;
    }
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', onScroll);
  onScroll();

  // Smooth scroll
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// --- Project Button Animation ---
function projectButtonAnimation() {
  const btn = document.querySelector('.hero-actions .btn.primary');
  const projectsSection = document.getElementById('projects');
  if (!btn || !projectsSection) return;
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    projectsSection.scrollIntoView({ behavior: 'smooth' });
    // Animation after scroll
    setTimeout(() => {
      projectsSection.classList.add('highlight-bounce');
      setTimeout(() => {
        projectsSection.classList.remove('highlight-bounce');
      }, 900);
    }, 600);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderTechStack();
  renderProjects();
  renderAwards();
  // renderActivities();
  animateOnScroll();
  navScrollHighlight();
  projectButtonAnimation();
}); 
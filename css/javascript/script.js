const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme') || 'light';

document.documentElement.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});

const projects = [
    { title: "E-Commerce Suite", category: "fullstack", desc: "Built using React and Node.js Node.", tag: "Fullstack" },
    { title: "Analytics App Dashboard", category: "frontend", desc: "Vanilla JavaScript data tracking interface.", tag: "Frontend" },
    { title: "Cloud Storage Client", category: "fullstack", desc: "File orchestration UI hooked to third party APIs.", tag: "Fullstack" }
];
const container = document.getElementById('projects-container');
function renderProjects(data) {
        container.innerHTML = data.map(p => `
        <div class="project-card">
            <div class="project-info">
                            <span class="project-tag">${p.tag}</span>
                <h3 style="margin: 0.5rem 0;">${p.title}</h3>
                <p style="color: var(--text-secondary); font-size: 0.9rem;">${p.desc}</p>
                            </div>
        </div>
    `).join('');
}
renderProjects(projects);
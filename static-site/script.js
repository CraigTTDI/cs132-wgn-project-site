// Mobile menu toggle
const mobileBtn = document.getElementById('mobileBtn');
const mobileNav = document.getElementById('mobileNav');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');

mobileBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

// Smooth scrolling and active section tracking
const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
const sections = document.querySelectorAll('.section');

// Handle link clicks
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const offset = 80;
            const elementPosition = targetSection.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu
            mobileNav.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });
});

// Update active link on scroll
function updateActiveLink() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const offsetTop = section.offsetTop;
        const offsetBottom = offsetTop + section.offsetHeight;
        const sectionId = section.id;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// Initialize Chart.js charts
window.addEventListener('DOMContentLoaded', () => {
    // Bar Chart
    const barCtx = document.getElementById('barChart');
    if (barCtx) {
        new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Value',
                    data: [400, 300, 600, 800, 500, 700],
                    backgroundColor: '#22d3ee',
                    borderColor: '#22d3ee',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        labels: {
                            color: '#e2e8f0'
                        }
                    },
                    tooltip: {
                        backgroundColor: '#1e293b',
                        borderColor: '#475569',
                        borderWidth: 1,
                        titleColor: '#e2e8f0',
                        bodyColor: '#e2e8f0'
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#cbd5e1'
                        },
                        grid: {
                            color: '#475569'
                        }
                    },
                    y: {
                        ticks: {
                            color: '#cbd5e1'
                        },
                        grid: {
                            color: '#475569'
                        }
                    }
                }
            }
        });
    }
    
    // Line Chart
    const lineCtx = document.getElementById('lineChart');
    if (lineCtx) {
        new Chart(lineCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Metric 1',
                        data: [65, 59, 80, 81, 56, 72],
                        borderColor: '#22d3ee',
                        backgroundColor: 'rgba(34, 211, 238, 0.1)',
                        tension: 0.4,
                        borderWidth: 2
                    },
                    {
                        label: 'Metric 2',
                        data: [28, 48, 40, 56, 65, 73],
                        borderColor: '#a78bfa',
                        backgroundColor: 'rgba(167, 139, 250, 0.1)',
                        tension: 0.4,
                        borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        labels: {
                            color: '#e2e8f0'
                        }
                    },
                    tooltip: {
                        backgroundColor: '#1e293b',
                        borderColor: '#475569',
                        borderWidth: 1,
                        titleColor: '#e2e8f0',
                        bodyColor: '#e2e8f0'
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#cbd5e1'
                        },
                        grid: {
                            color: '#475569'
                        }
                    },
                    y: {
                        ticks: {
                            color: '#cbd5e1'
                        },
                        grid: {
                            color: '#475569'
                        }
                    }
                }
            }
        });
    }
});

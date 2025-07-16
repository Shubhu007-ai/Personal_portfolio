document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const update = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 200;
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(update, 10);
            } else {
                counter.innerText = target;
            }
        };
        update();
    });

    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
        document.getElementById('thankYouMsg').innerText = "✅ Thanks for your message!";
        this.reset();
    });
});

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarTitle = document.getElementById('sidebarTitle');
    sidebar.classList.toggle('collapsed');
    if (sidebar.classList.contains('collapsed')) {
        sidebarTitle.textContent = 'SP';
    } else {
        sidebarTitle.textContent = 'Shubham Patel';
    }
}
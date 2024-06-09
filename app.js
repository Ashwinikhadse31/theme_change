document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggleButton = document.getElementById('theme-toggle');

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');
    });

    if (!body.classList.contains('dark-theme') && !body.classList.contains('light-theme')) {
        body.classList.add('light-theme');
    }

    
});

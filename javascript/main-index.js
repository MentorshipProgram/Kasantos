document.querySelectorAll('.acd-button').forEach(button => {
    button.addEventListener('click', function () {
        // Toggle green background when clicked
        button.classList.toggle('green-bg');
    });
});

document.querySelectorAll('.bt3').forEach(button => {
    button.addEventListener('click', function () {
        // Toggle green background when clicked
        button.classList.toggle('buttons-bg');
    });
});

document.querySelectorAll('.bt4').forEach(button => {
    button.addEventListener('click', function () {
        const icon = button.querySelector('.icon');

        if (button.classList.contains('collapsed')) {
            // Accordion is collapsed, show the plus SVG
            icon.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            `;
        } else {
            // Accordion is expanded, show the minus (dash) SVG
            icon.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8z"/>
                </svg>
            `;
        }
    });
});

document.querySelector(".bt5").addEventListener("click", function (){
    document.querySelectorAll('.acd-button').forEach(button => {
        button.addEventListener('click', function () {
            // Toggle green background when clicked
            button.classList.toggle('green-bg');
        });
    });
})
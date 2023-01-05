const button = document.getElementById('headerButtonGetStarted');

button.addEventListener('click', function() {
    button.classList.toggle('headerButtonGetStartedIsBlack');
    button.classList.toggle('headerButtonGetStartedIsNotBlack');
});

button.addEventListener('mouseenter', function() {
    if (button.classList.contains('headerButtonGetStartedIsBlack')) {
    button.style.backgroundColor = 'white';
    button.style.color = 'black';
    } else {
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
    }
});

button.addEventListener('mouseleave', function() {
    if (button.classList.contains('headerButtonGetStartedIsBlack')) {
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
    } else {
    button.style.backgroundColor = 'white';
    button.style.color = 'black';
    }
});
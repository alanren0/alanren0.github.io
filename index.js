
// animate projects
function animateProjects() {
    let containers = document.getElementsByClassName('project-wrapper');
    let latestContainer = 0;

    for (let i = 0; i < containers.length; i++) {
        let containerPos = containers[i].getBoundingClientRect().top;

        // reset classes
        containers[i].classList.remove('active');
        containers[i].classList.remove('exited');
        containers[i].classList.remove('inactive');

        // all text containers that are above threshold
        if (window.innerHeight * 0.2 > containerPos) {
            containers[i].classList.add('exited');
            latestContainer = i;
        } else { // all text containers that are below threshold
            containers[i].classList.add('inactive');
        }       
    }

    // make the last seen container active
    containers[latestContainer].classList.remove('inactive');
    containers[latestContainer].classList.remove('exited');
    containers[latestContainer].classList.add('active');
}

// animate background for web designs
function animateBackground() {
    let projects = document.getElementsByClassName('project-wrapper');
    let background = document.getElementsByClassName('projects-section')[0];

    if (projects[0].classList.contains('active')) {
        background.style.setProperty("--project-background-before", "url('./images/background/portfolio1_background.svg')");
        background.style.setProperty("--before-opacity", "1");
        background.style.setProperty("--after-opacity", "0");
    } else if (projects[1].classList.contains('active')) {
        background.style.setProperty("--project-background-after", "url('./images/background/portfolio2_background.png')");
        background.style.setProperty("--before-opacity", "0");
        background.style.setProperty("--after-opacity", "1");
    } else {
        background.style.setProperty("--before-opacity", "0");
        background.style.setProperty("--after-opacity", "0");
    }
}

window.addEventListener('scroll', () => {
    animateProjects();
    animateBackground();
});

window.onload = () => {
    animateProjects();
    animateBackground();
}


// animate nav
let prevScroll = window.scrollY;
window.addEventListener('scroll', function() {
    // show nav when scroll up
    if (window.scrollY < prevScroll) {
        document.getElementById('nav').style.top = '0';
    } 
    // hide nav when scroll down
    else { 
        document.getElementById('nav').style.top = '-69px';
    }
    prevScroll = window.scrollY;
});

// mouse parallax
window.addEventListener('mousemove', parallax);

const el = document.querySelector("#parallax");
const projs = document.querySelector("#project-section");

function parallax(e) {
    let w = window.innerWidth/2;
    let h = window.innerHeight/2;
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    let depth1 = `-${50 - (mouseX - w) * 0.002}% -${50 - (mouseY - h) * 0.002}%`
    let depth2 = `-${50 - (mouseX - w) * 0.001}% -${50 - (mouseY - h) * 0.001}%`

    let pos = `${depth1}, ${depth2}`;
    el.style.backgroundPosition = pos;
    projs.style.backgroundPosition = pos;
}

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

window.addEventListener('scroll', () => {
    animateProjects();
});

window.onload = animateProjects;


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
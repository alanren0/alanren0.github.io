pagesProjects = [{
    title: 'Sorting Visualizer',
    img: 'imgs/sortingVisualizer.png',
    url: 'https://alanren0.github.io/SortingVisualizer',
}]

otherProjects = [{
    title: 'Social Media App',
    img: 'imgs/socialMedia.png',
    url: 'https://github.com/alanren0/SocialMediaApp',
}, {
    title: 'Forum App',
    img: 'imgs/forum.png',
    url: 'https://github.com/alanren0/Forum',
}, {
    title: 'Color App',
    img: 'imgs/colors.png',
    url: 'https://github.com/alanren0/ColoursApp',
}, {
    title: 'News App',
    img: 'imgs/news.png',
    url: 'https://github.com/alanren0/NewsApp',

}, {
    title: 'Recipe App',
    img: 'imgs/recipe.png',
    url: 'https://github.com/alanren0/RecipeApp',
}, {
    title: 'Weather App',
    img: 'imgs/weather.png',
    url: 'https://github.com/alanren0/WeatherApp',
}]

pagesProjects.forEach(project => {
    createCard(document.getElementById('projects1'), project)
});

otherProjects.forEach(project => {
    createCard(document.getElementById('projects2'), project)
});

function createCard(parent, project) {
    const a = document.createElement('a');
    a.classList.add('card');
    a.setAttribute('href', project.url);
    parent.appendChild(a);

    const div = document.createElement('div');
    a.appendChild(div);

    const img = document.createElement('img');
    img.setAttribute('src', project.img);
    div.appendChild(img);

    const p = document.createElement('p');
    p.innerHTML = project.title;
    div.appendChild(p);
}

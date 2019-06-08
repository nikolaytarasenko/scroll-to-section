const links = document.querySelectorAll('li a');

const scrollHandler = e => {
    e.preventDefault();

    let id = e.target.getAttribute('href').slice(1);

    document.querySelector('#' + id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
};

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', scrollHandler);
}
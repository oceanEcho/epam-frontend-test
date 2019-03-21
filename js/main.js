const fetcher = new Fetcher('https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture');
const renderer = new Renderer();

renderer.renderFooter(document.querySelector('footer'));

const personTemplate = new Person();

const mainContent = document.querySelector('main');

const popup = new Popup(
    document.querySelector('.popup-overlay'),
    document.querySelector('.popup-content-img'),
    document.querySelector('.popup-content-info').children
);

const sortingSelect = document.getElementById('order');

popup.overlay.addEventListener('click', () => {
    popup.overlay.style.display = 'none';
});

const renderAll = () => {
    fetcher.getRandomPeople()
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            renderer.renderPeople(response.results, mainContent, personTemplate);

            let personList = document.querySelectorAll('.person');

            for (let i = 0; i < personList.length; i++) {
                personList[i].addEventListener('click', popup.show.bind(popup, i, response.results));
            }

            let personArr = Array.prototype.slice.call(response.results);

            sortingSelect.addEventListener('change', () => {
                if (sortingSelect.value === 'default') {
                    mainContent.innerHTML = '';
                    renderer.renderPeople(response.results, mainContent, personTemplate);
                }
                if (sortingSelect.value === 'alphabet') {
                    personArr.sort((a, b) => {
                        return a.name.first > b.name.first ? 1 : -1;
                    });
                    mainContent.innerHTML = '';
                    renderer.renderPeople(personArr, mainContent, personTemplate);

                    personList = document.querySelectorAll('.person');

                    for (let i = 0; i < personList.length; i++) {
                        personList[i].addEventListener('click', popup.show.bind(popup, i, personArr));
                    }
                }
                if (sortingSelect.value === 'reverse') {
                    personArr.reverse();
                    mainContent.innerHTML = '';
                    renderer.renderPeople(personArr, mainContent, personTemplate);

                    personList = document.querySelectorAll('.person');

                    for (let i = 0; i < personList.length; i++) {
                        personList[i].addEventListener('click', popup.show.bind(popup, i, personArr));
                    }
                }
            });
        })
        .catch(() => {
            alert('Data retrieval error! Try again.');
        });
};

renderAll();

const updateBtn = document.getElementById('updateBtn');

updateBtn.addEventListener('click', () => {
    mainContent.innerHTML = '';
    sortingSelect.value = 'default';
    renderAll();
});

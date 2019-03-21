class Renderer {
    constructor() {
    }
    renderPeople(data, mainContent, personTemplate) {
        for (let i = 0; i < data.length; i++) {
            let personDiv = personTemplate.cloneNode(true);
            let personDivElements = personDiv.children;

            personDivElements[0].src = `${data[i].picture.medium}`;
            personDivElements[1].innerHTML = `${data[i].name.title}. ${data[i].name.first} ${data[i].name.last}`;

            mainContent.appendChild(personDiv);
        }
    }
    renderFooter(footer) {
        const date = new Date();

        footer.innerHTML = `© Ivan Zaytsev, ${date.getFullYear()}`;
    }
}

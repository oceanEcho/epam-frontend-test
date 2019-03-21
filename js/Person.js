class Person {
    constructor() {
        const personTemplate = document.createElement('div');
        personTemplate.className = 'person';

        const personImg = document.createElement('img');
        personImg.className = 'person-img';

        const personName = document.createElement('div');
        personName.className = 'person-name';

        personTemplate.appendChild(personImg);
        personTemplate.appendChild(personName);

        return personTemplate;
    }
}

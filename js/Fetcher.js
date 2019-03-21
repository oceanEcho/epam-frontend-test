class Fetcher {
    constructor(url) {
        this.url = url;
    }
    getRandomPeople() {
        return fetch(this.url);
    }
}
class Popup {
    constructor(overlay, contentImg, contentInfo) {
        this.overlay = overlay;
        this.contentImg = contentImg;
        this.contentInfo = contentInfo;
    }
    show(id, data) {
        this.overlay.style.display = 'flex';
        this.contentImg.src = data[id].picture.large;
        this.contentInfo[0].innerHTML = `${data[id].name.title}. ${data[id].name.first} ${data[id].name.last}`;
        this.contentInfo[1].innerHTML = `${data[id].location.street}, ${data[id].location.city}, ${data[id].location.state}, ${data[id].location.postcode}`;
        this.contentInfo[2].innerHTML = `E-mail: ${data[id].email}`;
        this.contentInfo[3].innerHTML = `Phone: ${data[id].phone}`;
    }
}

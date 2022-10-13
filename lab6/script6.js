const dataContainer = document.getElementById("data-container");

function addData() {
    fetch('https://randomuser.me/api')
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        const userData = response.results[0];
        const user = new User(
            userData.picture,
            userData.name, 
            userData.cell, 
            userData.location.city,
            userData.location.postcode
        );
        user.createUserCard();
    });
}

function removeAllData() {
    while (dataContainer.firstChild) dataContainer.removeChild(dataContainer.firstChild);
}

class User {
    constructor(picture, name, cell, city, postcode) {
        this.picture = picture;
        this.name = name;
        this.cell = cell;
        this.city = city;
        this.postcode = postcode;
    }
    getFullName() {
        return `${this.name.first} ${this.name.last}`;
    }
    createUserCard() {
        const user = document.createElement('div');
        user.id = 'user';
        const information = document.createElement('span');
        information.innerHTML = `
        <img src="${this.picture.medium}" alt="user image">
        <div>
            <h5>${this.getFullName()}</h5>
            <p>Cell: ${this.cell}</p>
            <p>City: ${this.city}</p>
            <p>Postcode: ${this.postcode}</p>
        </div>
        `;
        user.appendChild(information);
        dataContainer.appendChild(user);
        console.log(this.picture, this.getFullName(), this.cell, this.city, this.postcode);
    }
}
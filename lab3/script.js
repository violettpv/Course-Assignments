const dataContainer = document.getElementById("data-container");
let userNum = 1;

function addData() {
    fetch('https://randomuser.me/api')
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        const userData = response.results[0];
        const user = new User(
            userData.picture,
            userData.cell, 
            userData.location.city,
            userData.email,
            userData.location.coordinates.latitude,
            userData.location.coordinates.longitude,
        );
        user.createUserCard();
    });
}

function removeAllData() {
    userNum = 1;
    dataContainer.innerHTML = '';
}

class User {
    constructor(picture, cell, city, email, latitude, longitude) {
        this.picture = picture;
        this.cell = cell;
        this.city = city;
        this.email = email;
        this.latitude = latitude;
        this.longitude = longitude;
    }
    
    createUserCard() {
        const user = document.createElement('div');
        user.id = 'user';
        const information = document.createElement('span');
        information.innerHTML = `
            <img src="${this.picture.medium}" alt="user image">
            <div>
                <h5>User №${userNum++}</h5>
                <p>Cell: ${this.cell}</p>
                <p>City: ${this.city}</p>
                <p>Email: ${this.email}</p>
                <p>Coordinates: ${this.latitude}, ${this.longitude}</p>
            </div>
        `;
        user.appendChild(information);
        dataContainer.appendChild(user);
    }
}
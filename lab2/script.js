// Task 1, Lab 5
let checkName = /^[А-ЯІїЄ|A-Z][а-яіЇЄ|a-z]{1,20}\s[А-ЯЇЄ|A-Z]\.[А-ЯЇЄ|A-Z]\.$/;
let checkGroup = /[А-ЯІЇЄ][А-ЯІЇЄ]\-[0-9][0-9]/;
let checkPhone = /^\([0-9]{3}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
let checkAddress = /^м\.\s[А-ЯІЇЄ][А-ЯІЇЄа-яіїє-]{1,20}$/;
let checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const fullname = document.getElementById("fullname");
const group = document.getElementById("group");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const email = document.getElementById("email");

const fullnameSpan = document.getElementById("users-fullname");
const groupSpan = document.getElementById("users-group");
const phoneSpan = document.getElementById("users-phone");
const addressSpan = document.getElementById("users-address");
const emailSpan = document.getElementById("users-email");

const myForm = document.getElementById("myForm");

function checkForm() {
    let success = true;
    fullname.classList.remove("input-error");
    if (!checkName.test(fullname.value)) {
        fullname.classList.add("input-error");
        success = false;
        console.log("test");
    }
    group.classList.remove("input-error");
    if (!checkGroup.test(group.value)) {
        group.classList.add("input-error");
        success = false;
        console.log("test");
    }
    phone.classList.remove("input-error");
    if (!checkPhone.test(phone.value)) {
        phone.classList.add("input-error");
        success = false;
        console.log("test");
    }
    address.classList.remove("input-error");
    if (!checkAddress.test(address.value)) {
        address.classList.add("input-error");
        success = false;
        console.log("test");
    }
    email.classList.remove("input-error");
    if (!checkEmail.test(email.value)) {
        email.classList.add("input-error");
        success = false;
        console.log("test");
    }
    if (success) {
        alert("Всі поля заповнені коректно.");
        fullnameSpan.innerHTML = fullname.value;
        groupSpan.innerHTML = group.value;
        phoneSpan.innerHTML = phone.value;
        addressSpan.innerHTML = address.value;
        emailSpan.innerHTML = email.value;
        myForm.reset();
    }
    else {
        alert("Ви ввели некоректні дані.");
    }
    success = true;
}

// Task 2
const taskTwoDiv = document.getElementById("current-color");
const colorTool = document.getElementById("color_tool");
const myVariant = 10; // мій варіант - 110 (за розрахунком це 10)
function randomNum() {
    return Math.floor(Math.random() * 255);
}
function randomColor() {
    return 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
}
function generateTable() {
    let table = document.createElement("table");

    for (let i = 0; i < 6; i++) {
        let tableRow = document.createElement("tr");

        for (let j = 0; j < 6; j++) {
            let tableCell = document.createElement("td");
            tableCell.innerHTML = i * 6 + j + 1;
            tableCell.id = (i * 6 + j + 1).toString();
            tableRow.appendChild(tableCell);
        }
        table.appendChild(tableRow);
    }
    taskTwoDiv.appendChild(table);
}
function cellRandomColor(cell) {
    cell.style.backgroundColor = randomColor();
};
// зафарбовує клітинку в поточний колір на пензлі (інструменті для малювання)
function cellCurrentColor(cell) {
    cell.style.backgroundColor = colorTool.value;
};
// змінює колір клітинок при подвійному кліку на клітинку за варіантом (10)
function cellsChangeColor(cell) {    
    let table = taskTwoDiv.getElementsByTagName("table")[0];
    let currRow = null;

    // Знаходимо поточний рядок, якому належить клітинка
    for (let row = 0; row < table.rows.length; row++) {
        for (let col = 0; col < table.rows[row].cells.length; col++) {
            if (table.rows[row].cells[col].id == cell.id) {
                currRow = table.rows[row];
                break;
            }
        }
        if (currRow) break;
    }

    // Фарбуємо клітинки 8 та 12 в поточному рядку
    for (let col = 0; col < currRow.cells.length; col++) {
        if (currRow.cells[col].id == "8" || currRow.cells[col].id == "12") {
            currRow.cells[col].style.backgroundColor = colorTool.value;
        }
    }
}
generateTable();
myCell = document.getElementById(myVariant);
// додаємо події на клітинки (event listeners)
myCell.addEventListener('mouseover', () => cellRandomColor(myCell));
myCell.addEventListener('click', () => cellCurrentColor(myCell));
myCell.addEventListener('dblclick', () => cellsChangeColor(myCell));

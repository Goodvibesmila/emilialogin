// Här är struktur på alla uppgifter jag vill hämta från HTML

const form = document.querySelector(".form");
const username = document.querySelector(".username");
const user = document.querySelector(".user");
const password = document.querySelector(".password");
const word = document.querySelector(".word");
const button = document.querySelector(".button");
const logoutbutton = document.querySelector(".logout");
const headlinemain = document.querySelector("main h2");
const paragraphmain = document.querySelector("main p");
const moreusers = document.querySelector(".moreusers");
const newusername = document.querySelector(".newusername");
const newuserpassword = document.querySelector(".newuserpassword");
const newuserbutton = document.querySelector(".newuserbutton");


// Här kommer min information som skall hämtas och är sparad i lådor. Variabler.

let users = [
    {
        userName: "Fredrik",
        passWord: "12345",
    },
    {
        userName: "Björn",
        passWord: "222333",
    },
    {
        userName: "Maria",
        passWord: "112233",
    }
]

// Här är mina kommandon för att säga åt webbläsare att något ska hända.

button.addEventListener("click", control);
logoutbutton.addEventListener("click", logout);
newuserbutton.addEventListener("click", addnew, control);

// Här skapas min kontroll av lösen/användarnamn. Det görs genom en funktion, samt if/else.

function control() {
    for (let x of users) {
    if(user.value === x.userName && word.value === x.passWord) {
        rightuser(x.userName);
        
    return
    } 
}

wronguser();
}

// Här är en funktion med vad som ska hända om användarnamnet är godkänt.

function rightuser(rightname) {
    form.style.display = "none";
    moreusers.style.display = "none";
    headlinemain.innerText = "Välkommen " + rightname;
    paragraphmain.innerText = "Du har lyckats att logga in";
    logoutbutton.style.display = "block";
}

// Här är kod för nya användare

function addnew(rightname) {
    let addnewuser = {
        userName: newusername.value
        ,
        passWord: newuserpassword.value
    }

    users.push(addnewuser)

    moreusers.style.display = "none";
    form.style.display = "none";
    headlinemain.innerText = "Välkommen " + rightname;
    paragraphmain.innerText = "Du har lyckats att logga in";
    logoutbutton.style.display = "block";
    localStorage.setItem("storage", JSON.stringify(users));
}

// Här är en funktion med vad som ska hända om användarnamnet är fel.

function wronguser() {
    headlinemain.innerText = "Försök igen.";
    paragraphmain.innerText = "Du har skrivit fel lösenord eller användarnamn.";
}

// Här är logga ut sidan

function logout() {
    headlinemain.innerText = "Hej då.";
    paragraphmain.innerText = "Du har loggat ut.";
    moreusers.style.display = "block";
    form.style.display = "block";
    logoutbutton.style.display = "none";
    user.value = "";
    word.value = "";
    newusername.value = "";
    newuserpassword.value = "";
}

// Här kommer kod för localstorage

users = JSON.parse(localStorage.getItem("storage"));

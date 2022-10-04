// Här är struktur på alla uppgifter jag vill hämta från HTML

const form = document.querySelector(".form");
const username = document.querySelector(".username");
const user = document.querySelector(".user");
const password = document.querySelector(".password");
const word = document.querySelector(".word");
const button = document.querySelector(".button");
const logoutbutton = document.querySelector(".logout");
const headlinemain = document.querySelector("main h2" );
const paragraphmain = document.querySelector("main p" );


// Här kommer min information som skall hämtas och är sparad i lådor. Variabler.

const users = [
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
logoutbutton.addEventListener("click", logout)


// Här skapas min kontroll av lösen/användarnamn. Det görs genom en funktion, samt if/else.

function control() {
    for (let x of users) {
    if(user.value === x.userName && word.value === x.passWord) {
        rightuser(x.userName);

    return
    } 
}
wronguser();


    //Sätt en loop runt ifsats.
}

// Här är en funktion med vad som ska hända om användarnamnet är godkänt.

function rightuser(rightname) {
    form.style.display = "none";
    headlinemain.innerText = "Välkommen " + rightname;
    paragraphmain.innerText = "Du har lyckats att logga in";
    logoutbutton.style.display = "block";
}

// Här är en funktion med vad som ska hända om användarnamnet är fel.

function wronguser() {
    headlinemain.innerText = "Försök igen.";
    paragraphmain.innerText = "Du har skrivit fel lösenord eller användarnamn.";
}

// Här är logga ut sidan

function logout() {
    headlinemain.innerText = "Utloggad.";
    paragraphmain.innerText = "Du har loggat ut.";
    form.style.display = "block";
    logoutbutton.style.display = "none";
    user.value = "";
    word.value = "";
}

// Här kommer kod för localstorage

localStorage.setItem("storage", JSON.stringify(users));
users = JSON.parse(localstorage.getItem(storage));

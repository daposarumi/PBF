import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
     databaseURL: "https://panache-by-funmi-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const mailingListInDB = ref(database, "mailingList")


const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const spinner = document.querySelector(".fa-circle-notch")
const icon = document.querySelector("i")
const btnText = document.querySelector(".btn-text")


addButtonEl.addEventListener("click", function() {

    addButtonEl.style.cursor = "wait";

    btnText.textContent = ''

    btnText.style.margin = 0

    icon.classList.replace("fa-check", "fa-circle-notch")

    setTimeout(() => {
        btn.style.pointerEve
    }, 4000);

    changeButtonText()

    let inputValue = inputFieldEl.value

    push(mailingListInDB, inputValue)

    clearInputFieldEl()
    

    
})



function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function changeButtonText() {
    addButtonEl.textContent = '';
}
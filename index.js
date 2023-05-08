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


addButtonEl.addEventListener("click", function() {


    let inputValue = inputFieldEl.value

    push(mailingListInDB, inputValue)

    clearInputFieldEl()
    
})



function clearInputFieldEl() {
    inputFieldEl.value = ""
}

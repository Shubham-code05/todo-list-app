const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add Task Function
function addTask() {
    if (inputBox.value.trim() === "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.className = "delete";
        li.appendChild(span);

        saveData();
    }

    inputBox.value = "";
}

// Check and Delete
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save tasks
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Show saved tasks
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

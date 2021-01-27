const addToDoButton = document.querySelector("#addToDo");
const toDoContainer = document.getElementById("toDoContainer");
const inputField = document.querySelector("#inputField");

//const ul = document.querySelector(".list-items");
addToDoButton.addEventListener("click", () => {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.textContent = inputField.value;

  toDoContainer.appendChild(paragraph);
  inputField.value = "";

  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });

  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
});

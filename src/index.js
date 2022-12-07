//Add main event listener as soon as DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  docForm = document.querySelector("form");
  docForm.addEventListener("submit", submitListener);
});

function submitListener(evt){
  evt.preventDefault();
  const newItem = evt.target.querySelector("#new-task-description").value;
  addItemToList(newItem);
  evt.target.reset();
}

function addItemToList(newItem){
  //Obtain reference to task DOM element
  const taskViewElement = document.querySelector("#tasks");
  //List element activities
  const newTaskElement = document.createElement("li")
  newTaskElement.textContent = `${newItem} `;  
  //List element child button activities
  const newTaskElementButton = document.createElement("button")
  newTaskElementButton.textContent = 'X'
  newTaskElementButton.addEventListener('click', deleteTaskItem)
  //Add the new DOM node as a child the task view element
  taskViewElement.appendChild(newTaskElement);
  newTaskElement.appendChild(newTaskElementButton);
}

function deleteTaskItem(evt){
  evt.target.parentNode.remove()
}

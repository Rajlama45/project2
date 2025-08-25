// Select elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task when button is clicked
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    // Create list item
    const li = document.createElement("li");

    // Task text inside a span
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Done button
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.onclick = () => {
      taskSpan.classList.toggle("done");
    };

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => {
      taskList.removeChild(li);
    };

    // Add everything to list item
    li.appendChild(taskSpan);
    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);

    // Add list item to task list
    taskList.appendChild(li);

    // Clear input box
    taskInput.value = "";
  }
});

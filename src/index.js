document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
// Select the form and input elements
const form = document.getElementById('create-task-form');
const input = document.getElementById('new-task-description');
const ul = document.getElementById('tasks');

// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault();  // Prevent the form from submitting and reloading the page

  // Get the task description from the input field
  const taskDescription = input.value;

  // Only add the task if the input is not empty
  if (taskDescription) {
    // Create a new list item (li)
    const li = document.createElement('li');
    li.textContent = taskDescription;  // Set the text of the list item

    // Append the list item to the ul
    ul.appendChild(li);

    // Clear the input field after submitting
    input.value = '';
  }
}

// Attach the event listener to the form for submit event
form.addEventListener('submit', handleFormSubmission);

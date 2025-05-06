// Change text and style
document.getElementById("changeBtn").addEventListener("click", function () {
  const desc = document.getElementById("description");
  desc.textContent = "You clicked the button! The text and style changed.";
  desc.style.color = "blue";
  desc.style.fontWeight = "bold";
});

// Add new element
document.getElementById("addBtn").addEventListener("click", function () {
  const newEl = document.createElement("p");
  newEl.textContent = "I'm a new paragraph added dynamically!";
  newEl.classList.add("dynamic");
  document.getElementById("container").appendChild(newEl);
});

// Remove last added element
document.getElementById("removeBtn").addEventListener("click", function () {
  const container = document.getElementById("container");
  if (container.lastChild) {
    container.removeChild(container.lastChild);
  }
});

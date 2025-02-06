function toggleMode() {
    const body = document.body;
    body.classList.toggle("dark");
  
    // Update button text
    const button = document.querySelector(".toggle-btn");
    if (body.classList.contains("dark")) {
      button.textContent = "💡 | Toggle Light Mode ";
    } else {
      button.textContent = "🔌 | Toggle Dark Mode";
    }
  }
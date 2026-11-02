// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  var storage = new LocalStorageManager();
  var themeToggle = document.getElementById("theme-toggle");
  var theme = storage.getTheme();

  document.documentElement.classList.toggle("dark", theme === "dark");
  document.body.classList.toggle("dark", theme === "dark");
  themeToggle.checked = theme === "dark";
  themeToggle.addEventListener("change", function () {
    var selectedTheme = themeToggle.checked ? "dark" : "light";
    document.documentElement.classList.toggle("dark", selectedTheme === "dark");
    document.body.classList.toggle("dark", selectedTheme === "dark");
    storage.setTheme(selectedTheme);
  });

  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});

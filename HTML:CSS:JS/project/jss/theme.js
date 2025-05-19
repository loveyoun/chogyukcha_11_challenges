const body = document.body;
const darkToggle = document.getElementById("darkToggle");

function setDark() {
  const theme = localStorage.getItem("_theme");

  if (theme === "dark") {
    if (body.getAttribute("data-bs-theme") === "dark") return;
    body.setAttribute("data-bs-theme", "dark");
    darkToggle.checked = true;
  } else {
    if (body.getAttribute("data-bs-theme") === "light") return;
    body.setAttribute("data-bs-theme", "light");
    darkToggle.checked = false;
  }
}

setDark();
darkToggle.addEventListener("change", () => {
  if (darkToggle.checked) {
    body.setAttribute("data-bs-theme", "dark");
    localStorage.setItem("_theme", "dark");
  } else {
    body.setAttribute("data-bs-theme", "light");
    localStorage.setItem("_theme", "light");
  }
});

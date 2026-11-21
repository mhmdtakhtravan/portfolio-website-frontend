// loading header in webpages after loading DOM
document.addEventListener("DOMContentLoaded", () => {
  fetch("./components/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
      setActiveLink();
      themeSwitch();
    });
});
// function for activate links in header
function setActiveLink() {
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const linkPage = new URL(link.href).pathname;

    if (linkPage === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}
// function for theme switch
function themeSwitch() {
  const themeButton = document.querySelector(".theme-toggle");
  console.log(themeButton);
  themeButton.addEventListener("click", () => {
    let dTheme = document.documentElement.getAttribute("data-theme");
    if (dTheme === "dark") {
      dTheme = "light";
    } else if (dTheme === "light") {
      dTheme = "dark";
    }
    document.documentElement.setAttribute("data-theme", dTheme);
  });
}

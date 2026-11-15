// loading header in webpages after loading DOM
document.addEventListener("DOMContentLoaded", () => {
  fetch("./components/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
      setActiveLink();
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

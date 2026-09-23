document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".menu-toggle");
  var sidebar = document.querySelector(".sidebar");
  if (toggle && sidebar) {
    toggle.addEventListener("click", function () {
      sidebar.classList.toggle("open");
    });
  }

  var here = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".sidebar nav a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === here) {
      a.classList.add("active");
    }
  });
});

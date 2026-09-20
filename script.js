const btn = document.getElementById("toggleMode");
const html = document.documentElement;

btn.addEventListener("click", () => {
  const estClair = html.getAttribute("data-theme") === "clair";
  html.setAttribute("data-theme", estClair ? "sombre" : "clair");
  btn.textContent = estClair ? "☀️" : "🌙";
});
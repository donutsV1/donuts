const btn = document.getElementById("toggleMode");
const html = document.documentElement;

class MyMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="pagenext">
        <a href="jeux 1 .html">jeux 1</a>
        <a href="jeux 3d .html">jeux 3D</a>
        <a href="poin .html">poin calcule</a>
        <a href="sudoku.html">sudoku</a>
        <a href="tiktacto.html">tiltacto</a>
      </div>
    `;
  }
}

// On enregistre la balise personnalisée
customElements.define('mon-menu', MyMenu);

// On définit la balise personnalisée <mon-menu></mon-menu>
customElements.define('mon-menu', MyMenu);
btn.addEventListener("click", () => {
  const estClair = html.getAttribute("data-theme") === "clair";
  html.setAttribute("data-theme", estClair ? "sombre" : "clair");
  btn.textContent = estClair ? "☀️" : "🌙";
});
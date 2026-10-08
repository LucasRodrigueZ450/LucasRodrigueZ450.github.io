// ===== Ano automático no rodapé =====
document.getElementById("ano").textContent = new Date().getFullYear();

// ===== Menu mobile =====
const botaoMenu = document.querySelector(".menu-botao");
const menu = document.getElementById("menu-principal");

function alternarMenu(abrir) {
  botaoMenu.setAttribute("aria-expanded", String(abrir));
  botaoMenu.setAttribute("aria-label", abrir ? "Fechar menu" : "Abrir menu");
  menu.classList.toggle("aberto", abrir);
}

botaoMenu.addEventListener("click", () => {
  const aberto = botaoMenu.getAttribute("aria-expanded") === "true";
  alternarMenu(!aberto);
});

// Fecha o menu ao clicar num link ou apertar Esc
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => alternarMenu(false));
});

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape") alternarMenu(false);
});

// ===== Destaca no menu a seção visível =====
const linksMenu = document.querySelectorAll(".menu a");

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      linksMenu.forEach((link) => {
        const ativo = link.getAttribute("href") === `#${entrada.target.id}`;
        link.classList.toggle("ativo", ativo);
      });
    });
  },
  { rootMargin: "-50% 0px -50% 0px" }
);

document.querySelectorAll("main section").forEach((secao) => observador.observe(secao));
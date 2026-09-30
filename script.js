function scrollToSection(id) {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}


// =========================================
// THEME
// =========================================

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.querySelector(".theme-icon");

function setTheme(theme) {
  if (theme === "light") {
    document.body.classList.add("light-theme");
    themeIcon.textContent = "🌙";
    themeToggle.setAttribute("aria-label", "Ativar tema escuro");
  } else {
    document.body.classList.remove("light-theme");
    themeIcon.textContent = "☀️";
    themeToggle.setAttribute("aria-label", "Ativar tema claro");
  }

  localStorage.setItem("freelaxp-theme", theme);
}


// Recupera o tema salvo
const savedTheme = localStorage.getItem("freelaxp-theme");

if (savedTheme) {
  setTheme(savedTheme);
} else {
  // Usa a preferência do sistema operacional
  const prefersLight = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;

  setTheme(prefersLight ? "light" : "dark");
}


// Alterna o tema
themeToggle.addEventListener("click", () => {
  const isLight = document.body.classList.contains("light-theme");

  setTheme(isLight ? "dark" : "light");
});


// =========================================
// XP ANIMATION
// =========================================

document.addEventListener("DOMContentLoaded", () => {
  const progress = document.querySelector(".xp-progress");

  if (progress) {
    progress.style.width = "0%";

    setTimeout(() => {
      progress.style.transition = "width 1.2s ease";
      progress.style.width = "81%";
    }, 300);
  }


  // =========================================
  // PROJECT CARDS ANIMATION
  // =========================================

  const cards = document.querySelectorAll(".project-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition =
      "opacity .5s ease, transform .5s ease";

    observer.observe(card);
  });
});

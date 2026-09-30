function scrollToSection(id) {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

// Animação simples da barra de XP ao carregar
document.addEventListener("DOMContentLoaded", () => {
  const progress = document.querySelector(".xp-progress");

  if (progress) {
    progress.style.width = "0%";

    setTimeout(() => {
      progress.style.transition = "width 1.2s ease";
      progress.style.width = "81%";
    }, 300);
  }

  // Animação dos cards ao entrar na viewport
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
    { threshold: 0.15 }
  );

  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity .5s ease, transform .5s ease";

    observer.observe(card);
  });
});

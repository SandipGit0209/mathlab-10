(() => {
  const search = document.getElementById("chapterSearch");
  const cards = [...document.querySelectorAll(".chapter-card")];

  search.addEventListener("input", () => {
    const q = search.value.trim().toLowerCase();
    cards.forEach(card => {
      const hit = card.dataset.title.includes(q) || card.textContent.toLowerCase().includes(q);
      card.style.display = hit ? "" : "none";
    });
  });

  document.getElementById("randomChapter").addEventListener("click", () => {
    const ready = cards.filter(c => c.classList.contains("ready"));
    const card = ready[Math.floor(Math.random() * ready.length)];
    if (card) window.location.href = card.getAttribute("href");
  });
})();
const card = document.querySelector("#course-card");

card.addEventListener("pointermove", event => {
  const bounds = card.getBoundingClientRect();
  const x = ((event.clientX - bounds.left) / bounds.width) * 100;
  const y = ((event.clientY - bounds.top) / bounds.height) * 100;

  card.style.setProperty("--pointer-x", `${x}%`);
  card.style.setProperty("--pointer-y", `${y}%`);
});

card.addEventListener("click", () => {
  card.classList.add("is-clicked");
  window.setTimeout(() => card.classList.remove("is-clicked"), 180);
});

const videoBtn = document.getElementById("videoBtn");
const videoPanel = document.getElementById("videoPanel");

if (videoBtn && videoPanel) {
  videoBtn.addEventListener("click", () => {
    const isOpen = videoPanel.classList.toggle("open");
    videoPanel.setAttribute("aria-hidden", String(!isOpen));

    // Scroll suave al abrir
    if (isOpen) {
      videoPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Si cierras y es <video>, pausa
      const vid = videoPanel.querySelector("video");
      if (vid) vid.pause();
    }
  });
}
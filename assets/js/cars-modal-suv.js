// =========================
// SUV Modal
// =========================

const suvModalContainer = document.getElementById("suvModalContainer");

// Load modal HTML
fetch("./components/cars-modal-suv.html")
  .then(response => response.text())
  .then(html => {
    suvModalContainer.innerHTML = html;
    initializeSuvModal();
  });

function initializeSuvModal() {

    const modal = document.getElementById("suvModal");
    const closeBtn = document.getElementById("closeSuvModal");

    const suvCard = document.getElementById("suvCard");
    const suvExplore = document.getElementById("suvExplore");

    function openModal() {
        document.body.appendChild(modal);
        modal.classList.add("show");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        modal.classList.remove("show");
        document.body.style.overflow = "";
    }

    // Click on SUV Card
    if (suvCard) {
        suvCard.addEventListener("click", openModal);
    }

    // Click Explore Button
    if (suvExplore) {
        suvExplore.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            openModal();
        });
    }

    // Close Button
    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }

    // Click Outside
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // ESC Key
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeModal();
        }
    });

}
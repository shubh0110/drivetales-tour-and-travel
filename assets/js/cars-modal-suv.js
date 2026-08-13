// =========================
// SUV Modal
// =========================

const suvmodalContainer = document.getElementById("suvModalContainer");

// Load modal HTML
fetch("./components/cars/cars-modal-suv.html")
  .then(response => response.text())
  .then(html => {
    suvmodalContainer.innerHTML = html;
    window.renderSuvCards();
    initializeSuvModal();
  });

function initializeSuvModal() {

    const modal = document.getElementById("suvModal");
    const closeBtn = document.getElementById("closeSuvModal");

    const suvCard = document.getElementById("suvCard");
    const suvExplore = document.getElementById("suvExplore");

    // Vehicle Count
    const vehicleCount = modal.querySelector("#vehicleCount");

    // Move modal to body once at init
    document.body.appendChild(modal);

    // =========================
    // Vehicle Count Function
    // =========================

    function updateVehicleCount(tabId) {

        const cards = modal.querySelectorAll(
            "#" + tabId + " .premium-car-card"
        );

        if (vehicleCount) {
            vehicleCount.textContent = cards.length;
        }

    }

    // Default Count
    updateVehicleCount("cab");

    // =========================
    // Modal Functions
    // =========================

    function openModal() {

        modal.classList.add("show");
        document.body.style.overflow = "hidden";

        // Refresh count whenever modal opens
        const activeTab = modal.querySelector(".fleet-tab.active");

        if (activeTab) {
            updateVehicleCount(activeTab.dataset.tab);
        }

    }

    function closeModal() {

        modal.classList.remove("show");
        document.body.style.overflow = "";

    }

    // =========================
    // Open Modal
    // =========================

    if (suvCard) {

        suvCard.addEventListener("click", openModal);

    }

    if (suvExplore) {

        suvExplore.addEventListener("click", (e) => {

            e.preventDefault();
            e.stopPropagation();

            openModal();

        });

    }

    // =========================
    // Close Button
    // =========================

    if (closeBtn) {

        closeBtn.addEventListener("click", closeModal);

    }

    // =========================
    // Click Outside
    // =========================

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {

            closeModal();

        }

    });

    // =========================
    // ESC Key
    // =========================

    window.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            closeModal();

        }

    });

    // =========================
    // Tabs
    // =========================

    const tabs = modal.querySelectorAll(".fleet-tab");
    const tabContents = modal.querySelectorAll(".fleet-tab-content");

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            // Remove active class
            tabs.forEach(t => t.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            // Activate current tab
            tab.classList.add("active");

            const target = modal.querySelector("#" + tab.dataset.tab);

            if (target) {

                target.classList.add("active");

            }

            // Update Vehicle Count
            updateVehicleCount(tab.dataset.tab);

        });

    });

}
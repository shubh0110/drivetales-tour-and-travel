// =========================
// Fleet Modal
// =========================

const modalContainer = document.getElementById("carsModalContainer");

// Load modal HTML
fetch("./components/cars/cars-modal.html")
  .then(response => response.text())
  .then(html => {

    modalContainer.innerHTML = html;
    window.renderSedanCards();
    initializeFleetModal();

  });

function initializeFleetModal() {

    const modal = document.getElementById("fleetModal");
    const closeBtn = document.getElementById("closeFleetModal");

    const sedanCard = document.getElementById("sedanCard");
    const sedanExplore = document.getElementById("sedanExplore");

    // Vehicle Count
    const vehicleCount = modal.querySelector("#vehicleCount");

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

    function openModal(){

        modal.classList.add("show");
        document.body.style.overflow = "hidden";

        const activeTab = modal.querySelector(".fleet-tab.active");

        if(activeTab){
            updateVehicleCount(activeTab.dataset.tab);
        }

    }

    function closeModal(){

        modal.classList.remove("show");
        document.body.style.overflow = "";

    }

    // =========================
    // Click on Sedan Card
    // =========================

    if(sedanCard){
        sedanCard.addEventListener("click", openModal);
    }

    // =========================
    // Click Explore Button
    // =========================

    if(sedanExplore){

        sedanExplore.addEventListener("click",(e)=>{

            e.preventDefault();
            e.stopPropagation();

            openModal();

        });

    }

    // =========================
    // Close Button
    // =========================

    if(closeBtn){
        closeBtn.addEventListener("click", closeModal);
    }

    // =========================
    // Click Outside
    // =========================

    modal.addEventListener("click",(e)=>{

        if(e.target===modal){

            closeModal();

        }

    });

    // =========================
    // ESC Key
    // =========================

    window.addEventListener("keydown",(e)=>{

        if(e.key==="Escape"){

            closeModal();

        }

    });

    // =========================
    // Fleet Tabs
    // =========================

    const tabs = modal.querySelectorAll(".fleet-tab");
    const tabContents = modal.querySelectorAll(".fleet-tab-content");

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            // Remove Active
            tabs.forEach(t => t.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            // Add Active
            tab.classList.add("active");

            const target = modal.querySelector("#" + tab.dataset.tab);

            if(target){

                target.classList.add("active");

            }

            // Update Vehicle Count
            updateVehicleCount(tab.dataset.tab);

        });

    });

}
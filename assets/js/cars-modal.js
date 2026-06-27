// =========================
// Fleet Modal
// =========================

const modalContainer = document.getElementById("carsModalContainer");

// Load modal HTML
fetch("./components/cars-modal.html")
  .then(response => response.text())
  .then(html => {

    modalContainer.innerHTML = html;
console.log("modal loaded:", document.getElementById("fleetModal")); 
    initializeFleetModal();

  });

function initializeFleetModal() {

    const modal = document.getElementById("fleetModal");
    const closeBtn = document.getElementById("closeFleetModal");

    const sedanCard = document.getElementById("sedanCard");
    const sedanExplore = document.getElementById("sedanExplore");

    function openModal(){

        modal.classList.add("show");
        document.body.style.overflow="hidden";

    }

    function closeModal(){

        modal.classList.remove("show");
        document.body.style.overflow="";

    }

    // Click on Sedan Card
    sedanCard.addEventListener("click",openModal);

    // Click Explore Button
    sedanExplore.addEventListener("click",(e)=>{

        e.preventDefault();

        e.stopPropagation();

        openModal();

    });

    // Close Button
    closeBtn.addEventListener("click",closeModal);

    // Click Outside
  modal.addEventListener("click", (e) => {
     console.log("clicked:", e.target, "| is modal?", e.target === modal);
    if (e.target === modal) {
        // Check click wasn't on the scrollbar area
        const box = modal.querySelector(".fleet-modal-box");
        const rect = box.getBoundingClientRect();
        const clickedInsideBox =
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom;

        if (!clickedInsideBox) {
            closeModal();
        }
    }
});

    // ESC Key

    window.addEventListener("keydown",(e)=>{

        if(e.key==="Escape"){

            closeModal();

        }

    });

}
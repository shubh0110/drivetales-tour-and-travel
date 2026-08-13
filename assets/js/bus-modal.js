// =====================================
// Load Bus Modals
// =====================================

const busModalContainer = document.getElementById("busModalContainer");

Promise.all([
    fetch("./components/buses/buses-non-ac.html").then(r => r.text()),
    fetch("./components/buses/buses-modal-ac.html").then(r => r.text()),
    fetch("./components/buses/buses-modal-volvo.html").then(r => r.text())
]).then(([nonAcHtml, acHtml, volvoHtml]) => {

    busModalContainer.innerHTML =
        nonAcHtml +
        acHtml +
        volvoHtml;

    window.renderNonAcRoutes();
    window.renderAcRoutes();
    window.renderVolvoRoutes();


    initializeBusModals();

});


// =====================================
// Initialize
// =====================================

function initializeBusModals(){

    setupBusModal(
        "nonAc",
        "nonAcExplore",
        "nonAcModal",
        "closeNonAcModal"
    );

    setupBusModal(
        "acCard",
        "acExplore",
        "acModal",
        "closeAcModal"
    );

    setupBusModal(
        "volvo",
        "volvoExplore",
        "volvoModal",
        "closeVolvoModal"
    );

}


// =====================================
// Common Modal Function
// =====================================

function setupBusModal(cardId, buttonId, modalId, closeId){

    console.debug(`[bus-modal] setupBusModal called for modalId=${modalId}, cardId=${cardId}, buttonId=${buttonId}`);

    const modal = document.getElementById(modalId);
    const closeBtn = document.getElementById(closeId);

    // Elements like the card and explore button are loaded asynchronously
    // by `components.js`. Try to find them now; if not present, use
    // delegated click handlers on `document` so clicks still open the
    // modal once those components are injected.
    const card = document.getElementById(cardId);
    const exploreBtn = document.getElementById(buttonId);

    if(!modal) return;

    // Vehicle Count
    const vehicleCount = modal.querySelector(".vehicleCount");

        function updateRouteCount(){

            const routeCount = modal.querySelector(".vehicleCount");

            if(!routeCount) return;

            const totalRoutes = modal.querySelectorAll(".route-card").length;

            routeCount.textContent = totalRoutes;

        }


    function openModal(){
        console.debug(`[bus-modal] openModal -> ${modalId}`);

        updateRouteCount();

        modal.classList.add("show");

        document.body.style.overflow = "hidden";

    }

    function closeModal(){
        console.debug(`[bus-modal] closeModal -> ${modalId}`);

        modal.classList.remove("show");

        document.body.style.overflow = "";

    }

    // Card Click
    if(card){
        card.addEventListener("click", openModal);
    } else {
        // delegated handler in case `card` is injected later
        document.addEventListener('click', function delegatedCardClick(e){
            if(e.target.closest && e.target.closest(`#${cardId}`)){
                console.debug(`[bus-modal] delegated card click detected for ${cardId}`);
                openModal();
            }
        });
    }

    // Explore Button
    if(exploreBtn){
        exploreBtn.addEventListener("click", function(e){
            console.debug(`[bus-modal] explore button clicked -> ${buttonId}`);
            e.preventDefault();
            e.stopPropagation();
            openModal();
        });
    } else {
        // delegated handler for explore button clicks
        document.addEventListener('click', function delegatedExploreClick(e){
            const target = e.target.closest && e.target.closest(`#${buttonId}`);
            if(target){
                console.debug(`[bus-modal] delegated explore click detected for ${buttonId}`);
                e.preventDefault();
                e.stopPropagation();
                openModal();
            }
        });
    }

    // Close Button
    if(closeBtn){

        closeBtn.addEventListener("click", closeModal);

    }

    // Click Outside
    modal.addEventListener("click", function(e){

        if(e.target === modal){

            closeModal();

        }

    });

    // ESC Key
    window.addEventListener("keydown", function(e){

        if(e.key === "Escape"){

            closeModal();

        }

    });

}
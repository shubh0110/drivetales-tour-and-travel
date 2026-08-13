const WHATSAPPAC = "918433596248";

const waAcBus = (route) =>
    `https://wa.me/${WHATSAPPAC}?text=${encodeURIComponent(
        `Hi DriveTales! I would like to enquire about the ${route} AC Sleeper Bus. Could you please share the fare, boarding point and seat availability?`
    )}`;

const acRoutes = [

    {
        from: "Mumbai",
        to: "Ahmedabad",
        schedule: "Daily Departure",
    },

    {
        from: "Ahmedabad",
        to: "Mumbai",
        schedule: "Daily Departure",
    },

    {
        from: "Mumbai",
        to: "Surat",
        schedule: "Daily Departure",
    },

    {
        from: "Surat",
        to: "Mumbai",
        schedule: "Daily Departure",
    },

    {
        from: "Mumbai",
        to: "Indore / Ujjain",
        schedule: "Daily Departure",
    },

    {
        from: "Indore / Ujjain",
        to: "Mumbai",
        schedule: "Daily Departure",
    },

    {
        from: "Mumbai",
        to: "Goa",
        schedule: "Daily Departure",
    },

    {
        from: "Goa",
        to: "Mumbai",
        schedule: "Daily Departure",
    },

    {
        from: "Mumbai",
        to: "Rajasthan",
        schedule: "Daily Departure",
    },

    {
        from: "Rajasthan",
        to: "Mumbai",
        schedule: "Daily Departure",
    },

    {
        from: "Mumbai",
        to: "Bangalore",
        schedule: "Daily Departure",
    },

    {
        from: "Bangalore",
        to: "Mumbai",
        schedule: "Daily Departure",
    },

    {
        from: "Mumbai",
        to: "Konkan",
        schedule: "Daily Departure",
    },

    {
        from: "Konkan",
        to: "Mumbai",
        schedule: "Daily Departure",
    },

    {
        from: "Mumbai",
        to: "Rajkot",
        schedule: "Daily Departure",
    },

    {
        from: "Rajkot",
        to: "Mumbai",
        schedule: "Daily Departure",
    }

];

function buildRoute(route) {

    return `
        <div class="route-card">

            <div class="route-left">

                <ion-icon name="navigate-circle"></ion-icon>

                <div>

                    <h3>${route.from} → ${route.to}</h3>

                    <p>${route.schedule}</p>

                </div>

            </div>

            <a
                class="route-btn"
                target="_blank"
                href="${waAcBus(`${route.from} to ${route.to}`)}">

                Enquiry

            </a>

        </div>
    `;
}

window.renderAcRoutes = function () {

    const container = document.querySelector(
        "#acModal .route-grid"
    );

    if (!container) return;

    container.innerHTML = acRoutes
        .map(buildRoute)
        .join("");

    const count = document.querySelector(
        "#acModal .vehicleCount"
    );

    if (count) {

        count.textContent = acRoutes.length + "+";

    }

};
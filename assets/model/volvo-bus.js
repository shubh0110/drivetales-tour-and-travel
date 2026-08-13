const WHATSAPPVOLVO = "918433596248";

const waVolvoBus = (route) =>
    `https://wa.me/${WHATSAPPVOLVO}?text=${encodeURIComponent(
        `Hi DriveTales! I would like to enquire about the ${route} Volvo 9600 Multi-Axle Bus. Could you please share the fare, boarding point and seat availability?`
    )}`;

const volvoRoutes = [

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
                href="${waVolvoBus(`${route.from} to ${route.to}`)}">

                Enquiry

            </a>

        </div>
    `;
}

window.renderVolvoRoutes = function () {

    const container = document.querySelector(
        "#volvoModal .route-grid"
    );

    if (!container) return;

    container.innerHTML = volvoRoutes
        .map(buildRoute)
        .join("");

    const count = document.querySelector(
        "#volvoModal .vehicleCount"
    );

    if (count) {

        count.textContent = volvoRoutes.length + "+";

    }

};
/**
 * suv-data.js
 * DTO for all SUV / MPV fleet cars — Cab Service & Rent Car tabs.
 *
 * Exposes: window.renderSuvCards()
 * Called by cars-modal-suv.js AFTER the modal HTML is injected into the DOM.
 */

const WA_BASE_SUV = "https://wa.me/918433596248?text=";
const wa_suv = (msg) => `${WA_BASE_SUV}${encodeURIComponent(msg)}`;

// ─────────────────────────────────────────────
//  SUV — Cab Services
// ─────────────────────────────────────────────

const suvCab = [

  {
    name: "Maruti Ertiga",
    image: "./assets/images/suv/ertiga.png",
    alt: "Maruti Ertiga",
    badge: "Cab Service",
    rating: "4.9",
    description:
      "Comfortable 7-seater ideal for airport pickup, local trips and outstation journeys.",
    specs: [
      { icon: "👥", label: "7 Seats" },
      { icon: "❄", label: "AC" },
      { icon: "🧳", label: "4 Bags" },
      { icon: "📍", label: "GPS" },
      { icon: "📱", label: "Charging" },
      { icon: "🎵", label: "Music" },
      { icon: "🛣️", label: "300km/day" },
    ],
    services: ["Airport", "Local", "Outstation", "Corporate"],
    whatsapp: wa_suv(
      "Hi Drivetales, I'm interested in booking a Maruti Ertiga Cab Service. Could you please share the pricing, availability, and booking details? Thank you."
    ),
  },

  {
    name: "Toyota Innova",
    image: "./assets/images/suv/innova.png",
    alt: "Toyota Innova",
    badge: "Cab Service",
    rating: "4.9",
    description:
      "Spacious premium MPV perfect for family tours, business travel and airport transfers.",
    specs: [
      { icon: "👥", label: "7 Seats" },
      { icon: "❄", label: "AC" },
      { icon: "⚙", label: "Manual" },
      { icon: "⛽", label: "Diesel" },
      { icon: "🧳", label: "5 Bags" },
      { icon: "📍", label: "GPS" },
      { icon: "📱", label: "Charging" },
      { icon: "🎵", label: "Music" },
      { icon: "🛣️", label: "300km/day" },
    ],
    services: ["Airport", "Local", "Corporate", "Outstation"],
    whatsapp: wa_suv(
      "Hi Drivetales, I'm interested in booking a Toyota Innova Cab Service. Could you please share the pricing, availability, and booking details? Thank you."
    ),
  },

  {
    name: "Toyota Innova Crysta",
    image: "./assets/images/suv/innova-crysta.png",
    alt: "Toyota Innova Crysta",
    badge: "Cab Service",
    rating: "5.0",
    description:
      "Luxury MPV offering exceptional comfort for VIP travel, weddings and corporate tours.",
    specs: [
      { icon: "👥", label: "7 Seats" },
      { icon: "❄", label: "AC" },
      { icon: "⚙", label: "Automatic" },
      { icon: "⛽", label: "Diesel" },
      { icon: "🧳", label: "5 Bags" },
      { icon: "📍", label: "GPS" },
      { icon: "📱", label: "Charging" },
      { icon: "🎵", label: "Music" },
      { icon: "🛣️", label: "300km/day" },
    ],
    services: ["Airport", "Corporate", "Wedding", "Outstation"],
    whatsapp: wa_suv(
      "Hi Drivetales, I'm interested in booking a Toyota Innova Crysta Cab Service. Could you please share the pricing, availability, and booking details? Thank you."
    ),
  },

];

// ─────────────────────────────────────────────
//  SUV — Rent Car
// ─────────────────────────────────────────────

const suvRent = [
  {
    name: "Maruti Ertiga (Petrol/CNG)",
    image: "./assets/images/suv/ertiga.png",
    alt: "Maruti Ertiga (Petrol/CNG)",
    badge: "Premium SUV",
    rating: "4.9",
    description: "Spacious MPV perfect for family and outstation travel.",
    specs: [
      { icon: "👥", label: "7 Seats" },
      { icon: "❄",  label: "AC" },
      { icon: "⚙",  label: "Manual" },
      { icon: "⛽", label: "Petrol/CNG" },
      { icon: "🧳", label: "4 Bags" },
      { icon: "📍", label: "GPS" },
      { icon: "📱", label: "Charging" },
      { icon: "🎵", label: "Music" },
      { icon: "🛣️", label: "300km/day" },
    ],
    services: ["Airport", "Local", "Corporate", "Outstation", "Family Trip"],
    whatsapp: wa_suv("Hi Drivetales, I'm interested in booking a Maruti Ertiga (Petrol/CNG). Could you please share the pricing, availability, and booking details? Thank you."),
  },
  {
    name: "Maruti Ertiga (Petrol/Auto)",
    image: "./assets/images/suv/ertiga.png",
    alt: "Maruti Ertiga (Petrol/Auto)",
    badge: "Premium SUV",
    rating: "4.9",
    description: "Automatic MPV offering a smooth and comfortable driving experience.",
    specs: [
      { icon: "👥", label: "7 Seats" },
      { icon: "❄",  label: "AC" },
      { icon: "⚙",  label: "Automatic" },
      { icon: "⛽", label: "Petrol" },
      { icon: "🧳", label: "4 Bags" },
      { icon: "📍", label: "GPS" },
      { icon: "📱", label: "Charging" },
      { icon: "🎵", label: "Music" },
      { icon: "🛣️", label: "300km/day" },
    ],
    services: ["Airport", "Local", "Corporate", "Outstation", "Family Trip"],
    whatsapp: wa_suv("Hi Drivetales, I'm interested in booking a Maruti Ertiga (Petrol/Auto). Could you please share the pricing, availability, and booking details? Thank you."),
  },
  {
    name: "Ertiga 2025 Model",
    image: "./assets/images/suv/ertiga.png",
    alt: "Ertiga 2025 Model",
    badge: "Premium SUV",
    rating: "4.9",
    description: "Latest Ertiga with upgraded comfort and modern features.",
    specs: [
      { icon: "👥", label: "7 Seats" },
      { icon: "❄",  label: "AC" },
      { icon: "⚙",  label: "Automatic" },
      { icon: "⛽", label: "Petrol/CNG" },
      { icon: "🧳", label: "4 Bags" },
      { icon: "📍", label: "GPS" },
      { icon: "📱", label: "Charging" },
      { icon: "🎵", label: "Music" },
      { icon: "🛣️", label: "300km/day" },
    ],
    services: ["Airport", "Local", "Corporate", "Outstation", "Family Trip"],
    whatsapp: wa_suv("Hi Drivetales, I'm interested in booking an Ertiga 2025 Model. Could you please share the pricing, availability, and booking details? Thank you."),
  },
  {
    name: "XL6 Auto",
    image: "./assets/images/suv/xl6.png",
    alt: "XL6 Auto",
    badge: "Premium SUV",
    rating: "4.9",
    description: "Premium captain-seat MPV for executive and family travel.",
    specs: [
      { icon: "👥", label: "6 Seats" },
      { icon: "❄",  label: "AC" },
      { icon: "⚙",  label: "Automatic" },
      { icon: "⛽", label: "Petrol" },
      { icon: "🧳", label: "4 Bags" },
      { icon: "📍", label: "GPS" },
      { icon: "📱", label: "Charging" },
      { icon: "🎵", label: "Music" },
      { icon: "🛣️", label: "300km/day" },
    ],
    services: ["Airport", "Local", "Corporate", "Outstation", "Family Trip"],
    whatsapp: wa_suv("Hi Drivetales, I'm interested in booking an XL6 Auto. Could you please share the pricing, availability, and booking details? Thank you."),
  },
  {
    name: "XL6 Manual",
    image: "./assets/images/suv/xl6.png",
    alt: "XL6 Manual",
    badge: "Premium SUV",
    rating: "4.9",
    description: "Luxury MPV with spacious interiors and manual transmission.",
    specs: [
      { icon: "👥", label: "6 Seats" },
      { icon: "❄",  label: "AC" },
      { icon: "⚙",  label: "Manual" },
      { icon: "⛽", label: "Petrol" },
      { icon: "🧳", label: "4 Bags" },
      { icon: "📍", label: "GPS" },
      { icon: "📱", label: "Charging" },
      { icon: "🎵", label: "Music" },
      { icon: "🛣️", label: "300km/day" },
    ],
    services: ["Airport", "Local", "Corporate", "Outstation", "Family Trip"],
    whatsapp: wa_suv("Hi Drivetales, I'm interested in booking an XL6 Manual. Could you please share the pricing, availability, and booking details? Thank you."),
  },
  {
    name: "Maruti Brezza",
    image: "./assets/images/suv/brezza.png",
    alt: "Maruti Brezza",
    badge: "Premium SUV",
    rating: "4.9",
    description: "Compact SUV suitable for city and highway journeys.",
    specs: [
      { icon: "👥", label: "5 Seats" },
      { icon: "❄",  label: "AC" },
      { icon: "⚙",  label: "Automatic" },
      { icon: "⛽", label: "Petrol" },
      { icon: "🧳", label: "3 Bags" },
      { icon: "📍", label: "GPS" },
      { icon: "📱", label: "Charging" },
      { icon: "🎵", label: "Music" },
      { icon: "🛣️", label: "300km/day" },
    ],
    services: ["Airport", "Local", "Corporate", "Outstation", "Family Trip"],
    whatsapp: wa_suv("Hi Drivetales, I'm interested in booking a Maruti Brezza. Could you please share the pricing, availability, and booking details? Thank you."),
  },
  {
    name: "Brezza VXI",
    image: "./assets/images/suv/brezza.png",
    alt: "Brezza VXI",
    badge: "Premium SUV",
    rating: "4.9",
    description: "Comfortable SUV with stylish interiors and excellent mileage.",
    specs: [
      { icon: "👥", label: "5 Seats" },
      { icon: "❄",  label: "AC" },
      { icon: "⚙",  label: "Manual" },
      { icon: "⛽", label: "Petrol/CNG" },
      { icon: "🧳", label: "3 Bags" },
      { icon: "📍", label: "GPS" },
      { icon: "📱", label: "Charging" },
      { icon: "🎵", label: "Music" },
      { icon: "🛣️", label: "300km/day" },
    ],
    services: ["Airport", "Local", "Corporate", "Outstation", "Family Trip"],
    whatsapp: wa_suv("Hi Drivetales, I'm interested in booking a Brezza VXI. Could you please share the pricing, availability, and booking details? Thank you."),
  },
  {
    name: "Bolero Neo",
    image: "./assets/images/suv/bolero.png",
    alt: "Bolero Neo",
    badge: "Premium SUV",
    rating: "4.9",
    description: "Rugged SUV built for long-distance and rural travel.",
    specs: [
      { icon: "👥", label: "7 Seats" },
      { icon: "❄",  label: "AC" },
      { icon: "⚙",  label: "Manual" },
      { icon: "⛽", label: "Diesel" },
      { icon: "🧳", label: "4 Bags" },
      { icon: "📍", label: "GPS" },
      { icon: "📱", label: "Charging" },
      { icon: "🎵", label: "Music" },
      { icon: "🛣️", label: "300km/day" },
    ],
    services: ["Airport", "Local", "Corporate", "Outstation", "Family Trip"],
    whatsapp: wa_suv("Hi Drivetales, I'm interested in booking a Bolero Neo. Could you please share the pricing, availability, and booking details? Thank you."),
  },
  {
    name: "Hyundai Venue",
    image: "./assets/images/suv/venue.png",
    alt: "Hyundai Venue",
    badge: "Premium SUV",
    rating: "4.9",
    description: "Modern compact SUV packed with premium features.",
    specs: [
      { icon: "👥", label: "5 Seats" },
      { icon: "❄",  label: "AC" },
      { icon: "⚙",  label: "Automatic" },
      { icon: "⛽", label: "Petrol" },
      { icon: "🧳", label: "3 Bags" },
      { icon: "📍", label: "GPS" },
      { icon: "📱", label: "Charging" },
      { icon: "🎵", label: "Music" },
      { icon: "🛣️", label: "300km/day" },
    ],
    services: ["Airport", "Local", "Corporate", "Outstation", "Family Trip"],
    whatsapp: wa_suv("Hi Drivetales, I'm interested in booking a Hyundai Venue. Could you please share the pricing, availability, and booking details? Thank you."),
  },
  {
    name: "Innova Crysta",
    image: "./assets/images/suv/innova-crysta.png",
    alt: "Innova Crysta",
    badge: "Premium SUV",
    rating: "4.9",
    description: "India's favourite premium MPV for corporate and family travel.",
    specs: [
      { icon: "👥", label: "7 Seats" },
      { icon: "❄",  label: "AC" },
      { icon: "⚙",  label: "Automatic" },
      { icon: "⛽", label: "Diesel" },
      { icon: "🧳", label: "5 Bags" },
      { icon: "📍", label: "GPS" },
      { icon: "📱", label: "Charging" },
      { icon: "🎵", label: "Music" },
      { icon: "🛣️", label: "300km/day" },
    ],
    services: ["Airport", "Local", "Corporate", "Outstation", "Family Trip"],
    whatsapp: wa_suv("Hi Drivetales, I'm interested in booking an Innova Crysta. Could you please share the pricing, availability, and booking details? Thank you."),
  },
  {
    name: "Thar 2024",
    image: "./assets/images/suv/thar.png",
    alt: "Thar 2024",
    badge: "Premium SUV",
    rating: "4.9",
    description: "Adventure SUV ideal for road trips and premium experiences.",
    specs: [
      { icon: "👥", label: "5 Seats" },
      { icon: "❄",  label: "AC" },
      { icon: "⚙",  label: "Automatic" },
      { icon: "⛽", label: "Petrol" },
      { icon: "🧳", label: "2 Bags" },
      { icon: "📍", label: "GPS" },
      { icon: "📱", label: "Charging" },
      { icon: "🎵", label: "Music" },
      { icon: "🛣️", label: "300km/day" },
    ],
    services: ["Airport", "Local", "Corporate", "Outstation", "Family Trip"],
    whatsapp: wa_suv("Hi Drivetales, I'm interested in booking a Thar 2024. Could you please share the pricing, availability, and booking details? Thank you."),
  },

  {
    name: "Toyota Innova",
    image: "./assets/images/suv/innova.png",
    alt: "Toyota Innova",
    badge: "Premium SUV",
    rating: "4.9",
    description: "Spacious premium MPV perfect for family tours, business travel and airport transfers.",
    specs: [
        { icon: "👥", label: "7 Seats" },
        { icon: "❄", label: "AC" },
        { icon: "⚙", label: "Manual" },
        { icon: "⛽", label: "Diesel" },
        { icon: "🧳", label: "5 Bags" },
        { icon: "📍", label: "GPS" },
        { icon: "📱", label: "Charging" },
        { icon: "🎵", label: "Music" },
        { icon: "🛣️", label: "300km/day" },
    ],
    services: ["Airport","Local","Corporate","Outstation","Family Trip"],
    whatsapp: wa_suv("Hi Drivetales, I'm interested in booking a Toyota Innova. Could you please share the pricing, availability, and booking details? Thank you."),
    },

    {
        name: "Hyundai Creta",
    image: "./assets/images/suv/creta.png",
    alt: "Hyundai Creta",
    badge: "Premium SUV",
    rating: "4.9",
    description: "Spacious premium SUV perfect for family tours, business travel and airport transfers.",
    specs: [
        { icon: "👥", label: "5 Seats" },
        { icon: "❄", label: "AC" },
        { icon: "⚙", label: "Manual" },
        { icon: "⛽", label: "Diesel" },
        { icon: "🧳", label: "5 Bags" },
        { icon: "📍", label: "GPS" },
        { icon: "📱", label: "Charging" },
        { icon: "🎵", label: "Music" },
        { icon: "🛣️", label: "300km/day" },
    ],
    services: ["Airport","Local","Corporate","Outstation","Family Trip"],
    whatsapp: wa_suv("Hi Drivetales, I'm interested in booking a Hyundai Creta. Could you please share the pricing, availability, and booking details? Thank you."),
    },


];

// ─────────────────────────────────────────────
//  Card Builder
// ─────────────────────────────────────────────

function buildCard(car) {

    return `
    <div class="premium-car-card">

        <div class="car-top">

            <span class="car-badge">${car.badge}</span>

        </div>

        <div class="car-image">

            <img src="${car.image}" alt="${car.alt}" loading="lazy">

        </div>

        <div class="car-body">

            <div class="car-title-row">

                <h3>${car.name}</h3>

                <span class="car-rating">
                    ⭐ ${car.rating}
                </span>

            </div>

            <p>${car.description}</p>

            <div class="car-specs">

                ${car.specs.map(spec => `
                    <div class="spec">
                        ${spec.icon}
                        <span>${spec.label}</span>
                    </div>
                `).join("")}

            </div>

            <div class="car-services">

                ${car.services.map(service => `
                    <span>${service}</span>
                `).join("")}

            </div>

            <a
                class="whatsapp-btn"
                target="_blank"
                href="${car.whatsapp}"
            >

                <ion-icon name="logo-whatsapp"></ion-icon>

                Enquiry on WhatsApp

            </a>

        </div>

    </div>
    `;

}


// ─────────────────────────────────────────────
// Render Cards
// ─────────────────────────────────────────────

window.renderSuvCards = function () {

    const cabGrid =
        document.querySelector("#suvModal #cab .fleet-grid-modal");

    const rentGrid =
        document.querySelector("#suvModal #rent .fleet-grid-modal");

    if (cabGrid) {

        cabGrid.innerHTML = suvCab
            .map(buildCard)
            .join("");

    }

    if (rentGrid) {

        rentGrid.innerHTML = suvRent
            .map(buildCard)
            .join("");

    }

};
/**
 * sedan-data.js
 * DTO for all Sedan fleet cars — Cab Service & Rent Car tabs.
 *
 * Exposes: window.renderSedanCards()
 * Called by cars-modal.js AFTER the modal HTML is injected into the DOM.
 */

const WA_BASE = "https://wa.me/918433596248?text=";
const wa = (msg) => `${WA_BASE}${encodeURIComponent(msg)}`;

// ─────────────────────────────────────────────
//  SEDAN — Cab Services
// ─────────────────────────────────────────────

const sedanCab = [
  {
    name: "Dzire",
    image: "./assets/images/sedan/dzire.png",
    alt: "Dzire",
    badge: "Premium",
    rating: "4.9",
    description: "Reliable sedan with spacious interiors and smooth ride quality.",
    specs: [
      { icon: "👥", label: "5" },
      { icon: "❄",  label: "AC" },
      { icon: "⚙",  label: "Manual" },
      { icon: "🧳", label: "2 Bags" },
      { icon: "📍", label: "GPS" },
      { icon: "📱", label: "Charging" },
      { icon: "🎵", label: "Music" },
      { icon: "🛣️", label: "300km/day" },
    ],
    services: ["Airport", "Local", "Corporate", "Outstation"],
    whatsapp: wa("Hi Drivetales, I'm interested in booking a Dzire Cab Service. Could you please share the pricing, availability, and booking details? Thank you."),
  },
  {
    name: "Ciaz",
    image: "./assets/images/sedan/ciaz.png",
    alt: "Ciaz",
    badge: "Premium",
    rating: "4.9",
    description: "Premium hatchback with stylish interiors and excellent mileage.",
    specs: [
      { icon: "👥", label: "5" },
      { icon: "❄",  label: "AC" },
      { icon: "⚙",  label: "Automatic" },
      { icon: "🧳", label: "2 Bags" },
      { icon: "📍", label: "GPS" },
      { icon: "📱", label: "Charging" },
      { icon: "🎵", label: "Music" },
      { icon: "🛣️", label: "300km/day" },
    ],
    services: ["Airport", "Local", "Corporate", "Outstation"],
    whatsapp: wa("Hi Drivetales, I'm interested in booking a Ciaz Cab Service. Could you please share the pricing, availability, and booking details? Thank you."),
  },
];

// ─────────────────────────────────────────────
//  SEDAN — Rent Car
// ─────────────────────────────────────────────

const sedanRent = [
  {
    name: "Toyota Etios",
    image: "./assets/images/sedan/etios.png",
    alt: "Toyota Etios",
    badge: "Premium",
    rating: "4.9",
    description: "Reliable sedan with spacious interiors and smooth ride quality.",
    specs: [
      { icon: "👥", label: "5" },
      { icon: "❄",  label: "AC" },
      { icon: "⚙",  label: "Manual" },
      { icon: "⛽", label: "Petrol" },
      { icon: "🧳", label: "2 Bags" },
      { icon: "📍", label: "GPS" },
      { icon: "📱", label: "Charging" },
      { icon: "🎵", label: "Music" },
      { icon: "🛣️", label: "300km/day" },
    ],
    services: ["Airport", "Local", "Corporate", "Outstation"],
    whatsapp: wa("Hi Drivetales, I'm interested in booking a Toyota Etios. Could you please share the pricing, availability, and booking details? Thank you."),
  },
  {
    name: "Toyota Glanza",
    image: "./assets/images/sedan/glanza.png",
    alt: "Toyota Glanza",
    badge: "Premium",
    rating: "4.9",
    description: "Premium hatchback with stylish interiors and excellent mileage.",
    specs: [
      { icon: "👥", label: "5" },
      { icon: "❄",  label: "AC" },
      { icon: "⚙",  label: "Automatic" },
      { icon: "⛽", label: "Petrol" },
      { icon: "🧳", label: "2 Bags" },
      { icon: "📍", label: "GPS" },
      { icon: "📱", label: "Charging" },
      { icon: "🎵", label: "Music" },
      { icon: "🛣️", label: "300km/day" },
    ],
    services: ["Airport", "Local", "Corporate", "Outstation"],
    whatsapp: wa("Hi Drivetales, I'm interested in booking a Toyota Glanza. Could you please share the pricing, availability, and booking details? Thank you."),
  },
  {
    name: "Hyundai Aura",
    image: "./assets/images/sedan/aura.png",
    alt: "Hyundai Aura",
    badge: "Premium",
    rating: "4.9",
    description: "Modern compact sedan suitable for city and corporate travel.",
    specs: [
      { icon: "👥", label: "5" },
      { icon: "❄",  label: "AC" },
      { icon: "⚙",  label: "Manual" },
      { icon: "⛽", label: "Petrol/CNG" },
      { icon: "🧳", label: "2 Bags" },
      { icon: "📍", label: "GPS" },
      { icon: "📱", label: "Charging" },
      { icon: "🎵", label: "Music" },
      { icon: "🛣️", label: "300km/day" },
    ],
    services: ["Airport", "Local", "Corporate", "Outstation"],
    whatsapp: wa("Hi Drivetales, I'm interested in booking a Hyundai Aura. Could you please share the pricing, availability, and booking details? Thank you."),
  },
  {
    name: "Baleno",
    image: "./assets/images/sedan/baleno.png",
    alt: "Baleno",
    badge: "Premium",
    rating: "4.9",
    description: "Premium hatchback offering comfort and refined performance.",
    specs: [
      { icon: "👥", label: "5" },
      { icon: "❄",  label: "AC" },
      { icon: "⚙",  label: "Automatic" },
      { icon: "⛽", label: "Petrol" },
      { icon: "🧳", label: "2 Bags" },
      { icon: "📍", label: "GPS" },
      { icon: "📱", label: "Charging" },
      { icon: "🎵", label: "Music" },
      { icon: "🛣️", label: "300km/day" },
    ],
    services: ["Airport", "Local", "Corporate", "Outstation"],
    whatsapp: wa("Hi Drivetales, I'm interested in booking a Baleno. Could you please share the pricing, availability, and booking details? Thank you."),
  },
  {
    name: "Tata Altroz",
    image: "./assets/images/sedan/altroz.png",
    alt: "Tata Altroz",
    badge: "Premium",
    rating: "4.9",
    description: "Safe premium hatchback with spacious cabin.",
    specs: [
      { icon: "👥", label: "5" },
      { icon: "❄",  label: "AC" },
      { icon: "⚙",  label: "Manual" },
      { icon: "⛽", label: "Petrol/CNG" },
      { icon: "🧳", label: "2 Bags" },
      { icon: "📍", label: "GPS" },
      { icon: "📱", label: "Charging" },
      { icon: "🎵", label: "Music" },
      { icon: "🛣️", label: "300km/day" },
    ],
    services: ["Airport", "Local", "Corporate", "Outstation"],
    whatsapp: wa("Hi Drivetales, I'm interested in booking a Tata Altroz. Could you please share the pricing, availability, and booking details? Thank you."),
  },
  {
    name: "Swift",
    image: "./assets/images/sedan/swift.png",
    alt: "Swift",
    badge: "Premium",
    rating: "4.9",
    description: "Popular hatchback for local and outstation trips.",
    specs: [
      { icon: "👥", label: "5" },
      { icon: "❄",  label: "AC" },
      { icon: "⚙",  label: "Manual" },
      { icon: "⛽", label: "Petrol/CNG" },
      { icon: "🧳", label: "2 Bags" },
      { icon: "📍", label: "GPS" },
      { icon: "📱", label: "Charging" },
      { icon: "🎵", label: "Music" },
      { icon: "🛣️", label: "300km/day" },
    ],
    services: ["Airport", "Local", "Corporate", "Outstation"],
    whatsapp: wa("Hi Drivetales, I'm interested in booking a Swift. Could you please share the pricing, availability, and booking details? Thank you."),
  },
  {
    name: "Wagon R",
    image: "./assets/images/sedan/wagnor.png",
    alt: "Wagon R",
    badge: "Premium",
    rating: "4.9",
    description: "Spacious family hatchback with excellent mileage.",
    specs: [
      { icon: "👥", label: "5" },
      { icon: "❄",  label: "AC" },
      { icon: "⚙",  label: "Manual" },
      { icon: "⛽", label: "Petrol/CNG" },
      { icon: "🧳", label: "2 Bags" },
      { icon: "📍", label: "GPS" },
      { icon: "📱", label: "Charging" },
      { icon: "🎵", label: "Music" },
      { icon: "🛣️", label: "300km/day" },
    ],
    services: ["Airport", "Local", "Corporate", "Outstation"],
    whatsapp: wa("Hi Drivetales, I'm interested in booking a Wagon R. Could you please share the pricing, availability, and booking details? Thank you."),
  },
  {
    name: "Celerio 2023",
    image: "./assets/images/sedan/celerio.png",
    alt: "Celerio 2023",
    badge: "Premium",
    rating: "4.9",
    description: "Compact automatic hatchback for comfortable city rides.",
    specs: [
      { icon: "👥", label: "5" },
      { icon: "❄",  label: "AC" },
      { icon: "⚙",  label: "Automatic" },
      { icon: "⛽", label: "Petrol" },
      { icon: "🧳", label: "2 Bags" },
      { icon: "📍", label: "GPS" },
      { icon: "📱", label: "Charging" },
      { icon: "🎵", label: "Music" },
      { icon: "🛣️", label: "300km/day" },
    ],
    services: ["Airport", "Local", "Corporate", "Outstation"],
    whatsapp: wa("Hi Drivetales, I'm interested in booking a Celerio 2023. Could you please share the pricing, availability, and booking details? Thank you."),
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
        <img src="${car.image}" alt="${car.alt}">
      </div>
      <div class="car-body">
        <div class="car-title-row">
          <h3>${car.name}</h3>
          <span class="car-rating">⭐ ${car.rating}</span>
        </div>
        <p>${car.description}</p>
        <div class="car-specs">
          ${car.specs.map(s => `<div class="spec">${s.icon}<span>${s.label}</span></div>`).join("")}
        </div>
        <div class="car-services">
          ${car.services.map(s => `<span>${s}</span>`).join("")}
        </div>
        <a class="whatsapp-btn" target="_blank" href="${car.whatsapp}">
          <ion-icon name="logo-whatsapp"></ion-icon>
          Enquiry on WhatsApp
        </a>
      </div>
    </div>`;
}

// ─────────────────────────────────────────────
//  Global render function — called by cars-modal.js
//  after the modal HTML has been injected into the DOM.
// ─────────────────────────────────────────────

window.renderSedanCards = function () {
  const cabGrid  = document.querySelector("#fleetModal #cab .fleet-grid-modal");
  const rentGrid = document.querySelector("#fleetModal #rent .fleet-grid-modal");
  if (cabGrid)  cabGrid.innerHTML  = sedanCab.map(buildCard).join("");
  if (rentGrid) rentGrid.innerHTML = sedanRent.map(buildCard).join("");
};
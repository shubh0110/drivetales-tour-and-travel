async function loadComponent(id, file) {

    try {

        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Cannot load ${file}`);
        }

        const html = await response.text();

        const element = document.getElementById(id);

        if (!element) return;

        element.innerHTML = html;

        // Header loaded
        if(id === "header-section"){

            initializeHeader();

        }

    } catch(err){

        console.error(err);

    }

}


function initializeHeader(){

    const navOpenBtn = document.querySelector("[data-nav-open-btn]");
    const navCloseBtn = document.querySelector("[data-nav-close-btn]");
    const navbar = document.querySelector("[data-navbar]");
    const overlay = document.querySelector("[data-overlay]");
    const navLinks = document.querySelectorAll("[data-nav-link]");

    function openNav(){

        navbar.classList.add("active");
        overlay.classList.add("active");
        document.body.classList.add("nav-open");

    }

    function closeNav(){

        navbar.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("nav-open");

    }

    navOpenBtn?.addEventListener("click", openNav);

    navCloseBtn?.addEventListener("click", closeNav);

    overlay?.addEventListener("click", closeNav);

    navLinks.forEach(link=>{

        link.addEventListener("click",closeNav);

    });

}

loadComponent("header-section", "./components/header/header.html");
loadComponent("hero-section", "./components/hero/hero.html");
loadComponent("cars-section", "./components/cars/cars.html");
loadComponent("buses-section", "./components/buses/buses.html");
loadComponent("about", "./components/about/about.html");
loadComponent("hero", "./components/about/hero.html");
loadComponent("about-company", "./components/about/about-company.html");
loadComponent("founder", "./components/about/founder.html");
loadComponent("why-choose", "./components/about/why-choose.html");
loadComponent("values", "./components/about/values.html");
loadComponent("contact-section", "./components/contacts/contact.html");
loadComponent("footer-section", "./components/footer/footer.html");
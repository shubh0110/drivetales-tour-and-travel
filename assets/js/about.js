async function loadComponent(id, file) {
    try {
        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Unable to load ${file}`);
        }

        const html = await response.text();

        document.getElementById(id).innerHTML = html;

    } catch (error) {
        console.error(error);
    }
}

async function initPage() {

    await Promise.all([
        loadComponent("header", "./components/header.html"),
        loadComponent("hero", "./components/about/hero.html"),
        loadComponent("about-company", "./components/about/about-company.html"),
        loadComponent("founder", "./components/about/founder.html"),
        loadComponent("why-choose", "./components/about/why-choose.html"),
        loadComponent("values", "./components/about/values.html"),
        loadComponent("stats", "./components/about/stats.html"),
        loadComponent("footer", "./components/footer.html")
    ]);

    initCounters();

}

initPage();

/* ============================
        COUNTER
============================ */

function initCounters() {

    const counters = document.querySelectorAll(".counter");

    if (!counters.length) return;

    const speed = 40;

    function startCounter() {

        counters.forEach(counter => {

            const target = Number(counter.dataset.target);

            let count = 0;

            const increment = Math.ceil(target / speed);

            function update() {

                count += increment;

                if (count >= target) {

                    counter.innerText = target.toLocaleString() + "+";

                } else {

                    counter.innerText = count.toLocaleString();

                    requestAnimationFrame(update);

                }

            }

            update();

        });

    }

    const stats = document.querySelector(".stats");

    if (!stats) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounter();

                observer.disconnect();

            }

        });

    }, {
        threshold: 0.4
    });

    observer.observe(stats);

}
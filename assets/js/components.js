async function loadComponent(id, file) {
  try {
    const response = await fetch(file);

    if (!response.ok) {
      throw new Error(`Cannot load ${file}`);
    }

    const html = await response.text();

    document.getElementById(id).innerHTML = html;

  } catch (err) {
    console.error(err);
  }
}

loadComponent("fleet-section", "./components/cars.html");
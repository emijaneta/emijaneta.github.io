console.log("Willkommen auf meiner Portfolioseite!");

//Projekt Karten
const cards = document.querySelectorAll(".filter-card");
const projects = document.querySelectorAll(".project");

cards.forEach(card => {             //jede Filterkarte wird durchgegangen + Klick
  card.addEventListener("click", () => {      
    const category = card.dataset.category; //liest wert von der category

    // toggle active status
    cards.forEach(c => c.classList.remove("active"));   //entfernt bei allen karten die klasse active
    card.classList.add("active"); //fügt angeklickten karte active hinzu, optisch hervorgehoben

    // filter projects
    projects.forEach(project => { //alle projekte werden durchgegangen
      if (project.dataset.category === category) {
        project.style.display = "block"; //wenn projekt gleiche kategorie wie geklickte karte, dann angezeigt
      } else {
        project.style.display = "none"; //rest wird ausgeblendet
      }
    });
  });
});

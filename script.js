// Récupération des éléments
const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

// Ecoute de l'événement change sur le select
select.addEventListener("change", () => {
  // Création de la constante choice
  const choice = select.value;
  // Création de la variable days réglée à 31 de base
  let days = 31;

  if (choice === "Février") {
    days = 28;
  } else if (
    choice === "Avril" ||
    choice === "Juin" ||
    choice === "Septembre" ||
    choice === "Novembre"
  ) {
    days = 30;
  } else {
    days = 31;
  }

  // Appel de la fonction createCalendar ayant pour paramètres le nombre de jour (days) et le choix de l'utilisateur (choice)
  createCalendar(days, choice);
});

// Création de la fonction createCalendar ayant pour paramètres le nombre de jour (days) et le choix de l'utilisateur (choice)
const createCalendar = (days, choice) => {
  list.textContent = "";
  h1.textContent = choice;
  // Utilisation de la boucle for qui va parcourir les jours
  for (let i = 1; i <= days; i++) {
    // Création d'un élément liste et insertion dans le DOM
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
};

// Appel de la fonction CreateCalendar
createCalendar(31, "Janvier");

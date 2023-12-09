// URL de l'API Studio Ghibli
const apiUrl = "https://ghibliapi.vercel.app/films";

// Utilisation de la fonction fetch pour effectuer une requête GET
fetch(apiUrl)
  .then(response => {
    // Vérifier si la requête a réussi (code de statut 200)
    if (!response.ok) {
      throw new Error(`Échec de la requête. Code de statut : ${response.status}`);
    }
    // Convertir la réponse en JSON
    return response.json();
  })
  .then(data => {
    // Maintenant, vous pouvez travailler avec les données


    // Sélectionner les éléments HTML par leur identifiant
    const bodyList = document.getElementById("body");

    

    

    // Insérer les films regroupés par réalisateur dans une liste imbriquée
    bodyList.insertAdjacentHTML("beforeend", data.map(film =>
      ` <div class="film-card">
        <img class="film-image" src="${film.image}" alt="${film.title}">
        <div class="film-details">
          <div class="film-title">${film.title}</div>
          <div class="director-name">${film.director}</div>
          <div class="button_text">
          <a href="#" class="view-button">View</a>
          <span class="original_title">${film.original_title}</span>
          </div>
        </div>
      </div>`).join(""));
  })
  .catch(error => {
    console.error(`Erreur lors de la récupération des données : ${error.message}`);
  });

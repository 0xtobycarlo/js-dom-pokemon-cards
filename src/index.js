for (const element of data) {
  const ulCards = document.querySelector("ul");

  const liElement = document.createElement("li");
  liElement.setAttribute("class", "card");

  const h2 = document.createElement("h2");
  h2.setAttribute("class", "card--title");

  const img = document.createElement("img");
  img.setAttribute("class", "card--img");
  img.setAttribute("width", "256");

  const ulPokemonStats = document.createElement("ul");
  ulPokemonStats.setAttribute("class", "card--text");

  const liStatHP = document.createElement("li");

  const liStatAttack = document.createElement("li");

  const liStatDefense = document.createElement("li");

  const liStatSpecialAttack = document.createElement("li");

  const liStatSpecialDefense = document.createElement("li");

  const liStatSpeed = document.createElement("li");

  const liGamesPlayed = document.createElement("li");

  liGamesPlayed.innerText = `GAME PLAYED : ${
    element.game_indices[data.indexOf(element)].version.name
  }`;

  ulCards.append(liElement);

  liElement.append(h2, img, ulPokemonStats);
  h2.innerText = element.name;

  img.setAttribute(
    "src",
    element.sprites.other["official-artwork"]["front_default"]
  );

  img.addEventListener("mousemove", () => {
    return img.setAttribute(
      "src",
      element.sprites.other["dream_world"]["front_default"]
    );
  });
}

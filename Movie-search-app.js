const key = "https://www.omdbapi.com/?apikey=4f62f1f&t=";

document.getElementById("btn").onclick = async () => {
  const name = document.getElementById("search").value.trim();
  if (!name) return;

  const data = await fetch(key + name).then(r => r.json());
  const box = document.getElementById("result");

  box.innerHTML = data.Response === "False"
    ? "<p>No movie found.</p>"
    : `
      <h2>${data.Title}</h2>
      <img src="${data.Poster}">
      <p><b>Year:</b> ${data.Year}</p>
      <p><b>Genre:</b> ${data.Genre}</p>
      <p><b>IMDB:</b> ${data.imdbRating}</p>
    `;
};

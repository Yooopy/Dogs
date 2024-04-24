function addPicture() {
  const site = `https://dog.ceo/api/breeds/image/random`;
  fetch(site, { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      const body = document.getElementsByClassName("main-art")[0];
      const picture = document.createElement("div");
      picture.className = "container";
      picture.innerHTML = `<img class="tumb" src="${data.message}">`;
      body.appendChild(picture);
    });
}

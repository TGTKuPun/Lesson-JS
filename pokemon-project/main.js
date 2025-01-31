// src: https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/1.png

const container = document.getElementById("container");

let baseURL = "https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";

for (let i = 1; i <= 150; i++) {
    const newDiv = document.createElement("div");

    const parentDiv = container.appendChild(newDiv);

    const newIMG = document.createElement("img");
    newIMG.src = `${baseURL}${i}.png`;
    parentDiv.appendChild(newIMG);
    const span = document.createElement("span");
    span.innerHTML = `#${i}`;
    parentDiv.appendChild(span);
}
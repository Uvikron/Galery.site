var num = 1;
document.addEventListener('DOMContentLoaded', () => {
    const savedSites = JSON.parse(localStorage.getItem('grid-container')) || [];
    const gridContainer = document.getElementById('Grid');
    savedSites.forEach(site => {
        const hoverBox = document.createElement("div");
        hoverBox.classList.add("grid-item");
        hoverBox.dataset.id = site.id;
        hoverBox.innerHTML = `<a href='${site.url}'>${site.name}</a><button class='delete-button' onclick='deleteUrl("${site.id}")'>X</button>`;
        hoverBox.style.backgroundColor = getRandomColor();
        gridContainer.appendChild(hoverBox);
    });
});                                                    
function addURL() {                                                // url de teste:     https://www.youtube.com/
    var sName = document.getElementById("name").value;
    var sUrl = document.getElementById("URL").value;

    if (sUrl === "") {
        alert("Por favor, insira uma URL");
        return;
    }

    var sId = Date.now().toString();
    var displayName = sName || "Link " + num;

    const gridContainer = document.getElementById('Grid');
    const hoverBox = document.createElement("div");
    hoverBox.classList.add("grid-item");
    hoverBox.dataset.id = sId;
    hoverBox.innerHTML = `<a href='${sUrl}'>${displayName}</a><button class='delete-button' onclick='deleteUrl("${sId}")'>X</button>`;
    hoverBox.style.backgroundColor = getRandomColor();
    gridContainer.appendChild(hoverBox);

    if (document.querySelectorAll(".grid-item").length % 4 === 0) {
        hoverBox.style.gridColumn = "auto";
    }

    saveLocalStorage(sId, displayName, sUrl);

    document.getElementById("name").value = "";
    document.getElementById("URL").value = "";
    num += 1;
}
function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var clr = "#";
    for (var i = 0; i < 6; i++) {
      clr += letters[Math.floor(Math.random() * 16)];
    }
    return clr;
}
function deleteUrl(id) {
    var item = document.querySelector(`.grid-item[data-id='${id}']`);
    if (item) {
        item.parentNode.removeChild(item);
        removeFromLocalStorage(id);
    }
}
function saveLocalStorage(id, name, url) {
    if (typeof(Storage) !== "undefined") {
        var sites = JSON.parse(localStorage.getItem("grid-container")) || [];
        sites.push({ id: id, name: name, url: url });
        localStorage.setItem("grid-container", JSON.stringify(sites));
    } else {
        alert("Desculpa, seu navegador não suporta armazenamento local.");
    }
}
function removeFromLocalStorage(id) {
    if (typeof(Storage) !== "undefined") {
        var sites = JSON.parse(localStorage.getItem("grid-container")) || [];
        var updatedSites = sites.filter(site => site.id !== id);
        localStorage.setItem("grid-container", JSON.stringify(updatedSites));
    } else {
        alert("Desculpa, seu navegador não suporta armazenamento local.");
    }
}
function removeAllSites() {
    var gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.parentNode.removeChild(item);
    });
    localStorage.removeItem('grid-container');
}

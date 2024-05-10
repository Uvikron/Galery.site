var num = 1
document.addEventListener('DOMContentLoaded', () => {
    const savedSites = JSON.parse(localStorage.getItem('grid-container')) || [];
    const gridContainer = document.getElementById('Grid');
    // Iterate through saved sites and create div elements for each
    savedSites.forEach(site => {
        const hoverBox = document.createElement("div");
        hoverBox.classList.add("grid-item");
        const name = site.name ? site.name : "link " + num;
        hoverBox.innerHTML = "<a href='" + site.url + "'>" + name + "</a><button class='delete-button' onclick='deleteUrl(this)'>X</button>";
        var clr = getRandomColor()
        num += 1
        hoverBox.style.backgroundColor = clr;
        gridContainer.appendChild(hoverBox);
    });
});
function addURL(){                                          // url de teste:     https://www.youtube.com/
    var sName = document.getElementById("name").value;
    var sUrl = document.getElementById("URL").value;
    var hoverBox = document.createElement("div");
    if (sUrl === "") {
        alert("Por favor, insira uma URL");
    } else if (sName === ""){
        hoverBox.classList.add("grid-item");
        hoverBox.innerHTML = "<a href='" + sUrl + "'>" + "Link " + num + "</a><button class='delete-button' onclick='deleteUrl(this)'>X</button>";
        document.getElementById("Grid").appendChild(hoverBox);
        num += 1
        var clr = getRandomColor()
        hoverBox.style.backgroundColor = clr;
    }else {
        hoverBox.classList.add("grid-item");
        hoverBox.innerHTML = "<a href='" + sUrl + "'>" + sName + "</a><button class='delete-button' onclick='deleteUrl(this)'>X</button>";
        document.getElementById("Grid").appendChild(hoverBox);
        var clr = getRandomColor()
        hoverBox.style.backgroundColor = clr;
    }
    document.getElementById("name").value = "";
    document.getElementById("URL").value = "";
    if (document.querySelectorAll(".grid-item").length % 4 === 0) {
      hoverBox.style.gridColumn = "auto";
    }
    saveLocalStorage(sName, sUrl);
}
function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var clr = "#";
    for (var i = 0; i < 6; i++) {
      clr += letters[Math.floor(Math.random() * 16)];
    }
    return clr;
}
function deleteUrl(button) {
    var item = button.parentNode;
    item.parentNode.removeChild(item);
}
function saveLocalStorage(name, url){ 
    if (typeof(Storage) !== "undefined") {
        var sites = JSON.parse(localStorage.getItem("grid-container")) || [];
        sites.push({name: name, url: url});
        localStorage.setItem("grid-container", JSON.stringify(sites));
    } else {
        alert("Desculpa, seu Browser não suporta Local Storage5.");
    }
}

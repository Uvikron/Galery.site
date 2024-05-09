var num = 1
function addURL(){                                          // url de teste:     https://www.youtube.com/
    var sName = document.getElementById("name").value;
    var sUrl = document.getElementById("URL").value;
    var hoverBox = document.createElement("div");
    if (sName === ""){
        hoverBox.classList.add("grid-item");
        hoverBox.innerHTML = "<a href='" + sUrl + "'>" + "Link " + num + "</a><button class='delete-button' onclick='deleteUrl(this)'>X</button>";
        num += 1
    } else {
        hoverBox.classList.add("grid-item");
        hoverBox.innerHTML = "<a href='" + sUrl + "'>" + sName + "</a><button class='delete-button' onclick='deleteUrl(this)'>X</button>";
    }
    document.getElementById("Grid").appendChild(hoverBox);
    document.getElementById("name").value = "";
    document.getElementById("URL").value = "";
    var clr = getRandomColor()
    hoverBox.style.backgroundColor = clr;
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
        var sites = JSON.parse(localStorage.getItem("sites")) || [];
        sites.push({name: name, url: url});
        localStorage.setItem("sites", JSON.stringify(sites));
    } else {
        alert("Sorry, your browser does not support local storage.");
    }
}

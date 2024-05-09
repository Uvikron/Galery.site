function addURL(){                                      // url de teste:     https://www.youtube.com/
    var sName = document.getElementById("name").value;
    var sUrl = document.getElementById("URL").value;
    var hoverBox = document.createElement("div");
    if (sUrl !== ""){
        hoverBox.classList.add("grid-item");
        hoverBox.innerHTML = "<p> " + "<a href='" + sUrl + "'>" + sName + "</a>" + "<p>";
        document.getElementById("Grid").appendChild(hoverBox);
    }
    else{
        alert("you didnt especifyed URL, please copy an paste it in the input. (copy all the text in the navegator's bar whith the site of your choise open)");
    }
    if (sName === ""){
        var tmplt = "Page Linked"
        hoverBox.classList.add("grid-item");
        hoverBox.innerHTML = "<p> " + "<a href='" + sUrl + "'>" + tmplt + "</a>" + "<p>";
        document.getElementById("Grid").appendChild(hoverBox);
    }
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
function saveLocalStorage(name, url){ 
    if (typeof(Storage) !== "undefined") {
        var sites = JSON.parse(localStorage.getItem("sites")) || [];
        sites.push({name: name, url: url});
        localStorage.setItem("sites", JSON.stringify(sites));
    } else {
        alert("Sorry, your browser does not support local storage.");
    }
}

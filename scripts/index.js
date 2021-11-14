

fetch('./data/pages.json').then(r).then(creatD).catch(function (error){
    console.log(error)
})

function r(response){
    return  response.json();
}

function creatD(obj){
    console.log(obj)
    obj.forEach(element => {
        console.log(element)
        var divProj = document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute("src",element.img);
        img.setAttribute("id","projImg");
        var divinfo = document.createElement("div");
        var divTitle = document.createElement("div");
        var divlang = document.createElement("div");
        var divText = document.createElement("div");
        var tex = document.createTextNode(element.text);
        divinfo.appendChild(divTitle)
        divinfo.appendChild(divlang)
        divinfo.appendChild(divText.appendChild(tex))
        divProj.appendChild(img)
        divProj.appendChild(divinfo)
        divProj.id = "proj"
        document.getElementById("projArea").appendChild(divProj)

        //document.body.insertBefore(divProj,divAtual)
    });
}
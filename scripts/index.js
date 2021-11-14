

fetch('./data/pages.json').then(response).then(creatProjects)



function response(response){
    return  response.json();
}


async function creatProjects(json){
    console.log(json)
    langJson = await fetch('./data/lang.json').then(response)
    json.forEach(element => {
        console.log(element)
        var divProj = document.createElement("div");
        var img = document.createElement("img");
        img.src=element.img
        img.id="projImg"
        var divImg = document.createElement("div");
        divImg.id = "imgArea"
        var divinfo = document.createElement("div");
        var divTitle = document.createElement("div");
        divTitle.id="projTitle"
        var divlang = document.createElement("div");
        element.languages.forEach(lang =>{
            console.log(lang)
            var div = document.createElement("div")
            langJson.forEach(element =>{
                if(element.name===lang){                    
                    div.id = "lang"
                    var icon =document.createElement("i")
                    icon.className = element.icon
                    div.style.color = element.textColor
                    div.style.backgroundColor = element.color 
                    div.appendChild(icon)                   
                    div.appendChild(document.createTextNode(element.text)) 
                }
            })
            divlang.appendChild(div)
        })
        var divText = document.createElement("div");
        divText.id="projtext"
        var tex = document.createTextNode(element.text);
        divTitle.appendChild(document.createTextNode(element.title))
        divinfo.appendChild(divTitle)
        divinfo.appendChild(divlang)
        divText.appendChild(tex)
        divinfo.appendChild(divText)
        divImg.appendChild(img)
        divProj.appendChild(divImg)
        divProj.appendChild(divinfo)
        divProj.id = "proj"
        document.getElementById("projArea").appendChild(divProj)

        //document.body.insertBefore(divProj,divAtual)
    });
}
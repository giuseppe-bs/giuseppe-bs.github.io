console.log("index.js")

fetch('./data/pages.json')
    .then(response)
    .then(creatProjects)
    .catch(error => console.log(error))

function response(response){
    return  response.json();
}

async function creatProjects(json){
    langJson = await fetch('./data/lang.json').then(response)

    json.forEach(element => {
        var divProj = document.createElement("div");
        var img = document.createElement("img");
        var divImg = document.createElement("div");
        var divinfo = document.createElement("div");
        var divTitle = document.createElement("div");
        var divlang = document.createElement("div");
        var divText = document.createElement("div");
        var tex = document.createTextNode(element.text);
        var link = document.createElement("a")
        
        img.src=element.img
        img.id="projImg"
        
        divImg.id = "imgArea"
        divTitle.id="projTitle"
        
        divProj.id = "proj"
        divText.id="projtext"
        link.href=element.link
        
        element.languages.forEach(lang =>{
            console.log(lang)
            var div = document.createElement("div")
            langJson.forEach(element =>{
                if(element.name===lang){  
                    var icon =document.createElement("i")
                    
                    icon.className = element.icon
                    div.id = "lang"
                    div.style.color = element.textColor
                    div.style.backgroundColor = element.color 

                    div.appendChild(icon)                   
                    div.appendChild(document.createTextNode(element.text)) 
                }
            })
            divlang.appendChild(div)
        })

        
        link.appendChild(document.createTextNode(element.title))
        divText.appendChild(tex)
        divTitle.appendChild(link)

        divinfo.appendChild(divTitle)
        divinfo.appendChild(divlang)
        divinfo.appendChild(divText)

        divImg.appendChild(img)

        divProj.appendChild(divImg)
        divProj.appendChild(divinfo)

        document.getElementById("projArea").appendChild(divProj)        
    });
}
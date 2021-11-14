

fetch('./data/pages.json').then(r).then(creatD).catch(function (error){
    console.log(error)
})

function r(response){
    return  response.json();
}

function creatD(obj){
    console.log(obj)
}
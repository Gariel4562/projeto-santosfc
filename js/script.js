function pesquisar () {
    var titulo1 = window.document.querySelector('#titulo1')
    var res = window.document.getElementById('res')
    var titulos = String(titulo1.value)
    
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    switch(titulos) {
        case '' :
            res.innerHTML = `<br><h1></h1><br> <br><br>`
        img.setAttribute('src', '')
        break;
        case '' :
            res.innerHTML = `<br><h1></h1><br> <br><br>`
        img.setAttribute('src', '')
        break;
        case '' :
            res.innerHTML = `<br><h1></h1><br> <br><br>`
        img.setAttribute('src', '')
        break;
        case '' :
            res.innerHTML = `<br><h1></h1><br> <br><br>`
        img.setAttribute('src', '')
        break;
        case '' :
            res.innerHTML = `<br><h1></h1><br> <br><br>`
        img.setAttribute('src', '')
        break;
        case '' :
            res.innerHTML = `<br><h1></h1><br><br> <br>`
        img.setAttribute('src', '')
        break;
        case 'Copa Mercosul' :
            res.innerHTML = `<br><h1></h1> <br> <br> <br>`
        img.setAttribute('src', '')
        break;
        case '' :
            res.innerHTML = `<br><h1></h1> <br> <br> <br>`
        img.setAttribute('src', '')
        break;
        case '' :
            res.innerHTML = `<br><h1></h1> <br> <br> <br>`
        img.setAttribute('src', '')
        break;
        case '' :
            res.innerHTML = `<br><h1></h1><br> <br>`
        img.setAttribute('src', '')
        break;
        case '' :
            res.innerHTML = `<br><h1><br> <br>`
        img.setAttribute('src', '')
        break;
        case '' :
            res.innerHTML = `<br><h1></h1> <br>  <br> <br>`
        img.setAttribute('src', '')
        break;


    
    
    
    
    
    
    
    
    
    }







res.appendChild(img)

}
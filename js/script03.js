function pesquisar () {
    let recorde1 = window.document.getElementById('recorde1')
    let res = window.document.getElementById('res')
    let recordes = String(recorde1.value)
    
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    switch(recordes) {
        case '' :
          res.innerHTML = "<h1> </h1>  "
          img.setAttribute('src', '')
          break;
        case '' :
            res.innerHTML = "<h1></h1>  " 
            img.setAttribute('src', '')
            break;
        case '' :
            res.innerHTML = "<h1></h1> " 
            img.setAttribute('src', '')
            break;
            
    
    
    
    
    
    
    }
    
    
    
    
    
    res.appendChild(img)
    
    
    
    }

    res.style.lineHeight = `30px`
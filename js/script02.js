function pesquisar () {
    let time1 = window.document.getElementById('time1')
    let res = window.document.getElementById('res')
    let times = String(time1.value)
    
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    switch(times) {
        case '' :
            res.innerHTML = "<h1></h1> <br> <p> </p>  " 
            img.setAttribute('src', '')
            break;
        case '' :
          res.innerHTML = "<h1></p>  "
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
    
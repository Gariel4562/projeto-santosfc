function pesquisar () {
let jogador1 = window.document.querySelector('#jogador1')
let res = window.document.querySelector('#res')
let jogadores = String(jogador1.value)

let img = document.createElement('img')
img.setAttribute('id', 'foto')

switch(jogadores) {
    case '' :
    res.innerHTML = `<h1></h1> <br> <br> <br>   `
        img.setAttribute('src', '')
        break;

    case '' :
        res.innerHTML = ``
        img.setAttribute('src', '')
        break;

        case '' :
            res.innerHTML = `<h1></h1> `
            img.setAttribute('src', '')
            break;

        case '' :
                res.innerHTML = `<h1></h1> <br> `
                img.setAttribute('src', '')
                break;

        case '' :
           res.innerHTML = `<h1></h1>        
           `
           img.setAttribute('src', '')
           break;
        
        case '' :
            res.innerHTML = `<h1></h1> `
            img.setAttribute('src', '')
            break;

            case '' :
                res.innerHTML = `<h1></h1> `
                img.setAttribute('src', '')
                break;

                        case '' :
                            res.innerHTML = `<h1></h1> `
                        img.setAttribute('src', '')
                        break;

                            case '' :
                                res.innerHTML = `<h1></h1>  `
                                img.setAttribute('src', '')
                                break;

                                case '' :
                                    res.innerHTML = `<h1></h1> <br> `
                                    img.setAttribute('src', '')
                                    break;

                                    case '' :
                                    res.innerHTML = `<h1></h1> `
                                    img.setAttribute('src', '')
                                    break;

                                    case '' :
                                    res.innerHTML = `<h1></h1>  `
                                    img.setAttribute('src', '')
                                    break;

                                    case '' :
                                    res.innerHTML = `<h1></h1>  `
                                    img.setAttribute('src', '')
                                    break;

                                      case '' :
                                      res.innerHTML = `<h1></h1> `
                                      img.setAttribute('src', '')
                                      break;

                                      case '' :
                                      res.innerHTML = `<h1></h1>  `
                                      img.setAttribute('src', '')
                                      break;
                                    
                        
    




}








res.appendChild(img)

}

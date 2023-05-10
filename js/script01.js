function pesquisar () {
let jogador1 = window.document.querySelector('#jogador1')
let res = window.document.querySelector('#res')
let jogadores = String(jogador1.value)

let img = document.createElement('img')
img.setAttribute('id', 'foto')

switch(jogadores) {
    case 'Pelé' :
    res.innerHTML = `<h1>Pelé</h1> <br> <p>Pelé fez 1091 Gols pelo Santos Fc. (Recorde de Gols por clubes em toda a história.)</p> <p>Pelé jogou no Santos nos anos de: 1956 - 1974.</p> <p>Conquistas pelo Santos: 6 Campeonatos Brasileiros, 2 Libertadores, 2 Mundiais, 1 Recopa Mundial, 1 Supercopa sul Americana, 4 Rio-sp, 10 Campeonatos Paulistas.</p>`
        img.setAttribute('src', 'imagens/jogadores/pelé.webp')
        break;

    case 'Coutinho' :
        res.innerHTML = `<h1>Coutinho</h1> <br> <p> Coutinho fez 370 Gols pelo Santos (Sendo o terceiro maior artilheiro da história do Santos.) <p>Coutinho jogou no Santos nos anos de: 1958 - 1968, 1970. </p> <p> Pelo Santos Coutinho Conquistou: 5 Campeonatos Brasileiros, 2 Libertadores, 2 Mundiais, 4 Rio-sp, 6 Campeonatos Paulistas. <p>  `
        img.setAttribute('src', 'imagens/jogadores/coutinho.jpg')
        break;

        case 'Pepe' :
            res.innerHTML = `<h1>Pepe</h1> <br> <p> Fez 405 Gols pelo Santos (Sendo o Terceiro maior artilheiro da história do Clube.) <p> <p> Pepe jogou no Santos 1954 - 1969. <p> Pelo Santos Pepe Conquistou: 6 Campeonatos Brasileiros, 2 Libertadores, 1 Recopa Mundial, 1 Supercopa sul Americana, 2 Mundiais, 4 Rio-sp, 11 Campeonatos Paulistas. <p>   `
            img.setAttribute('src', 'imagens/jogadores/pepe.jpg')
            break;

        case 'Carlos Alberto Torres' :
                res.innerHTML = `<h1>Carlos Alberto Torres</h1> <br> <p> Carlos Alberto torres Fez 40 Gols pelo Santos sendo Lateral/Zagueiro. <p> <p> jogos no Santos nos anos: 1965 - 1971, 1971 - 1974. <p> Pelo Santos Carlos Alberto conquistou: 2 Campeonatos Brasileiros, 5 Campeonatos Paulista, 1 Rio-sp, 1 Recopa Mundial, 1 Supercopa sul americana. `
                img.setAttribute('src', 'imagens/jogadores/')
                break;

        case 'Juary' :
           res.innerHTML = `<h1>Juary</h1> <br> <p> Fez 101 Gols pelo Santos. <p> <p> Jogou no Santos nos anos: 1976 - 1980, 1989. <p> <p> Conquistou o Paulista de 1978. <p>  `
           img.setAttribute('src', 'imagens/jogadores/juary.jpeg')
           break;
        
        case 'Giovanni' :
            res.innerHTML = `<h1>Giovanni</h1> <br> <p> Giovanni fez 73 Gols Pelo Santos. <p> <p> Jogou no Santos nos anos: 1994 - 1996, 2005 e 2006 e 2010. <p> Conquistas pelo Santos: 1 Copa do Brasil, 2 Campeonatos Paulistas.`
            img.setAttribute('src', 'imagens/jogadores/Giovanni.jpg')
            break;

            case 'Zetti' :
                res.innerHTML = `<h1>Zetti</h1> <br> <p> Jogou no Santos nos anos de 1997 - 1999. <p> <p> Conquistou pelo Santos: 1 Copa Conmebol, 1 Torneio Rio-sp. <p> ` 
                img.setAttribute('src', 'imagens/jogadores/zetti.jpg')
                break;

            case 'Elano' :
                res.innerHTML = `<h1>Elano</h1> <br> <p> Elano fez 68 Gols pelo Santos <p> <p> anos que Elano jogou no Santos: 2001 - 2004, 2011, 2012, 2015 - 2016. <p> Elano Conquistou Pelo Santos: 2 Brasileiros, 1 Libertadores, 1 Recopa Sul Americana, 4 Paulistão.`
                img.setAttribute('src', 'imagens/jogadores/elano.webp')
                break;

                        case 'Leo' :
                            res.innerHTML = `<h1>Leo</h1> <br> <p> Fez 20 Gols pelo Santos sendo Lateral. <p> <p> Jogou pelo Santos nos anos de: 2000 - 2005, 2009 - 2014. <p> <p> Leo Conquistou pelo Santos: 2 Brasileiros, 1 Copa Do Brasil, 1 Libertadores, 1 Recopa sul Americana, 3 Campeonatos Paulistas. `
                        img.setAttribute('src', 'imagens/jogadores/leo.webp')
                        break;

                            case 'Neymar' :
                                res.innerHTML = `<h1>Neymar</h1> <br> <p> Fez 138 Gols Pelo Santos (Sendo o Maior artilheiro do clube após a era Pelé.) além de 72 Assistências. <p> <p> Jogou no Santos: 2009 - 2013. <p> <p> Conquistou pelo Santos: 1 Libertadores, 1 Copa do Brasil, 1 Recopa sul Americana, 3 Campeonatos Paulistas.`
                                img.setAttribute('src', 'imagens/jogadores/Neymar.jpg')
                                break;

                                case 'Ganso' :
                                    res.innerHTML = `<h1>Ganso</h1> <br> <p> Ganso fez 36 Gols pelo Santos sendo Meia, além de 37 Assistências. <p> <p> Jogou no Santos nos anos de: 2008 - 2012. <p> <p> Conquistou: 1 Libertadores, 1 Recopa Sul Americana, 1 Copa do Brasil, 3 Paulistão.`
                                    img.setAttribute('src', 'imagens/jogadores/ganso.jpg')
                                    break;

                                    case 'Rafael Cabral' :
                                    res.innerHTML = `<h1>Rafael Cabral</h1> <br> <p> Jogou no Santos nos anos de 2010 - 2013.<p> <p> Conquistou pelo Santos: 1 Libertadores, 1 Recopa sul americana, 1 Copa do Brasil, 3 Paulistão. <p> `
                                    img.setAttribute('src', 'imagens/jogadores/rafael.jpg')
                                    break;


}








res.appendChild(img)

}

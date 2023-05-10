function pesquisar () {
    var titulo1 = window.document.querySelector('#titulo1')
    var res = window.document.getElementById('res')
    var titulos = String(titulo1.value)
    
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    switch(titulos) {
        case 'Recopa Mundial' :
            res.innerHTML = `<br><h1>Recopa Mundial</h1><br> Recopa Mundial/Recopa Intercontinental, Reunia todos os campeões mundiais em um só torneio, Santos venceu a única versão com final Europa x America em 1968 bateu a inter de Milão por 1 a 0 em Milão. <br><br>`
        img.setAttribute('src', 'imagens/titulos/recopa.jpg')
        break;
        case 'Mundial de Clubes' :
            res.innerHTML = `<br><h1>Mundial de Clubes</h1><br> Mundial de Clubes/Copa Intercontinental Santos venceu nos anos de 1962, 1963. <br><br>`
        img.setAttribute('src', 'imagens/titulos/mundial de clubes.jpg')
        break;
        case 'Libertadores' :
            res.innerHTML = `<br><h1>Libertadores</h1><br> Santos venceu a Libertadores nos anos de 62, 63, 2011. <br><br>`
        img.setAttribute('src', 'imagens/titulos/libertadores.jpg')
        break;
        case 'Brasileirão' :
            res.innerHTML = `<br><h1>Brasileirão</h1><br> Santos venceu os campeonatos brasileiros nos anos de 1961, 1962, 1963, 1964, 1965, 1968, 2002, 2004. <br><br>`
        img.setAttribute('src', 'imagens/titulos/brasileirao.jpg')
        break;
        case 'Copa do Brasil' :
            res.innerHTML = `<br><h1>Copa do Brasil</h1><br> Santos venceu a Copa do Brasil no ano de 2010. <br><br>`
        img.setAttribute('src', 'imagens/titulos/copadobrasil.png')
        break;
        case 'Supercopa Sul Americana' :
            res.innerHTML = `<br><h1>Supercopa Sul Americana</h1><br> Santos venceu a Supercopa sul americana no ano de 1968 e com isso ganhou o direito de disputar a recopa dos campeões mundiais. <br> <br>`
        img.setAttribute('src', 'imagens/titulos/supercopa.jpg')
        break;
        case 'Recopa Sul Americana' :
            res.innerHTML = `<br><h1>Recopa Sul Americana</h1> <br> O Santos venceu a Recopa sul americana no ano de 2012. <br> <br>`
        img.setAttribute('src', 'imagens/titulos/recopasul.jpg')
        break;
        case 'Copa Conmebol' :
            res.innerHTML = `<br><h1>Copa Conmebol</h1> <br> O Santos venceu a Copa Conmebol no ano de 1998. <br> <br>`
        img.setAttribute('src', 'imagens/titulos/copa conmebol.jpg')
        break;
        case 'Rio-Sp' :
            res.innerHTML = `<br><h1>Torneio Rio-Sp</h1> <br> O Torneio Rio-sp era um interestadual disputado por clubes paulistas e Cariocas, Santos venceu essa competição nos anos de 1959, 1963, 1964, 1966, 1997. <br> <br>`
        img.setAttribute('src', 'imagens/titulos/rio-sp.png')
        break;
        case 'Campeonato Paulista' :
            res.innerHTML = `<br><h1>Campeonato Paulista</h1><br> Santos venceu o Campeonato Paulista nos anos de 1935, 1955, 1956, 1958, 1960, 1961, 1962, 1964, 1965, 1967, 1968, 1969, 1973, 1978, 1984, 2006, 2007, 2010, 2011, 2012, 2015, 2016. <br> <br>`
        img.setAttribute('src', 'imagens/titulos/paulistao.jpg')
        break;
        


    
    
    
    
    
    
    
    
    
    }







res.appendChild(img)

}
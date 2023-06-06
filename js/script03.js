function pesquisar () {
    let recorde1 = window.document.getElementById('recorde1')
    let res = window.document.getElementById('res')
    let recordes = String(recorde1.value)
    
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    switch(recordes) {
        case 'Guerra' :
          res.innerHTML = "<h1>Parou a Guerra</h1> <br> <p> No dia 4 de fevereiro de 1969, uma terça-feira na cidade de Benin, que se encontrava em meio a uma Guerra Civil, ambas as partes concordaram em fazer uma pausa no conflito para assistir ao jogo do Santos. Esse dia ficou conhecido como 'O Dia em que o Santos parou a guerra'.<p> "
          img.setAttribute('src', 'imagens/recordes/guerra.jpg')
          break;
        case 'Eleito pela Fifa' :
            res.innerHTML = "<h1> Quinto Maior Clube Século XX </h1> <br> <p> O Santos foi eleito pela FIFA, em 2000, como o quinto maior clube de futebol do século XX, sendo considerado o melhor clube das Américas nessa lista. Além disso, no ano do seu centenário, a FIFA concedeu ao Santos o título de 'maior clube sul-americano do século XX' em uma cerimônia realizada na Câmara dos Deputados em Brasília. <p>  " 
            img.setAttribute('src', 'imagens/recordes/quinto.jpg')
            break;
        case 'Pentacampeão' :
            res.innerHTML = "<h1>Pentacampeão Brasileiro</h1> <br> <p> No dia 8 de dezembro de 1965, uma quarta-feira, o Santos venceu o Vasco no Maracanã e conquistou o Campeonato Brasileiro. Essa vitória marcou a quinta conquista consecutiva do clube (1961, 1962, 1963, 1964 e 1965), tornando-se a primeira e única vez na história em que um clube brasileiro alcançou tal feito. <p> " 
            img.setAttribute('src', 'imagens/recordes/penta.jpg')
            break;
            
    
    
    
    
    
    
    }
    
    
    
    
    
    res.appendChild(img)
    
    
    
    }

    
function pesquisar () {
    let time1 = window.document.getElementById('time1')
    let res = window.document.getElementById('res')
    let times = String(time1.value)
    
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    switch(times) {
        case 'Santos FC 60 - 69' :
            res.innerHTML = "<h1>Santos FC 60 - 69</h1> <br> <p> Titulos conquistados por esse time: 8 Campeonatos Paulistas, 6 Campeonatos Brasileiros, 2 Libertadores, 2 Mundiais, 1 Supercopa Mundial, 1 Supercopa sul Americana, 3 torneio rio-sp. foram 23 titulos Oficiais dentro de 1 década.  </p> <p>Grandes feitos desse time: Parou uma guerra em Biafra, Ganhou 5 Campeonatos Brasileiros seguidos (foi o único a fazer isso no brasil.), Ganhou 23 Titulos Oficiais em 1 década (recorde no brasil.), teve em seu elenco o Melhor/Maior Jogador da História (Pelé). </p> <p> Time Base: Gylmar; Lima (Carlos Alberto Torres), Mauro, Calvet e Dalmo; Zito e Mengálvio (Clodoaldo); Dorval, Coutinho (Toninho Guerreiro), Pelé e Pepe (Edu). Técnicos: Lula, Antoninho. </p>" 
            img.setAttribute('src', 'imagens/times/santos60s.jpg')
            break;
        case 'Santos FC 2002 - 2004' :
          res.innerHTML = "<h1>Santos FC 2002 - 2004</h1> <br> <p> Titulos Conquistados: 2 Campeonatos Brasileiros. Foi Finalista da Libertadores 2003. </p> <p> Grandes feitos desse time: Deixou o legado do Futebol Alegre (Meninos da Vila).</p> <p> Time Base: Fábio costa (mauro); Maurinho (Paulo César), Alex (Leonardo), André Luis (Ávalos) e Léo; Paulo Almeida (Fabinho), Renato (Preto Casagrande), Elano e Diego (Ricardinho); Robinho e Alberto (Deivid). Técnicos: Leão e Luxemburgo. </p>"
          img.setAttribute('src', 'imagens/times/santosfc2002s.jpg')
          break;
        case 'Santos FC 2010 - 2012' :
            res.innerHTML = "<h1>Santos FC 2010 - 2012</h1> <br> <p> Titulos Conquistados: 1 Libertadores, 1 Copa do Brasil, 1 Recopa sul Americana, 3 Paulistas. </p> <p> Grandes Feitos: Futebol Alegre, teve em seu elenco o Melhor jogador Brasileiro revelado no século 21 (Neymar). </p> <p> Time Base: Rafael (Felipe); Danilo (Pará / Jonathan), Edu Dracena (Bruno Rodrigo), Durval e Léo (Alex Sandro / Juan); Adriano (Wesley / Henrique), Arouca (Marquinhos), Elano (Robinho) e Ganso (Alan Patrick / Maikon Leite); Neymar e Zé Eduardo (André/ Borges/ Alan Kardec). Técnicos: Dorival jr, Adilson Batista, Muricy Ramalho.</p>" 
            img.setAttribute('src', 'imagens/times/santosfc2010s.jpg')
            break;
            
    
    
    
    
    
    
    }
    
    
    
    
    
    res.appendChild(img)
    
    
    
    }

    
    
        var player = "a1";
        var pont = 0;
        var frutaLoca;
        var a1, a2, a3, a4, a5, a6, a7, a8, b1, b2, b3, b4, b5, b6, b7, b8, c1, c2, c3, c4, c5, c6, c7, c8, d1, d2, d3, d4, d5, d6, d7, d8, e1, e2, e3, e4, e5, e6, e7, e8, f1, f2, f3, f4, f5, f6, f7, f8, g1, g2, g3, g4, g5, g6, g7, g8, g9, h1, h2, h3, h4, h5, h6, h7, h8;
        var frutasAtivas = 0;
        var dificuldade = 11;
        var isGameOn = false;
        function aumentarDificuldade(){
            if(pont < 500){
                dificuldade = 11;
            }
            else if(pont > 500 && pont < 1000){
                dificuldade = 8;
            }
            else if(pont > 1000 && pont < 1500){
                dificuldade = 7;
            }
            else if(pont > 1500){
                dificuldade = 6;
            }
        }
        function iniciar(){
            isGameOn = true;
            document.getElementById('tela-inicial').style.display = "none";
            gerarFruta();
            frutasAtivas++;
            for(var x = 1; x < 9999; x++){
                setTimeout(function(){
                    if(frutasAtivas < dificuldade){
                        gerarFruta();
                        frutasAtivas++;
                        console.log(frutasAtivas);
                        aumentarDificuldade();
                    }
                    else{
                        isGameOn = false;
                        document.getElementById('tela-inicial').style.display = "flex";
                        document.getElementById('txt-tela-inicial').innerHTML = "Sua pontuação final foi: " + pont;
                        document.getElementById('btn-tela-inicial').style.display = "none";
                        document.getElementById('btn-reiniciar').style.display = "block";
                    }
                }, 700*x);
            }
        }
            
//        gerarFruta();
        function gerarFruta(){
            if(isGameOn === true){
                frutaLoca = Math.floor(Math.random() * 64);
                if(frutaLoca === 0){
                    if(player != "a1" && a1 != true){
                        document.getElementById('a1').style.backgroundColor = "darkgreen";
                        a1 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 1){
                    if(player != "a2" && a2 != true){
                        document.getElementById('a2').style.backgroundColor = "darkgreen";
                        a2 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 2){
                    if(player != "a3" && a3 != true){
                        document.getElementById('a3').style.backgroundColor = "darkgreen";
                        a3 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 3){
                    if(player != "a4" && a4 != true){
                        document.getElementById('a4').style.backgroundColor = "darkgreen";
                        a4 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 4){
                    if(player != "a5" && a5 != true){
                        document.getElementById('a5').style.backgroundColor = "darkgreen";
                        a5 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 5){
                    if(player != "a6" && a6 != true){
                        document.getElementById('a6').style.backgroundColor = "darkgreen";
                        a6 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 6){
                    if(player != "a7" && a7 != true){
                        document.getElementById('a7').style.backgroundColor = "darkgreen";
                        a7 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 7){
                    if(player != "a8" && a8 != true){
                        document.getElementById('a8').style.backgroundColor = "darkgreen";
                        a8 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                //Coluna B
                else if(frutaLoca === 8){
                    if(player != "b1" && b1 != true){
                        document.getElementById('b1').style.backgroundColor = "darkgreen";
                        b1 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 9){
                    if(player != "b2" && b2 != true){
                        document.getElementById('b2').style.backgroundColor = "darkgreen";
                        b2 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 10){
                    if(player != "b3" && b3 != true){
                        document.getElementById('b3').style.backgroundColor = "darkgreen";
                        b3 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 11){
                    if(player != "b4" && b4 != true){
                        document.getElementById('b4').style.backgroundColor = "darkgreen";
                        b4 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 12){
                    if(player != "b5" && b5 != true){
                        document.getElementById('b5').style.backgroundColor = "darkgreen";
                        b5 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 13){
                    if(player != "b6" && b6 != true){
                        document.getElementById('b6').style.backgroundColor = "darkgreen";
                        b6 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 14){
                    if(player != "b7" && b7 != true){
                        document.getElementById('b7').style.backgroundColor = "darkgreen";
                        b7 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 15){
                    if(player != "b8" && b8 != true){
                        document.getElementById('b8').style.backgroundColor = "darkgreen";
                        b8 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                //Coluna C
                else if(frutaLoca === 16){
                    if(player != "c1" && c1 != true){
                        document.getElementById('c1').style.backgroundColor = "darkgreen";
                        c1 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 17){
                    if(player != "c2" && c2 != true){
                        document.getElementById('c2').style.backgroundColor = "darkgreen";
                        c2 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 18){
                    if(player != "c3" && c3 != true){
                        document.getElementById('c3').style.backgroundColor = "darkgreen";
                        c3 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 19){
                    if(player != "c4" && c4 != true){
                        document.getElementById('c4').style.backgroundColor = "darkgreen";
                        c4 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 20){
                    if(player != "c5" && c5 != true){
                        document.getElementById('c5').style.backgroundColor = "darkgreen";
                        c5 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 21){
                    if(player != "c6" && c6 != true){
                        document.getElementById('c6').style.backgroundColor = "darkgreen";
                        c6 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 22){
                    if(player != "c7" && c7 != true){
                        document.getElementById('c7').style.backgroundColor = "darkgreen";
                        c7 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 23){
                    if(player != "c8" && c8 != true){
                        document.getElementById('c8').style.backgroundColor = "darkgreen";
                        c8 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                //Coluna D
                else if(frutaLoca === 24){
                    if(player != "d1" && d1 != true){
                        document.getElementById('d1').style.backgroundColor = "darkgreen";
                        d1 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 25){
                    if(player != "d2" && d2 != true){
                        document.getElementById('d2').style.backgroundColor = "darkgreen";
                        d2 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 26){
                    if(player != "d3" && d3!= true){
                        document.getElementById('d3').style.backgroundColor = "darkgreen";
                        d3 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 27){
                    if(player != "d4" && d4 != true){
                        document.getElementById('d4').style.backgroundColor = "darkgreen";
                        d4 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 28){
                    if(player != "d5" && d5 != true){
                        document.getElementById('d5').style.backgroundColor = "darkgreen";
                        d5 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 29){
                    if(player != "d6" && d6 != true){
                        document.getElementById('d6').style.backgroundColor = "darkgreen";
                        d6 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 30){
                    if(player != "d7" && d7 != true){
                        document.getElementById('d7').style.backgroundColor = "darkgreen";
                        d7 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 31){
                    if(player != "d8" && d8 != true){
                        document.getElementById('d8').style.backgroundColor = "darkgreen";
                        d8 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                //Coluna E
                else if(frutaLoca === 32){
                    if(player != "e1" && e1 != true){
                        document.getElementById('e1').style.backgroundColor = "darkgreen";
                        e1 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 33){
                    if(player != "e2" && e2 != true){
                        document.getElementById('e2').style.backgroundColor = "darkgreen";
                        e2 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 34){
                    if(player != "e3" && e3 != true){
                        document.getElementById('e3').style.backgroundColor = "darkgreen";
                        e3 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 35){
                    if(player != "e4" && e4 != true){
                        document.getElementById('e4').style.backgroundColor = "darkgreen";
                        e4 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 36){
                    if(player != "e5" && e5 != true){
                        document.getElementById('e5').style.backgroundColor = "darkgreen";
                        e5 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 37){
                    if(player != "e6" && e6 != true){
                        document.getElementById('e6').style.backgroundColor = "darkgreen";
                        e6 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 38){
                    if(player != "e7" && e7 != true){
                        document.getElementById('e7').style.backgroundColor = "darkgreen";
                        e7 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 39){
                    if(player != "e8" && e8 != true){
                        document.getElementById('e8').style.backgroundColor = "darkgreen";
                        e8 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                //Coluna F
                else if(frutaLoca === 40){
                    if(player != "f1" && f1 != true){
                        document.getElementById('f1').style.backgroundColor = "darkgreen";
                        f1 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 41){
                    if(player != "f2" && f2 != true){
                        document.getElementById('f2').style.backgroundColor = "darkgreen";
                        f2 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 42){
                    if(player != "f3" && f3 != true){
                        document.getElementById('f3').style.backgroundColor = "darkgreen";
                        f3 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 43){
                    if(player != "f4" && f4 != true){
                        document.getElementById('f4').style.backgroundColor = "darkgreen";
                        f4 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 44){
                    if(player != "f5" && f5 != true){
                        document.getElementById('f5').style.backgroundColor = "darkgreen";
                        f5 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 45){
                    if(player != "f6" && f6 != true){
                        document.getElementById('f6').style.backgroundColor = "darkgreen";
                        f6 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 46){
                    if(player != "f7" && f7 != true){
                        document.getElementById('f7').style.backgroundColor = "darkgreen";
                        f7 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 47){
                    if(player != "f8" && f8 != true){
                        document.getElementById('f8').style.backgroundColor = "darkgreen";
                        f8 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                //Coluna G
                else if(frutaLoca === 48){
                    if(player != "g1" && g1 != true){
                        document.getElementById('g1').style.backgroundColor = "darkgreen";
                        g1 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 49){
                    if(player != "g2" && g2 != true){
                        document.getElementById('g2').style.backgroundColor = "darkgreen";
                        g2 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 50){
                    if(player != "g3" && g3 != true){
                        document.getElementById('g3').style.backgroundColor = "darkgreen";
                        g3 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 51){
                    if(player != "g4" && g4 != true){
                        document.getElementById('g4').style.backgroundColor = "darkgreen";
                        g4 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 52){
                    if(player != "g5" && g5 != true){
                        document.getElementById('g5').style.backgroundColor = "darkgreen";
                        g5 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 53){
                    if(player != "g6" && g6 != true){
                        document.getElementById('g6').style.backgroundColor = "darkgreen";
                        g6 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 54){
                    if(player != "g7" && g7 != true){
                        document.getElementById('g7').style.backgroundColor = "darkgreen";
                        g7 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 55){
                    if(player != "g8" && g8 != true){
                        document.getElementById('g8').style.backgroundColor = "darkgreen";
                        g8 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                //Coluna H
                else if(frutaLoca === 56){
                    if(player != "h1" && h1 != true){
                        document.getElementById('h1').style.backgroundColor = "darkgreen";
                        h1 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 57){
                    if(player != "h2" && h2 != true){
                        document.getElementById('h2').style.backgroundColor = "darkgreen";
                        h2 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 58){
                    if(player != "h3" && h3 != true){
                        document.getElementById('h3').style.backgroundColor = "darkgreen";
                        h3 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 59){
                    if(player != "h4" && h4 != true){
                        document.getElementById('h4').style.backgroundColor = "darkgreen";
                        h4 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 60){
                    if(player != "h5" && h5 != true){
                        document.getElementById('h5').style.backgroundColor = "darkgreen";
                        h5 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 61){
                    if(player != "h6" && h6 != true){
                        document.getElementById('h6').style.backgroundColor = "darkgreen";
                        h6 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 62){
                    if(player != "h7" && h7 != true){
                        document.getElementById('h7').style.backgroundColor = "darkgreen";
                        h7 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
                else if(frutaLoca === 63){
                    if(player != "h8" && h8 != true){
                        document.getElementById('h8').style.backgroundColor = "darkgreen";
                        h8 = true;
                    }
                    else{
                        gerarFruta();
                    }
                }
            }
        }  
        function direita(){
            if(isGameOn === true){
                if(player === "a1"){
                    player = "a2";
                    document.getElementById('a1').style.backgroundColor = "transparent";
                    document.getElementById('a2').style.backgroundColor = "#555";
                    if(a2 === true){
                        a2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "a2"){
                    player = "a3";
                    document.getElementById('a2').style.backgroundColor = "transparent";
                    document.getElementById('a3').style.backgroundColor = "#555";
                    if(a3 === true){
                        a3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "a3"){
                    player = "a4";
                    document.getElementById('a3').style.backgroundColor = "transparent";
                    document.getElementById('a4').style.backgroundColor = "#555";
                    if(a4 === true){
                        a4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "a4"){
                    player = "a5";
                    document.getElementById('a4').style.backgroundColor = "transparent";
                    document.getElementById('a5').style.backgroundColor = "#555";
                    if(a5 === true){
                        a5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "a5"){
                    player = "a6";
                    document.getElementById('a5').style.backgroundColor = "transparent";
                    document.getElementById('a6').style.backgroundColor = "#555";
                    if(a6 === true){
                        a6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "a6"){
                    player = "a7";
                    document.getElementById('a6').style.backgroundColor = "transparent";
                    document.getElementById('a7').style.backgroundColor = "#555";
                    if(a7 === true){
                        a7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "a7"){
                    player = "a8";
                    document.getElementById('a7').style.backgroundColor = "transparent";
                    document.getElementById('a8').style.backgroundColor = "#555";
                    if(a8 === true){
                        a8 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "b1"){
                    player = "b2";
                    document.getElementById('b1').style.backgroundColor = "transparent";
                    document.getElementById('b2').style.backgroundColor = "#555";
                    if(b2 === true){
                        b2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "b2"){
                    player = "b3";
                    document.getElementById('b2').style.backgroundColor = "transparent";
                    document.getElementById('b3').style.backgroundColor = "#555";
                    if(b3 === true){
                        b3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "b3"){
                    player = "b4";
                    document.getElementById('b3').style.backgroundColor = "transparent";
                    document.getElementById('b4').style.backgroundColor = "#555";
                    if(b4 === true){
                        b4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "b4"){
                    player = "b5";
                    document.getElementById('b4').style.backgroundColor = "transparent";
                    document.getElementById('b5').style.backgroundColor = "#555";
                    if(b5 === true){
                        b5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "b5"){
                    player = "b6";
                    document.getElementById('b5').style.backgroundColor = "transparent";
                    document.getElementById('b6').style.backgroundColor = "#555";
                    if(b6 === true){
                        b6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "b6"){
                    player = "b7";
                    document.getElementById('b6').style.backgroundColor = "transparent";
                    document.getElementById('b7').style.backgroundColor = "#555";
                    if(b7 === true){
                        b7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "b7"){
                    player = "b8";
                    document.getElementById('b7').style.backgroundColor = "transparent";
                    document.getElementById('b8').style.backgroundColor = "#555";
                    if(b8 === true){
                        b8 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c1"){
                    player = "c2";
                    document.getElementById('c1').style.backgroundColor = "transparent";
                    document.getElementById('c2').style.backgroundColor = "#555";
                    if(c2 === true){
                        c2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c2"){
                    player = "c3";
                    document.getElementById('c2').style.backgroundColor = "transparent";
                    document.getElementById('c3').style.backgroundColor = "#555";
                    if(c3 === true){
                        c3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c3"){
                    player = "c4";
                    document.getElementById('c3').style.backgroundColor = "transparent";
                    document.getElementById('c4').style.backgroundColor = "#555";
                    if(c4 === true){
                        c4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c4"){
                    player = "c5";
                    document.getElementById('c4').style.backgroundColor = "transparent";
                    document.getElementById('c5').style.backgroundColor = "#555";
                    if(c5 === true){
                        c5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c5"){
                    player = "c6";
                    document.getElementById('c5').style.backgroundColor = "transparent";
                    document.getElementById('c6').style.backgroundColor = "#555";
                    if(c6 === true){
                        c6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c6"){
                    player = "c7";
                    document.getElementById('c6').style.backgroundColor = "transparent";
                    document.getElementById('c7').style.backgroundColor = "#555";
                    if(c7 === true){
                        c7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c7"){
                    player = "c8";
                    document.getElementById('c7').style.backgroundColor = "transparent";
                    document.getElementById('c8').style.backgroundColor = "#555";
                    if(c8 === true){
                        c8 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d1"){
                    player = "d2";
                    document.getElementById('d1').style.backgroundColor = "transparent";
                    document.getElementById('d2').style.backgroundColor = "#555";
                    if(d2 === true){
                        d2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d2"){
                    player = "d3";
                    document.getElementById('d2').style.backgroundColor = "transparent";
                    document.getElementById('d3').style.backgroundColor = "#555";
                    if(d3 === true){
                        d3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d3"){
                    player = "d4";
                    document.getElementById('d3').style.backgroundColor = "transparent";
                    document.getElementById('d4').style.backgroundColor = "#555";
                    if(d4 === true){
                        d4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d4"){
                    player = "d5";
                    document.getElementById('d4').style.backgroundColor = "transparent";
                    document.getElementById('d5').style.backgroundColor = "#555";
                    if(d5 === true){
                        d5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d5"){
                    player = "d6";
                    document.getElementById('d5').style.backgroundColor = "transparent";
                    document.getElementById('d6').style.backgroundColor = "#555";
                    if(d6 === true){
                        d6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d6"){
                    player = "d7";
                    document.getElementById('d6').style.backgroundColor = "transparent";
                    document.getElementById('d7').style.backgroundColor = "#555";
                    if(d7 === true){
                        d7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d7"){
                    player = "d8";
                    document.getElementById('d7').style.backgroundColor = "transparent";
                    document.getElementById('d8').style.backgroundColor = "#555";
                    if(d8 === true){
                        d8 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e1"){
                    player = "e2";
                    document.getElementById('e1').style.backgroundColor = "transparent";
                    document.getElementById('e2').style.backgroundColor = "#555";
                    if(e2 === true){
                        e2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e2"){
                    player = "e3";
                    document.getElementById('e2').style.backgroundColor = "transparent";
                    document.getElementById('e3').style.backgroundColor = "#555";
                    if(e3 === true){
                        e3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e3"){
                    player = "e4";
                    document.getElementById('e3').style.backgroundColor = "transparent";
                    document.getElementById('e4').style.backgroundColor = "#555";
                    if(e4 === true){
                        e4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e4"){
                    player = "e5";
                    document.getElementById('e4').style.backgroundColor = "transparent";
                    document.getElementById('e5').style.backgroundColor = "#555";
                    if(e5 === true){
                        e5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e5"){
                    player = "e6";
                    document.getElementById('e5').style.backgroundColor = "transparent";
                    document.getElementById('e6').style.backgroundColor = "#555";
                    if(e6 === true){
                        e6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e6"){
                    player = "e7";
                    document.getElementById('e6').style.backgroundColor = "transparent";
                    document.getElementById('e7').style.backgroundColor = "#555";
                    if(e7 === true){
                        e7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e7"){
                    player = "e8";
                    document.getElementById('e7').style.backgroundColor = "transparent";
                    document.getElementById('e8').style.backgroundColor = "#555";
                    if(e8 === true){
                        e8 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f1"){
                    player = "f2";
                    document.getElementById('f1').style.backgroundColor = "transparent";
                    document.getElementById('f2').style.backgroundColor = "#555";
                    if(f2 === true){
                        f2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f2"){
                    player = "f3";
                    document.getElementById('f2').style.backgroundColor = "transparent";
                    document.getElementById('f3').style.backgroundColor = "#555";
                    if(f3 === true){
                        f3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f3"){
                    player = "f4";
                    document.getElementById('f3').style.backgroundColor = "transparent";
                    document.getElementById('f4').style.backgroundColor = "#555";
                    if(f4 === true){
                        f4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f4"){
                    player = "f5";
                    document.getElementById('f4').style.backgroundColor = "transparent";
                    document.getElementById('f5').style.backgroundColor = "#555";
                    if(f5 === true){
                        f5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f5"){
                    player = "f6";
                    document.getElementById('f5').style.backgroundColor = "transparent";
                    document.getElementById('f6').style.backgroundColor = "#555";
                    if(f6 === true){
                        f6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f6"){
                    player = "f7";
                    document.getElementById('f6').style.backgroundColor = "transparent";
                    document.getElementById('f7').style.backgroundColor = "#555";
                    if(f7 === true){
                        f7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f7"){
                    player = "f8";
                    document.getElementById('f7').style.backgroundColor = "transparent";
                    document.getElementById('f8').style.backgroundColor = "#555";
                    if(f8 === true){
                        f8 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g1"){
                    player = "g2";
                    document.getElementById('g1').style.backgroundColor = "transparent";
                    document.getElementById('g2').style.backgroundColor = "#555";
                    if(g2 === true){
                        g2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g2"){
                    player = "g3";
                    document.getElementById('g2').style.backgroundColor = "transparent";
                    document.getElementById('g3').style.backgroundColor = "#555";
                    if(g3 === true){
                        g3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g3"){
                    player = "g4";
                    document.getElementById('g3').style.backgroundColor = "transparent";
                    document.getElementById('g4').style.backgroundColor = "#555";
                    if(g4 === true){
                        g4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g4"){
                    player = "g5";
                    document.getElementById('g4').style.backgroundColor = "transparent";
                    document.getElementById('g5').style.backgroundColor = "#555";
                    if(g5 === true){
                        g5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g5"){
                    player = "g6";
                    document.getElementById('g5').style.backgroundColor = "transparent";
                    document.getElementById('g6').style.backgroundColor = "#555";
                    if(g6 === true){
                        g6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g6"){
                    player = "g7";
                    document.getElementById('g6').style.backgroundColor = "transparent";
                    document.getElementById('g7').style.backgroundColor = "#555";
                    if(g7 === true){
                        g7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g7"){
                    player = "g8";
                    document.getElementById('g7').style.backgroundColor = "transparent";
                    document.getElementById('g8').style.backgroundColor = "#555";
                    if(g8 === true){
                        g8 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "h1"){
                    player = "h2";
                    document.getElementById('h1').style.backgroundColor = "transparent";
                    document.getElementById('h2').style.backgroundColor = "#555";
                    if(h2 === true){
                        h2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "h2"){
                    player = "h3";
                    document.getElementById('h2').style.backgroundColor = "transparent";
                    document.getElementById('h3').style.backgroundColor = "#555";
                    if(h3 === true){
                        h3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "h3"){
                    player = "h4";
                    document.getElementById('h3').style.backgroundColor = "transparent";
                    document.getElementById('h4').style.backgroundColor = "#555";
                    if(h4 === true){
                        h4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "h4"){
                    player = "h5";
                    document.getElementById('h4').style.backgroundColor = "transparent";
                    document.getElementById('h5').style.backgroundColor = "#555";
                    if(h5 === true){
                        h5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "h5"){
                    player = "h6";
                    document.getElementById('h5').style.backgroundColor = "transparent";
                    document.getElementById('h6').style.backgroundColor = "#555";
                    if(h6 === true){
                        h6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "h6"){
                    player = "h7";
                    document.getElementById('h6').style.backgroundColor = "transparent";
                    document.getElementById('h7').style.backgroundColor = "#555";
                    if(h7 === true){
                        h7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "h7"){
                    player = "h8";
                    document.getElementById('h7').style.backgroundColor = "transparent";
                    document.getElementById('h8').style.backgroundColor = "#555";
                    if(h8 === true){
                        h8 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else{}
            }
        }
        function esquerda(){
            if(isGameOn === true){
                if(player === "a8"){
                    player = "a7";
                    document.getElementById('a8').style.backgroundColor = "transparent";
                    document.getElementById('a7').style.backgroundColor = "#555";
                    if(a7 === true){
                        a7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "a7"){
                    player = "a6";
                    document.getElementById('a7').style.backgroundColor = "transparent";
                    document.getElementById('a6').style.backgroundColor = "#555";
                    if(a6 === true){
                        a6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "a6"){
                    player = "a5";
                    document.getElementById('a6').style.backgroundColor = "transparent";
                    document.getElementById('a5').style.backgroundColor = "#555";
                    if(a5 === true){
                        a5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "a5"){
                    player = "a4";
                    document.getElementById('a5').style.backgroundColor = "transparent";
                    document.getElementById('a4').style.backgroundColor = "#555";
                    if(a4 === true){
                        a4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "a4"){
                    player = "a3";
                    document.getElementById('a4').style.backgroundColor = "transparent";
                    document.getElementById('a3').style.backgroundColor = "#555";
                    if(a3 === true){
                        a3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "a3"){
                    player = "a2";
                    document.getElementById('a3').style.backgroundColor = "transparent";
                    document.getElementById('a2').style.backgroundColor = "#555";
                    if(a2 === true){
                        a2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "a2"){
                    player = "a1";
                    document.getElementById('a2').style.backgroundColor = "transparent";
                    document.getElementById('a1').style.backgroundColor = "#555";
                    if(a1 === true){
                        a1 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "b8"){
                    player = "b7";
                    document.getElementById('b8').style.backgroundColor = "transparent";
                    document.getElementById('b7').style.backgroundColor = "#555";
                    if(b7 === true){
                        b7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "b7"){
                    player = "b6";
                    document.getElementById('b7').style.backgroundColor = "transparent";
                    document.getElementById('b6').style.backgroundColor = "#555";
                    if(b6 === true){
                        b6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "b6"){
                    player = "b5";
                    document.getElementById('b6').style.backgroundColor = "transparent";
                    document.getElementById('b5').style.backgroundColor = "#555";
                    if(b5 === true){
                        b5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "b5"){
                    player = "b4";
                    document.getElementById('b5').style.backgroundColor = "transparent";
                    document.getElementById('b4').style.backgroundColor = "#555";
                    if(b4 === true){
                        b4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "b4"){
                    player = "b3";
                    document.getElementById('b4').style.backgroundColor = "transparent";
                    document.getElementById('b3').style.backgroundColor = "#555";
                    if(b3 === true){
                        b3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "b3"){
                    player = "b2";
                    document.getElementById('b3').style.backgroundColor = "transparent";
                    document.getElementById('b2').style.backgroundColor = "#555";
                    if(b2 === true){
                        b2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "b2"){
                    player = "b1";
                    document.getElementById('b2').style.backgroundColor = "transparent";
                    document.getElementById('b1').style.backgroundColor = "#555";
                    if(b1 === true){
                        b1 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c8"){
                    player = "c7";
                    document.getElementById('c8').style.backgroundColor = "transparent";
                    document.getElementById('c7').style.backgroundColor = "#555";
                    if(c7 === true){
                        c7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c7"){
                    player = "c6";
                    document.getElementById('c7').style.backgroundColor = "transparent";
                    document.getElementById('c6').style.backgroundColor = "#555";
                    if(c6 === true){
                        c6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c6"){
                    player = "c5";
                    document.getElementById('c6').style.backgroundColor = "transparent";
                    document.getElementById('c5').style.backgroundColor = "#555";
                    if(c5 === true){
                        c5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c5"){
                    player = "c4";
                    document.getElementById('c5').style.backgroundColor = "transparent";
                    document.getElementById('c4').style.backgroundColor = "#555";
                    if(c4 === true){
                        c4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c4"){
                    player = "c3";
                    document.getElementById('c4').style.backgroundColor = "transparent";
                    document.getElementById('c3').style.backgroundColor = "#555";
                    if(c3 === true){
                        c3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c3"){
                    player = "c2";
                    document.getElementById('c3').style.backgroundColor = "transparent";
                    document.getElementById('c2').style.backgroundColor = "#555";
                    if(c2 === true){
                        c2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c2"){
                    player = "c1";
                    document.getElementById('c2').style.backgroundColor = "transparent";
                    document.getElementById('c1').style.backgroundColor = "#555";
                    if(c1 === true){
                        c1 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d8"){
                    player = "d7";
                    document.getElementById('d8').style.backgroundColor = "transparent";
                    document.getElementById('d7').style.backgroundColor = "#555";
                    if(d7 === true){
                        d7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d7"){
                    player = "d6";
                    document.getElementById('d7').style.backgroundColor = "transparent";
                    document.getElementById('d6').style.backgroundColor = "#555";
                    if(d6 === true){
                        d6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d6"){
                    player = "d5";
                    document.getElementById('d6').style.backgroundColor = "transparent";
                    document.getElementById('d5').style.backgroundColor = "#555";
                    if(d5 === true){
                        d5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d5"){
                    player = "d4";
                    document.getElementById('d5').style.backgroundColor = "transparent";
                    document.getElementById('d4').style.backgroundColor = "#555";
                    if(d4 === true){
                        d4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d4"){
                    player = "d3";
                    document.getElementById('d4').style.backgroundColor = "transparent";
                    document.getElementById('d3').style.backgroundColor = "#555";
                    if(d3 === true){
                        d3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d3"){
                    player = "d2";
                    document.getElementById('d3').style.backgroundColor = "transparent";
                    document.getElementById('d2').style.backgroundColor = "#555";
                    if(d2 === true){
                        d2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d2"){
                    player = "d1";
                    document.getElementById('d2').style.backgroundColor = "transparent";
                    document.getElementById('d1').style.backgroundColor = "#555";
                    if(d1 === true){
                        d1 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e8"){
                    player = "e7";
                    document.getElementById('e8').style.backgroundColor = "transparent";
                    document.getElementById('e7').style.backgroundColor = "#555";
                    if(e7 === true){
                        e7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e7"){
                    player = "e6";
                    document.getElementById('e7').style.backgroundColor = "transparent";
                    document.getElementById('e6').style.backgroundColor = "#555";
                    if(e6 === true){
                        e6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e6"){
                    player = "e5";
                    document.getElementById('e6').style.backgroundColor = "transparent";
                    document.getElementById('e5').style.backgroundColor = "#555";
                    if(e5 === true){
                        e5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e5"){
                    player = "e4";
                    document.getElementById('e5').style.backgroundColor = "transparent";
                    document.getElementById('e4').style.backgroundColor = "#555";
                    if(e4 === true){
                        e4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e4"){
                    player = "e3";
                    document.getElementById('e4').style.backgroundColor = "transparent";
                    document.getElementById('e3').style.backgroundColor = "#555";
                    if(e3 === true){
                        e3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e3"){
                    player = "e2";
                    document.getElementById('e3').style.backgroundColor = "transparent";
                    document.getElementById('e2').style.backgroundColor = "#555";
                    if(e2 === true){
                        e2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e2"){
                    player = "e1";
                    document.getElementById('e2').style.backgroundColor = "transparent";
                    document.getElementById('e1').style.backgroundColor = "#555";
                    if(e1 === true){
                        e1 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f8"){
                    player = "f7";
                    document.getElementById('f8').style.backgroundColor = "transparent";
                    document.getElementById('f7').style.backgroundColor = "#555";
                    if(f7 === true){
                        f7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f7"){
                    player = "f6";
                    document.getElementById('f7').style.backgroundColor = "transparent";
                    document.getElementById('f6').style.backgroundColor = "#555";
                    if(f6 === true){
                        f6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f6"){
                    player = "f5";
                    document.getElementById('f6').style.backgroundColor = "transparent";
                    document.getElementById('f5').style.backgroundColor = "#555";
                    if(f5 === true){
                        f5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f5"){
                    player = "f4";
                    document.getElementById('f5').style.backgroundColor = "transparent";
                    document.getElementById('f4').style.backgroundColor = "#555";
                    if(f4 === true){
                        f4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f4"){
                    player = "f3";
                    document.getElementById('f4').style.backgroundColor = "transparent";
                    document.getElementById('f3').style.backgroundColor = "#555";
                    if(f3 === true){
                        f3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f3"){
                    player = "f2";
                    document.getElementById('f3').style.backgroundColor = "transparent";
                    document.getElementById('f2').style.backgroundColor = "#555";
                    if(f2 === true){
                        f2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f2"){
                    player = "f1";
                    document.getElementById('f2').style.backgroundColor = "transparent";
                    document.getElementById('f1').style.backgroundColor = "#555";
                    if(f1 === true){
                        f1 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g8"){
                    player = "g7";
                    document.getElementById('g8').style.backgroundColor = "transparent";
                    document.getElementById('g7').style.backgroundColor = "#555";
                    if(g7 === true){
                        g7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g7"){
                    player = "g6";
                    document.getElementById('g7').style.backgroundColor = "transparent";
                    document.getElementById('g6').style.backgroundColor = "#555";
                    if(g6 === true){
                        g6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g6"){
                    player = "g5";
                    document.getElementById('g6').style.backgroundColor = "transparent";
                    document.getElementById('g5').style.backgroundColor = "#555";
                    if(g5 === true){
                        g5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g5"){
                    player = "g4";
                    document.getElementById('g5').style.backgroundColor = "transparent";
                    document.getElementById('g4').style.backgroundColor = "#555";
                    if(g4 === true){
                        g4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g4"){
                    player = "g3";
                    document.getElementById('g4').style.backgroundColor = "transparent";
                    document.getElementById('g3').style.backgroundColor = "#555";
                    if(g3 === true){
                        g3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g3"){
                    player = "g2";
                    document.getElementById('g3').style.backgroundColor = "transparent";
                    document.getElementById('g2').style.backgroundColor = "#555";
                    if(g2 === true){
                        g2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g2"){
                    player = "g1";
                    document.getElementById('g2').style.backgroundColor = "transparent";
                    document.getElementById('g1').style.backgroundColor = "#555";
                    if(g1 === true){
                        g1 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "h8"){
                    player = "h7";
                    document.getElementById('h8').style.backgroundColor = "transparent";
                    document.getElementById('h7').style.backgroundColor = "#555";
                    if(h7 === true){
                        h7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "h7"){
                    player = "h6";
                    document.getElementById('h7').style.backgroundColor = "transparent";
                    document.getElementById('h6').style.backgroundColor = "#555";
                    if(h6 === true){
                        h6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "h6"){
                    player = "h5";
                    document.getElementById('h6').style.backgroundColor = "transparent";
                    document.getElementById('h5').style.backgroundColor = "#555";
                    if(h5 === true){
                        h5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "h5"){
                    player = "h4";
                    document.getElementById('h5').style.backgroundColor = "transparent";
                    document.getElementById('h4').style.backgroundColor = "#555";
                    if(h4 === true){
                        h4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "h4"){
                    player = "h3";
                    document.getElementById('h4').style.backgroundColor = "transparent";
                    document.getElementById('h3').style.backgroundColor = "#555";
                    if(h3 === true){
                        h3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "h3"){
                    player = "h2";
                    document.getElementById('h3').style.backgroundColor = "transparent";
                    document.getElementById('h2').style.backgroundColor = "#555";
                    if(h2 === true){
                        h2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "h2"){
                    player = "h1";
                    document.getElementById('h2').style.backgroundColor = "transparent";
                    document.getElementById('h1').style.backgroundColor = "#555";
                    if(h1 === true){
                        h1 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else{}
            }
        }
        function cima(){
            if(isGameOn === true){
                if(player === "a1"){
                    player = "b1";
                    document.getElementById('a1').style.backgroundColor = "transparent";
                    document.getElementById('b1').style.backgroundColor = "#555";
                    if(b1 === true){
                        b1 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "a2"){
                    player = "b2";
                    document.getElementById('a2').style.backgroundColor = "transparent";
                    document.getElementById('b2').style.backgroundColor = "#555";
                    if(b2 === true){
                        b2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "a3"){
                    player = "b3";
                    document.getElementById('a3').style.backgroundColor = "transparent";
                    document.getElementById('b3').style.backgroundColor = "#555";
                    if(b3 === true){
                        b3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "a4"){
                    player = "b4";
                    document.getElementById('a4').style.backgroundColor = "transparent";
                    document.getElementById('b4').style.backgroundColor = "#555";
                    if(b4 === true){
                        b4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "a5"){
                    player = "b5";
                    document.getElementById('a5').style.backgroundColor = "transparent";
                    document.getElementById('b5').style.backgroundColor = "#555";
                    if(b5 === true){
                        b5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "a6"){
                    player = "b6";
                    document.getElementById('a6').style.backgroundColor = "transparent";
                    document.getElementById('b6').style.backgroundColor = "#555";
                    if(b6 === true){
                        b6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "a7"){
                    player = "b7";
                    document.getElementById('a7').style.backgroundColor = "transparent";
                    document.getElementById('b7').style.backgroundColor = "#555";
                    if(b7 === true){
                        b7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "a8"){
                    player = "b8";
                    document.getElementById('a8').style.backgroundColor = "transparent";
                    document.getElementById('b8').style.backgroundColor = "#555";
                    if(b8 === true){
                        b8 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "b1"){
                    player = "c1";
                    document.getElementById('b1').style.backgroundColor = "transparent";
                    document.getElementById('c1').style.backgroundColor = "#555";
                    if(c1 === true){
                        c1 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "b2"){
                    player = "c2";
                    document.getElementById('b2').style.backgroundColor = "transparent";
                    document.getElementById('c2').style.backgroundColor = "#555";
                    if(c2 === true){
                        c2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "b3"){
                    player = "c3";
                    document.getElementById('b3').style.backgroundColor = "transparent";
                    document.getElementById('c3').style.backgroundColor = "#555";
                    if(c3 === true){
                        c3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "b4"){
                    player = "c4";
                    document.getElementById('b4').style.backgroundColor = "transparent";
                    document.getElementById('c4').style.backgroundColor = "#555";
                    if(c4 === true){
                        c4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "b5"){
                    player = "c5";
                    document.getElementById('b5').style.backgroundColor = "transparent";
                    document.getElementById('c5').style.backgroundColor = "#555";
                    if(c5 === true){
                        c5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "b6"){
                    player = "c6";
                    document.getElementById('b6').style.backgroundColor = "transparent";
                    document.getElementById('c6').style.backgroundColor = "#555";
                    if(c6 === true){
                        c6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "b7"){
                    player = "c7";
                    document.getElementById('b7').style.backgroundColor = "transparent";
                    document.getElementById('c7').style.backgroundColor = "#555";
                    if(c7 === true){
                        c7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "b8"){
                    player = "c8";
                    document.getElementById('b8').style.backgroundColor = "transparent";
                    document.getElementById('c8').style.backgroundColor = "#555";
                    if(c8 === true){
                        c8 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c1"){
                    player = "d1";
                    document.getElementById('c1').style.backgroundColor = "transparent";
                    document.getElementById('d1').style.backgroundColor = "#555";
                    if(d1 === true){
                        d1 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c2"){
                    player = "d2";
                    document.getElementById('c2').style.backgroundColor = "transparent";
                    document.getElementById('d2').style.backgroundColor = "#555";
                    if(d2 === true){
                        d2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c3"){
                    player = "d3";
                    document.getElementById('c3').style.backgroundColor = "transparent";
                    document.getElementById('d3').style.backgroundColor = "#555";
                    if(d3 === true){
                        d3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c4"){
                    player = "d4";
                    document.getElementById('c4').style.backgroundColor = "transparent";
                    document.getElementById('d4').style.backgroundColor = "#555";
                    if(d4 === true){
                        d4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c5"){
                    player = "d5";
                    document.getElementById('c5').style.backgroundColor = "transparent";
                    document.getElementById('d5').style.backgroundColor = "#555";
                    if(d5 === true){
                        d5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c6"){
                    player = "d6";
                    document.getElementById('c6').style.backgroundColor = "transparent";
                    document.getElementById('d6').style.backgroundColor = "#555";
                    if(d6 === true){
                        d6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c7"){
                    player = "d7";
                    document.getElementById('c7').style.backgroundColor = "transparent";
                    document.getElementById('d7').style.backgroundColor = "#555";
                    if(d7 === true){
                        d7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c8"){
                    player = "d8";
                    document.getElementById('c8').style.backgroundColor = "transparent";
                    document.getElementById('d8').style.backgroundColor = "#555";
                    if(d8 === true){
                        d8 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d1"){
                    player = "e1";
                    document.getElementById('d1').style.backgroundColor = "transparent";
                    document.getElementById('e1').style.backgroundColor = "#555";
                    if(e1 === true){
                        e1 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d2"){
                    player = "e2";
                    document.getElementById('d2').style.backgroundColor = "transparent";
                    document.getElementById('e2').style.backgroundColor = "#555";
                    if(e2 === true){
                        e2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d3"){
                    player = "e3";
                    document.getElementById('d3').style.backgroundColor = "transparent";
                    document.getElementById('e3').style.backgroundColor = "#555";
                    if(e3 === true){
                        e3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d4"){
                    player = "e4";
                    document.getElementById('d4').style.backgroundColor = "transparent";
                    document.getElementById('e4').style.backgroundColor = "#555";
                    if(e4 === true){
                        e4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d5"){
                    player = "e5";
                    document.getElementById('d5').style.backgroundColor = "transparent";
                    document.getElementById('e5').style.backgroundColor = "#555";
                    if(e5 === true){
                        e5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d6"){
                    player = "e6";
                    document.getElementById('d6').style.backgroundColor = "transparent";
                    document.getElementById('e6').style.backgroundColor = "#555";
                    if(e6 === true){
                        e6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d7"){
                    player = "e7";
                    document.getElementById('d7').style.backgroundColor = "transparent";
                    document.getElementById('e7').style.backgroundColor = "#555";
                    if(e7 === true){
                        e7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d8"){
                    player = "e8";
                    document.getElementById('d8').style.backgroundColor = "transparent";
                    document.getElementById('e8').style.backgroundColor = "#555";
                    if(e8 === true){
                        e8 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e1"){
                    player = "f1";
                    document.getElementById('e1').style.backgroundColor = "transparent";
                    document.getElementById('f1').style.backgroundColor = "#555";
                    if(f1 === true){
                        f1 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e2"){
                    player = "f2";
                    document.getElementById('e2').style.backgroundColor = "transparent";
                    document.getElementById('f2').style.backgroundColor = "#555";
                    if(f2 === true){
                        f2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e3"){
                    player = "f3";
                    document.getElementById('e3').style.backgroundColor = "transparent";
                    document.getElementById('f3').style.backgroundColor = "#555";
                    if(f3 === true){
                        f3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e4"){
                    player = "f4";
                    document.getElementById('e4').style.backgroundColor = "transparent";
                    document.getElementById('f4').style.backgroundColor = "#555";
                    if(f4 === true){
                        f4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e5"){
                    player = "f5";
                    document.getElementById('e5').style.backgroundColor = "transparent";
                    document.getElementById('f5').style.backgroundColor = "#555";
                    if(f5 === true){
                        f5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e6"){
                    player = "f6";
                    document.getElementById('e6').style.backgroundColor = "transparent";
                    document.getElementById('f6').style.backgroundColor = "#555";
                    if(f6 === true){
                        f6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e7"){
                    player = "f7";
                    document.getElementById('e7').style.backgroundColor = "transparent";
                    document.getElementById('f7').style.backgroundColor = "#555";
                    if(f7 === true){
                        f7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e8"){
                    player = "f8";
                    document.getElementById('e8').style.backgroundColor = "transparent";
                    document.getElementById('f8').style.backgroundColor = "#555";
                    if(f8 === true){
                        f8 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f1"){
                    player = "g1";
                    document.getElementById('f1').style.backgroundColor = "transparent";
                    document.getElementById('g1').style.backgroundColor = "#555";
                    if(g1 === true){
                        g1 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f2"){
                    player = "g2";
                    document.getElementById('f2').style.backgroundColor = "transparent";
                    document.getElementById('g2').style.backgroundColor = "#555";
                    if(g2 === true){
                        g2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f3"){
                    player = "g3";
                    document.getElementById('f3').style.backgroundColor = "transparent";
                    document.getElementById('g3').style.backgroundColor = "#555";
                    if(g3 === true){
                        g3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f4"){
                    player = "g4";
                    document.getElementById('f4').style.backgroundColor = "transparent";
                    document.getElementById('g4').style.backgroundColor = "#555";
                    if(g4 === true){
                        g4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f5"){
                    player = "g5";
                    document.getElementById('f5').style.backgroundColor = "transparent";
                    document.getElementById('g5').style.backgroundColor = "#555";
                    if(g5 === true){
                        g5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f6"){
                    player = "g6";
                    document.getElementById('f6').style.backgroundColor = "transparent";
                    document.getElementById('g6').style.backgroundColor = "#555";
                    if(g6 === true){
                        g6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f7"){
                    player = "g7";
                    document.getElementById('f7').style.backgroundColor = "transparent";
                    document.getElementById('g7').style.backgroundColor = "#555";
                    if(g7 === true){
                        g7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f8"){
                    player = "g8";
                    document.getElementById('f8').style.backgroundColor = "transparent";
                    document.getElementById('g8').style.backgroundColor = "#555";
                    if(g8 === true){
                        g8 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g1"){
                    player = "h1";
                    document.getElementById('g1').style.backgroundColor = "transparent";
                    document.getElementById('h1').style.backgroundColor = "#555";
                    if(h1 === true){
                        h1 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g2"){
                    player = "h2";
                    document.getElementById('g2').style.backgroundColor = "transparent";
                    document.getElementById('h2').style.backgroundColor = "#555";
                    if(h2 === true){
                        h2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g3"){
                    player = "h3";
                    document.getElementById('g3').style.backgroundColor = "transparent";
                    document.getElementById('h3').style.backgroundColor = "#555";
                    if(h3 === true){
                        h3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g4"){
                    player = "h4";
                    document.getElementById('g4').style.backgroundColor = "transparent";
                    document.getElementById('h4').style.backgroundColor = "#555";
                    if(h4 === true){
                        h4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g5"){
                    player = "h5";
                    document.getElementById('g5').style.backgroundColor = "transparent";
                    document.getElementById('h5').style.backgroundColor = "#555";
                    if(h5 === true){
                        h5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g6"){
                    player = "h6";
                    document.getElementById('g6').style.backgroundColor = "transparent";
                    document.getElementById('h6').style.backgroundColor = "#555";
                    if(h6 === true){
                        h6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g7"){
                    player = "h7";
                    document.getElementById('g7').style.backgroundColor = "transparent";
                    document.getElementById('h7').style.backgroundColor = "#555";
                    if(h7 === true){
                        h7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g8"){
                    player = "h8";
                    document.getElementById('g8').style.backgroundColor = "transparent";
                    document.getElementById('h8').style.backgroundColor = "#555";
                    if(h8 === true){
                        h8 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
            }
        }
        function baixo(){
            if(isGameOn === true){
                if(player === "b1"){
                    player = "a1";
                    document.getElementById('b1').style.backgroundColor = "transparent";
                    document.getElementById('a1').style.backgroundColor = "#555";
                    if(a1 === true){
                        a1 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "b2"){
                    player = "a2";
                    document.getElementById('b2').style.backgroundColor = "transparent";
                    document.getElementById('a2').style.backgroundColor = "#555";
                    if(a2 === true){
                        a2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "b3"){
                    player = "a3";
                    document.getElementById('b3').style.backgroundColor = "transparent";
                    document.getElementById('a3').style.backgroundColor = "#555";
                    if(a3 === true){
                        a3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "b4"){
                    player = "a4";
                    document.getElementById('b4').style.backgroundColor = "transparent";
                    document.getElementById('a4').style.backgroundColor = "#555";
                    if(a4 === true){
                        a4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "b5"){
                    player = "a5";
                    document.getElementById('b5').style.backgroundColor = "transparent";
                    document.getElementById('a5').style.backgroundColor = "#555";
                    if(a5 === true){
                        a5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "b6"){
                    player = "a6";
                    document.getElementById('b6').style.backgroundColor = "transparent";
                    document.getElementById('a6').style.backgroundColor = "#555";
                    if(a6 === true){
                        a6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "b7"){
                    player = "a7";
                    document.getElementById('b7').style.backgroundColor = "transparent";
                    document.getElementById('a7').style.backgroundColor = "#555";
                    if(a7 === true){
                        a7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "b8"){
                    player = "a8";
                    document.getElementById('b8').style.backgroundColor = "transparent";
                    document.getElementById('a8').style.backgroundColor = "#555";
                    if(a8 === true){
                        a8 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c1"){
                    player = "b1";
                    document.getElementById('c1').style.backgroundColor = "transparent";
                    document.getElementById('b1').style.backgroundColor = "#555";
                    if(b1 === true){
                        b1 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c2"){
                    player = "b2";
                    document.getElementById('c2').style.backgroundColor = "transparent";
                    document.getElementById('b2').style.backgroundColor = "#555";
                    if(b2 === true){
                        b2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c3"){
                    player = "b3";
                    document.getElementById('c3').style.backgroundColor = "transparent";
                    document.getElementById('b3').style.backgroundColor = "#555";
                    if(b3 === true){
                        b3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c4"){
                    player = "b4";
                    document.getElementById('c4').style.backgroundColor = "transparent";
                    document.getElementById('b4').style.backgroundColor = "#555";
                    if(b4 === true){
                        b4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c5"){
                    player = "b5";
                    document.getElementById('c5').style.backgroundColor = "transparent";
                    document.getElementById('b5').style.backgroundColor = "#555";
                    if(b5 === true){
                        b5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c6"){
                    player = "b6";
                    document.getElementById('c6').style.backgroundColor = "transparent";
                    document.getElementById('b6').style.backgroundColor = "#555";
                    if(b6 === true){
                        b6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c7"){
                    player = "b7";
                    document.getElementById('c7').style.backgroundColor = "transparent";
                    document.getElementById('b7').style.backgroundColor = "#555";
                    if(b7 === true){
                        b7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "c8"){
                    player = "b8";
                    document.getElementById('c8').style.backgroundColor = "transparent";
                    document.getElementById('b8').style.backgroundColor = "#555";
                    if(b8 === true){
                        b8 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d1"){
                    player = "c1";
                    document.getElementById('d1').style.backgroundColor = "transparent";
                    document.getElementById('c1').style.backgroundColor = "#555";
                    if(c1 === true){
                        c1 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d2"){
                    player = "c2";
                    document.getElementById('d2').style.backgroundColor = "transparent";
                    document.getElementById('c2').style.backgroundColor = "#555";
                    if(c2 === true){
                        c2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d3"){
                    player = "c3";
                    document.getElementById('d3').style.backgroundColor = "transparent";
                    document.getElementById('c3').style.backgroundColor = "#555";
                    if(c3 === true){
                        c3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d4"){
                    player = "c4";
                    document.getElementById('d4').style.backgroundColor = "transparent";
                    document.getElementById('c4').style.backgroundColor = "#555";
                    if(c4 === true){
                        c4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d5"){
                    player = "c5";
                    document.getElementById('d5').style.backgroundColor = "transparent";
                    document.getElementById('c5').style.backgroundColor = "#555";
                    if(c5 === true){
                        c5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d6"){
                    player = "c6";
                    document.getElementById('d6').style.backgroundColor = "transparent";
                    document.getElementById('c6').style.backgroundColor = "#555";
                    if(c6 === true){
                        c6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d7"){
                    player = "c7";
                    document.getElementById('d7').style.backgroundColor = "transparent";
                    document.getElementById('c7').style.backgroundColor = "#555";
                    if(c7 === true){
                        c7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "d8"){
                    player = "c8";
                    document.getElementById('d8').style.backgroundColor = "transparent";
                    document.getElementById('c8').style.backgroundColor = "#555";
                    if(c8 === true){
                        c8 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e1"){
                    player = "d1";
                    document.getElementById('e1').style.backgroundColor = "transparent";
                    document.getElementById('d1').style.backgroundColor = "#555";
                    if(d1 === true){
                        d1 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e2"){
                    player = "d2";
                    document.getElementById('e2').style.backgroundColor = "transparent";
                    document.getElementById('d2').style.backgroundColor = "#555";
                    if(d2 === true){
                        d2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e3"){
                    player = "d3";
                    document.getElementById('e3').style.backgroundColor = "transparent";
                    document.getElementById('d3').style.backgroundColor = "#555";
                    if(d3 === true){
                        d3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e4"){
                    player = "d4";
                    document.getElementById('e4').style.backgroundColor = "transparent";
                    document.getElementById('d4').style.backgroundColor = "#555";
                    if(d4 === true){
                        d4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e5"){
                    player = "d5";
                    document.getElementById('e5').style.backgroundColor = "transparent";
                    document.getElementById('d5').style.backgroundColor = "#555";
                    if(d5 === true){
                        d5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e6"){
                    player = "d6";
                    document.getElementById('e6').style.backgroundColor = "transparent";
                    document.getElementById('d6').style.backgroundColor = "#555";
                    if(d6 === true){
                        d6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e7"){
                    player = "d7";
                    document.getElementById('e7').style.backgroundColor = "transparent";
                    document.getElementById('d7').style.backgroundColor = "#555";
                    if(d7 === true){
                        d7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "e8"){
                    player = "d8";
                    document.getElementById('e8').style.backgroundColor = "transparent";
                    document.getElementById('d8').style.backgroundColor = "#555";
                    if(d8 === true){
                        d8 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f1"){
                    player = "e1";
                    document.getElementById('f1').style.backgroundColor = "transparent";
                    document.getElementById('e1').style.backgroundColor = "#555";
                    if(e1 === true){
                        e1 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f2"){
                    player = "e2";
                    document.getElementById('f2').style.backgroundColor = "transparent";
                    document.getElementById('e2').style.backgroundColor = "#555";
                    if(e2 === true){
                        e2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f3"){
                    player = "e3";
                    document.getElementById('f3').style.backgroundColor = "transparent";
                    document.getElementById('e3').style.backgroundColor = "#555";
                    if(e3 === true){
                        e3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f4"){
                    player = "e4";
                    document.getElementById('f4').style.backgroundColor = "transparent";
                    document.getElementById('e4').style.backgroundColor = "#555";
                    if(e4 === true){
                        e4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f5"){
                    player = "e5";
                    document.getElementById('f5').style.backgroundColor = "transparent";
                    document.getElementById('e5').style.backgroundColor = "#555";
                    if(e5 === true){
                        e5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f6"){
                    player = "e6";
                    document.getElementById('f6').style.backgroundColor = "transparent";
                    document.getElementById('e6').style.backgroundColor = "#555";
                    if(e6 === true){
                        e6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f7"){
                    player = "e7";
                    document.getElementById('f7').style.backgroundColor = "transparent";
                    document.getElementById('e7').style.backgroundColor = "#555";
                    if(e7 === true){
                        e7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "f8"){
                    player = "e8";
                    document.getElementById('f8').style.backgroundColor = "transparent";
                    document.getElementById('e8').style.backgroundColor = "#555";
                    if(e8 === true){
                        e8 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g1"){
                    player = "f1";
                    document.getElementById('g1').style.backgroundColor = "transparent";
                    document.getElementById('f1').style.backgroundColor = "#555";
                    if(f1 === true){
                        f1 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g2"){
                    player = "f2";
                    document.getElementById('g2').style.backgroundColor = "transparent";
                    document.getElementById('f2').style.backgroundColor = "#555";
                    if(f2 === true){
                        f2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g3"){
                    player = "f3";
                    document.getElementById('g3').style.backgroundColor = "transparent";
                    document.getElementById('f3').style.backgroundColor = "#555";
                    if(f3 === true){
                        f3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g4"){
                    player = "f4";
                    document.getElementById('g4').style.backgroundColor = "transparent";
                    document.getElementById('f4').style.backgroundColor = "#555";
                    if(f4 === true){
                        f4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g5"){
                    player = "f5";
                    document.getElementById('g5').style.backgroundColor = "transparent";
                    document.getElementById('f5').style.backgroundColor = "#555";
                    if(f5 === true){
                        f5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g6"){
                    player = "f6";
                    document.getElementById('g6').style.backgroundColor = "transparent";
                    document.getElementById('f6').style.backgroundColor = "#555";
                    if(f6 === true){
                        f6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g7"){
                    player = "f7";
                    document.getElementById('g7').style.backgroundColor = "transparent";
                    document.getElementById('f7').style.backgroundColor = "#555";
                    if(f7 === true){
                        f7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "g8"){
                    player = "f8";
                    document.getElementById('g8').style.backgroundColor = "transparent";
                    document.getElementById('f8').style.backgroundColor = "#555";
                    if(f8 === true){
                        f8 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "h1"){
                    player = "g1";
                    document.getElementById('h1').style.backgroundColor = "transparent";
                    document.getElementById('g1').style.backgroundColor = "#555";
                    if(g1 === true){
                        g1 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "h2"){
                    player = "g2";
                    document.getElementById('h2').style.backgroundColor = "transparent";
                    document.getElementById('g2').style.backgroundColor = "#555";
                    if(g2 === true){
                        g2 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "h3"){
                    player = "g3";
                    document.getElementById('h3').style.backgroundColor = "transparent";
                    document.getElementById('g3').style.backgroundColor = "#555";
                    if(g3 === true){
                        g3 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "h4"){
                    player = "g4";
                    document.getElementById('h4').style.backgroundColor = "transparent";
                    document.getElementById('g4').style.backgroundColor = "#555";
                    if(g4 === true){
                        g4 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "h5"){
                    player = "g5";
                    document.getElementById('h5').style.backgroundColor = "transparent";
                    document.getElementById('g5').style.backgroundColor = "#555";
                    if(g5 === true){
                        g5 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "h6"){
                    player = "g6";
                    document.getElementById('h6').style.backgroundColor = "transparent";
                    document.getElementById('g6').style.backgroundColor = "#555";
                    if(g6 === true){
                        g6 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "h7"){
                    player = "g7";
                    document.getElementById('h7').style.backgroundColor = "transparent";
                    document.getElementById('g7').style.backgroundColor = "#555";
                    if(g7 === true){
                        g7 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
                else if(player === "h8"){
                    player = "g8";
                    document.getElementById('h8').style.backgroundColor = "transparent";
                    document.getElementById('g8').style.backgroundColor = "#555";
                    if(g8 === true){
                        g8 = false;
                        pont = pont + 100;
                        frutasAtivas--;
                        document.getElementById('pont').innerHTML = "Pontuação: " + pont;
                    }
                }
            }
        }
        function reiniciar(){
            isGameOn = true;
            document.getElementById('tela-inicial').style.display = "none";
            player = "a1";
            pont = 0;
            document.getElementById('pont').innerHTML = "Pontuação: " + pont;
            a1= false; a2= false; a3= false; a4= false; a5= false; a6= false; a7= false; a8= false; b1= false; b2= false; b3= false; b4= false; b5= false; b6= false; b7= false; b8= false; c1= false; c2= false; c3= false; c4= false; c5= false; c6= false; c7= false; c8= false; d1= false; d2= false; d3= false; d4= false; d5= false; d6= false; d7= false; d8= false; e1= false; e2= false; e3= false; e4= false; e5= false; e6= false; e7= false; e8= false; f1= false; f2= false; f3= false; f4= false; f5= false; f6= false; f7= false; f8= false; g1= false; g2= false; g3= false; g4= false; g5= false; g6= false; g7= false; g8= false; h1= false; h2= false; h3= false; h4= false; h5= false; h6= false; h7= false; h8 = false;
            frutasAtivas = 0;
            document.getElementById('a1').style.backgroundColor = "#555";
            document.getElementById('a2').style.backgroundColor = "transparent";
            document.getElementById('a3').style.backgroundColor = "transparent";
            document.getElementById('a4').style.backgroundColor = "transparent";
            document.getElementById('a5').style.backgroundColor = "transparent";
            document.getElementById('a6').style.backgroundColor = "transparent";
            document.getElementById('a7').style.backgroundColor = "transparent";
            document.getElementById('a8').style.backgroundColor = "transparent";
            document.getElementById('b1').style.backgroundColor = "transparent";
            document.getElementById('b2').style.backgroundColor = "transparent";
            document.getElementById('b3').style.backgroundColor = "transparent";
            document.getElementById('b4').style.backgroundColor = "transparent";
            document.getElementById('b5').style.backgroundColor = "transparent";
            document.getElementById('b6').style.backgroundColor = "transparent";
            document.getElementById('b7').style.backgroundColor = "transparent";
            document.getElementById('b8').style.backgroundColor = "transparent";
            document.getElementById('c1').style.backgroundColor = "transparent";
            document.getElementById('c2').style.backgroundColor = "transparent";
            document.getElementById('c3').style.backgroundColor = "transparent";
            document.getElementById('c4').style.backgroundColor = "transparent";
            document.getElementById('c5').style.backgroundColor = "transparent";
            document.getElementById('c6').style.backgroundColor = "transparent";
            document.getElementById('c7').style.backgroundColor = "transparent";
            document.getElementById('c8').style.backgroundColor = "transparent";
            document.getElementById('d1').style.backgroundColor = "transparent";
            document.getElementById('d2').style.backgroundColor = "transparent";
            document.getElementById('d3').style.backgroundColor = "transparent";
            document.getElementById('d4').style.backgroundColor = "transparent";
            document.getElementById('d5').style.backgroundColor = "transparent";
            document.getElementById('d6').style.backgroundColor = "transparent";
            document.getElementById('d7').style.backgroundColor = "transparent";
            document.getElementById('d8').style.backgroundColor = "transparent";
            document.getElementById('e1').style.backgroundColor = "transparent";
            document.getElementById('e2').style.backgroundColor = "transparent";
            document.getElementById('e3').style.backgroundColor = "transparent";
            document.getElementById('e4').style.backgroundColor = "transparent";
            document.getElementById('e5').style.backgroundColor = "transparent";
            document.getElementById('e6').style.backgroundColor = "transparent";
            document.getElementById('e7').style.backgroundColor = "transparent";
            document.getElementById('e8').style.backgroundColor = "transparent";
            document.getElementById('f1').style.backgroundColor = "transparent";
            document.getElementById('f2').style.backgroundColor = "transparent";
            document.getElementById('f3').style.backgroundColor = "transparent";
            document.getElementById('f4').style.backgroundColor = "transparent";
            document.getElementById('f5').style.backgroundColor = "transparent";
            document.getElementById('f6').style.backgroundColor = "transparent";
            document.getElementById('f7').style.backgroundColor = "transparent";
            document.getElementById('f8').style.backgroundColor = "transparent";
            document.getElementById('g1').style.backgroundColor = "transparent";
            document.getElementById('g2').style.backgroundColor = "transparent";
            document.getElementById('g3').style.backgroundColor = "transparent";
            document.getElementById('g4').style.backgroundColor = "transparent";
            document.getElementById('g5').style.backgroundColor = "transparent";
            document.getElementById('g6').style.backgroundColor = "transparent";
            document.getElementById('g7').style.backgroundColor = "transparent";
            document.getElementById('g8').style.backgroundColor = "transparent";
            document.getElementById('h1').style.backgroundColor = "transparent";
            document.getElementById('h2').style.backgroundColor = "transparent";
            document.getElementById('h3').style.backgroundColor = "transparent";
            document.getElementById('h4').style.backgroundColor = "transparent";
            document.getElementById('h5').style.backgroundColor = "transparent";
            document.getElementById('h6').style.backgroundColor = "transparent";
            document.getElementById('h7').style.backgroundColor = "transparent";
            document.getElementById('h8').style.backgroundColor = "transparent";
        }
        /*function pausar(){
            isGameOn = false;
            document.getElementById('tela-inicial').style.display = "flex";
            document.getElementById('txt-tela-inicial').innerHTML = "Jogo Pausado";
        }
        function voltar(){
            isGameOn = true;
            document.getElementById('tela-inicial').style.display = "none";
        }*/
document.onkeydown = function(e) {
    switch(e.which) {
        case 37:// left
        esquerda();
        break;

        case 38: // up
        cima();
        break;

        case 39: // right
        direita();
        break;

        case 40: // down
        baixo();
        break;

        default: return; // exit this handler for other keys
    }
   // closeGalery(); // prevent the default action (scroll / move caret)
};
//cima
$(document).ready(function(){
 	$(document).keypress(function(e){
	if(e.wich == 119 || e.keyCode == 119){
		cima();
	}
  })
})     
//baixo
$(document).ready(function(){
 	$(document).keypress(function(e){
	if(e.wich == 115 || e.keyCode == 115){
		baixo();
	}
  })
})   
//esquerda
$(document).ready(function(){
 	$(document).keypress(function(e){
	if(e.wich == 97 || e.keyCode == 97){
		esquerda();
	}
  })
})
//direita
$(document).ready(function(){
 	$(document).keypress(function(e){
	if(e.wich == 100 || e.keyCode == 100){
		direita();
	}
  })
})
          
/*$(document).ready(function(){
 	$(document).keypress(function(e){
	if(e.wich == 112 || e.keyCode == 112   ){
		pausar();
	}
  })
})*/

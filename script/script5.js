<!-- Dichiaro variabili -->

var sound = new Audio('/sound/blop.mp3');
var soundIsOn = true;

<!-- Funzione suono -->
function soundOn() {
  soundIsOn = !soundIsOn;
}

function blop() {
  if(soundIsOn) {
    sound.play();
  }
}

<!-- Assegna punti a inizio partita -->

  function assegnapunti(points) {

    document.getElementById("punti1").innerHTML = points;
    document.getElementById("punti2").innerHTML = points;
    document.getElementById("punti3").innerHTML = points;
    document.getElementById("punti4").innerHTML = points;
    document.getElementById("punti5").innerHTML = points;

  }


<!-- Sottrae punti quando si preme pulsante -->

  function puntip1() {

    blop();
    var punti = document.getElementById("punti1").innerHTML;
    console.log(punti);
    if ((punti == "0") || (punti == "L")) {
      console.log(punti);
      document.getElementById("punti1").style.color = "red";
      document.getElementById("punti1").innerHTML = "L";
    } else {
    punti--;
      document.getElementById("punti1").innerHTML = punti;
    }
    }

  function puntip2() {

    blop();
    var punti = document.getElementById("punti2").innerHTML;
    console.log(punti);
    if ((punti == "0") || (punti == "L")) {
      console.log(punti);
      document.getElementById("punti2").style.color = "red";
      document.getElementById("punti2").innerHTML = "L";
    } else {
    punti--;
      document.getElementById("punti2").innerHTML = punti;
    }
    }

  function puntip3() {

    blop();
    var punti = document.getElementById("punti3").innerHTML;
    console.log(punti);
    if ((punti == "0") || (punti == "L")) {
      console.log(punti);
      document.getElementById("punti3").style.color = "red";
      document.getElementById("punti3").innerHTML = "L";
    } else {
    punti--;
      document.getElementById("punti3").innerHTML = punti;
    }
    }

  function puntip4() {

    blop();
    var punti = document.getElementById("punti4").innerHTML;
    console.log(punti);
    if ((punti == "0") || (punti == "L")) {
      console.log(punti);
      document.getElementById("punti4").style.color = "red";
      document.getElementById("punti4").innerHTML = "L";
    } else {
    punti--;
      document.getElementById("punti4").innerHTML = punti;
    }
    }

  function puntip5() {

    blop();
    var punti = document.getElementById("punti5").innerHTML;
    console.log(punti);
    if ((punti == "0") || (punti == "L")) {
      console.log(punti);
      document.getElementById("punti5").style.color = "red";
      document.getElementById("punti5").innerHTML = "L";
    } else {
    punti--;
      document.getElementById("punti5").innerHTML = punti;
    }
    }

<!-- Nuova partita, riassegna i punti e segna le vittorie -->

  function newgame() {

          var punti1 = document.getElementById("punti1").innerHTML;
          var punti2 = document.getElementById("punti2").innerHTML;
          var punti3 = document.getElementById("punti3").innerHTML;
          var punti4 = document.getElementById("punti4").innerHTML;
          var punti5 = document.getElementById("punti5").innerHTML;


          if (punti1 != "L" && punti2 == "L" && punti3 == "L" && punti4 == "L" && punti5 == "L") {
            var vittorie = document.getElementById("vittoriep1").innerHTML;
            vittorie++;
            document.getElementById("vittoriep1").innerHTML = vittorie ;
          } else if (punti2 != "L" && punti1 == "L" && punti3 == "L" && punti4 == "L" && punti5 == "L") {
            var vittorie = document.getElementById("vittoriep2").innerHTML;
            vittorie++;
            document.getElementById("vittoriep2").innerHTML = vittorie ;
          } else if (punti3 != "L" && punti1 == "L" && punti2 == "L" && punti4 == "L" && punti5 == "L") {
            var vittorie = document.getElementById("vittoriep3").innerHTML;
            vittorie++;
            document.getElementById("vittoriep3").innerHTML = vittorie ;
          } else if (punti4 != "L" && punti1 == "L" && punti2 == "L" && punti3 == "L" && punti5 == "L") {
            var vittorie = document.getElementById("vittoriep4").innerHTML;
            vittorie++;
            document.getElementById("vittoriep4").innerHTML = vittorie ;
          } else if (punti5 != "L" && punti1 == "L" && punti2 == "L" && punti3 == "L" && punti4 == "L") {
            var vittorie = document.getElementById("vittoriep5").innerHTML;
            vittorie++;
            document.getElementById("vittoriep5").innerHTML = vittorie ;
          }

          document.getElementById("punti1").innerHTML = 6;
          document.getElementById("punti1").style.color = "white";
          document.getElementById("punti2").innerHTML = 6;
          document.getElementById("punti2").style.color = "white";
          document.getElementById("punti3").innerHTML = 6;
          document.getElementById("punti3").style.color = "white";
          document.getElementById("punti4").innerHTML = 6;
          document.getElementById("punti4").style.color = "white";
          document.getElementById("punti5").innerHTML = 6;
          document.getElementById("punti5").style.color = "white";
        }

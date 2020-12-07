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

<!-- Nuova partita, riassegna i punti e segna le vittorie -->

  function newgame() {

          var punti1 = document.getElementById("punti1").innerHTML;
          var punti2 = document.getElementById("punti2").innerHTML;
          var punti3 = document.getElementById("punti3").innerHTML;


          if (punti1 != "L" && punti2 == "L" && punti3 == "L") {
            var vittorie = document.getElementById("vittoriep1").innerHTML;
            vittorie++;
            document.getElementById("vittoriep1").innerHTML = vittorie ;
          } else if (punti2 != "L" && punti1 == "L" && punti3 == "L") {
            var vittorie = document.getElementById("vittoriep2").innerHTML;
            vittorie++;
            document.getElementById("vittoriep2").innerHTML = vittorie ;
          } else if (punti3 != "L" && punti1 == "L" && punti2 == "L") {
            var vittorie = document.getElementById("vittoriep3").innerHTML;
            vittorie++;
            document.getElementById("vittoriep3").innerHTML = vittorie ;
          }

          document.getElementById("punti1").innerHTML = 6;
          document.getElementById("punti1").style.color = "white";
          document.getElementById("punti2").innerHTML = 6;
          document.getElementById("punti2").style.color = "white";
          document.getElementById("punti3").innerHTML = 6;
          document.getElementById("punti3").style.color = "white";
        }

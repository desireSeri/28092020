class Artiste {
    constructor(nom, genreMusical) {
      this.nomArtiste = nom;
      this.genreMusical=genreMusical;
    }
    chargerArtiste() {
      document.getElementById("leftleftBottom").innerHTML = '<h2>'+artiste1.nomArtiste+'<h2>'+'<h3>'+artiste1.genreMusical+'<h3>';
      document.getElementById("leftleftBottom").style.textAlign = "center";
    }
  }

  var artiste1 = new Artiste("JAYZ","HIP HOP");
  artiste1.chargerArtiste();
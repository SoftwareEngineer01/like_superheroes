// Ocultar iconos y divs
document.getElementById("like-porcentaje").style.display = 'none';
document.getElementById("dislike-porcentaje").style.display = 'none';
document.getElementById("positivo").style.display = 'none';
document.getElementById("negativo").style.display = 'none';

if(localStorage.hasOwnProperty("superheroe")){
    //Obtengo datos del localStorage
    let superheroe = JSON.parse(localStorage.getItem("superheroe"));
    let like = superheroe.likes;
    let dislike = superheroe.dislikes;

    //Si los likes son menos de 10 ocultar icono de likes
    if(like < 10){
        document.getElementById("like-porcentaje").style.display = 'none';
    } else if(dislike < 10) {
        document.getElementById("dislike-porcentaje").style.display = 'none';
    }else{
        document.getElementById("like-porcentaje").style.display = 'block';
        document.getElementById("dislike-porcentaje").style.display = 'block';
    }

    //Mostrar porcentaje y barra de progreso de los likes
    document.getElementById("porcentaje").innerHTML = like+'%';
    document.getElementById("barrainferior1").style.width = like+'%';

    //Mostrar porcentaje y barra de progreso de los dislikes
    document.getElementById("porcentaje2").innerHTML = dislike+'%';
    document.getElementById("barrainferior2").style.width = dislike+'%';
}

function votar(){
    document.getElementById("header").style.display = 'block';
    document.getElementById("positivo").style.display = 'none';    
    document.getElementById("negativo").style.display = 'none';   
}

function agregarLike() {

    document.getElementById("header").style.display = 'none';
    document.getElementById("negativo").style.display = 'none'; 
    document.getElementById("positivo").style.display = 'block';

    //Comprueba si existe la superheroe en localStorage
    if (!localStorage.hasOwnProperty("superheroe")) {
      
      //Estructura que tendra los datos que se guardaran en el localStorage
      let heroe = { 
          nombre: "Ironman",
          likes: 0,
          dislikes: 0
      };

      //Guardamos los datos en el localStorage
      localStorage.setItem("superheroe", JSON.stringify(heroe));
  
      //Obtenemos los datos del localStorage  
      let dataHeroe = JSON.parse(localStorage.getItem("superheroe"));
  
      //Se modifican los likes
      dataHeroe.likes = dataHeroe.likes + 1;

      //Almacenamos los likes en una variable
      let likes = dataHeroe.likes;
  
      //Se sobreescriben los datos
      localStorage.setItem("superheroe", JSON.stringify(dataHeroe));      

      //Mostramos la barra de progreso y el porcentaje para los likes
      document.getElementById("porcentaje").innerHTML = likes+'%';
      document.getElementById("barrainferior1").style.width = likes+'%';

    } else {
      //Obtenemos los datos del localStorage
      let dataHeroe = JSON.parse(localStorage.getItem("superheroe"));

      //Se modifican los likes
      dataHeroe.likes += 1;
      
      //Se sobreescriben los datos
      localStorage.setItem("superheroe", JSON.stringify(dataHeroe));

      //Almacenamos los likes en una variable
      let like = dataHeroe.likes;

      if(like < 10){
        document.getElementById("like-porcentaje").style.display = 'none';
      }else{
        document.getElementById("like-porcentaje").style.display = 'block';
      }

      document.getElementById("porcentaje").innerHTML = like+'%';
      document.getElementById("barrainferior1").style.width = like+'%';
    }
  }

  function agregarDislike() {   
      
    document.getElementById("header").style.display = 'none';
    document.getElementById("negativo").style.display = 'block'; 
    document.getElementById("positivo").style.display = 'none';
    
    //Comprueba si existe la superheroe en localStorage
    if (!localStorage.hasOwnProperty("superheroe")) {
      
      //Estructura que tendra los datos que se guardaran en el localStorage
      let heroe = { 
          nombre: "Ironman",
          likes: 0,
          dislikes: 0
      };

      //Guardamos los datos en el localStorage
      localStorage.setItem("superheroe", JSON.stringify(heroe));
  
      //Obtenemos los datos del localStorage  
      let dataHeroe = JSON.parse(localStorage.getItem("superheroe"));
  
      //Se modifican los dislikes
      dataHeroe.dislikes += 1;

      //Almacenamos los dlikes en una variable
      let dislikes = dataHeroe.dislikes;
  
      //Se sobreescriben los datos
      localStorage.setItem("superheroe", JSON.stringify(dataHeroe));      

      //Mostramos la barra de progreso y el porcentaje para los likes
      document.getElementById("porcentaje2").innerHTML = dislikes+'%';
      document.getElementById("barrainferior2").style.width = dislikes+'%';

    } else {
      //Obtenemos los datos del localStorage
      let dataHeroe = JSON.parse(localStorage.getItem("superheroe"));

      //Se modifican los likes
      dataHeroe.dislikes += 1;
      
      //Se sobreescriben los datos
      localStorage.setItem("superheroe", JSON.stringify(dataHeroe));

      //Almacenamos los likes en una variable
      let dislike = dataHeroe.dislikes;

      if(dislike < 10){
        document.getElementById("dislike-porcentaje").style.display = 'none';
      }else{
        document.getElementById("dislike-porcentaje").style.display = 'block';
      }

      document.getElementById("porcentaje2").innerHTML = dislike+'%';
      document.getElementById("barrainferior2").style.width = dislike+'%';
    }
  }





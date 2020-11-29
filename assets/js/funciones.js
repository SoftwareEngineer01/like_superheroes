hideElements();

const setItemLocalStorage = (data) => localStorage.setItem("superheroe", JSON.stringify(data));
const heroe = { nombre: "Ironman", likes: 0, dislikes: 0 };
const dataLocalStorage = () => localStorage.hasOwnProperty("superheroe");
const itemLocalStorage = () => JSON.parse(localStorage.getItem("superheroe"));

if(dataLocalStorage()) {  
  let superheroe = itemLocalStorage();
  let like = superheroe.likes;
  let dislike = superheroe.dislikes;

  showHideLikes(like);
  showHideDislikes(dislike);
}

function votar() {
  document.getElementById("header").style.display = 'block';
  document.getElementById("positivo").style.display = 'none';    
  document.getElementById("negativo").style.display = 'none';   
}

function hideElements() {  
  document.getElementById("like-porcentaje").style.display = 'none';
  document.getElementById("dislike-porcentaje").style.display = 'none';
  document.getElementById("positivo").style.display = 'none';
  document.getElementById("negativo").style.display = 'none';
}

function showHideLikes(like) {     
  if(like > 0) {
    document.getElementById("porcentaje").innerHTML = like+'%';
    document.getElementById("barrainferior1").style.width = like+'%';
  }

  if(like < 10) {
    document.getElementById("like-porcentaje").style.display = 'none';
  }else {
      document.getElementById("like-porcentaje").style.display = 'block';      
  }    
}

function showHideDislikes(dislike) {  
  if(dislike > 0) {
    document.getElementById("porcentaje2").innerHTML = dislike+'%';
    document.getElementById("barrainferior2").style.width = dislike+'%';
  }
  
  if(dislike < 10) {
    document.getElementById("dislike-porcentaje").style.display = 'none';
  }else {
    document.getElementById("dislike-porcentaje").style.display = 'block';
  }
}

function agregarLike() {
    document.getElementById("header").style.display = 'none';
    document.getElementById("negativo").style.display = 'none'; 
    document.getElementById("positivo").style.display = 'block';

    if(!dataLocalStorage()) { 
      setItemLocalStorage(heroe);

      let item = itemLocalStorage();    
      item.likes += 5;
      let likes = item.likes;  
     
      setItemLocalStorage(item); 
      showHideLikes(likes);

    }else {     
      let dataHeroe = itemLocalStorage();      
      dataHeroe.likes += 5;  

      setItemLocalStorage(dataHeroe);

      let like = dataHeroe.likes;
      showHideLikes(like);      
    }
  }

  function agregarDislike() {     
    document.getElementById("header").style.display = 'none';
    document.getElementById("negativo").style.display = 'block'; 
    document.getElementById("positivo").style.display = 'none';    
    
    if(!dataLocalStorage()) {  
      setItemLocalStorage(heroe); 
      
      let item = itemLocalStorage();    
      item.dislikes += 5;     
      let dislikes = item.dislikes;  
      
      setItemLocalStorage(item);
      showHideDislikes(dislikes);

    }else {      
      let dataHeroe = itemLocalStorage();     
      dataHeroe.dislikes += 5;
           
      setItemLocalStorage(dataHeroe);
     
      let dislike = dataHeroe.dislikes;
      showHideDislikes(dislike);
    }
  }





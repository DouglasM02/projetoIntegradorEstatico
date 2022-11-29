let index = 0;
function CarrosselAutomatico(){

  let carrosselItems = document.querySelectorAll(".c-item");
  for(let i = 0; i < carrosselItems.length; i++){
    carrosselItems[i].style.display = "none";
  }

  index++;

  if(index > carrosselItems.length){index = 1}

  carrosselItems[index - 1].style.display = "block";

  setTimeout(CarrosselAutomatico, 10000);


}

function OpenDialog(id){
  let dialog = document.getElementById(id)
  dialog.classList.remove("not-show")
  dialog.classList.add("show")
}

function CloseDialog(id){
  let dialog = document.getElementById(id)
  console.log(dialog)
  dialog.classList.remove("show")
  dialog.classList.add("not-show")
}

CarrosselAutomatico()

  const buttonDiv = document.querySelector("#buttonDiv");
  let number = 0; 
  let elem =  document.querySelector(".container");
  let divElements = document.getElementsByClassName("newdivs");
  let button = document.createElement("button");
  let button2 = document.createElement("button");


submittButton()
resetButton();
printBoxes();

changeColor(".divs");



function reset(){

  const element = document.querySelectorAll(".divs");
  
  for (let i = 0; i < element.length; i++) {

      element[i].style.backgroundColor = "white";
    }

}


function reset2(){

  const element = document.querySelectorAll(".newdivs");
  const content = document.createElement('div');

  for (let i = 0; i < element.length; i++) {

      element[i].style.backgroundColor = "white";
    }

}









function resetButton() {

 
  button.classList.add("button");

  // creating text to be 
  //displayed on button 
  var text = document.createTextNode("Reset Button");

  // appending text to button 
  button.appendChild(text);


  buttonDiv.appendChild(button);

 button.addEventListener("click", event => {
  reset();
  reset2();

  });
  

}





function printBoxes() {
  for (let i = 0; i < (16 * 16); i++) {

    printBox();

  }
}


function printBox() {

  const container = document.querySelector(".container");
  const content = document.createElement('div');
  content.classList.add("divs");

  container.appendChild(content);

}


function changeColor(Class) {
  const element = document.querySelectorAll(Class);
  const content = document.createElement('div');

  for (let i = 0; i < element.length; i++) {


    element[i].addEventListener("mouseover", event => {
      element[i].style.backgroundColor = getRandomColor();
    });

    element[i].addEventListener("mouseout", event => {
      element[i].style.backgroundColor = getRandomColor();
    });
  }


}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}





// Scale buttons in and out on clicks
button.addEventListener("mousedown", function() {
  button.style.transform = "scale(.9)";
})
button.addEventListener("mouseup", function() {
  button.style.transform = "scale(1)";
})


button2.addEventListener("mousedown", function() {
  button2.style.transform = "scale(.9)";
})
button2.addEventListener("mouseup", function() {
  button2.style.transform = "scale(1)";
})




//change grid
function printNew(){

  let containerNew = document.querySelector(".container");
  let contentNew = document.createElement('div');
  contentNew.classList.add("newdivs");
containerNew.appendChild(contentNew);



}

function printNewBoxes() {
 document.querySelectorAll(".divs").forEach(function (a) {
      a.remove();
      }) 
 document.querySelectorAll(".newdivs").forEach(function (a) {
       a.remove();
       })     

   elem.style.gridTemplateColumns = "repeat(" + number + ", 1fr)";
  elem.style.gridTemplateRows = "repeat(" + number + ", 1fr)";

  
 
  for (let i = 0; i < (number * number); i++) {
    printNew();

  }


  document.querySelectorAll(".newdivs").forEach(function (a) {
    a.style.width = number;
    a.style.height = number;
    }) 

    changeColor(".newdivs");



  }





//get number of squares. 
function submittButton() {

 
  button2.innerHTML = "Change number of squares";
  button2.classList.add("changebutton");
  
  // 2. Append somewhere
  var buttonDiv = document.getElementById("buttonDiv");
  buttonDiv.appendChild(button2);
  
  // 3. Add event handler
  button2.addEventListener ("click", function() {
    number = prompt("How many squares? Choose a number betwee 1-100");
    if (number>100){
      number = prompt("try again. Choose a number between 1-100");
    }else if (number === null){
     
      printBoxes();
    }


    
    else
    printNewBoxes();
  });
  



  
}
  








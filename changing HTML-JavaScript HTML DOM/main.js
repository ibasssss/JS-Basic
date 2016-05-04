var par = document.getElementById("p1");
par.innerHTML ="Text was changed: New Word";

document.getElementById("avatar").src="img/judge.png";

document.getElementById('p2').style.color="green";

function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 345) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.bottom = pos + 'px'; 
       
    }
  }
}

function displayDate() {
    document.getElementById("p3").innerHTML = Date();
}

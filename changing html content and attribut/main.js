function modifyTxt(){
	document.getElementById('p1').innerHTML="My content was changed after click!";
}
//alternative 
/*
function modifyTxt(){
	var tmp = document.getElementById('p2');
	tmp.innerHTML="My content was changed after click!";
}
*/
function modifyImg(){
	document.getElementById('pix').src="img/wp.png";
}
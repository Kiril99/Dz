
var btn = document.getElementById('btnRes');
btn.onclick = function(){
	var resH = document.getElementById('resH1')
	var a = +document.getElementById('inpA').value;
	var b = +document.getElementById('inpB').value;
 	if(a <= 1 && b>= 3 ){
		var result = a+b;
		resH.innerHTML = result;
	}else{
		var result2 = a-b;
		resH.innerHTML = result2;
	}
}


var btn1 = document.getElementById('btnRes1');


btn1.onclick = function(){
	var inpN = +document.getElementById('inpN').value;
	var resH = document.getElementById('resH2')
	var result1;
	switch(inpN){
		case 1:
		result1 = 'Зима';
		resH.innerHTML = result1;
		break;

		case 2:
		result1 = 'Весна';
		resH.innerHTML = result1;
		break;

		case 3:
		result1 = 'Лето';
		resH.innerHTML = result1;
		break;

		case 4:
		result1 = 'Осень';
		resH.innerHTML = result1;
		break;
		default:
    	resH.innerHTML = 'Введите цыфру от одного до четырех' ;
}

	}



var btn2 = document.getElementById('btnRes2');
btn2.onclick = function(){
	var mas = document.getElementById('inpMas').value;
	var resH = document.getElementById('resH3')
	
 	if(mas.substring(0,1) == 1 || mas.substring(0,1) == 2 || mas.substring(0,1) == 3 ){
		
		resH.innerHTML = "Yes"
	}else{
		resH.innerHTML = "No";
	}
}


var btnGo = document.getElementById('btnGo');

btnGo.onclick = function(){
	var resH = document.getElementById('resH4')
	var i = 11;
		while(i >= 11 && i<=33){
		resH.innerHTML += i + "<br>";
		i++;
		
	}
	
}




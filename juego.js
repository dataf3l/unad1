var current = 0;
var score = 0;
function rand(n){	
	var x = Math.floor(Math.random()*n);
	if(x==n){
		x--;
	}
	return x;
}
function shuffle(a){
	for(var i=0;i<100;i++){
		var i1 = rand(a.length);
		var i2 = rand(a.length);
		var temp = a[i1];
		a[i1] = a[i2];
		a[i2] = temp;
	}

}
var questions = [];
function question_clicked(op){
	if(questions[op].term == glossary[current].term){
		score++;
	}else{
		alert("La respuesta correcta era:" + glossary[current].term);
		score--;
		score--;
	}
	current = rand(glossary.length);
	render();	
}
function render(){
	var dx="";
	dx="<h2>Puntuaci&oacute;n actual: "+(100*score)+"</h2>";
	dx += "<h4>Para ganar puntos, seleccione el t&eacute;rmino correcto que corresponde a esta definici&oacute;n:</h4>";
	dx += "<p>"+glossary[current].definition+"</p>";
	questions = [];
	for(var x=0;x<8;x++){
		var n = -1;
		//while(n!=current){
		n = rand(glossary.length);
		//}
		questions.push(glossary[n]);
	}
	questions.push(glossary[current]);
	//show
	shuffle(questions);
	dx +="<p>Seleccione la defici&oacute;n correcta:</p>";
	dx +="<ul>";
	for(x=0;x<questions.length;x++){
		dx +="<li onclick='question_clicked("+x+")' class=op>"+questions[x].term+"</li>";
	}
	dx +="</ul>";
	document.getElementById("board").innerHTML = dx;
}

function init(){
	current = rand(glossary.length);
	render();
}

document.write('<div class="pers">')
for (var i=1;i<6;i++){
	document.write('<div class="box"><img src="images/'+i+'.jpg" /></div>');
}
document.write('</div>')
function rnd(a,b){
	return Math.floor(Math.random()*(b-a+1))+a;
}
	
function randColor(){
	var c='#';
	for(var i=0;i<6;i++){
		c+=rnd(0,15).toString(16);
	}
	return c;
}
var boxes = document.getElementsByClassName('box');

var ultimaImagen = document.getElementById('principal').src;

function falcao1() {
ultimaImagen = document.getElementById('principal').src;
	document.getElementById('principal').src='./imagenes/imagen2.jpg';
}
function falcao2() {
	ultimaImagen = document.getElementById('principal').src;
	document.getElementById('principal').src='./imagenes/imagen3.jpg';
}
function volver()  {
	ultimaImagen = document.getElementById('principal').src;
	document.getElementById('principal').src= ultimaImagen;
}
function falcao3() {
	ultimaImagen = document.getElementById('principal').src;
	document.getElementById('principal').src='./imagenes/imagen4.jpg';
}
function falcao4() {
	ultimaImagen = document.getElementById('principal').src;
	document.getElementById('principal').src='./imagenes/imagen5.jpg';
}

function fijarImagen(archivo){

var muestreImagen = "./imagenes/"+archivo;
ultimaImagen = document.getElementById('principal').src=muestreImagen;
	
}
const personas = [new Persona("Juan", "Perez"), new Persona("Karla", "Larra")];
function mostrarPersonas() {
	console.log("mostrarPersonas()");
	let texto = " ";
	for (let per of personas) {
		console.log(per);
		texto += `<li> ${per.nombre} ${per.apellido}</li>`;
	}
	document.getElementById("personas").innerHTML = texto;
}
function agregarPersona() {
	const forma = document.forms["forma"]; // recupera en forma de [ ] del formulario ID forma sus objetos persona
	const nombre = forma["nombre"]; //del [ ] forma recupera el ID nombre
	const apellido = forma["apellido"];
	if (nombre.value != "" && apellido.value != "") {
		const persona = new Persona(nombre.value, apellido.value); // crea el nuevo Objeto recuperando del Id nombre su valor y de Id apellido su valor.
		personas.push(persona); //Agrega al final de personas[ ] , persona
		mostrarPersonas(); // vuelve a llamar la funcion mostrarPersonas()  para mostrar todo:
	} else {
		console.log("No hay información que agregar");
	}
}

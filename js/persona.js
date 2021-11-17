class Persona {
	constructor(nom, ape) {
		this._nombre = nom;
		this._apellido = ape;
	}
	get nombre() {
		return this._nombre;
	}
	set nombre(nom) {
		this._nombre = nom;
	}
	get apellido() {
		return this._apellido;
	}
	set apellido(ape) {
		this._apellido = ape;
	}
}

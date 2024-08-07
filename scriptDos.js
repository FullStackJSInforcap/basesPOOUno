class Sala{

    constructor(numeroSala, estudiantes){
        this._numeroSala = numeroSala;    
        this._estudiantes = estudiantes;
    }

    get numeroSala(){
        return this._numeroSala;
    }

    set numeroSala(numeroSala){
        this._numeroSala = numeroSala;
    }

    get estudiantes(){
        return this._estudiantes;
    }

    set estudiantes(estudiantes){
        this._estudiantes = estudiantes;
    }

}

class Estudiante{

    constructor(idEstudiante, rut, nombre){
        this._idEstudiante = idEstudiante;
        this._rut = rut;
        this._nombre = nombre;
    }

    get idEstudiante(){
        return this._idEstudiante;
    }

    set idEstudiante(idEstudiante){
        this._idEstudiante = idEstudiante;
    }

    get rut(){
        return this._rut;
    }

    set rut(rut){
        this._rut = rut;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

}

let estudianteUno = new Estudiante('1', '11111111-1', 'Pepito');
let estudianteDos = new Estudiante('2', '22222222-1', 'Juanito');
let estudianteTres = new Estudiante('3', '33333333-1', 'Francisco');
let estudiantes = [];
estudiantes.push(estudianteUno);
estudiantes.push(estudianteDos);
estudiantes.push(estudianteTres);
let sala = new Sala('1', estudiantes);
console.log(sala.estudiantes[0].nombre);

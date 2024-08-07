class Persona{

    constructor(rut, nombre, altura, edad, direccion){
        this._rut = rut;
        this._nombre = nombre;
        this._altura = altura;
        this._edad = edad;
        this._direccion = direccion;
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
        let regex = new RegExp('^[a-zA-Z ]+$');
        if(regex.test(nombre)){
            this._nombre = nombre;
        }
    }

    get altura(){
        return this._altura;
    }

    set altura(altura){
        this._altura = altura;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    get direccion(){
        return this._direccion;
    }

    set direccion(direccion){
        this._direccion = direccion;
    }

    caminar(velocidad) {
        console.log('Caminando a ' + velocidad + ' kilometros por hora' );
    }

}

let personaUno = new Persona('11111111-1', 'pepito paga doble', '1.80', '38', 'de por ahí');
let personaDos = new Persona('22222222-1', 'pepito paga doble', '1.80', '38', 'de por ahí');
let personaTres = new Persona('33333333-1', 'pepito paga doble', '1.80', '38', 'de por ahí');
console.log(personaUno, personaDos, personaTres);
personaUno.caminar(4);
personaDos.caminar(5);
personaTres.caminar(6);
console.log(personaUno.rut);
personaUno.rut = 'cualquier cosa';
console.log(personaUno);
personaUno.nombre = '3453534+´-+';
console.log(personaUno);


personaUno._nombre = '435645645';
console.log(personaUno);
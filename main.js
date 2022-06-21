class Pizza {
    constructor(id, nombre, ingredientes, precio) {
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
    }
}

let ingNapo = ['Muzzarella', 'Salsa', 'Tomate', 'Ajo'];
let ingHuevo = ['Muzzarella', 'Salsa', 'Huevo'];
let ingMuzza = ['Muzzarella', 'Salsa'];
let ingProvo = ['Provolone', 'Salsa'];
let ingRucula = ['Muzzarella', 'Salsa', 'Rucula', 'Jamon Crudo'];
let ingPrimavera = ['Muzzarella', 'Salsa', 'Anana'];



let pizza1 = new Pizza(1, 'Napolitana', ingNapo, 600);
let pizza2 = new Pizza(2, 'Huevo', ingHuevo, 550);
let pizza3 = new Pizza(3, 'Muzzarella', ingMuzza, 500);
let pizza4 = new Pizza(4, 'Provolone', ingProvo, 700);
let pizza5 = new Pizza(5, 'Rucula', ingProvo, 600);
let pizza6 = new Pizza(6, 'Primavera', ingProvo, 650);

let arrayPizzas = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6];

for (let i = 0; i < arrayPizzas.length; i++) {
    if (arrayPizzas[i].id % 2 != 0) {
        console.log(`La pizza "${arrayPizzas[i].nombre}", tiene un id impar.`)
    }
}
for (let i = 0; i < arrayPizzas.length; i++) {
    if (arrayPizzas[i].precio < 600) {
        console.log(`La pizza "${arrayPizzas[i].nombre}", tiene un precio menor a $600.`)
    }
}
for (let i = 0; i < arrayPizzas.length; i++) {
    console.log(`Pizza ${arrayPizzas[i].id}:
    "${arrayPizzas[i].nombre}"`)
}
for (let i = 0; i < arrayPizzas.length; i++) {
    console.log(`$${arrayPizzas[i].precio}`)
}
for (let i = 0; i < arrayPizzas.length; i++) {
    console.log(`La Pizza ${arrayPizzas[i].nombre} tiene un valor de $${arrayPizzas[i].precio}`)
}
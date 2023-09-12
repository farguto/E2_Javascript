const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


// Ejercicio 1

 
for (let i = 0; i < pizzas.length; i++) {
  const pizza = pizzas[i];    
  if (pizza.id % 2 !== 0) {
    console.log(`La pizza que tiene ID ${pizza.id} es impar y es una ${pizza.nombre}`);
  }  
}


// Ejercicio 2

for (let i = 0; i < pizzas.length; i++) {
  const pizza = pizzas[i];    
  if (pizza.precio < 600) {
    console.log(`La pizza que tiene ID ${pizza.id} es impar y es una ${pizza.nombre} tiene un valor de ${pizza.precio} pesos`);
  }  
}

// Ejercicio 3 

for (let i = 0; i < pizzas.length; i++) {
  const pizza = pizzas[i];    
  console.log(`La ${pizza.nombre} tiene un valor de ${pizza.precio} pesos`);
  
}

// Ejercicio 4 

for (let i = 0; i < pizzas.length; i++) {
  const pizza = pizzas[i];    
  
  console.log(`La ${pizza.nombre} tiene los siguientes ingredientes: `);


  for (let j = 0; j < pizza.ingredientes.length; j++) {
    const ingrediente = pizza.ingredientes[j];
    console.log(ingrediente);
  }
  
}


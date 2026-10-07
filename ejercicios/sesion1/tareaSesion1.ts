const casosPrueba: Array<object> = [
  {
  id: 1,
  title: "Test Case Nº 1",
  priority: "Alta",
  executed: true
},
  {
  id: 2,
  title: "Test Case Nº 2",
  priority: "Baja",
  executed: true
},
  {
  id: 3,
  title: "Test Case Nº 3",
  priority: "Media",
  executed: false
},
  {
  id: 4,
  title: "Test Case Nº 4",
  priority: "Alta",
  executed: true
},
  {
  id: 5,
  title: "Test Case Nº 5",
  priority: "Baja",
  executed: false
},
];

const contarPorPrioridad = (casos: Array<object>) => {
let prioridadAlta = 0;
let prioridadMedia = 0;
let prioridadBaja = 0;

casos.forEach((el) =>{
  if (el.priority === "Alta") {
    prioridadAlta = prioridadAlta + 1;
    } else if (el.priority === "Media") {
    prioridadMedia = prioridadMedia + 1;
 } else if (el.priority === "Baja") {
    prioridadBaja = prioridadBaja + 1;

})

return {
  cantAlta: prioridadAlta,
  cantMedia: prioridadMedia,
  cantBaja: prioridadBaja,
  }
};

const listarPendientes = (casos: Array<object>) => {
  let notExecuted: Array<object> = []

  casos.forEach((el) =>{
    if (!el.executed){
      notExecuted.push(el);
    }
  });

  return notExecuted;
}

//console.log(contarPorPrioridad(casosPrueba));
console.log(listarPendientes(casosPrueba));
console.log(
    ` inicializacion de la aplicación 
       ============================================================ `
  );

  // Arrays 
  let agentes = [
    {
      nombre: "RODRIGO SINDONA",
      posicion: "Supervisor",
      sector: "Fabricación",
      legajo: 2134,
    },
    {
      nombre: "MATIAS ACOSTA",
      posicion: "Operador",
      sector: "Reposición",
      legajo: 5678,
    },
    {
      nombre: "JULIETA PRADA",
      posicion: "Encargado",
      sector: "Ventas",
      legajo: 9876,
    },
    {
      nombre: "ESTEBAN SALAS",
      posicion: "Supervisor",
      sector: "Facturación",
      legajo: 5432,
    },
    {
      nombre: "ANA MARIA GONZALEZ",
      posicion: "Operador",
      sector: "Fabricación",
      legajo: 8765,
    },
    {
      nombre: "MARTIN LOMBARD",
      posicion: "Operador",
      sector: "Ventas",
      legajo: 4321,
    },
    {
      nombre: "NICOLAS ARISTIDES",
      posicion: "Supervisor",
      sector: "Reposición",
      legajo: 7890,
    },
    {
      nombre: "MACARENA BUSTAMANTE",
      posicion: "Operador",
      sector: "Facturación",
      legajo: 2345,
    },
    {
      nombre: "MAURO RIOS",
      posicion: "Operador",
      sector: "Ventas",
      legajo: 6789,
    },
    {
      nombre: "LUCIA LOPEZ",
      posicion: "Encargado",
      sector: "Fabricación",
      legajo: 1098,
    },
  ];
  let tareas = [
    {
      id: 1,
      tipo: "Fabricación",
      prioridad: "Baja",
      descripcion: "REVISAR Y AJUSTAR MAQUINARIA",
      estado: "Pendiente",
      creacion: new Date("2023-12-01T08:00:00"),
    },
    {
      id: 2,
      tipo: "Reposición",
      prioridad: "Media",
      descripcion: "REPONER PRODUCTOS EN ESTANTERÍAS",
      estado: "Pendiente",
      creacion: new Date("2023-12-02T10:30:00"),
    },
    {
      id: 3,
      tipo: "Ventas",
      prioridad: "Alta",
      descripcion: "ENTREGAR PEDIDO AL CLIENTE",
      estado: "Pendiente",
      creacion: new Date("2023-12-03T14:45:00"),
    },
    {
      id: 4,
      tipo: "Facturación",
      prioridad: "Urgente",
      descripcion: "EMITIR FACTURAS",
      estado: "Pendiente",
      creacion: new Date("2023-12-08T12:45:00"),
    },
  ];
  let tareasCompletadas = [];
  let insumos = [
    { nombreInsumo: "REACTIVOS DE PH", tipoInsumo: "Fabricación", stock: 500 },
    { nombreInsumo: "GUANTES", tipoInsumo: "Fabricación", stock: 600 },
    { nombreInsumo: "FILTROS", tipoInsumo: "Fabricación", stock: 450 },
    { nombreInsumo: "CEPILLOS", tipoInsumo: "Fabricación", stock: 0 },
    { nombreInsumo: "SILICONA", tipoInsumo: "Materias Primas", stock: 1000 },
    { nombreInsumo: "DETERGENTE", tipoInsumo: "Materias Primas", stock: 750 },
    { nombreInsumo: "EMULSIONANTE", tipoInsumo: "Materias Primas", stock: 200 },
    { nombreInsumo: "CERA", tipoInsumo: "Materias Primas", stock: 0 },
    { nombreInsumo: "ALCOHOL", tipoInsumo: "Materias Primas", stock: 300 },
    {
      nombreInsumo: "PAPEL DE OFICINA",
      tipoInsumo: "Administrativo",
      stock: 500,
    },
    { nombreInsumo: "BOLÍGRAFOS", tipoInsumo: "Administrativo", stock: 200 },
    { nombreInsumo: "CINTA ADHESIVA", tipoInsumo: "Administrativo", stock: 150 },
    { nombreInsumo: "PAPEL TOALLA", tipoInsumo: "Administrativo", stock: 300 },
  ];

  // Variables globales
  let menuPpalState = true;
  let menuAgState;
  let menuTareasState;
  let menuInsumosState;
  let tareaID = 5; // <- la empiezo desde 5 por el ultimo ID del array de ejemplo. Sino iniciaria en 1
  
  // clases
  
  class Agente {
    constructor(nombre, posicion, sector) {
      this.nombre = nombre;
      this.posicion = posicion;
      this.sector = sector;
      this.legajo = generarLegajo(agentes);
    }
  }
  
  class Tarea {
    constructor(tipo, prioridad, descripcion) {
      this.tipo = tipo;
      this.prioridad = prioridad;
      this.descripcion = descripcion;
      this.estado = "Pendiente";
      this.creacion = new Date();
      this.id = tareaID;
    }
  }
  
  class Insumo {
    constructor(nombreInsumo, tipoInsumo, stock) {
      this.nombreInsumo = nombreInsumo;
      this.tipoInsumo = tipoInsumo;
      this.stock = stock;
    }
  }
  
  // funciones globales
  
  const generarLegajo = (agentes) => {
    let legajo;
  
    do {
      legajo = Math.floor(Math.random() * 9000) + 1000;
    } while (agentes.some((agente) => agente.legajo === legajo));
  
    console.log(
      `se genera legajo aleatorio para el nuevo agente comprobando que no exista en el array: ${legajo}`
    );
    return legajo;
  };
  // menu principal
  
  const menuInicio = () => {
    console.log("Ingreso a menu principal \n =================================");
    while (menuPpalState) {
      console.log("Solicitud de opcion de modulo a administrar");
      let seleccion = parseInt(
        prompt(`Sistema de Administración de Quimishop SRL. 
          Por favor elija una opción para continuar:
  
          1- Administrar Agentes
          2- Administrar Tareas
          3- Administrar Insumos       
          4- Salir
          `)
      );
      switch (seleccion) {
        case 1:
          console.log("seleccionada opcion 1: Modulo Agentes");
          menuAgentes();
          break;
        case 2:
          console.log("seleccionada opcion 2: Modulo Tareas");
          menuTareas();
          break;
        case 3:
          console.log("seleccionada opcion 3: Modulo Insumos");
          menuInsumos();
          break;
        case 4:
          console.log("seleccionada opcion 4: Salir Y terminar aplicacion");
          alert("Cerrando Sesion");
          menuPpalState = false;
          break;
        default:
          console.log(
            `el usuario ingresa: ${seleccion}. Fuera del rango de opciones de menu o no es un número.`
          );
          alert("Seleccion inválida, por favor indique nuevamente la opción");
          break;
      }
    }
  };
  // menu modulo agentes
  
  const menuAgentes = () => {
    console.log(`====================
    Ingreso al Menu de Agentes
    ==================`);
    menuAgState = true;
    while (menuAgState) {
      console.log("solicitud de opción de funcionalidad del menu de Agentes.");
      let seleccionAg = parseInt(
        prompt(` Administrar nómina de empleados.
        
          1- Ver nómina
          2- Alta nuevo agente  
          3- Baja agente      
          4- Volver
          `)
      );
      switch (seleccionAg) {
        case 1:
          console.log(
            "seleccionada opcion 1: ver nomina (array completo y filtrado por sectores)"
          );
          verNomina();
          break;
        case 2:
          console.log("seleccionada opcion 2: agregar Agente");
          altaAgente();
          break;
        case 3:
          console.log("seleccionada opcion 3: Eliminar Agente");
          bajaAgente();
          break;
        case 4:
          console.log(
            "seleccionada opcion 4: Termina el ciclo y ejecuta la funcion menuInicio para volver al menu anterior"
          );
          menuInicio();
          menuAgState = false;
          break;
        default:
          console.log(
            `el usuario ingresa: ${seleccionAg}. Fuera del rango de opciones de menu o no es un número.`
          );
          alert("Seleccion inválida, por favor indique nuevamente la opción");
          break;
      }
    }
  };
  
  // Funciones Menu Agentes
  
  const verNomina = () => {
    console.log(
      "Modulo visualizacion de Nomina\n Se solicita opcion del 1 al 6 para visualizar arrays entero o filtrado por sectores"
    );
    let seleccionNomina = parseInt(
      prompt(` Nómina de Empleados de Quimishop SRL.
  
      Conteo Total de empleados: ${agentes.length}
      
        1- Nómina Completa
        2- Sector Ventas
        3- Sector Reposición 
        4- Sector Fabricación  
        5- Sector Facturación    
        6- Volver
        `)
    );
    switch (seleccionNomina) {
      case 1:
        console.log(
          "opcion 1: visualiza nomina completa a partir de un mapeo del array original"
        );
        let nomina = agentes.map(
          (agente) =>
            `${agente.nombre} - ${agente.posicion} en ${agente.sector} - Legajo: ${agente.legajo} `
        );
        if (nomina.length > 0) {
          alert(nomina.join("\n"));
        } else {
          alert("Sin agentes activos");
        }
        break;
      case 2:
        console.log(
          "opcion 2: visualiza ventas a partir de un mapeo del array original filtrado por la propiedad sector, verificando si hay o no agentes en dicho sector"
        );
        let nominaVentas = agentes.filter((agente) => agente.sector === "Ventas");
        let mostrarVentas = nominaVentas.map(
          (agente) =>
            `${agente.nombre} - ${agente.posicion} en ${agente.sector} - Legajo: ${agente.legajo} `
        );
        if (mostrarVentas.length > 0) {
          alert(mostrarVentas.join("\n"));
        } else {
          alert("Sin agentes activos en el sector");
        }
        break;
      case 3:
        console.log(
          "opcion 3: visualiza reposición a partir de un mapeo del array original filtrado por la propiedad sector, verificando si hay o no agentes en dicho sector"
        );
        let nominaRepo = agentes.filter(
          (agente) => agente.sector === "Reposición"
        );
        let mostrarRepo = nominaRepo.map(
          (agente) =>
            `${agente.nombre} - ${agente.posicion} en ${agente.sector} - Legajo: ${agente.legajo} `
        );
        if (mostrarRepo.length > 0) {
          alert(mostrarRepo.join("\n"));
        } else {
          alert("Sin agentes activos en el sector");
        }
        break;
      case 4:
        console.log(
          "opcion 4: visualiza fabricación a partir de un mapeo del array original filtrado por la propiedad sector, verificando si hay o no agentes en dicho sector"
        );
        let nominaFab = agentes.filter(
          (agente) => agente.sector === "Fabricación"
        );
        let mostrarFab = nominaFab.map(
          (agente) =>
            `${agente.nombre} - ${agente.posicion} en ${agente.sector} - Legajo: ${agente.legajo} `
        );
        if (mostrarFab.length > 0) {
          alert(mostrarFab.join("\n"));
        } else {
          alert("Sin agentes activos en el sector");
        }
        break;
      case 5:
        console.log(
          "opcion 5: visualiza facturación a partir de un mapeo del array original filtrado por la propiedad sector, verificando si hay o no agentes en dicho sector"
        );
        let nominaFact = agentes.filter(
          (agente) => agente.sector === "Facturación"
        );
        let mostrarFact = nominaFact.map(
          (agente) =>
            `${agente.nombre} - ${agente.posicion} en ${agente.sector} - Legajo: ${agente.legajo} `
        );
        if (mostrarFact.length > 0) {
          alert(mostrarFact.join("\n"));
        } else {
          alert("Sin agentes activos en el sector");
        }
        break;
      case 6:
        console.log(
          "opcion 6: Cancela la visualizacion, solo ejecuta una alerta y devuelve al menu anterior"
        );
        alert("Volviendo al Menu de Administracion de Agentes");
        break;
      default:
        console.log(
          `el usuario ingresa: ${seleccionNomina}. Fuera del rango de opciones de menu o no es un número.`
        );
        alert("Seleccion inválida, por favor indique nuevamente la opción");
        break;
    }
  };
  
  const altaAgente = () => {
    let nombre;
    let posicion;
    let sector;
    let selecPosicion;
    let selecSector;
    console.log("Modulo de creación de nuevo agente");
    do {
      nombre = prompt("Indique nombre y apellido del nuevo agente").toUpperCase();
      console.log(`Solicita nombre y apellido al usuario, si este ingresa un dato no-válido, volver a solicitarlo."
      Dato ingresado ${nombre}`);
    } while (!isNaN(nombre) || nombre === null);
  
    while (
      isNaN(selecPosicion) ||
      selecPosicion === null ||
      selecPosicion < 1 ||
      selecPosicion > 3
    ) {
      console.log("Menu de seleccion de puesto laboral o posicion en la empresa");
      selecPosicion = parseInt(
        prompt(`Seleccione el puesto en la empresa para ${nombre}.
  
  1- Operador
  2- Encargado
  3- Supervisor
  `)
      );
      switch (selecPosicion) {
        case 1:
          console.log("seleccionado operador");
          posicion = "Operador";
          break;
        case 2:
          console.log("seleccionado encargado");
          posicion = "Encargado";
          break;
        case 3:
          console.log("seleccionado supervisor");
          posicion = "Supervisor";
          break;
        default:
          console.log("seleccion fuera del rango correcto");
          alert("Opción inexistente");
          break;
      }
    }
  
    while (
      isNaN(selecSector) ||
      selecSector === null ||
      selecSector < 1 ||
      selecSector > 4
    ) {
      console.log("menu de seleccion del sector para el nuevo agente");
      selecSector = parseInt(
        prompt(`Seleccione el sector de en la empresa al que ingresa el ${posicion}: ${nombre}.
  
    1- Facturación
    2- Ventas
    3- Fabricacion
    4- Reposición
    `)
      );
      switch (selecSector) {
        case 1:
          console.log("seleeccionado facturación");
          sector = "Facturación";
          break;
        case 2:
          console.log("seleccionado ventas");
          sector = "Ventas";
          break;
        case 3:
          console.log("seleccionado fabricación");
          sector = "Fabricación";
          break;
        case 4:
          console.log("seleccionado reposición");
          sector = "Reposición";
          break;
        default:
          console.log("seleccion fuera del rango correcto");
          alert("Opción inexistente");
          break;
      }
    }
    let agente = new Agente(nombre, posicion, sector);
    agentes.push(agente);
    console.log(`Creado el nuevo agente:
  ${agente} 
  y se muestran sus datos por alert`);
    alert(` Se ha ingresado al nuevo agente a la base de datos:
  
  ========================
  Puesto: ${agente.posicion}
  Nombre: ${agente.nombre} 
  Sector: ${agente.sector}  
  Legajo: ${agente.legajo}
  =========================
   `);
  };
  
  const bajaAgente = () => {
    console.log("Modulo baja de agentes");
    let confirmar = false;
    console.log(
      "solicita NOMBRE o LEGAJO y verifica el tipo de dato ingresado para coincidir con una u otra opción."
    );
    let agenteEliminado = prompt(
      "Ingrese el NOMBRE o el numero de LEGAJO del agente que desea dar de baja"
    );
  
    if (
      !isNaN(agenteEliminado) &&
      agentes.some((agente) => agente.legajo === parseInt(agenteEliminado))
    ) {
      console.log(
        `Se determina Agente ingresado por LEGAJO ${agenteEliminado}, se identifica su existencia y se solicita confirmación antes de eliminar`
      );
      while (!confirmar) {
        const agentePorLegajo = agentes.find(
          (agente) => agente.legajo === parseInt(agenteEliminado)
        );
  
        let confirmacion = parseInt(
          prompt(`¿Esta seguro de que desea eliminar al siguiente agente?
  
          ===============
           Puesto: ${agentePorLegajo.posicion}
           Nombre: ${agentePorLegajo.nombre}
           Sector: ${agentePorLegajo.sector}
           Legajo: ${agentePorLegajo.legajo}
           ===============
        1. SI
        2. NO`)
        );
  
        switch (confirmacion) {
          case 1:
            console.log(`Se confirma eliminacion del agente ${agentePorLegajo.nombre}`);
            alert(
              `Se eliminó el agente: ${agentePorLegajo.nombre} del sector ${agentePorLegajo.sector}`
            );
            agentes = agentes.filter(
              (agente) => agente.legajo !== parseInt(agenteEliminado)
            );
            confirmar = true;
            break;
          case 2:
            console.log(`Se cancela eliminacion del agente ${agentePorLegajo.nombre}`);
            alert("Baja Cancelada");
            confirmar = true;
            break;
          default:
            alert("Opcion inválida");
            break;
        }
      }
    } else if (
      isNaN(agenteEliminado) &&
      agentes.some((agente) => agente.nombre === agenteEliminado.toUpperCase())
    ) {
      console.log(
        `Se determina Agente ingresado por NOMBRE: ${agenteEliminado.toUpperCase()}, se identifica su existencia y se solicita confirmacion antes de eliminar`
      );
      while (!confirmar) {
        const agentePorNombre = agentes.find(
          (agente) => agente.nombre === agenteEliminado.toUpperCase()
        );
  
        let confirmacion = parseInt(
          prompt(`¿Esta seguro de que desea eliminar al siguiente agente?
  
          ===============
           Puesto: ${agentePorNombre.posicion}
           Nombre: ${agentePorNombre.nombre}
           Sector: ${agentePorNombre.sector}
           Legajo: ${agentePorNombre.legajo}
          ===============
  
        1. SI
        2. NO`)
        );
  
        switch (confirmacion) {
          case 1:
            console.log("confirma eliminación");
            alert(
              `Se eliminó el agente: ${agentePorNombre.nombre} del sector ${agentePorNombre.sector}`
            );
            agentes = agentes.filter(
              (agente) => agente.nombre !== agenteEliminado.toUpperCase()
            );
            confirmar = true;
            break;
          case 2:
            console.log("cancela eliminación");
            alert("Baja Cancelada");
            confirmar = true;
            break;
          default:
            console.log(
              "selecciona una opcion inválida o fuera de rango de opciones"
            );
            alert("Opcion inválida");
            break;
        }
      }
    } else {
      console.log(
        `el dato ingresado ${agenteEliminado} no coincide con ningun NOMBRE ni LEGAJO existente.`
      );
      alert("No se encontró ningún agente con el legajo o nombre proporcionado.");
    }
  };
  // menu modulo tareas
  
  const menuTareas = () => {
    console.log(`====================
    Ingreso al Menu de Tareas
    ==================`);
    menuTareasState = true;
    while (menuTareasState) {
      console.log("Solicitud de opción de funcionalidad del menu Tareas.");
      let seleccionTarea = parseInt(
        prompt(` Lista de tareas pendientes.
  
          1- Ver Tareas
          2- Agregar Tareas Nuevas
          3- Marcar Tarea Realizada        
          4- Salir
          `)
      );
      switch (seleccionTarea) {
        case 1:
          console.log("seleccionada opcion 1: Ver Tareas");
          verTareas();
          break;
        case 2:
          console.log("seleccionada opcion 2: Agregar Tareas Nuevas");
          agregarTarea();
          break;
        case 3:
          console.log("seleccionada opcion 3: Marcar tareas realizadas");
          tareaRealizada();
          break;
        case 4:
          console.log(
            "seleccionada opcion 4: ver nomina (array completo y filtrado por sectores)"
          );
          menuInicio();
          menuTareasState = false;
          break;
        default:
          console.log(
            `el usuario ingresa: ${seleccionTarea}. Fuera del rango de opciones de menu o no es un número.`
          );
          alert("Seleccion inválida, por favor indique nuevamente la opción");
          break;
      }
    }
  };
  
  // Funciones Menu Tareas
  const verTareas = () => {
    console.log(
      "Se muestra una lista de tareas generadas a partir de un map del array completo, verificando que existan tareas en dicho array"
    );
    let listaTareas = tareas.map(
      (tarea) =>
        `ID:${tarea.id} - ${tarea.descripcion} en ${tarea.tipo} - con prioridad: ${tarea.prioridad} - ${tarea.estado}`
    );
    if (listaTareas.length > 0) {
      alert(listaTareas.join("\n ------- \n"));
    } else {
      alert("Sin Tareas Pendientes");
    }
  
    if (tareasCompletadas.length > 0) {
      console.log(
        `se muestra una lista de tareas completadas a partir del map de un array de tareas completadas - originalmente vacío - luego de comprobar si hay elementos en el mismo. 
        Actualmente hay ${tareasCompletadas.length} elementos. `
      );
      let listaCompletadas = tareasCompletadas.map(
        (tarea) =>
          `ID:${tarea.id} - ${tarea.descripcion} en ${tarea.tipo} - ${tarea.estado}`
      );
      alert(`Tareas Completadas:
      ==================
      ${listaCompletadas.join("\n ------- \n")}`);
    }
  };
  
  const agregarTarea = () => {
    let descripcion;
    let tipoTarea;
    let prioridad;
    let selecTipo;
    let selecPrio;
  
    do {
      descripcion = prompt(
        "Indique brevemente la descripción de la nueva tarea"
      ).toUpperCase();
      console.log(
        "solicita descripción de la tarea nueva, verificando que la misma sea texto y no esté vacia. Se repite en caso de no cumplirse lo anterior."
      );
    } while (!isNaN(descripcion) || descripcion === null);
  
    while (
      isNaN(selecTipo) ||
      selecTipo === null ||
      selecTipo < 1 ||
      selecTipo > 4
    ) {
      console.log(
        "Solicita elegir el tipo de tarea a agregar entre 4 opciones disponibles"
      );
      selecTipo = parseInt(
        prompt(`Seleccione el tipo de tarea para su clasificación:
  
  1- Fabricación
  2- Reposición
  3- Ventas
  4- Facturación
  `)
      );
      switch (selecTipo) {
        case 1:
          console.log("seleccionado tipo fabricación");
          tipoTarea = "Fabricación";
          break;
        case 2:
          console.log("seleccionado tipo resposición");
          tipoTarea = "Reposición";
          break;
        case 3:
          console.log("seleccionado tipo ventas");
          tipoTarea = "Ventas";
          break;
        case 4:
          console.log("seleccionado tipo facturación");
          tipoTarea = "Facturación";
          break;
        default:
          console.log(
            `El dato ingresado no es valido entre las opciones disponibles: ${selecTipo}}`
          );
          alert("Opción inexistente");
          break;
      }
    }
  
    while (
      isNaN(selecPrio) ||
      selecPrio === null ||
      selecPrio < 1 ||
      selecPrio > 4
    ) {
      console.log(
        "Solicita elegir la prioridad de la tarea a agregar entre 4 opciones disponibles"
      );
      selecPrio = parseInt(
        prompt(`Indique el nivel de prioridad de la nueva tarea.
  
    1- Baja
    2- Media
    3- Alta
    4- Urgente
    `)
      );
      switch (selecPrio) {
        case 1:
          console.log("seleccionado prioridad baja");
          prioridad = "Baja";
          break;
        case 2:
          console.log("seleccionado prioridad media");
          prioridad = "Media";
          break;
        case 3:
          console.log("seleccionado prioridad alta");
          prioridad = "Alta";
          break;
        case 4:
          console.log("seleccionado prioridad urgente");
          prioridad = "Urgente";
          break;
        default:
          console.log(
            `El dato ingresado no es valido entre las opciones disponibles: ${selecPrio}}`
          );
          alert("Opción inexistente");
          break;
      }
    }
    console.log("crea la tarea a partir ");
    let tarea = new Tarea(tipoTarea, prioridad, descripcion);
    tareas.push(tarea);
    tareaID++;
  
    console.log(`crea la tarea a partir de su funcion constructor, le asigna una id (autoincremental) y la agrega al array de tareas pendientes. 
    ----------
    ${tarea}
    ---------
    `);
  
    alert(` Se ha ingresado la nueva tarea a la lista de pendientes:
  
  ========================
  ID: ${tarea.id}
  Descripción: ${tarea.descripcion}
  Tipo: ${tarea.nombre} 
  Prioridad: ${tarea.prioridad}  
  Fecha: ${tarea.creacion}
  =========================
   `);
  };
  
  const tareaRealizada = () => {
    let confirmarTarea = false;
    console.log(
      "modulo marcar tarea\n Solicita el ID de la tarea que se desea marcar como completada y brinda informacion de la misma. Chequeando previamente que exista"
    );
    let tareaBuscada = parseInt(
      prompt(`Ingrese el ID de la tarea que desea revisar`)
    );
  
    if (
      !isNaN(tareaBuscada) &&
      tareas.some((tarea) => tarea.id === tareaBuscada)
    ) {
      while (!confirmarTarea) {
        const marcarTarea = tareas.find((tarea) => tarea.id === tareaBuscada);
        console.log(
          "Solicita confirmación para cambiar el estado de la tarea seleccionada a 'completada'."
        );
        let opcion = parseInt(
          prompt(`
  Desea marcar la tarea como completada y eliminarla de la lista de pendientes?
  1- Si
  2- No
  --------------
  ID: ${marcarTarea.id}
  Descripción: ${marcarTarea.descripcion}
  Tipo: ${marcarTarea.tipo}
  Prioridad: ${marcarTarea.prioridad}
  Fecha de Creación: ${marcarTarea.creacion}
  Estado: ${marcarTarea.estado}
  `)
        );
  
        switch (opcion) {
          case 1:
            console.log("confirma y se cambia el estado");
            marcarTarea.estado = "Completada";
            alert(`La tarea:
    ----------------
  ID: ${marcarTarea.id}
  Descripción: ${marcarTarea.descripcion}
  Tipo: ${marcarTarea.tipo}
  Prioridad: ${marcarTarea.prioridad}
  Fecha de Creación: ${marcarTarea.creacion}
  Estado: ${marcarTarea.estado}
    ----------------
    se ha eliminado de la lista de pendientes.`);
  
            tareasCompletadas.push(marcarTarea);
            tareas = tareas.filter((tarea) => tarea.id !== marcarTarea.id);
            confirmarTarea = true;
            break;
          case 2:
            console.log(
              "cancela la operación, la tarea mantiene su estado original 'pendiente'."
            );
            alert(`La tarea:
    ----------------
  ID: ${marcarTarea.id}
  Descripción: ${marcarTarea.descripcion}
  Tipo: ${marcarTarea.tipo}
  Prioridad: ${marcarTarea.prioridad}
  Fecha de Creación: ${marcarTarea.creacion}
  Estado: ${marcarTarea.estado}
    ----------------
    permanecerá en la lista de pendientes.`);
            confirmarTarea = true;
            break;
          default:
            console.log(
              "el usuario ingresa un valor incorrecto o fuera del rango"
            );
            alert("Opcion invalida");
            break;
        }
      }
    }
  };
  // menu modulo insumos
  const menuInsumos = () => {
    menuInsumosState = true;
    console.log(`====================
    Ingreso al Menu de Insumos
    ==================`);
    while (menuInsumosState) {
      console.log("solicitud de opción de funcionalidad del menu de Insumos.");
      let seleccionInsumos = parseInt(
        prompt(` Listado de Stock de Insumos:
  
          1- Ver Insumos
          2- Buscar y Administrar Insumos
          3- Agregar Nuevo Insumo        
          4- Volver
          `)
      );
      switch (seleccionInsumos) {
        case 1:
          console.log(
            "seleccionada opcion 1: ver Insumos (array completo y filtrado por tipoInsumo)"
          );
          verInsumos();
          break;
        case 2:
          console.log(
            "seleccionada opcion 2: Administrar Insumos (Buscar, modificar stock o eliminar del sistema)"
          );
          administrarInsumos();
          break;
        case 3:
          console.log("seleccionada opcion 3: agregar Insumo nuevo");
          agregarInsumos();
          break;
        case 4:
          console.log(
            "seleccionada opcion 4: Termina el ciclo y ejecuta la funcion menuInicio para volver al menu anterior"
          );
          menuInicio();
          menuInsumosState = false;
          break;
        default:
          console.log(
            `el usuario ingresa: ${seleccionInsumos}. Fuera del rango de opciones de menú o no es un número.`
          );
          alert("Seleccion inválida, por favor indique nuevamente la opción");
          break;
      }
    }
  };
  
  // Funciones Menu Insumos
  const verInsumos = () => {
    console.log("Solicita opcion preferida para visualizar lista de insumos");
    let opcionVistaInsumos = parseInt(
      prompt(` Base de Stock e Insumos de Quimishop SRL
  
        
        1- Lista completa de Insumos
        2- Ver Solo Administrativos
        3- Ver Solo Fabricacion 
        4- Ver Solo Materias Primas
        5- Ver Faltantes    
        6- Volver
        `)
    );
    switch (opcionVistaInsumos) {
      case 1:
        console.log(
          "opcion 1: vista completa. Lista Generada a partir de un map del array original"
        );
        let listaInsumos = insumos.map(
          (objeto) =>
            `${objeto.tipoInsumo}: ${objeto.nombreInsumo} - Stock: ${objeto.stock} unidades`
        );
        if (listaInsumos.length > 0) {
          alert(listaInsumos.join("\n"));
        } else {
          alert("Empresa desabastecida por completo");
        }
        break;
      case 2:
        console.log(
          "opcion 2: vista administrativo. Lista Generada a partir de un map del array original filtrado por tipo"
        );
        let filtroAdmin = insumos.filter(
          (objeto) => objeto.tipoInsumo === "Administrativo"
        );
        let listaAdmin = filtroAdmin.map(
          (objeto) =>
            `${objeto.tipoInsumo}: ${objeto.nombreInsumo} - Stock: ${objeto.stock} unidades`
        );
        if (listaAdmin.length > 0) {
          alert(listaAdmin.join("\n"));
        } else {
          alert("Sin recursos de al categoría Administrativo");
        }
        break;
      case 3:
        console.log(
          "opcion 3: vista Fabricación. Lista Generada a partir de un map del array original filtrado por tipo"
        );
        let filtroFabricacion = insumos.filter(
          (objeto) => objeto.tipoInsumo === "Fabricación"
        );
        let listaFabricacion = filtroFabricacion.map(
          (objeto) =>
            `${objeto.tipoInsumo}: ${objeto.nombreInsumo} - Stock: ${objeto.stock} unidades`
        );
        if (listaFabricacion.length > 0) {
          alert(listaFabricacion.join("\n"));
        } else {
          alert("Sin recursos de al categoría Fabricación");
        }
        break;
      case 4:
        console.log(
          "opcion 4: vista Materia Prima. Lista Generada a partir de un map del array original filtrado por tipo"
        );
        let filtroMaterias = insumos.filter(
          (objeto) => objeto.tipoInsumo === "Materias Primas"
        );
        let listaMaterias = filtroMaterias.map(
          (objeto) =>
            `${objeto.tipoInsumo}: ${objeto.nombreInsumo} - Stock: ${objeto.stock} unidades`
        );
        if (listaMaterias.length > 0) {
          alert(listaMaterias.join("\n"));
        } else {
          alert("Sin Materias Primas");
        }
        break;
      case 5:
        console.log(
          "opcion 5: vista faltantes. Lista Generada a partir de un map del array original filtrado por stock"
        );
        let filtroFaltantes = insumos.filter((objeto) => objeto.stock === 0);
        let listaFaltantes = filtroFaltantes.map(
          (objeto) =>
            `${objeto.tipoInsumo}: ${objeto.nombreInsumo} - Stock: ${objeto.stock} unidades`
        );
        if (listaFaltantes.length > 0) {
          alert(listaFaltantes.join("\n"));
        } else {
          alert("Sin Faltantes");
        }
        break;
      case 6:
        console.log("opcion 6: volver al menu de insumos");
        alert("Volviendo al Menu de Insumos");
        break;
      default:
        console.log("dato invalido al seleccionar opción");
        alert("Seleccion inválida, por favor indique nuevamente la opción");
        break;
    }
  };
  
  const administrarInsumos = () => {
    let confirmarModificacionInsumo = false;
    let insumoBuscado = prompt(
      "Ingrese nombre del insumo que desea visualizar y/o modificar"
    ).toUpperCase();
  
    if (
      isNaN(insumoBuscado) &&
      insumos.some((objeto) => objeto.nombreInsumo === insumoBuscado)
    ) {
      while (!confirmarModificacionInsumo) {
        const modificarInsumo = insumos.find(
          (insumo) => insumo.nombreInsumo === insumoBuscado
        );
  
        let opcion = parseInt(
          prompt(`
  
  Insumo encontrado: 
  --------------
  Nombre: ${modificarInsumo.nombreInsumo}
  Tipo: ${modificarInsumo.tipoInsumo}
  Stock: ${modificarInsumo.stock}
  --------------
  
  Si desea modificarlo o eliminarlo indiquelo a continuacion
  1- Modificar Stock
  2- Eliminar
  3- Cancelar
  `)
        );
  
        switch (opcion) {
          case 1:
            modificarInsumo.stock = parseInt(
              prompt(
                `Indique el nuevo valor de Stock para ${modificarInsumo.nombreInsumo}`
              )
            );
            alert(`Insumo Modificado: 
            --------------
            Nombre: ${modificarInsumo.nombreInsumo}
            Tipo: ${modificarInsumo.tipoInsumo}
            Stock: ${modificarInsumo.stock}
            --------------`);
            confirmarModificacionInsumo = true;
            break;
          case 2:
            alert(`El Insumo::
            --------------
            Nombre: ${modificarInsumo.nombreInsumo}
            Tipo: ${modificarInsumo.tipoInsumo}
            Stock: ${modificarInsumo.stock}
            --------------
            ha sido eliminado del sistema`);
  
            insumos = insumos.filter(
              (objetoEliminado) =>
                objetoEliminado.nombreInsumo !== modificarInsumo.nombreInsumo
            );
            confirmarModificacionInsumo = true;
            break;
          case 3:
            alert("Regresando al menu anterior");
            confirmarModificacionInsumo = true;
            break;
          default:
            alert("Opcion invalida");
            break;
        }
      }
    } else {
      alert("No se encontró el Insumo indicado");
    }
  };
  
  const agregarInsumos = () => {
    let nombreNuevoInsumo;
    let categoriaNuevoInsumo;
    let stocknuevoInsumo;
    let selecCategoria;
  
    console.log("Iniciado modulo para agregar nuevos insumos");
  
    do {
      nombreNuevoInsumo = prompt(
        "Indique el nombre del insumo a agregar:"
      ).toUpperCase();
      console.log(
        "solicita nombre del insumo chequeando que no sea un numero o esté vacío. En caso de ser inválido, volverá a pedir el dato"
      );
    } while (!isNaN(nombreNuevoInsumo) || nombreNuevoInsumo === null);
  
    while (
      isNaN(selecCategoria) ||
      selecCategoria === null ||
      selecCategoria < 1 ||
      selecCategoria > 3
    ) {
      console.log(
        "solicita seleccion de categoria para el insumo ingresado entre 3 opciones"
      );
      selecCategoria = parseInt(
        prompt(`Seleccione el tipo de tarea para su clasificación:
    
    1- Administrativo
    2- Fabricación
    3- Materias Primas
`)
    );
    switch (selecCategoria) {
        case 1:
        console.log("seleccionado administrativo");
        categoriaNuevoInsumo = "Administrativo";
        break;
        case 2:
        console.log("seleccionado fabricación");
        categoriaNuevoInsumo = "Fabricación";
        break;
        case 3:
        console.log("seleccionado materias primas");
        categoriaNuevoInsumo = "Materias Primas";
        break;
        default:
        console.log("el dato ingresado no esta dentro del rango o es invalido");
        alert("Opción inexistente");
        break;
    }
    }
    do {
    stocknuevoInsumo = parseInt(
        prompt("Indique la cantidad del insumo a agregar:")
    );
    console.log(
        "solicita el stock del insumo chequeando que sea un numero y no esté vacío. En caso de ser inválido, volverá a pedir el dato"
    );
    } while (isNaN(stocknuevoInsumo) || stocknuevoInsumo === null);

    let nuevoInsumo = new Insumo(
    nombreNuevoInsumo,
    categoriaNuevoInsumo,
    stocknuevoInsumo
    );
    insumos.push(nuevoInsumo);
    console.log(
    "crea el insumo a partir de su funcion constructor, lo agrega al array y muestra los datos del mismo"
    );
    alert(
    `Se agregaron ${nuevoInsumo.stock} unidades de ${nuevoInsumo.nombreInsumo} a la lista, bajo la categoria ${nuevoInsumo.tipoInsumo}`
    );
};
menuInicio();

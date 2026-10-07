//Interface

interface CasoDeTest {
    id: number;
    titulo: string;
    prioridad: string;
    ejecutado: boolean;
    }

// Array

    const casosDeTest: Array<CasoDeTest> = [
        {
            id: 1,
            titulo: "Login con credenciales validas",
            prioridad: "Alta",
            ejecutado: true
        },
        {
            id: 2,
            titulo: "Login con credenciales incorrectas",
            prioridad: "Media",
            ejecutado: false
        },
        {
            id: 3,
            titulo: "Recuperar password por email",
            prioridad: "Media",
            ejecutado: false
        },
];

//Funcion obtenerCasosDeTest

const obtenerCasosDeTest = (): Promise<CasoDeTest[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(casosDeTest);
            }, 500);
            });
};

//Funcion async

const main = async () => {
    const casos = await obtenerCasosDeTest();

    casos.forEach((caso) => {
        console.log(formatearCaso(caso));
        });
};

// Fucncion formatear

const formatearCaso = (caso:CasoDeTest): string => {
    const estado = caso.ejecutado ? "Ejecutado" : "Pendiente";

    return '#${caso.id} - ${caso.titulo} | Prioridad: ${caso.prioridad} | Estado ${estado}'
   };

// Ejecutar main

main();





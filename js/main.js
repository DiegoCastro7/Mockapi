


// let obtener = async()=>{
//     let peticion = await fetch("https://64f202da0e1e60602d249114.mockapi.io/usuario");
//     let res = await peticion.json();
//     console.log(res);
// }
// obtener();



// let obtenerporid = async()=>{
//     let peticion = await fetch("https://64f202da0e1e60602d249114.mockapi.io/usuario/1");
//     let res = await peticion.json();
//     console.log(`Este id pertenece a:`);
//     console.log(res);
// }
// obtenerporid();



// let enviar = async()=>{
//     let obj = {
//             cedula: 1007419554,
//             nombre: "Diego",
//             apellido: "Castro",
//             edad: 23
//         }
//     let peticion = await fetch("https://64f202da0e1e60602d249114.mockapi.io/usuario",{
//         method: "POST",
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(obj)
//     });
//     let res = await peticion.json();
//     console.log(res);
// }
// enviar();



// let editar = async()=>{
//     let obj = {
//             cedula: 1092983838,
//             nombre: "Jennifer",
//             apellido: "Aristizabal",
//             edad: 24
//         }
//     let peticion = await fetch("https://64f202da0e1e60602d249114.mockapi.io/usuario/2",{
//         method: "PUT",
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(obj)
//     });
//     let res = await peticion.json();
//     console.log(res);
// }
// editar();



// let eliminar = async()=>{
//     let peticion = await fetch("https://64f202da0e1e60602d249114.mockapi.io/usuario/2",{
//         method: "DELETE"
//     });
// }
// eliminar();
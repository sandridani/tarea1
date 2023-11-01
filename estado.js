const seleccionEstado = document.getElementById("Estado-form");
const seleccionAutocarga = document.getElementById("cambioestado-form");

seleccionEstado.addEventListener("change", (e)=> {
    seleccionAutocarga.value= e.target.value
});
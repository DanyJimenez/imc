function mayuscula(a){
    return a.slice(0,1).toUpperCase() + a.slice(1)
}

let historialImc = []
const calcularImc = () =>{
    const nombre = document.getElementById('nombre').value
    const peso = document.getElementById('peso').value
    const estatura = document.getElementById('estatura').value
    let imc = (parseFloat(peso) / parseFloat(estatura**2)).toFixed(2)
    document.getElementById('resultado').textContent = `Sr.(a) ${mayuscula(nombre)}, su IMC es ${imc}`
    if(imc < 18.5){
        document.getElementById('img').src = './IMG/bajo.png'
    }else if(imc < 24.9) {
        document.getElementById('img').src = './IMG/normal.png'
    } else if(imc < 29.9){
        document.getElementById('img').src = './IMG/obeso.png'
    } else {
        document.getElementById('img').src = './IMG/sobrepeso.png'
    }
    historialImc.push(imc)
    mostrarHistorial()
}
const mostrarHistorial = () => {
    console.log(historialImc)
}
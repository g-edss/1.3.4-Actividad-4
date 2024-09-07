function nuevoTexto(){
    const select = document.querySelector('.form-select');
    const msjs = document.getElementById('msjNuevo');
    const opSelect = select.value;

    switch(opSelect){
        case '1':
            msjs.textContent = "Hoy está agradable y soleado afuera. ¡Usa pantalones cortos! Ve a la playa o al parque y cómprate un helado."
        break;
        
        case '2':
            msjs.textContent = "Afuera está lloviendo; lleve un impermeable y un paraguas, y no se quede afuera por mucho tiempo"
        break;

        case '3':
            msjs.textContent = "La nieve está cayendo, ¡está helada! Lo mejor es quedarse en casa con una taza de chocolate caliente o ir a construir un muñeco de nieve."
        break;
        
        case '4':
            msjs.textContent = "No llueve, pero el cielo está gris y sombrío; podría girar en cualquier momento, así que llévate un impermeable por si acaso"
        break;

        default:
            msjs.textContent = "Selecciona un clima."
        break;
    }
}
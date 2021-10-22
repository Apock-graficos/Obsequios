function multitabs(elemento){
    let tab = document.getElementById(elemento.el);
    if (elemento.estilo != undefined) {
        tab.classList.add(elemento.estilo);
    } else {
        tab.classList.add('defecto');
    }
    if (elemento.direccion != undefined) {
        tab.classList.add(elemento.direccion);
    } else {
        tab.classList.add('horizontal');
    }
    if (elemento.color != undefined) {
        tab.style.setProperty('--color', elemento.color);
    } else {
        tab.style.setProperty('--color', '#49A2E1');
    }
    tab.classList.add(elemento.color);

    let tabContenedor = tab.querySelectorAll('.contenedores-tabs .tab-contenido');
    let botonesTabs = tab.querySelectorAll('.botones-tabs .tab-btn');

    botonesTabs.forEach(item => {
        item.addEventListener('click', ()=>{
            for(var i = 0, length1 = botonesTabs.length; i < length1; i++){
                botonesTabs[i].classList.remove('activo');
            }
            item.classList.add('activo');
            let dataId = item.getAttribute('data-id');
            tabContenedor.forEach( element => {
                if (element.id === dataId) {
                    element.classList.add('activo');
                } else {
                    element.classList.remove('activo');
                }
            });
        });
    });
}

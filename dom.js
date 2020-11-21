function agregar(){
    let img = ['batman.png', 'daredevil.png', 'hulk.png', 'linterna-verde.png', 'spiderman.png', 'wolverine.png'];
    let pos = Math.floor( Math.random() * img.length );

    const ruta = 'img/' + img[pos];
    let row = document.querySelector('.fila');
    let card = row.querySelector('.tar');
    let clone = card.cloneNode(true);
     let imagen = clone.querySelector('img');
     imagen.src = ruta;

     
    row.appendChild(clone);

}
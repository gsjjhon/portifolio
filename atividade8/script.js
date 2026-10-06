let count_sorte = 0; 
let count_azar = 0;


function sorte() {
    let min = 1;
    let max = 100;
    let dif = max - min;
    let aleatorio = Math.random();
    let num = min + Math.trunc(dif * aleatorio);
    

       if(num > 50){
        count_sorte++; 
        let mostrar = document.getElementById('resultado');
        mostrar.innerHTML = `<p>Sorte: ${count_sorte}</p> <p>Azar: ${count_azar}</p><img src="BezoarTerraria.png">`;
    } else {
        count_azar++;
        let mostrar = document.getElementById('resultado');
        mostrar.innerHTML = `<p>Sorte: ${count_sorte}</p> <p>Azar: ${count_azar}</p><img src="NazarTerraria.png">`;
    }
}
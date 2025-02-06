const screen = document.getElementById("screen")
const image = document.getElementById("image")
const title = document.getElementById("title")
const description = document.getElementById("description")

var currentPlayer = 0

function distribuirPapeis(jogadores) {
    let papeis = ["Monstro", "Caçador"];
    
    while (papeis.length < jogadores) {
        papeis.push("Cidadão");
    }

    papeis = papeis.sort(() => Math.random() - 0.5);

    let jogadoresArray = [];
    for (let i = 0; i < jogadores; i++) {
        jogadoresArray.push({ id: i + 1, papel: papeis[i] });
    }

    return jogadoresArray;
}

function showPlayersFunctions(){

    if(currentPlayer===jogadores.length){
        currentPlayer = 0
        jogadores - distribuirPapeis(5)
        return
    }

    switch (jogadores[currentPlayer].papel) {
        case "Monstro":
            title.innerText = "Vampiro"
            image.setAttribute("src", "./assets/monsters/vampire.png")
            description.innerText = "Você é um vampiro"
            currentPlayer++
            break;

        case "Caçador":
            title.innerText = "Caçador"
            image.setAttribute("src", "./assets/hunters/hood.png")
            description.innerText = "Você é o caçador"
            currentPlayer++
            break;

        case "Cidadão":
            title.innerText = "Fazendeiro"
            image.setAttribute("src", "./assets/villagers/farmer.png")
            description.innerText = "Você é um Fazendeiro"
            currentPlayer++
            break;

        default:
            break;
    }


}



// Exemplo: 5 jogadores
let jogadores = distribuirPapeis(5);
screen.addEventListener("click", showPlayersFunctions);
console.log(jogadores)
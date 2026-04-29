function jogar(indice) {
    const escolhas = ["./images/icon-rock.svg", "./images/icon-paper.svg", "./images/icon-scissors.svg"];
    document.querySelector("#resultado").innerHTML = `Você escolheu <img src="${escolhas[indice]}">`;
    let computador = Math.floor(Math.random() * 3);
    document.querySelector("#resultado").innerHTML += `<br>O computador escolheu <img src="${escolhas[computador]}">`;
}
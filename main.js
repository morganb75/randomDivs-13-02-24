let btnPlay = document.getElementById("btn-play");
let btnNext = document.getElementById("btn-next");
let boxDivs = document.querySelectorAll(".box");
let divTest = document.getElementById("test");
let result = document.querySelector(".res");
let choixPlayer = document.querySelector(".joueur");
let resultText = document.getElementById("result");
let intervalId;
let runningDuration = Math.random()*5000 + 2000;
let resRandom = 0;



const changeClass = () => {
    let counter = 0;
    let foundActive = false;
    boxDivs.forEach((div) => {
            if(foundActive) return;
            counter++;
            let nextDiv = div.nextElementSibling;
            // console.log("TOUR N° ",counter);
            // console.log("DIV SUIVANTE: ",nextDiv);
                if(div.classList.contains("active")){
                    // console.log("ENTREE BOUCLE IF");
                    div.classList.remove("active");
                    if(nextDiv) {
                        // console.log("AJOUT active sur: ",nextDiv);
                        nextDiv.classList.add("active");
                    } else {
                    // console.log("AJOUT active sur: ",boxDivs[0]);
                    boxDivs[0].classList.add("active");
                    }
                    foundActive = true;
        }
    });
}

const displayRes = () => {
    boxDivs.forEach((div) => {
        
        if(div.classList.contains("active")) {
            resRandom = div.textContent;
            result.textContent = resRandom;
        }
    })
}

const startChangingClass = (duration) => {
    intervalId = setInterval(changeClass,duration);
}

btnPlay.addEventListener("click", () => {
    let choixUser = prompt("VEUILLEZ SAISIR UN NOMBRE ENTRE 1 ET 10");
    choixPlayer.textContent = choixUser;
    resultText.textContent ="";

    startChangingClass(50);
    setTimeout(()=> {
        clearInterval(intervalId);
        displayRes();
        if(choixUser===resRandom){
            resultText.textContent = "GAGNE!!!!"
        } else {
            resultText.textContent = "PERDU..."
            
        }
    },runningDuration);
})







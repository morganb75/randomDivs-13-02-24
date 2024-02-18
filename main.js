let btnPlay = document.getElementById("btn-play");
let btnNext = document.getElementById("btn-next");
let boxDivs = document.querySelectorAll(".box");
let divTest = document.getElementById("test");
let result = document.querySelector("h1");
let intervalId;
let runningDuration = Math.random()*5000 + 2000;



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

const startChangingClass = (duration) => {
    intervalId = setInterval(changeClass,duration);
}

btnPlay.addEventListener("click", () => {
    startChangingClass(50);
    setTimeout(()=> {
        clearInterval(intervalId);
    },runningDuration)
})





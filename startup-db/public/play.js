class Hole {
    constructor(num) {
        this.num = num;
    }
}

function play () {
    let score = 0;
    let round = 1;
    while (round < 4) {
        let hole1 = Math.floor(Math.random() + 75) + 1;
        let hole2 = Math.floor(Math.random() + 75) + 1;
        let hole3 = Math.floor(Math.random() + 75) + 1;
        
        let tempScore = 0;
        
        document.getElementById('hole1').addEventListener("click", tempScore = hole1);
        document.getElementById('hole2').addEventListener("click", tempScore = hole2);
        document.getElementById('hole3').addEventListener("click", tempScore = hole3);
        
        console.log(round);
        
        round++;
        
        document.getElementById('confirmation').addEventListener("click", function () {
            score = score + tempScore;
            window.location.href = "play.html";
        });
        
        
    }
    
    let newScore = { score: score };
    
    localStorage.setItem(newScore);
    document.getElementById('confirmation').addEventListener("click", function () {
        window.location.href = "end.html"
    });
}
class Game {
    constructor(description) {
        this.description = description;
    }
    
    
}


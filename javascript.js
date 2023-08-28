function getComputerChoice() {
    
    return(choice = Math.floor(Math.random()*3));

}

function playRound(user_choice, comp_choice , u_score, comp_score) {

    user_choice = user_choice.toLowerCase();
    let u_choice = 0;
    if(user_choice == 'rock') {
        u_choice = 0;
    } 
    else if(user_choice == 'paper') {
        u_choice = 1;
    } 
    else {
        u_choice = 2;
    }

    if(u_choice == 0) {
        if(comp_choice == 0) {
            console.log("You Tied! Rock is equal to Rock!")
            return[u_score, comp_score];
        } else if (comp_choice == 1) {
            console.log("You Lose! Paper beats Rock!")
            return[u_score, comp_score += 1];
        } else {
            console.log("You Win! Rock beats Scissors!")
            return[u_score += 1, comp_score];
        }
    }
    else if(u_choice == 1){
        if(comp_choice == 0) {
            console.log("You Win! Paper beats Rock!")
            return[u_score += 1, comp_score];
        } else if (comp_choice == 1) {
            console.log("You Tied! Paper is equal to Paper!")
            return[u_score, comp_score];
        } else {
            console.log("You Lose! Scissors beats Paper!")
            return[u_score, comp_score += 1];
        }
    }
    else {
        if(comp_choice == 0) {
            console.log("You Lose! Rock beats Scissors!")
            return [u_score, comp_score += 1];
        } else if (comp_choice == 1) {
            console.log("You Win! Scissors beats Paper!")
            return [u_score += 1,comp_score];
            
        } else {
            console.log("You Tied! Scissors is equal to Scissors!")
            return [u_score, comp_score];
        }
    }
    return 0;

}

function game() {

    let values = [0,0];
    
    for(let i = 0; i < 3; i++) {
        const user_choice = prompt("Pick Rock, Paper, or Scissors!");
        const comp_choice = getComputerChoice();

        values = playRound(user_choice, comp_choice, values[0], values[1]);
        console.log("User: " + values[0] + " Computer Score:" + values[1]);
    }

}

game();
function getComputerMove(){
    let computerMove ='';
    let randomNumber = Math.random();
    if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'Rock';
    }else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'Paper';
    }else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'Scissors';
    }
    return computerMove;
}

const results = JSON.parse(localStorage.getItem('results')) || {
        Won: 0,
        Lose: 0,
        Tie: 0
    };

    

function compareMoves(humanMove){
    let computerMove = getComputerMove();
    let result = '';

    if (humanMove === 'Rock'){
        if(computerMove === humanMove){
            result = 'Tie';
        }else if(computerMove === 'Paper'){
            result = 'You lose';
        }
        else if(computerMove === 'Scissors'){
            result = 'You won';
        }
    }

    if(humanMove === 'Paper'){
        if(computerMove === humanMove){
            result = 'Tie';
        }else if(computerMove === 'Scissors'){
            result = 'You lose';
        }
        else if(computerMove === 'Rock'){
            result = 'You won';
        }
    }

    if(humanMove === 'Scissors'){
        if(computerMove === humanMove){
            result = 'Tie';
        }else if(computerMove === 'Rock'){
            result = 'You lose';
        }
        else if(computerMove === 'Paper'){
            result = 'You won';
        }
    }

    if(result === 'Tie'){
        results.Tie += 1;
    }else if(result === 'You lose'){
        results.Lose += 1;
    }
    else if(result === 'You won'){
        results.Won += 1;
    }

localStorage.setItem('results', (JSON.stringify(results)));

updateResults();
document.body.querySelector('.js-result').innerHTML = result;
document.body.querySelector('.js-moves').innerHTML = `your move ${humanMove}, computer move ${computerMove}`;
}

function updateResults(){
    document.body.querySelector('.js-results').innerHTML = `wins: ${results.Won}, losses: ${results.Lose}, ties: ${results.Tie}`;
}
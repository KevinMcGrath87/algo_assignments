var board = [];
const columnLength = 3;
const myButton = document.getElementById("myButton")
const listOfValues = Array.from(document.getElementsByTagName("select"));
let currentPlayerClass = document.getElementById("currentPlayer")

console.log(currentPlayerClass)


for(var x = 0; x < listOfValues.length; x++){
    listOfValues[x].addEventListener("change", ()=> {
        getValues(listOfValues);
    });
}
//listOfValues is a htmlcollection

function getValues(listOfValues){
    let valueArray = [];
    listOfValues.forEach((item)=> {
            valueArray.push(item.value);
    })
        // console.log(listOfValues.length);
        // console.log(listOfValues[selectObject].value);
        // valueArray[selectObject] = listOfValues[selectObject].value;
    return(valueArray);
}

//end turn button functionality
function button(){
    function resetGame(){
        listOfValues.forEach((item)=>{
            console.log("resetting game");
            item.value = "";
            item.classList.toggle("gameOver");
            item.disabled = false;
        })
        document.querySelector(".gameStatus").innerHTML = "Player one GO!!";
        currentPlayerClass.value = "playerOne";
        myButton.innerHTML = "End Turn";
    }
    if (myButton.innerHTML === "RESET GAME") {
        resetGame();
    }
    else {
        evaluateWin(getValues(listOfValues));
}
}




myButton.addEventListener("click", ()=> {
    button();
});


function evaluateWin(valueArray) {

    function endGame(boolean, currentPlayer){
        if(boolean){
            if(currentPlayer == "playerTwo"){
            document.querySelector(".gameStatus").innerHTML = `player one wins!!`;
        }
        else{
            document.querySelector(".gameStatus").innerHTML = "player two wins!!"
        }
        listOfValues.forEach((item) => {
            console.log("endofgamebaby")
            item.value = "";
            item.classList.add("gameOver");
            console.log(String(item));
            item.disabled = true;
            
        })
        myButton.innerHTML = "RESET GAME"
    }
}

    let gameEndFlag = false;
    //making rows to check.
    let matrix =[[],[],[]];
    for(let x = 0; x <= 2 ; x ++){
        for(let y = 0; y <= 2; y++){
            matrix[x][y] = valueArray[(3*x)+y];
        }
    }
    for(row in matrix){
    if((matrix[row][0] != "") && matrix[row].every(element => element === matrix[row][0])) {
        console.log(`WINNER on row numnber ${row += 1}!`);
        gameEndFlag = true;
        break;
    }

    }

    //making columns to check.
        let columnMatrix = [[],[],[]];
    for(let x = 0; x < 3; x++){
        for(row in matrix){
            columnMatrix[x][row]= matrix[row][x];
        }
        }
        for(column in columnMatrix){
            if((columnMatrix[column][0]!="") && columnMatrix[column].every(element => element === columnMatrix[column][0])){
                console.log("columnWinner");
                gameEndFlag = true;
                break;
            }
        }

        //making diags to check.
        let diagonalArray = [];
        for(row in matrix){
            diagonalArray[row]= matrix[row][row]; 
        }
        if((diagonalArray[0] != "") && diagonalArray.every(element => element === diagonalArray[0])){
            console.log("diagonalWinner!")
        }
        let rvDiagonalArray = [];
        for(row in matrix){
            rvDiagonalArray[row] = matrix[row][(matrix[row].length-1) - row]
        }
        if((rvDiagonalArray[0]!= "") && rvDiagonalArray.every(element => element === rvDiagonalArray[0])) {
            console.log("reverse diagonal winner")
        }
        

        //changing current player
        if(currentPlayerClass.value == "playerOne"){
            currentPlayerClass.value = "playerTwo"
        }
        else {
            currentPlayerClass.value = "playerOne"
        }
        if(currentPlayerClass.value=="playerOne"){
            document.querySelector(".gameStatus").innerHTML = "player one go!";
        }
        else {
            document.querySelector(".gameStatus").innerHTML = "player two go!";
        }
        console.log(gameEndFlag);
        endGame(gameEndFlag, currentPlayerClass.value);
    }




    

// let i = 0;
// let j = 0;
// console.log(listOfValues[x]);
// for(var x = 0; x < listOfValues.length; x++){
//     board[i][j] = listOfValues[x].options[listOfValues[x].selectedIndex].text;
//     if(j == columnLength - 1){
//         i += 1;
//         j = 0;
//     }
//     else {
//         j += 1;
//     }
// }
// console.log(board);
// console.log("board is changed")
// return(board);
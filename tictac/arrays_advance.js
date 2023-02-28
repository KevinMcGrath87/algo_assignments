var board = [];
const columnLength = 3;
const myButton = document.getElementById("myButton")
const listOfValues = document.getElementsByTagName("select");
function getValues(listOfValues){
    for (var selectObject in listOfValues){
        console.log(listOfValues.length);
        console.log(listOfValues[selectObject].value);

    }
}
getValues(listOfValues);
// console.log(listOfValues[0].options[listOfValues[0].selectedIndex].text);
// // console.log(listOfValues);

function button(){
    getValues(listOfValues);
}

myButton.addEventListener("click", ()=> {
    button();
});

for(var x = 0; x < listOfValues.length; x++){
    listOfValues[x].addEventListener("change", ()=> {
        setArray(board, listOfValues,columnLength);
    });
}


function setArray(board,listOfValues,columnLength){
console.log("function start");
for(var index in listOfValues) {
    for(var i =0; i  )
}
}

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
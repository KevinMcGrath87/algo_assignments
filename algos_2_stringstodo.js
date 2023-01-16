//remove blanks:

function removeBlanks(input_string){
    let string_array = input_string.split(" ");
    console.log(string_array);
    return(string_array.join(""));


}

console.log(removeBlanks("kevin went to the town."));


//get digits:(the extra stupid way...)
function pushFront(input_array,value) {
    let new_array = [];
    new_array[0] = value;
    for (let i = 0; i < input_array.length ; i++){
        new_array[i+1] = input_array[i];
    }
    return new_array;
}
function getDigits(inputString){
    let sum = 0;
    let collection = [];
    for(let i=0; i< inputString.length; i++) {
        if(isNaN(parseInt(inputString[i]))){
            continue;
        }
        else {
            collection.push(parseInt(inputString[i]));
        }
    }
    exponent = collection.length-1;
    for( x in collection){
        sum = sum + (collection[x]*(Math.pow(10,exponent)));

        exponent--;
    }
    return sum;
}

console.log(getDigits("abcDefI234ui45"));
console.log(getDigits("ab01234c9048jfjslf;"));


//acronym

function acronym(inputString){
    let newString = "";
    let stringArray = inputString.split(" ");
    for(let i = 0; i < stringArray.length; i++){
        newString = newString + stringArray[i][0];
        console.log(newString)
    }
    return newString.toUpperCase();
}
console.log(acronym("all the shits and giggls"))

//count non spaces

function countNonSpaces(inputString){
    let count = 0;
    for(var i = 0; i< inputString.length; i++){
        if(!inputString[i].match(" ")){
            count++;
        }
    }
    return(count);
}

console.log(countNonSpaces("GO to.. hell Jim"));

//remove smaller strings

function removeSmall(inputArray, test){
    newArray = [];
    for (var x in inputArray){
        if (inputArray[x].length >= test ){
            newArray.push(inputArray[x])
        }
    }
    return newArray;

}

console.log(removeSmall(["girl","boy","fantastic","smith"],4));
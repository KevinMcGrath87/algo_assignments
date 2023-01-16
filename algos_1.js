//push front:

function pushFront(input_array,value) {
    let new_array = [];
    new_array[0] = value;
    for (let i = 0; i < input_array.length ; i++){
        new_array[i+1] = input_array[i];
    }
    return new_array;
}
stuff = [1,3,4,5,6];
console.log(pushFront(stuff, 35));

console.log(pushFront(stuff, 456));

//pop front:
function popFront(input_array){
    let new_array = [];
    for(i = 1; i < input_array.length; i++){
        new_array[i-1]= input_array[i];
    }
    console.log(new_array);
    return input_array[0];
}

    console.log(popFront([6,78,9]));

//insert at

function insertAt(input_array, position, value){
    let new_array = [];
    for(i= 0; i < position; i++){
        new_array[i]=input_array[i];
    }
    new_array[position]= value;
    for(i = position; i < input_array.length; i++){
        new_array[i+1]= input_array[i];
    }
    return(new_array);
}

console.log(insertAt([1,3,8], 2, 69420));

//function removeAt

function removeAt(input_array, position){
    let new_array = [];
    for(i = 0; i < input_array.length; i++){
        if (i == position){
            continue;
        }
        new_array.push(input_array[i]);
    }
    return(new_array);
}

console.log(removeAt([3,4,5,6,7],4));
//alternate version that doesn't use push:

function removeAtAlt(input_array, position){
    let new_array = [];
    for(i = 0; i < input_array.length-1; i++){
        if (i >= position){
            j = i+1;
            new_array[i]= input_array[j];
        }
        else {
            j = i;
            new_array[i]= input_array[j];
            console.log(new_array);
    }
}
return(new_array);
}

console.log(removeAtAlt([1,2,3,4,5,6,7,8,9], 4));


//swap pairs:

function swapPairs(inputArray) {
    let newArray = [];


    for(var i = 0; i < inputArray.length; i+=2) {
        if(inputArray[i+1] != undefined){
            newArray[i]=inputArray[i+1];
            newArray[i+1] = inputArray[i];
        }
        else {
            newArray[i] = inputArray[i];
            break;
        }

    }
    return newArray;
}

console.log(swapPairs([1,2,3,4,5,6,7,8]));
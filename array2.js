// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

function reverse(array){
    let swap;
    if ((array.length % 2) == 0) {
        iteration = array.length/2;
    }
    else {
        iteration = (array.length-1)/2;
    }
    for(i = 0; i < iteration; i++){
        swap = array[i];
        array[i]= array[(array.length-1)-i]-array[i];
        array[(array.length-1)-i]=array[(array.length-1)-i]-array[i];
        array[i]= array[i]+ array[(array.length-1)-i];
    }
    return(array);
}

console.log(reverse([1,2,4,3,5,6,89,6,4,5,1]));

// rotate

//  add if statmement for positive and negative numbers i.e. positive and negative rotations. 

 function rotate(array, amount){
    let measure = array.length;
    if (amount == 0 || array.length == 0){
        return(array);
    }
    if (amount > 0){
        for(j = 0; j < amount; j++){
            for(i = measure;  i > 0; i--){
                array[i]=array[i-1];
            }
            array[0]=array[measure];
            array.splice(measure, 1);
        }
        return(array);
    }
    else if(amount < 0){
        for(j =0; j< Math.abs(amount); j++){
            array[measure] = array [0]
            for(i = 0; i < measure; i++){
                array[i] = array [i+1]
            }
            array.splice(measure, 1);
        }
        return(array);
    }
    }



console.log(rotate([1,2,3,4,5,6,"yes", "broomshakalaka"],3));
console.log(rotate([1,2,3,4,5,6,"yes", "broomshakalaka"],-3));
//rotate 2.
// filter

function filter(array, min, max){
    if (min <= max) {
        for(var i = 0; i < array.length; i++){
            if (array[i] < min || array[i]> max){
                array.splice(i, 1)
                i -= 1;
            }
        }
        return(array);
    }
    else {
        return([]);
    }
}

console.log(filter([0,2,33,4,5,6,3,5,6],6, 40));
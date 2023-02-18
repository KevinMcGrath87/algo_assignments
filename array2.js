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

// function rotate(array, shift){
//     let lengthOfArray = array.length;
//     for(var index = lengthOfArray -1; index >= 0; index--){
//         if((index + shift)> lengthOfArray -1){
//             temp = array[(index + shift)%(lengthOfArray-1)]=array[index];
//         }
//         if((index + shift)< 0) {
//             let negativeShift = ((index + shift)*-1)%lengthOfArray;
//             array[(lengthOfArray-1)-negativeShift] = array[index];
//         }
//         else array[index + shift]=array[index];
//     } 
//     return array;
// }

// console.log(rotate(["a1","a2","a3", "a4", "a5"],-2));


// // I want to make a recurse function that starts at some index in the array(maybe 0) and bumps each index over by the shift value until it reaches start(it will once the shift amount and the iterations are a common multiple of array length and shift) then it will start at the next array point and so on until the last array point. 
// function rotate(array, shift){
//     function mapping(array, start, target){
//         while(target != start){
//             if(target > array.length -1){
//                 residue = target%(array.length);
//                 target = residue;
//                 tempVal = array[target];
//                 array[target] = array[start];
//                 let dif = Math.abs(target - start);
//                 target = start + dif;
//             }
//             else if (target < 0){
//                 residue = (array.length%(Math.abs(target)));
//                 target = ((array.length-1) - residue);
//                 tempVal = array[target];
//                 array[target] = array[start];
//                 let dif = Math.abse(target - start);
//                 target = start + dif;
//             }
//         }
//     }
// }


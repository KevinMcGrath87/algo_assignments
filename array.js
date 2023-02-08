function lowestElementToFront(array){
    let i = 0;
    let checkval = array[0];
    let checkvalIndex =0;
    while (i < array.length){
        if(array[i] < checkval){
        checkval = array[i];
        checkvalIndex = i;
        }
        i++;
        }
        array[checkvalIndex]= array[0];
        array[0]=checkval;
        return array;
        }



    console.log(lowestElementToFront([5,6,3,7,8,1]));

    console.log(lowestElementToFront([7,7,8,9,4,3,2,1]));
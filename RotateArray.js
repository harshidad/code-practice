//You will be given the K. you have to move at top of array .
// arr = [1,2,3,4,5,6,7] and K=2 then out put should be 
// result = [6,7,1,2,3,4,5]

function rotateArrayElm(arr, k)
{
    let size = arr.length;
    
    // First reverse the array.
     reverse(arr,0, size-1);
     reverse(arr, 0, k-1);
     reverse(arr,k,size-1);
    return arr;
}

function reverse(arr, left, right)
{
    while(left < right)
    {
        let temp  = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }
    return arr;
}
console.log(rotateArrayElm([1,2,3,4,5,6,7],2));
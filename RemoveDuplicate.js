// arr =[0,0,1,1,1,2,2,4,4,4] // sorted array will be given
// in -place remove means no need to crete new array;

function removeDuplicate(arr)
{
    for(let i=0;i<arr.length-1;i++)
    {
        if(arr[i]==arr[i+1])
        {
            arr.splice(i+1,1);
             i--;
        }
    }
    console.log(arr);
    return arr.length;
}

//I can find the count of unique element 
function countUnique(arr)
{
    let count=1;
    for(i=0;i<arr.length-1;i++)
    {
        if(arr[i] ==arr[i+1])
        {
         count = count+1;
        }
    }
    return count;
}
//console.log(countUnique([0,0,1,1,1,2,2,3,3]));
console.log(removeDuplicate([0,0,1,1,1,2,2,3,3]));
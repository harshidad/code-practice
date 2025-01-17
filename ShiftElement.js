//[1,2,3,4,5]
//[5,1,2,3,4]
//[4,5,1,2,3]

function ShiftElemnet(arr, n)
{
    
     reverseArr(arr, 0, arr.length-1)
     reverseArr(arr,0, n-1 );
     reverseArr(arr, n, arr.length -1)
     return arr;
}

function reverseArr(arr, left,right)
{ 
   while (left <= right)
         {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right]= temp;

            left++;
            right--;
        
         }
    
  
 return arr;
}
console.log(ShiftElemnet([1,2,3,4,5], 2));
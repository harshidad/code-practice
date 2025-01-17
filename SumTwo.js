//[2,7,11,19]  Target:9
// output [0,1]

function sumTwo(arr, target)
{
  for (let i=0; i< arr.length; i++)
  {
    for(let j=0; j< arr.length;j++)
    {
        if(arr[i]+ arr[j] == target)
          return [i,j];
    }
  }

}

console.log(sumTwo([12,54, 2,7,11,19], 9));

// input  [1,0,2,2,0,3,0,7] move 0 at the end of the array;
// [1,2,2,]
// output = [1,2,2,3,7,0,0,0]
function moveElem(arr)
{
    //let result=[];    
    let target =0;
    let arryWithTarget = arr.filter((item) => {
        if(item===target)
          return item;
    })

    let arrywithOutTarget = arr.filter((item) => {
         if(item!=target)
            return item;
    })

    console.log("arryWithTarget" + arryWithTarget);
 
     return [...arrywithOutTarget,...arryWithTarget];
    //return result;

    // for (let i=0;i<arr.length-1;i++)
    //  {

    //     if(arr[i]===target)
    //     {
    //         if(arr[i]!= arr[i+1])
    //         {
    //         let temp =arr[i];
    //         arr[i] = arr[i+1];
    //         arr[i+1] = temp;
    //         }
    //         else
    //          continue;
    //     }
    // }
    // return arr;

}
console.log(moveElem([1,0,2,2,0,3,0,7]));
function getFuzzBuzz(count)
{
   let result =[];
  for(let i=1;i<count;i++)
  {
    if(i%3 ===0 && i%5===0)
        result.push("fuzzBuzz");
    else if(i%3===0)
        result.push("fuzz");
    else if(i%5===0)
        result.push("buzz");
    else
       result.push(i);
  }
  return result;
}
console.log(getFuzzBuzz(20));
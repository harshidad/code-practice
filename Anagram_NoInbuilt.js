function isAnagram(str1,str2)
{
    if(str1.length != str2.length)
      return "Not Anagram";

    let str1Chars= str1.split('');
    let str2Chars = str2.split('');

    let st1= sortStr(str1Chars);
    let st2 = sortStr(str2Chars);

    console.log("String 1" + st1);
    console.log("String 1" + st2);

    if(st1 == st2)
      return "string Anagram";
   
}

function sortStr(str1Chars)
{
    for (let i=0; i< str1Chars.length-1 ; i++)
    {
        for(let j=1; j< str1Chars.length; j++)
        {
               if(str1Chars[i] > str1Chars[j])
               {
                  let temp = str1Chars[i];
                  str1Chars[i] = str1Chars[j];
                  str1Chars[j] = temp; 
               }
        }
    }
        return str1Chars.join('');
}
let str = "Test"
let sortedStr = str.toLocaleUpperCase().split('').sort().join('');
console.log(sortedStr);
//console.log(isAnagram("cat","tac"));

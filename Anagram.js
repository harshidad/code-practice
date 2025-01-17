function Anagram(str1, str2)
{
  if(str1.length!=str2.length)
    return "String is not Anagram";

   let str1Anagram =str1.toLowerCase().split('').sort().join(''); 
   let str2Anagram = str2.toLowerCase().split('').sort().join('');

   console.log(str1Anagram);
   console.log(str2Anagram);

   if(str1Anagram == str2Anagram)
     return "String is  Anagram";
    else
     return "String is not Anagram";
}
//console.log(Anagram("cat","tac"));





console.log(isAnagram("cat","tac"));
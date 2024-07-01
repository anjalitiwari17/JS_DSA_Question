function anagram(words){
    const ana={};
    words.forEach(words=>{
        const sorted=words.split('').sort('').join('');
        if(ana[sorted]){
            ana[sorted].push(words);
        }
        else{
            ana[sorted]=[words];
        }
       
    });
    const result=object.values(ana);
    return result;
}

let words=[ant,tna,eat,tea,ate,beat];
const groupAnagram=anagram(words);
console.log(groupAnagram);
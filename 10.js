// Check Palindrome 

function isPalindrome(str){
    const reversed=str.split('').reverse('').join('');
    return str===reversed;
}
console.log(isPalindrome("reer"));    //it will return true because when we will reverse it , it will give same str
console.log(isPalindrome("Act"));     //it will return false because when we will reverse it ,it will return tcA which is not palindrome
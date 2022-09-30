var isPalindrome = function(x) {
    let isTrue = true;
    const str = x.toString(); 
    const isEven = (x) =>{
        return (x %= 2) ? true : false
    }
    if (isEven) {
        for (let i = 0, j = str.length - 1; i < str.length / 2; i++, j--) {
            if (str[i] != str[j])
                isTrue = false;
        }
    }
    return isTrue;
};
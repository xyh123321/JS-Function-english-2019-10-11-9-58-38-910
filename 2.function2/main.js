function palindrome(message){
    let res = true;
    let arr = message.split('');
    for (let i = 0; i < arr.length/2; i++) {
            if (arr[i] !== arr[arr.length-1]) {
                res =  false;
            }
            arr.length--;
    }
    return res;
  }

  console.log(palindrome('hello'))
  console.log(palindrome('abcba'))

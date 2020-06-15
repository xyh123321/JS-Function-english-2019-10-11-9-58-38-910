function countWords(message){
    let count = 0;
    let arr = message.split(' ');
    for(let a of arr) {
        if(a.match(/[A-Za-z]/)){
            count++;
        }
    }
    return count;
  }

  console.log(countWords('Good morning, I love JavaScript.'));
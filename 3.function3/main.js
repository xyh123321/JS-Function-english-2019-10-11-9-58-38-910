function alphabetSort(message){
    let arr = message.split('');
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i+1; j < arr.length; j++) {
    //         if(arr[i] > arr[j]) {
    //             let mid = arr[j];
    //             arr[j] = arr[i];
    //             arr[i] = mid;
    //         }
    //     }
    // }
    arr.sort();
    return arr.join('');
  }

  console.log(alphabetSort('hello'));
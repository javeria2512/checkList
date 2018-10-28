function checkPrime(){
    let start = parseInt(document.querySelector(".start").value);
    let stop = parseInt(document.querySelector(".stop").value);
    function isPrime(numb) {
        for (i = start; i < stop; i++) {
            if (numb % i === 0) {
                break;
            }
        }
        if (i === numb) {
          return true;
        } else {
           return false;
        }
    
    }
    for (let i =start; i <=stop; i++){
        if(isPrime (i)){
            console.log(i)
        }
    }
}
function powerOfThree(n){

    if(n > 1 && (n % 3) === 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(powerOfThree(27));
var blah = function(){
    var sum = 0;
    for(i = 2; i < process.argv.length; i++){
	sum += +process.argv[i];
    }
    return sum;
}

console.log(blah());

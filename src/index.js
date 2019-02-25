module.exports = function getZerosCount(number, base) {
  // your implementation
  let prime = makePrime(base);

  return ~~(powerOfDummy(number, prime) / Math.floor(getBaseLog(prime, base)));
}

function makePrime(base) {

  let max = Math.floor(Math.sqrt(base));

  	for (let i = max; i > 2; i--) {
    	if (base % i == 0) {
    		base = base / i;
    	} else if ( base / i === 1 ) {
    		return base;
    	}
    }
  return base;
}
    
function powerOfDummy(number, i) {
    
  let resultCount = 0;
  let j = 1;
  let powerC = 1;
    
    
  while ( Math.floor(number/powerC) > 1 ) {
    
    powerC = ~~(i ** j);
    resultCount = resultCount + Math.floor(number/powerC);
    
    j++;
  }
  return (~~(resultCount)); 
}
    
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
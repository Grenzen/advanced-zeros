module.exports = function getZerosCount(number, base) {
  // your implementation
  let prime = makePrime(base);

  return ~~(powerOfDummy(number, prime) / Math.floor(getBaseLog(prime, base)));
}

function makePrime(base) {

  let max = Math.floor(Math.sqrt(base));

  	for (let i = max; i > 1; i--) {
    	if (base % i == 0 && base !== 2) {
    		base = base / i;
    	} else if ( base / i === 1 ) {
    		return base;
    	}
    }
  return base;
}
    
function powerOfDummy(number, base) {
	let power = ~~(getBaseLog(base, number));

	let resultCount = 0,
		powerC = 1;

	for(i = 1; i <= power; i++) {
		powerC = ~~(base ** i);
		resultCount = resultCount + Math.floor(number/powerC);
	}
	return resultCount;
}

    
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
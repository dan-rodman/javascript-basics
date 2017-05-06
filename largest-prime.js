/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

var isPrime = function(x)
{
	for (i = 2; i < x; i++)
	{
		if (x % i === 0)
    		{
      			return false;
    		}
  	}
  	return true;
};

var getPrimes = function(y)
{
	var sieve = [];
	for (i = 2; i < y; i++)
	{
		sieve.push(i);
	}

	var primes = [2];
	
	var sift = function(p)
	{
		for (j = p; j < y; j += j)
		{	
			sieve[(j-2)] = 0;	
		};
		
		for (k = p; k < y; k++)
		{
			if (sieve[k] !== 0 && sieve[k] > p) 
			{
				p = k;
				primes.push(p);			
				break
			}
		} 
		sift(p);
	}
	return primes;
};








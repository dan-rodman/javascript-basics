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
	var limit = y+1;
	
	for (i = 0; i < limit; i++)
	{
		sieve.push(i);
	}
	//console.log(sieve);

  var x = 2;
  var sifted = false;
	
	do{
  for (p = x*x; p <= limit; p+=x)
	{
	  sieve[p] = 0;
	}
	//console.log(sieve);
	x++; 
	if (x >= limit)
		{
			sifted = true;
		}
	
	}while(!sifted)
	
	for (j = limit; j >= 0; j--)
	  {
	    if (y % sieve[j] === 0)
	    {
	      return sieve[j];
	    }
	  }
	return 0;
};

getPrimes(34);

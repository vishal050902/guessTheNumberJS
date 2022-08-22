let btn = document.getElementById('btn');
let res = document.getElementById('res');

let number = Math.floor(Math.random() * 10 + 1);
let t = 0;

btn.addEventListener('click',
	function () {
		let guess = document.getElementById('guess').value;
		if (guess == number)
		{	t++;
			res.innerHTML = `You guessed it right.
			The number was ${number}.
			You took ${t} chances`;
		}
		else if (guess < number)
		{	t++;
			res.innerHTML = "Guess is low";
		} else
		{	t++;
			res.innerHTML = "Guess is high";
		}
	});
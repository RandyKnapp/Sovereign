const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var getUserInput = function()
{
	rl.question('> ', (answer) => {
		if (answer == "quit")
		{
			return rl.close();
		}
		console.log('- ' + answer);
		getUserInput();
	});
}

getUserInput();

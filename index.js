const readline = require('readline');
const Game = require('./src/Game.js');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var game = new Game(rl);

var getUserInput = function()
{
	rl.question('> ', (command) => {
		command = command.toLowerCase();
		if (command == "quit")
		{
			return rl.close();
		}

		var playerIndex = 0;
		var parts = command.split(' ');
		var args = null;
		if (parts && parts.length > 1)
		{
			command = parts[0];
			args = parts.slice(1);
		}
		game.HandleInput(playerIndex, command, args);
		getUserInput();
	});
}

getUserInput();

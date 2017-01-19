function Game(readline)
{
	this.readline = readline;
}

Game.prototype.HandleInput = function(user, command, args)
{
	console.log(user + ' - ' + command + (args ? '(' + args.join(', ') + ')' : ''));
};

module.exports = Game;

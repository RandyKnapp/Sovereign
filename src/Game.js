var PlayerManager = require('./PlayerManager.js');
var VillageManager = require('./VillageManager.js');

function Game(messenger)
{
	this.messenger = messenger;
	this.players = new PlayerManager();
	this.villages = new VillageManager();

	this.inputHandlers = [
		this.players,
		this.villages
	];
}

Game.prototype.HandleInput = function(player, command, args)
{
	for (var handler of this.inputHandlers)
	{
		if (handler.CanHandleInput && handler.CanHandleInput(player, command, args))
		{
			handler.HandleInput(player, command, args);
		}
	};
	this.MessagePlayer(player, command + (args ? '(' + args.join(', ') + ')' : ''));
};

Game.prototype.MessagePlayer = function(player, message)
{
	this.messenger.MessagePlayer(player, message);
};

module.exports = Game;

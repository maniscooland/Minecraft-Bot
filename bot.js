const mineflayer = require("mineflayer")

bot = mineflayer.createBot({
  host: "<server ip>"
  password: "<password>" // you can remove this part
  auth: "microsoft" // you can change this part E.g. "offline" or "mojang" or "microsoft"
  version: "1.20.4" // change if you want
})

bot.on('chat', function(username, message) {
  if (message == '<what you want it to respond to>') {
    bot.chat('<what you want it to say>') // what you want it to do in this case i made it say something
  } else if (message == '<what you want it to respond to>') {
    bot.chat('<what you want it to say>')
  } // you can do the thing above as much as you want over here!
});

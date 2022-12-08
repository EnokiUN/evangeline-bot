import { Bot } from "evangeline";

let bot = new Bot("Evangeline bot");

bot.send("Hi").then(console.log);

bot.on("messageCreate", async (msg) => {
  switch(msg.content) {
    case "!ping":
      await bot.send("pong!");
    case "!speed":
      await bot.send("Am I fast?");
  }
});

bot.connect()

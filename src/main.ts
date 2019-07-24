const Discord = require('discord.js');
const token = '';

const client = new Discord.Client();

client.on('ready', () => {
  console.log('Started');

  client.channels.find(x => x.name === 'general').send('Fayn a drari, lyoma 3atjiw 3andna wla? rah ba9i 3lina lkra dyal had chhar');
});

client.login(token);

import {REST} from 'discord.js'

const updateSlashCommands = () =>{
   const res = new REST({version:10}).setToken(process.env.TOKEN)
}